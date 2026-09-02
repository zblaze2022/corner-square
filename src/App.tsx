import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Navigation } from './components/Navigation';
import { HeroSequenceCanvas } from './components/HeroSequenceCanvas';
import { HeroContentOverlay } from './components/HeroContentOverlay';
import { InquiryModal } from './components/InquiryModal';
import { AvailableSpacesDrawer } from './components/AvailableSpacesDrawer';
import { BuildingSpecsModal } from './components/BuildingSpecsModal';
import { PropertyStoryHighlights } from './components/PropertyStoryHighlights';

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentFrame, setCurrentFrame] = useState(1);
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [spacesDrawerOpen, setSpacesDrawerOpen] = useState(false);
  const [specsModalOpen, setSpecsModalOpen] = useState(false);
  const [selectedUnitForInquiry, setSelectedUnitForInquiry] = useState<string | undefined>(undefined);

  const heroScrollContainerRef = useRef<HTMLDivElement | null>(null);

  // Sync scroll position with frame calculation
  const handleScroll = useCallback(() => {
    if (!heroScrollContainerRef.current) return;
    const container = heroScrollContainerRef.current;
    const rect = container.getBoundingClientRect();
    const containerHeight = container.offsetHeight;
    const windowHeight = window.innerHeight;

    // Calculate scroll progress through the 450vh sticky track
    const totalScrollableDistance = containerHeight - windowHeight;
    const scrolledDistance = -rect.top;

    const progress = Math.min(1, Math.max(0, scrolledDistance / totalScrollableDistance));
    setScrollProgress(progress);

    // Frame formula: frameIndex = Math.floor(scrollProgress * 299) clamped 1..300
    const calculatedFrame = Math.min(300, Math.max(1, Math.floor(progress * 299) + 1));
    setCurrentFrame(calculatedFrame);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial measure
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Jump to specific frame by scrolling container
  const handleJumpToFrame = (frame: number) => {
    if (!heroScrollContainerRef.current) return;
    const container = heroScrollContainerRef.current;
    const containerHeight = container.offsetHeight;
    const windowHeight = window.innerHeight;
    const totalScrollable = containerHeight - windowHeight;

    const targetProgress = (frame - 1) / 299;
    const targetScrollY = container.offsetTop + targetProgress * totalScrollable;

    window.scrollTo({
      top: targetScrollY,
      behavior: 'smooth',
    });
  };

  const handleOpenInquiry = (unitCode?: string) => {
    setSelectedUnitForInquiry(unitCode);
    setInquiryModalOpen(true);
  };

  const handleSelectUnitFromDrawer = (unitId: string) => {
    setSpacesDrawerOpen(false);
    setSelectedUnitForInquiry(unitId);
    setInquiryModalOpen(true);
  };

  return (
    <div className="relative bg-[#080b10] text-[#f1f5f9] min-h-screen selection:bg-amber-400 selection:text-black">
      {/* Top Fixed Navigation Bar */}
      <Navigation
        currentFrame={currentFrame}
        onOpenInquiry={() => handleOpenInquiry()}
        onOpenSpaces={() => setSpacesDrawerOpen(true)}
        onOpenSpecs={() => setSpecsModalOpen(true)}
      />

      {/* Main 450vh Scroll Container for 300-Frame Image Sequence */}
      <div
        ref={heroScrollContainerRef}
        id="hero-scroll-track"
        className="relative w-full h-[450vh]"
      >
        {/* Pinned Sticky Viewport (100vw × 100vh) */}
        <div className="sticky top-0 left-0 w-full h-screen overflow-hidden">
          {/* HTML5 Canvas 300-Frame Engine */}
          <HeroSequenceCanvas
            scrollProgress={scrollProgress}
            currentFrame={currentFrame}
            onFrameChange={setCurrentFrame}
            onOpenSpecs={() => setSpecsModalOpen(true)}
            onOpenSpaces={() => setSpacesDrawerOpen(true)}
          />

          {/* Hero Content Overlay */}
          <HeroContentOverlay
            scrollProgress={scrollProgress}
            onOpenSpaces={() => setSpacesDrawerOpen(true)}
            onOpenInquiry={() => handleOpenInquiry()}
            onOpenSpecs={() => setSpecsModalOpen(true)}
          />
        </div>
      </div>

      {/* Chapter Breakdown & Building Features Section */}
      <PropertyStoryHighlights
        currentFrame={currentFrame}
        onJumpToFrame={handleJumpToFrame}
        onOpenSpaces={() => setSpacesDrawerOpen(true)}
        onOpenInquiry={handleOpenInquiry}
        onOpenSpecs={() => setSpecsModalOpen(true)}
      />

      {/* Interactive Modals and Drawers */}
      <InquiryModal
        isOpen={inquiryModalOpen}
        onClose={() => setInquiryModalOpen(false)}
        initialUnitCode={selectedUnitForInquiry}
      />

      <AvailableSpacesDrawer
        isOpen={spacesDrawerOpen}
        onClose={() => setSpacesDrawerOpen(false)}
        onSelectUnitForInquiry={handleSelectUnitFromDrawer}
      />

      <BuildingSpecsModal
        isOpen={specsModalOpen}
        onClose={() => setSpecsModalOpen(false)}
        onOpenInquiry={() => {
          setSpecsModalOpen(false);
          setInquiryModalOpen(true);
        }}
      />
    </div>
  );
}
