import React, { useState } from 'react';
import { SEQUENCE_CHAPTERS, KEYFRAME_IMAGES, AVAILABLE_SPACES, BUILDING_SPECS } from '../data/propertyData';
import {
  ArrowUpRight,
  Compass,
  ShieldCheck,
  Sun,
  Building2,
  MapPin,
  Zap,
  Check,
  ArrowRight,
  Wifi,
  Car,
  Wind,
  Layers,
  Sparkles,
  PhoneCall,
  Clock,
  Navigation as NavigationIcon,
  Download,
  FileText,
  CheckCircle2,
  ChevronRight,
  Maximize2,
  Activity,
  ArrowUp,
  Mail,
  Phone,
  HelpCircle,
} from 'lucide-react';

interface PropertyStoryHighlightsProps {
  currentFrame: number;
  onJumpToFrame: (frame: number) => void;
  onOpenSpaces: () => void;
  onOpenInquiry: (spaceCode?: string) => void;
  onOpenSpecs: () => void;
}

export const PropertyStoryHighlights: React.FC<PropertyStoryHighlightsProps> = ({
  currentFrame,
  onJumpToFrame,
  onOpenSpaces,
  onOpenInquiry,
  onOpenSpecs,
}) => {
  const [selectedInventoryTab, setSelectedInventoryTab] = useState<'all' | 'ground' | 'second'>('all');
  const [selectedElevationIdx, setSelectedElevationIdx] = useState(0);

  // In-page inquiry form state
  const [formName, setFormName] = useState('');
  const [formCompany, setFormCompany] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formUnit, setFormUnit] = useState('G-01');
  const [formUse, setFormUse] = useState('Corporate Office / HQ');
  const [formTimeline, setFormTimeline] = useState('Immediate (30 Days)');
  const [formNotes, setFormNotes] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const filteredUnits = AVAILABLE_SPACES.filter((unit) => {
    if (selectedInventoryTab === 'ground') return unit.floor.includes('Ground');
    if (selectedInventoryTab === 'second') return unit.floor.includes('Second');
    return true;
  });

  const handleInPageFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative bg-[#080b10] border-t border-white/10 z-30 pt-16 pb-16 px-4 sm:px-8 lg:px-12 text-slate-200">
      <div className="max-w-7xl mx-auto space-y-28">
        
        {/* ========================================================= */}
        {/* SECTION 1: THE PROPERTY / EXECUTIVE BUILDING OVERVIEW    */}
        {/* ========================================================= */}
        <section id="the-property" className="scroll-mt-24">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 pb-6 border-b border-white/10 gap-6">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-xs font-semibold uppercase tracking-widest mb-3">
                <Building2 className="w-3.5 h-3.5" />
                <span>Executive Overview</span>
              </div>
              <h2 className="font-display text-2xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
                A Grade-A Commercial Landmark Built for Industry Leaders
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 max-w-md leading-relaxed">
              Corner Square is a newly constructed, two-story commercial destination featuring 1,450 sqm of prime gross floor area, double-height Low-E glass façades, 65kWp rooftop solar generation, and commanding corner exposure.
            </p>
          </div>

          {/* Key Metric Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-12">
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-amber-400/40 transition-colors">
              <span className="text-[11px] text-slate-400 font-medium block">Total Floor Area</span>
              <span className="font-display text-xl sm:text-2xl font-bold text-white block mt-0.5">1,450 <span className="text-xs font-sans text-amber-400">sqm</span></span>
              <span className="text-[10px] text-slate-500 font-mono">15,607 sqft GFA</span>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-amber-400/40 transition-colors">
              <span className="text-[11px] text-slate-400 font-medium block">Building Levels</span>
              <span className="font-display text-xl sm:text-2xl font-bold text-white block mt-0.5">2 Floors</span>
              <span className="text-[10px] text-slate-500 font-mono">+ Solar Roof Deck</span>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-amber-400/40 transition-colors">
              <span className="text-[11px] text-slate-400 font-medium block">Clear Height</span>
              <span className="font-display text-xl sm:text-2xl font-bold text-white block mt-0.5">4.80 m</span>
              <span className="text-[10px] text-slate-500 font-mono">Floor-to-ceiling glass</span>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-amber-400/40 transition-colors">
              <span className="text-[11px] text-slate-400 font-medium block">Clean Energy</span>
              <span className="font-display text-xl sm:text-2xl font-bold text-amber-400 block mt-0.5">65 kWp</span>
              <span className="text-[10px] text-slate-500 font-mono">Rooftop Solar PV</span>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-amber-400/40 transition-colors">
              <span className="text-[11px] text-slate-400 font-medium block">Power Reliability</span>
              <span className="font-display text-xl sm:text-2xl font-bold text-white block mt-0.5">100%</span>
              <span className="text-[10px] text-slate-500 font-mono">Auto-Gen Backup</span>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-amber-400/40 transition-colors">
              <span className="text-[11px] text-slate-400 font-medium block">Handover</span>
              <span className="font-display text-xl sm:text-2xl font-bold text-emerald-400 block mt-0.5">Immediate</span>
              <span className="text-[10px] text-slate-500 font-mono">Bare / Warm Shell</span>
            </div>
          </div>

          {/* Architectural Elevation & Perspective Tour */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#0e1420] via-[#090d14] to-[#080b10] border border-white/15">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <h3 className="font-display text-xl font-bold text-white">
                  Architectural Perspectives & Site Elevations
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Synchronize the 300-frame drone camera above or examine each elevation below.
                </p>
              </div>
              <button
                onClick={onOpenSpecs}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold tracking-wide transition-colors self-start sm:self-auto"
              >
                <Layers className="w-3.5 h-3.5 text-amber-400" />
                <span>View Full Building Dossier</span>
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {SEQUENCE_CHAPTERS.map((chap, idx) => {
                const isActive = currentFrame >= chap.range[0] && currentFrame <= chap.range[1];
                const imgPreview =
                  idx === 0
                    ? KEYFRAME_IMAGES.closeFacade
                    : idx === 1
                    ? KEYFRAME_IMAGES.midPullback
                    : idx === 2
                    ? KEYFRAME_IMAGES.highAerial
                    : KEYFRAME_IMAGES.wideAerial;

                return (
                  <div
                    key={chap.name}
                    onClick={() => {
                      setSelectedElevationIdx(idx);
                      onJumpToFrame(chap.range[0]);
                    }}
                    className={`group relative rounded-2xl overflow-hidden border transition-all duration-300 cursor-pointer ${
                      isActive
                        ? 'border-amber-400 ring-2 ring-amber-400/30 bg-white/10 shadow-2xl scale-[1.01]'
                        : 'border-white/10 bg-white/5 hover:border-white/25 hover:bg-white/[0.08]'
                    }`}
                  >
                    <div className="h-44 w-full relative overflow-hidden bg-slate-900">
                      <img
                        src={imgPreview}
                        alt={chap.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#080b10] via-[#080b10]/40 to-transparent" />

                      <div className="absolute top-3 left-3 px-2 py-0.5 rounded-md bg-black/75 backdrop-blur-md border border-white/10 text-[10px] font-mono font-bold text-amber-400">
                        {chap.name}
                      </div>

                      <div className="absolute top-3 right-3 px-2 py-0.5 rounded-md bg-black/75 backdrop-blur-md border border-white/10 text-[10px] font-mono text-slate-300">
                        ALT {chap.altitude}
                      </div>
                    </div>

                    <div className="p-4">
                      <h4 className="font-display font-semibold text-sm text-white mb-1 group-hover:text-amber-300 transition-colors">
                        {chap.title}
                      </h4>
                      <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">
                        {chap.desc}
                      </p>
                      <div className="mt-3 flex items-center justify-between text-[11px] text-amber-400 font-medium">
                        <span>Jump to elevation</span>
                        <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 2: AVAILABLE SPACE / UNIT INVENTORY & FLOORPLANS  */}
        {/* ========================================================= */}
        <section id="available-spaces" className="scroll-mt-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-6 border-b border-white/10 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-xs font-semibold uppercase tracking-widest mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Prime Commercial Inventory</span>
              </div>
              <h2 className="font-display text-2xl sm:text-4xl font-bold text-white tracking-tight">
                Available Spaces for Lease
              </h2>
            </div>

            {/* Inventory filter tabs */}
            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-white/5 border border-white/10 self-start md:self-auto">
              <button
                onClick={() => setSelectedInventoryTab('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  selectedInventoryTab === 'all'
                    ? 'bg-amber-400 text-slate-950 shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                All Spaces (4)
              </button>
              <button
                onClick={() => setSelectedInventoryTab('ground')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  selectedInventoryTab === 'ground'
                    ? 'bg-amber-400 text-slate-950 shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Ground Level Retail
              </button>
              <button
                onClick={() => setSelectedInventoryTab('second')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  selectedInventoryTab === 'second'
                    ? 'bg-amber-400 text-slate-950 shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Level 2 Corporate HQ
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {filteredUnits.map((unit) => (
              <div
                key={unit.id}
                className="p-6 sm:p-7 rounded-3xl bg-white/5 border border-white/10 hover:border-amber-400/40 transition-all flex flex-col justify-between group hover:bg-white/[0.07]"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded-md bg-amber-400/15 border border-amber-400/30 text-amber-300 font-mono text-xs font-bold">
                        UNIT {unit.code}
                      </span>
                      <span className="text-xs text-slate-400 font-medium">{unit.floor}</span>
                    </div>
                    <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      {unit.status}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                    {unit.name}
                  </h3>

                  <div className="grid grid-cols-2 gap-2.5 p-3.5 rounded-2xl bg-black/50 border border-white/5 text-xs mb-4">
                    <div>
                      <span className="text-slate-400 block text-[11px]">Floor Area</span>
                      <span className="font-semibold text-white font-mono text-sm">
                        {unit.areaSqm} sqm <span className="text-[11px] text-slate-400">({unit.areaSqft} sqft)</span>
                      </span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[11px]">Ceiling Height</span>
                      <span className="font-semibold text-white font-mono text-sm">{unit.ceilingHeight}</span>
                    </div>
                    <div className="col-span-2 pt-1.5 border-t border-white/5">
                      <span className="text-slate-400 block text-[11px]">Façade Frontage</span>
                      <span className="text-slate-200 text-xs font-medium truncate block">{unit.frontage}</span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                    {unit.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-amber-400 font-bold block">
                      Key Unit Specifications
                    </span>
                    {unit.features.map((feat, i) => (
                      <div key={i} className="text-xs text-slate-300 flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <span className="text-[11px] text-slate-400 block">Indicative Base Rate</span>
                    <span className="font-mono text-sm text-amber-300 font-bold">{unit.pricePerSqm}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onOpenInquiry(unit.code)}
                      className="px-4 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs tracking-wide uppercase transition-all shadow-md flex items-center gap-1.5 active:scale-95"
                    >
                      <span>Inquire for {unit.code}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Full Building / Single Anchor Tenant Banner */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-amber-400/10 via-amber-500/5 to-transparent border border-amber-400/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <span className="px-2.5 py-1 rounded-md bg-amber-400/20 text-amber-300 font-mono text-xs font-bold uppercase tracking-wider mb-2 inline-block">
                Single Anchor Tenant Option
              </span>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-1">
                Looking for a Whole-Building Corporate Headquarters?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Take full occupancy of all 1,450 sqm with exclusive building naming rights, dedicated secure entrance, private executive parking, and customized interior branding.
              </p>
            </div>
            <button
              onClick={() => onOpenInquiry('ENTIRE-BUILDING')}
              className="px-6 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs sm:text-sm tracking-wide uppercase transition-all shrink-0 flex items-center gap-2 shadow-lg active:scale-95"
            >
              <span>Inquire for Whole Building</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 3: BUILDING AMENITIES & INFRASTRUCTURE           */}
        {/* ========================================================= */}
        <section id="amenities-section" className="scroll-mt-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-6 border-b border-white/10 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-xs font-semibold uppercase tracking-widest mb-3">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Modern Commercial Engineering</span>
              </div>
              <h2 className="font-display text-2xl sm:text-4xl font-bold text-white tracking-tight">
                Building Specifications & Amenities
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 max-w-md">
              Designed with enterprise-grade sustainability, 100% operational resilience, and refined tenant comfort.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-amber-400/30 transition-all hover:bg-white/[0.07]">
              <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 mb-4">
                <Sun className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-lg text-white mb-2">
                65kWp Rooftop Solar PV
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-3">
                Dedicated rooftop solar array generating clean renewable energy, directly offsetting common area power consumption, exterior illumination, and HVAC loads.
              </p>
              <div className="text-[11px] font-mono text-amber-300">● Lowers Common Area Dues</div>
            </div>

            <div className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-amber-400/30 transition-all hover:bg-white/[0.07]">
              <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 mb-4">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-lg text-white mb-2">
                100% Back-up Generator
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-3">
                High-capacity automatic diesel generator and dual 500kVA transformers guaranteeing uninterrupted 24/7 business operations during grid outages.
              </p>
              <div className="text-[11px] font-mono text-amber-300">● Automatic Transfer Switch (ATS)</div>
            </div>

            <div className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-amber-400/30 transition-all hover:bg-white/[0.07]">
              <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 mb-4">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-lg text-white mb-2">
                Low-E Thermal Curtain Glass
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-3">
                Double-glazed Low-E floor-to-ceiling glass assemblies with acoustic dampening and thermal breaks to eliminate solar glare while flooding interiors with natural light.
              </p>
              <div className="text-[11px] font-mono text-amber-300">● 4.8m Ground Ceiling Clearance</div>
            </div>

            <div className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-amber-400/30 transition-all hover:bg-white/[0.07]">
              <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 mb-4">
                <Wind className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-lg text-white mb-2">
                Inverter VRF Air Conditioning
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-3">
                Independent multi-zone Inverter Variable Refrigerant Flow (VRF) units paired with MERV-13 air filtration systems for superior occupant indoor air quality.
              </p>
              <div className="text-[11px] font-mono text-amber-300">● Individual Tenant Sub-Metering</div>
            </div>

            <div className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-amber-400/30 transition-all hover:bg-white/[0.07]">
              <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 mb-4">
                <Wifi className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-lg text-white mb-2">
                Dual Fiber Optic Backbone
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-3">
                Redundant, carrier-neutral high-speed fiber telecom risers designed for financial institutions, tech studios, and data-intensive enterprise workloads.
              </p>
              <div className="text-[11px] font-mono text-amber-300">● Multiple Tier-1 Providers</div>
            </div>

            <div className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-amber-400/30 transition-all hover:bg-white/[0.07]">
              <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 mb-4">
                <Car className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-lg text-white mb-2">
                Paved Forecourt & Parking
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-3">
                Spacious vehicular drop-off roundabout, designated tenant and customer parking stalls, service loading zones, and tropical landscape planters.
              </p>
              <div className="text-[11px] font-mono text-amber-300">● 24/7 CCTV & Security Detail</div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 4: LOCATION & STRATEGIC CONNECTIVITY              */}
        {/* ========================================================= */}
        <section id="location-section" className="scroll-mt-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-6 border-b border-white/10 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-xs font-semibold uppercase tracking-widest mb-3">
                <MapPin className="w-3.5 h-3.5" />
                <span>Prime Commercial Node</span>
              </div>
              <h2 className="font-display text-2xl sm:text-4xl font-bold text-white tracking-tight">
                Strategic Location & Arterial Access
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 max-w-md">
              Commanding dual-street frontage at the pivotal intersection of two primary avenues with high daily foot and vehicular counts.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#0e1420] to-[#080b10] border border-white/15 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 font-mono text-xs text-amber-400 mb-3">
                  <NavigationIcon className="w-4 h-4" />
                  <span>GEO-COORDINATES: 14°33&apos;18&quot;N 121°01&apos;44&quot;E</span>
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-2">
                  Corner Square Commercial Landmark
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  Positioned at the premier corner junction of the commercial artery, ensuring maximum brand visibility, convenient customer access, and streamlined logistics for corporate teams.
                </p>

                {/* Connectivity Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs mb-6">
                  <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
                    <span className="text-amber-400 font-mono font-bold block text-sm">2 MINS</span>
                    <span className="text-white font-medium block mt-0.5">Public Transit Hub</span>
                    <p className="text-slate-400 text-[11px] mt-0.5">Direct arterial bus & transit stops</p>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
                    <span className="text-amber-400 font-mono font-bold block text-sm">8 MINS</span>
                    <span className="text-white font-medium block mt-0.5">Financial & CBD Center</span>
                    <p className="text-slate-400 text-[11px] mt-0.5">Quick expressway connectivity</p>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
                    <span className="text-amber-400 font-mono font-bold block text-sm">20 MINS</span>
                    <span className="text-white font-medium block mt-0.5">International Airport</span>
                    <p className="text-slate-400 text-[11px] mt-0.5">Direct expressway connection</p>
                  </div>
                </div>

                {/* Key Area Highlights */}
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Dual street corner access with dedicated vehicular deceleration lane</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Surrounded by high-density residential subdivisions and banking corridors</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Prominent façade building signage allocation for anchor tenants</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/10">
                <button
                  onClick={() => onOpenInquiry()}
                  className="px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wide transition-colors flex items-center gap-2"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>Book a Site Inspection</span>
                </button>
                <button
                  onClick={onOpenSpecs}
                  className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs tracking-wide transition-colors"
                >
                  Download Location Map
                </button>
              </div>
            </div>

            {/* Site Office & Information Card */}
            <div className="p-6 sm:p-7 rounded-3xl bg-white/5 border border-white/10 flex flex-col justify-between">
              <div>
                <h4 className="font-display font-bold text-base text-white mb-4 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-amber-400" />
                  <span>Leasing Office & Site Hours</span>
                </h4>
                <div className="space-y-3 text-xs mb-6">
                  <div className="flex justify-between py-2 border-b border-white/10">
                    <span className="text-slate-400">Monday – Friday</span>
                    <span className="text-white font-medium font-mono">8:00 AM – 6:00 PM</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-white/10">
                    <span className="text-slate-400">Saturday</span>
                    <span className="text-white font-medium font-mono">9:00 AM – 3:00 PM</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-white/10">
                    <span className="text-slate-400">Sunday & Holidays</span>
                    <span className="text-amber-300 font-medium">By Appointment</span>
                  </div>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-white font-semibold block">Site Address:</span>
                      <span className="text-slate-400 text-[11px] leading-relaxed">
                        Corner Square Commercial Building, Corner Prime Boulevard & 4th Commercial Ave.
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Phone className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-white font-semibold block">Leasing Hotline:</span>
                      <span className="text-slate-300 font-mono text-[11px]">+63 (2) 8876-5432 / +1 (800) 555-CORN</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Mail className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-white font-semibold block">Leasing Inquiries:</span>
                      <span className="text-slate-300 font-mono text-[11px]">leasing@cornersquare.ph</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-amber-400/10 border border-amber-400/20 text-xs text-amber-200 mt-6">
                <p className="font-semibold text-amber-300 mb-1">Direct Developer Inquiries</p>
                <p className="text-[11px] text-slate-300 leading-relaxed">
                  No broker commissions or middleman markups. Connect directly with our asset management team.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 5: TENANT LEASING GUIDE & ONBOARDING PROCESS      */}
        {/* ========================================================= */}
        <section id="leasing-process" className="scroll-mt-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-6 border-b border-white/10 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-xs font-semibold uppercase tracking-widest mb-3">
                <FileText className="w-3.5 h-3.5" />
                <span>Tenant Onboarding</span>
              </div>
              <h2 className="font-display text-2xl sm:text-4xl font-bold text-white tracking-tight">
                Simple 4-Step Commercial Leasing Process
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 max-w-md">
              From space selection to grand opening, our asset management team guarantees a streamlined handover and fit-out timeline.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-6 rounded-3xl bg-white/5 border border-white/10 relative">
              <span className="font-mono text-2xl font-bold text-amber-400/40 block mb-2">01</span>
              <h3 className="font-display font-bold text-base text-white mb-2">Site Inspection & Space Selection</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Tour Corner Square with our leasing managers to assess structural clearances, MEPF stubs, and signage exposure.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white/5 border border-white/10 relative">
              <span className="font-mono text-2xl font-bold text-amber-400/40 block mb-2">02</span>
              <h3 className="font-display font-bold text-base text-white mb-2">Proposal & Term Agreement</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Review tailored lease proposals offering flexible 3 to 5-year terms, fit-out grace allowances, and competitive base rates.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white/5 border border-white/10 relative">
              <span className="font-mono text-2xl font-bold text-amber-400/40 block mb-2">03</span>
              <h3 className="font-display font-bold text-base text-white mb-2">Fit-Out Grace Period</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Receive up to 60-90 days of rent-free construction time with dedicated architectural and MEPF engineering support.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white/5 border border-white/10 relative">
              <span className="font-mono text-2xl font-bold text-amber-400/40 block mb-2">04</span>
              <h3 className="font-display font-bold text-base text-white mb-2">Handover & Grand Opening</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Final utility energization, security onboarding, and official public launch of your signature flagship or corporate HQ.
              </p>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 6: IN-PAGE LEASING PROPOSAL & INQUIRY FORM        */}
        {/* ========================================================= */}
        <section id="inquire" className="scroll-mt-24 p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#0d131f] via-[#090d14] to-[#080b10] border border-amber-400/30 relative overflow-hidden">
          <div className="absolute -right-24 -bottom-24 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 relative z-10">
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/15 border border-amber-400/30 text-amber-300 text-xs font-semibold uppercase tracking-widest mb-4">
                  <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
                  <span>Direct Leasing Office</span>
                </div>
                <h2 className="font-display text-2xl sm:text-4xl font-bold text-white tracking-tight leading-tight mb-4">
                  Request an Official Leasing Proposal
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  Submit your enterprise details below to receive the official Corner Square leasing packet, floor plans, and customized rate proposal within 24 business hours.
                </p>

                <div className="space-y-3.5 text-xs text-slate-300 mb-8">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Direct developer rates & fit-out rent-free periods</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Dedicated site tours available Monday through Saturday</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Full architectural CAD and MEPF layout drawings provided</span>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-black/40 border border-white/10 text-xs">
                <span className="text-slate-400 block mb-1">Direct Developer Hotline:</span>
                <span className="font-mono text-base font-bold text-amber-400">+63 (2) 8876-5432</span>
                <span className="text-slate-500 block text-[11px] mt-0.5">leasing@cornersquare.ph</span>
              </div>
            </div>

            <div className="lg:col-span-7 bg-black/50 p-6 sm:p-8 rounded-2xl border border-white/10">
              {formSubmitted ? (
                <div className="py-10 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto mb-3">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white">
                    Proposal Request Submitted
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="text-amber-400 font-semibold">{formName || 'Valued Client'}</span>. Our Commercial Leasing Director has received your request for <span className="text-white font-medium">Unit {formUnit}</span>. We will contact you at <span className="text-amber-300">{formEmail}</span> shortly.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wide transition-all"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleInPageFormSubmit} className="space-y-4 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block font-medium text-slate-300 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formName}
                        onChange={(e) => setFormName(e.target.value)}
                        placeholder="e.g. Eleanor Vance"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-black/60 border border-white/15 text-slate-200 focus:outline-none focus:border-amber-400"
                      />
                    </div>
                    <div>
                      <label className="block font-medium text-slate-300 mb-1">
                        Company / Brand Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formCompany}
                        onChange={(e) => setFormCompany(e.target.value)}
                        placeholder="e.g. Apex Global Ventures"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-black/60 border border-white/15 text-slate-200 focus:outline-none focus:border-amber-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block font-medium text-slate-300 mb-1">
                        Corporate Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formEmail}
                        onChange={(e) => setFormEmail(e.target.value)}
                        placeholder="e.g. name@company.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-black/60 border border-white/15 text-slate-200 focus:outline-none focus:border-amber-400"
                      />
                    </div>
                    <div>
                      <label className="block font-medium text-slate-300 mb-1">
                        Phone / Mobile *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formPhone}
                        onChange={(e) => setFormPhone(e.target.value)}
                        placeholder="e.g. +63 917 123 4567"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-black/60 border border-white/15 text-slate-200 focus:outline-none focus:border-amber-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                    <div>
                      <label className="block font-medium text-slate-300 mb-1">
                        Unit of Interest
                      </label>
                      <select
                        value={formUnit}
                        onChange={(e) => setFormUnit(e.target.value)}
                        className="w-full px-3 py-2.5 rounded-xl bg-black/60 border border-white/15 text-slate-200 focus:outline-none focus:border-amber-400"
                      >
                        <option value="G-01">Unit G-01 (320 sqm Retail)</option>
                        <option value="G-02">Unit G-02 (185 sqm Retail)</option>
                        <option value="L2-01">Unit L2-01 (680 sqm Office)</option>
                        <option value="L2-02">Unit L2-02 (265 sqm Studio)</option>
                        <option value="ENTIRE-BUILDING">Whole Building (1,450 sqm)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-medium text-slate-300 mb-1">
                        Intended Use
                      </label>
                      <select
                        value={formUse}
                        onChange={(e) => setFormUse(e.target.value)}
                        className="w-full px-3 py-2.5 rounded-xl bg-black/60 border border-white/15 text-slate-200 focus:outline-none focus:border-amber-400"
                      >
                        <option value="Corporate Office / HQ">Corporate Office / HQ</option>
                        <option value="Retail / Flagship Store">Retail / Flagship Store</option>
                        <option value="Banking / Financial">Banking / Financial</option>
                        <option value="Medical / Clinic">Medical / Clinic</option>
                        <option value="Tech / Studio">Tech / Studio</option>
                        <option value="Specialty F&B">Specialty F&B</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-medium text-slate-300 mb-1">
                        Target Move-in
                      </label>
                      <select
                        value={formTimeline}
                        onChange={(e) => setFormTimeline(e.target.value)}
                        className="w-full px-3 py-2.5 rounded-xl bg-black/60 border border-white/15 text-slate-200 focus:outline-none focus:border-amber-400"
                      >
                        <option value="Immediate (30 Days)">Immediate (30 Days)</option>
                        <option value="Q3 - Q4 2026">Q3 - Q4 2026</option>
                        <option value="Q1 2027">Q1 2027</option>
                        <option value="Planning Stage">Planning Stage</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block font-medium text-slate-300 mb-1">
                      Fit-out Requirements or Specific Inquiries (Optional)
                    </label>
                    <textarea
                      rows={2}
                      value={formNotes}
                      onChange={(e) => setFormNotes(e.target.value)}
                      placeholder="Specify electric load, water provisions, lease duration or requested site visit date..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-black/60 border border-white/15 text-slate-200 focus:outline-none focus:border-amber-400 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs sm:text-sm tracking-wide uppercase transition-all shadow-xl flex items-center justify-center gap-2 mt-2"
                  >
                    <span>Request Official Lease Proposal</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 7: AUTHENTIC COMMERCIAL BUILDING FOOTER           */}
        {/* ========================================================= */}
        <footer className="pt-12 pb-6 border-t border-white/10 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 text-xs">
            {/* Column 1: Brand & Overview */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400/20 to-amber-500/10 border border-amber-400/30 flex items-center justify-center text-amber-400 shadow-inner">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-display font-bold text-base tracking-tight text-white block">
                    CORNER SQUARE
                  </span>
                  <span className="text-[10px] tracking-widest text-slate-400 uppercase font-medium">
                    Commercial Building For Lease
                  </span>
                </div>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
                A premier commercial landmark offering 1,450 sqm of sustainable, high-clearance office and retail spaces engineered for forward-thinking enterprises.
              </p>
              <div className="flex items-center gap-2 text-[11px] text-amber-400/90 font-mono">
                <span>● 65kWp Solar Powered</span>
                <span>•</span>
                <span>100% Back-up Power</span>
                <span>•</span>
                <span>EDGE Compliant</span>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="space-y-3">
              <h4 className="font-display font-bold text-white text-xs uppercase tracking-wider">
                Property Navigation
              </h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <button onClick={scrollToTop} className="hover:text-amber-300 transition-colors">
                    Home (Hero Sequence)
                  </button>
                </li>
                <li>
                  <a href="#the-property" className="hover:text-amber-300 transition-colors">
                    The Property
                  </a>
                </li>
                <li>
                  <a href="#available-spaces" className="hover:text-amber-300 transition-colors">
                    Available Spaces (4 Units)
                  </a>
                </li>
                <li>
                  <a href="#amenities-section" className="hover:text-amber-300 transition-colors">
                    Building Amenities
                  </a>
                </li>
                <li>
                  <a href="#location-section" className="hover:text-amber-300 transition-colors">
                    Location & Access
                  </a>
                </li>
                <li>
                  <a href="#leasing-process" className="hover:text-amber-300 transition-colors">
                    Leasing Guide
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Available Inventory */}
            <div className="space-y-3">
              <h4 className="font-display font-bold text-white text-xs uppercase tracking-wider">
                Available Spaces
              </h4>
              <ul className="space-y-2 text-slate-400 font-mono text-[11px]">
                <li>
                  <button onClick={() => onOpenInquiry('G-01')} className="hover:text-amber-300 transition-colors text-left">
                    Unit G-01: 320 sqm Flagship
                  </button>
                </li>
                <li>
                  <button onClick={() => onOpenInquiry('G-02')} className="hover:text-amber-300 transition-colors text-left">
                    Unit G-02: 185 sqm Retail
                  </button>
                </li>
                <li>
                  <button onClick={() => onOpenInquiry('L2-01')} className="hover:text-amber-300 transition-colors text-left">
                    Unit L2-01: 680 sqm Office HQ
                  </button>
                </li>
                <li>
                  <button onClick={() => onOpenInquiry('L2-02')} className="hover:text-amber-300 transition-colors text-left">
                    Unit L2-02: 265 sqm Tech Suite
                  </button>
                </li>
                <li>
                  <button onClick={() => onOpenInquiry('ENTIRE-BUILDING')} className="text-amber-400 hover:text-amber-300 transition-colors text-left font-bold">
                    Whole Building (1,450 sqm)
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 4: Leasing Office */}
            <div className="space-y-3">
              <h4 className="font-display font-bold text-white text-xs uppercase tracking-wider">
                Leasing Desk
              </h4>
              <div className="space-y-2 text-slate-400 text-xs">
                <p>Corner Square Commercial Center</p>
                <p className="font-mono text-amber-300">+63 (2) 8876-5432</p>
                <p className="font-mono text-slate-300">leasing@cornersquare.ph</p>
                <p className="text-[11px] text-slate-500">Mon - Sat: 8:00 AM – 6:00 PM</p>
                <button
                  onClick={onOpenSpecs}
                  className="inline-flex items-center gap-1.5 text-amber-400 hover:text-amber-300 font-semibold mt-1"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Dossier PDF</span>
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Disclaimer Bar */}
          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
            <div>
              © 2026 Corner Square Commercial Properties Inc. All rights reserved. Direct developer leasing.
            </div>

            <div className="flex items-center gap-6">
              <span className="hover:text-slate-400 cursor-pointer">Privacy Policy</span>
              <span className="hover:text-slate-400 cursor-pointer">Terms of Lease</span>
              <span className="hover:text-slate-400 cursor-pointer">Disclaimer</span>
              <button
                onClick={scrollToTop}
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors flex items-center gap-1 text-[11px]"
                id="footer-back-to-top-btn"
              >
                <span>Back to Top</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </footer>

      </div>
    </div>
  );
};


