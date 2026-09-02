import React from 'react';
import { X, ShieldCheck, Sun, Building2, Wind, Zap, Layers, Car, Globe, Cpu } from 'lucide-react';
import { BUILDING_SPECS } from '../data/propertyData';

interface BuildingSpecsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenInquiry: () => void;
}

export const BuildingSpecsModal: React.FC<BuildingSpecsModalProps> = ({
  isOpen,
  onClose,
  onOpenInquiry,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div className="relative w-full max-w-3xl bg-[#0c1018] border border-white/15 rounded-2xl shadow-2xl overflow-hidden my-8">
        {/* Header */}
        <div className="p-6 border-b border-white/10 flex items-start justify-between bg-gradient-to-r from-slate-900 to-[#0c1018]">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-xs font-semibold mb-2">
              <Building2 className="w-3.5 h-3.5" />
              <span>ARCHITECTURAL DOSSIER</span>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Corner Square Architectural Specifications
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Engineering parameters, structural design, and sustainable building systems
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/10 transition-colors"
            id="close-specs-modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto">
          {/* Architectural Identity Matrix */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold mb-3 flex items-center gap-2">
              <Layers className="w-4 h-4" />
              <span>CORE ARCHITECTURAL IDENTITY</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                <span className="text-slate-400 block mb-1">Building Form & Geometry</span>
                <span className="text-white font-semibold text-sm">
                  Modern 2-Story Rectangular Footprint with Rounded Corner Profile
                </span>
                <p className="text-slate-400 text-[11px] mt-1">
                  Soft rounded corners reduce aerodynamic drag and maximize dual-artery visibility.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                <span className="text-slate-400 block mb-1">Cantilever Roof & Soffit</span>
                <span className="text-white font-semibold text-sm">
                  Flat White Concrete Roof with Warm Timber Under-Soffit
                </span>
                <p className="text-slate-400 text-[11px] mt-1">
                  Deep overhangs provide passive solar shading and houses architectural perimeter downlights.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                <span className="text-slate-400 block mb-1">Façade & Columns</span>
                <span className="text-white font-semibold text-sm">
                  Tall Cylindrical Structural Columns & Double-Height Glass
                </span>
                <p className="text-slate-400 text-[11px] mt-1">
                  Floor-to-ceiling Low-E double glazing offering 4.80m clear ceiling heights.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                <span className="text-slate-400 block mb-1">Grand Entrance & Forecourt</span>
                <span className="text-white font-semibold text-sm">
                  Curved Illuminated Entrance Staircase & Wide Paved Driveway
                </span>
                <p className="text-slate-400 text-[11px] mt-1">
                  Integrated LED step lighting, dedicated VIP drop-off forecourt, and tropical planters.
                </p>
              </div>
            </div>
          </div>

          {/* Technical Specs List */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold mb-3 flex items-center gap-2">
              <Cpu className="w-4 h-4" />
              <span>TECHNICAL & MEPF SPECIFICATIONS</span>
            </h4>
            <div className="divide-y divide-white/10 rounded-xl bg-white/5 border border-white/10 text-xs">
              <div className="p-3 flex justify-between items-center">
                <span className="text-slate-400">Total Gross Floor Area (GFA)</span>
                <span className="font-semibold text-white font-mono">
                  {BUILDING_SPECS.grossFloorArea}
                </span>
              </div>
              <div className="p-3 flex justify-between items-center">
                <span className="text-slate-400">Clear Ceiling Heights</span>
                <span className="font-semibold text-white font-mono">
                  {BUILDING_SPECS.floorToCeiling}
                </span>
              </div>
              <div className="p-3 flex justify-between items-center">
                <span className="text-slate-400">Rooftop Solar Array</span>
                <span className="font-semibold text-amber-400 font-mono">
                  65kWp High-Efficiency PV System
                </span>
              </div>
              <div className="p-3 flex justify-between items-center">
                <span className="text-slate-400">Air Conditioning System</span>
                <span className="font-semibold text-white">
                  {BUILDING_SPECS.airConditioning}
                </span>
              </div>
              <div className="p-3 flex justify-between items-center">
                <span className="text-slate-400">Power & Backup</span>
                <span className="font-semibold text-white">
                  {BUILDING_SPECS.powerSupply}
                </span>
              </div>
              <div className="p-3 flex justify-between items-center">
                <span className="text-slate-400">Telecom Connectivity</span>
                <span className="font-semibold text-white">
                  {BUILDING_SPECS.telecoms}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-white/10 bg-black/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-400 text-center sm:text-left">
            <span>Ready to fit-out your enterprise?</span>
            <span className="text-amber-400 font-semibold block sm:inline sm:ml-1">
              Flexible unit partitions available.
            </span>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-1/2 sm:w-auto px-5 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenInquiry();
              }}
              className="w-1/2 sm:w-auto px-6 py-2.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs tracking-wider uppercase transition-all shadow-lg"
            >
              Inquire For Lease
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
