import React from 'react';
import { ArrowRight, Sparkles, PhoneCall } from 'lucide-react';

interface HeroContentOverlayProps {
  scrollProgress: number;
  onOpenSpaces: () => void;
  onOpenInquiry: () => void;
  onOpenSpecs: () => void;
}

export const HeroContentOverlay: React.FC<HeroContentOverlayProps> = ({
  scrollProgress,
  onOpenSpaces,
  onOpenInquiry,
}) => {
  // Fade out hero headline slightly as user scrolls deep into the 300-frame sequence (after 40% scroll),
  // keeping the background architecture clear while leaving minimal floating controls.
  const opacity = Math.max(0, 1 - scrollProgress * 2.2);
  const translateY = scrollProgress * -80;

  return (
    <div
      className="absolute inset-0 z-20 pointer-events-none flex flex-col justify-center pt-20 pb-16 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto transition-opacity duration-300"
      style={{
        opacity: opacity,
        transform: `translateY(${translateY}px)`,
        pointerEvents: opacity > 0.15 ? 'auto' : 'none',
      }}
    >
      {/* Top Tag & Main Text Group */}
      <div className="max-w-2xl">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-[11px] sm:text-xs font-semibold tracking-wider uppercase mb-3 sm:mb-4 shadow-sm">
          <Sparkles className="w-3 h-3 text-amber-400 animate-pulse" />
          <span>PREMIUM COMMERCIAL SPACES</span>
        </div>

        {/* Main Headline */}
        <h1 className="font-display font-bold text-2xl sm:text-4xl lg:text-5xl tracking-tight text-white leading-[1.05] mb-2 sm:mb-3 uppercase drop-shadow-lg">
          CORNER SQUARE <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-300">
            COMMERCIAL BUILDING
          </span>
        </h1>

        {/* Supporting Headline */}
        <div className="flex items-center gap-2.5 mb-3 sm:mb-4">
          <div className="h-0.5 w-6 bg-amber-400"></div>
          <h2 className="font-display text-sm sm:text-base lg:text-lg font-bold tracking-normal text-amber-400 uppercase">
            NOW AVAILABLE FOR LEASE
          </h2>
        </div>

        {/* Description */}
        <p className="text-xs sm:text-sm lg:text-base text-slate-200 font-normal leading-relaxed mb-6 max-w-xl text-shadow">
          A modern commercial destination offering premium and flexible spaces for offices,
          retail, businesses, and professional enterprises.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <button
            onClick={onOpenSpaces}
            className="px-5 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs sm:text-sm tracking-wide uppercase transition-all duration-300 shadow-xl hover:shadow-amber-400/25 flex items-center justify-center gap-2 group transform active:scale-95"
            id="hero-explore-spaces-btn"
          >
            <span>Explore Available Spaces</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={onOpenInquiry}
            className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm tracking-wide uppercase backdrop-blur-md border border-white/20 hover:border-white/40 transition-all duration-300 flex items-center justify-center gap-2 group transform active:scale-95"
            id="hero-inquire-now-btn"
          >
            <PhoneCall className="w-4 h-4 text-amber-400" />
            <span>Inquire Now</span>
          </button>
        </div>
      </div>
    </div>
  );
};
