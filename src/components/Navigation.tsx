import React, { useState, useEffect } from 'react';
import { Building2, PhoneCall, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavigationProps {
  onOpenInquiry: (spaceCode?: string) => void;
  onOpenSpaces: () => void;
  onOpenAmenities?: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  onOpenInquiry,
  onOpenSpaces,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToHero = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        id="main-navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#080b10]/90 backdrop-blur-md py-3.5 border-b border-white/10 shadow-2xl'
            : 'bg-gradient-to-b from-black/80 via-black/30 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button
              onClick={scrollToHero}
              className="flex items-center gap-3 text-left group focus:outline-none"
              id="brand-logo-btn"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-400/20 to-amber-500/10 border border-amber-400/30 flex items-center justify-center text-amber-400 group-hover:border-amber-400 transition-colors shadow-inner">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <span className="font-display font-bold text-lg sm:text-xl tracking-tight text-white group-hover:text-amber-300 transition-colors block">
                  CORNER SQUARE
                </span>
                <p className="text-[10px] tracking-widest text-slate-400 uppercase font-medium">
                  Commercial Building
                </p>
              </div>
            </button>

            {/* Desktop Navigation - Strictly Home, Available Space, Amenities, Location */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-2">
              <button
                onClick={scrollToHero}
                className="px-4 py-2 text-xs lg:text-sm font-medium text-slate-200 hover:text-white hover:bg-white/5 rounded-md transition-colors"
                id="nav-link-home"
              >
                Home
              </button>
              <button
                onClick={() => {
                  onOpenSpaces();
                }}
                className="px-4 py-2 text-xs lg:text-sm font-medium text-slate-200 hover:text-amber-300 hover:bg-amber-400/10 rounded-md transition-colors"
                id="nav-link-available-space"
              >
                Available Space
              </button>
              <button
                onClick={() => scrollToSection('amenities-section')}
                className="px-4 py-2 text-xs lg:text-sm font-medium text-slate-200 hover:text-white hover:bg-white/5 rounded-md transition-colors"
                id="nav-link-amenities"
              >
                Amenities
              </button>
              <button
                onClick={() => scrollToSection('location-section')}
                className="px-4 py-2 text-xs lg:text-sm font-medium text-slate-200 hover:text-white hover:bg-white/5 rounded-md transition-colors"
                id="nav-link-location"
              >
                Location
              </button>
            </nav>

            {/* Right Action */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => onOpenInquiry()}
                className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 font-semibold text-xs sm:text-sm tracking-wide transition-all duration-200 shadow-lg hover:shadow-amber-400/20 flex items-center gap-1.5 active:scale-95"
                id="nav-inquire-btn"
              >
                <span>Inquire Now</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 focus:outline-none"
                id="mobile-menu-toggle"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl md:hidden pt-24 px-6 flex flex-col justify-between pb-10">
          <div className="space-y-4">
            <button
              onClick={scrollToHero}
              className="w-full text-left py-3.5 text-lg font-medium text-white border-b border-white/10"
              id="mobile-nav-home"
            >
              Home
            </button>
            <button
              onClick={() => {
                onOpenSpaces();
                setMobileMenuOpen(false);
              }}
              className="w-full text-left py-3.5 text-lg font-medium text-amber-300 border-b border-white/10 flex items-center justify-between"
              id="mobile-nav-spaces"
            >
              <span>Available Space</span>
            </button>
            <button
              onClick={() => scrollToSection('amenities-section')}
              className="w-full text-left py-3.5 text-lg font-medium text-white border-b border-white/10"
              id="mobile-nav-amenities"
            >
              Amenities
            </button>
            <button
              onClick={() => scrollToSection('location-section')}
              className="w-full text-left py-3.5 text-lg font-medium text-white border-b border-white/10"
              id="mobile-nav-location"
            >
              Location
            </button>
          </div>

          <div className="space-y-3 pt-6 border-t border-white/10">
            <button
              onClick={() => {
                onOpenInquiry();
                setMobileMenuOpen(false);
              }}
              className="w-full py-3.5 rounded-lg bg-amber-400 text-slate-950 font-bold text-center tracking-wide flex items-center justify-center gap-2"
              id="mobile-nav-inquire"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Inquire for Lease</span>
            </button>
            <p className="text-center text-xs text-slate-400">
              Direct developer leasing • No broker markup
            </p>
          </div>
        </div>
      )}
    </>
  );
};
