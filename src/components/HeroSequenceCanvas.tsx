import React, { useEffect, useRef, useState, useCallback } from 'react';
import { KEYFRAME_IMAGES } from '../data/propertyData';
import { Compass } from 'lucide-react';

interface HeroSequenceCanvasProps {
  scrollProgress: number;
  currentFrame: number;
  onFrameChange: (frame: number) => void;
  onOpenSpecs: () => void;
  onOpenSpaces: () => void;
}

export const HeroSequenceCanvas: React.FC<HeroSequenceCanvasProps> = ({
  currentFrame,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imagesRef = useRef<{ [key: string]: HTMLImageElement }>({});
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [loadPercent, setLoadPercent] = useState(0);

  // Smooth lerped frame for buttery 60fps rendering
  const currentRenderFrameRef = useRef<number>(1);
  const targetFrameRef = useRef<number>(1);
  const animationFrameIdRef = useRef<number | null>(null);

  // Synchronize target frame from scroll progress or manual prop
  useEffect(() => {
    targetFrameRef.current = Math.min(300, Math.max(1, currentFrame));
  }, [currentFrame]);

  // Load keyframe visual anchors
  useEffect(() => {
    let loadedCount = 0;
    const entries = Object.entries(KEYFRAME_IMAGES);
    const total = entries.length;

    entries.forEach(([key, src]) => {
      const img = new Image();
      img.src = src;
      img.crossOrigin = 'anonymous';
      img.onload = () => {
        imagesRef.current[key] = img;
        loadedCount++;
        setLoadPercent(Math.round((loadedCount / total) * 100));
        if (loadedCount === total) {
          setImagesLoaded(true);
        }
      };
      img.onerror = () => {
        // Fallback placeholder
        loadedCount++;
        setLoadPercent(Math.round((loadedCount / total) * 100));
        if (loadedCount === total) {
          setImagesLoaded(true);
        }
      };
    });
  }, []);

  // Render the precise frame on HTML5 Canvas
  const renderCanvasFrame = useCallback(
    (frame: number) => {
      const canvas = canvasRef.current;
      if (!canvas || !imagesLoaded) return;
      const ctx = canvas.getContext('2d', { alpha: false });
      if (!ctx) return;

      const { width, height } = canvas;
      const p = (frame - 1) / 299; // 0 to 1

      // 4 Keyframes:
      // K1: closeFacade (0..0.33) -> frames 1..100
      // K2: midPullback (0.33..0.66) -> frames 100..200
      // K3: highAerial (0.66..0.88) -> frames 200..265
      // K4: wideAerial (0.88..1.0) -> frames 265..300

      const img1 = imagesRef.current.closeFacade;
      const img2 = imagesRef.current.midPullback;
      const img3 = imagesRef.current.highAerial;
      const img4 = imagesRef.current.wideAerial;

      let baseImgA = img1;
      let baseImgB = img2;
      let blendFactor = 0;
      let zoomA = 1.0;
      let zoomB = 1.0;
      let shiftYA = 0;
      let shiftYB = 0;

      if (p < 0.33) {
        // Stage 1: Close facade to Mid pullback
        const localT = p / 0.33; // 0 to 1
        baseImgA = img1 || img2;
        baseImgB = img2 || img1;
        blendFactor = Math.sin((localT * Math.PI) / 2); // Smooth ease
        zoomA = 1.0 + localT * 0.12;
        zoomB = 0.94 + localT * 0.06;
        shiftYA = localT * 15;
        shiftYB = (1 - localT) * -15;
      } else if (p < 0.68) {
        // Stage 2: Mid pullback to High aerial
        const localT = (p - 0.33) / 0.35; // 0 to 1
        baseImgA = img2 || img3;
        baseImgB = img3 || img2;
        blendFactor = Math.sin((localT * Math.PI) / 2);
        zoomA = 1.0 + localT * 0.14;
        zoomB = 0.93 + localT * 0.07;
        shiftYA = localT * 20;
        shiftYB = (1 - localT) * -18;
      } else {
        // Stage 3: High aerial to Wide establishing panorama
        const localT = (p - 0.68) / 0.32; // 0 to 1
        baseImgA = img3 || img4;
        baseImgB = img4 || img3;
        blendFactor = Math.sin((localT * Math.PI) / 2);
        zoomA = 1.0 + localT * 0.15;
        zoomB = 0.94 + localT * 0.06;
        shiftYA = localT * 18;
        shiftYB = (1 - localT) * -15;
      }

      // Helper to draw image cover
      const drawCover = (
        img: HTMLImageElement,
        scale: number,
        shiftY: number,
        opacity: number
      ) => {
        if (!img || !img.complete || img.naturalWidth === 0) return;
        ctx.save();
        ctx.globalAlpha = opacity;

        const imgRatio = img.naturalWidth / img.naturalHeight;
        const canvasRatio = width / height;

        let renderW = width;
        let renderH = height;
        let offsetX = 0;
        let offsetY = 0;

        if (canvasRatio > imgRatio) {
          renderW = width * scale;
          renderH = (width / imgRatio) * scale;
        } else {
          renderH = height * scale;
          renderW = height * imgRatio * scale;
        }

        offsetX = (width - renderW) / 2;
        offsetY = (height - renderH) / 2 + shiftY;

        ctx.drawImage(img, offsetX, offsetY, renderW, renderH);
        ctx.restore();
      };

      // Draw primary image
      ctx.fillStyle = '#080b10';
      ctx.fillRect(0, 0, width, height);

      if (baseImgA) {
        drawCover(baseImgA, zoomA, shiftYA, 1.0);
      }
      if (baseImgB && blendFactor > 0.001) {
        drawCover(baseImgB, zoomB, shiftYB, blendFactor);
      }

      // Vignette & Cinematic Dark Gradient for optimal hero text readability
      const grad = ctx.createLinearGradient(0, 0, 0, height);
      grad.addColorStop(0, 'rgba(8, 11, 16, 0.65)');
      grad.addColorStop(0.35, 'rgba(8, 11, 16, 0.25)');
      grad.addColorStop(0.7, 'rgba(8, 11, 16, 0.45)');
      grad.addColorStop(1, 'rgba(8, 11, 16, 0.88)');

      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      // Subtle horizontal side vignette for cinematic widescreen feel
      const sideGrad = ctx.createLinearGradient(0, 0, width, 0);
      sideGrad.addColorStop(0, 'rgba(8, 11, 16, 0.45)');
      sideGrad.addColorStop(0.2, 'rgba(8, 11, 16, 0)');
      sideGrad.addColorStop(0.8, 'rgba(8, 11, 16, 0)');
      sideGrad.addColorStop(1, 'rgba(8, 11, 16, 0.45)');
      ctx.fillStyle = sideGrad;
      ctx.fillRect(0, 0, width, height);
    },
    [imagesLoaded]
  );

  // Resize canvas according to device pixel ratio
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = window.innerWidth;
      const h = window.innerHeight;

      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;

      renderCanvasFrame(currentRenderFrameRef.current);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [renderCanvasFrame]);

  // Main 60FPS animation loop for frame interpolation
  useEffect(() => {
    const loop = () => {
      // Lerp frame rendering
      const diff = targetFrameRef.current - currentRenderFrameRef.current;
      if (Math.abs(diff) > 0.05) {
        currentRenderFrameRef.current += diff * 0.28;
      } else {
        currentRenderFrameRef.current = targetFrameRef.current;
      }

      const clampedFrame = Math.min(300, Math.max(1, currentRenderFrameRef.current));
      renderCanvasFrame(clampedFrame);

      animationFrameIdRef.current = requestAnimationFrame(loop);
    };

    animationFrameIdRef.current = requestAnimationFrame(loop);
    return () => {
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
    };
  }, [renderCanvasFrame]);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#080b10]">
      {/* HTML5 Canvas Surface */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full object-cover block"
        style={{ pointerEvents: 'none' }}
      />

      {/* Loading Screen Overlay */}
      {!imagesLoaded && (
        <div className="absolute inset-0 z-40 bg-[#080b10] flex flex-col items-center justify-center p-6 text-center">
          <div className="w-16 h-16 rounded-2xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 mb-6 animate-pulse">
            <Compass className="w-8 h-8 animate-spin" style={{ animationDuration: '4s' }} />
          </div>
          <h3 className="font-display text-xl font-bold text-white tracking-tight mb-2">
            CORNER SQUARE
          </h3>
          <p className="text-xs uppercase tracking-widest text-slate-400 mb-6">
            Preloading 300-Frame Aerial Sequence ({loadPercent}%)
          </p>
          <div className="w-64 h-1.5 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-amber-500 to-amber-300 transition-all duration-300 ease-out"
              style={{ width: `${loadPercent}%` }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

