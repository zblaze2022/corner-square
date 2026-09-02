import React, { useState } from 'react';
import { X, Check, ArrowRight, Building, Sparkles, Layers, Maximize2, Shield } from 'lucide-react';
import { AVAILABLE_SPACES } from '../data/propertyData';
import { AvailableSpace } from '../types';

interface AvailableSpacesDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectUnitForInquiry: (unitId: string) => void;
}

export const AvailableSpacesDrawer: React.FC<AvailableSpacesDrawerProps> = ({
  isOpen,
  onClose,
  onSelectUnitForInquiry,
}) => {
  const [selectedTab, setSelectedTab] = useState<'All' | 'Ground' | 'Second'>('All');
  const [activeUnit, setActiveUnit] = useState<AvailableSpace>(AVAILABLE_SPACES[0]);

  if (!isOpen) return null;

  const filteredSpaces = AVAILABLE_SPACES.filter((space) => {
    if (selectedTab === 'Ground') return space.floor.includes('Ground');
    if (selectedTab === 'Second') return space.floor.includes('Second');
    return true;
  });

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/80 backdrop-blur-md flex justify-end animate-fadeIn">
      <div className="w-full max-w-2xl h-full bg-[#0b0f16] border-l border-white/10 shadow-2xl flex flex-col justify-between overflow-y-auto">
        {/* Header */}
        <div>
          <div className="p-6 border-b border-white/10 flex items-center justify-between sticky top-0 bg-[#0b0f16]/95 backdrop-blur-md z-10">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] uppercase font-bold tracking-widest text-amber-400 px-2 py-0.5 rounded bg-amber-400/10 border border-amber-400/20">
                  Corner Square Floorplates
                </span>
                <span className="text-xs text-slate-400">Total GFA: 1,450 sqm</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-white">
                Available Commercial Spaces
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/10 transition-colors"
              id="close-spaces-drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Floor filter tabs */}
          <div className="px-6 pt-4 pb-2 flex items-center gap-2">
            <button
              onClick={() => setSelectedTab('All')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                selectedTab === 'All'
                  ? 'bg-amber-400 text-slate-950 font-bold'
                  : 'bg-white/5 text-slate-400 hover:text-white border border-white/10'
              }`}
            >
              All Spaces (4)
            </button>
            <button
              onClick={() => setSelectedTab('Ground')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                selectedTab === 'Ground'
                  ? 'bg-amber-400 text-slate-950 font-bold'
                  : 'bg-white/5 text-slate-400 hover:text-white border border-white/10'
              }`}
            >
              Ground Floor Retail
            </button>
            <button
              onClick={() => setSelectedTab('Second')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                selectedTab === 'Second'
                  ? 'bg-amber-400 text-slate-950 font-bold'
                  : 'bg-white/5 text-slate-400 hover:text-white border border-white/10'
              }`}
            >
              Second Floor Corporate Office
            </button>
          </div>

          {/* Spaces List */}
          <div className="p-6 space-y-4">
            {filteredSpaces.map((space) => {
              const isSelected = activeUnit.id === space.id;
              return (
                <div
                  key={space.id}
                  onClick={() => setActiveUnit(space)}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-amber-400/10 border-amber-400/80 shadow-xl ring-1 ring-amber-400/30'
                      : 'bg-white/5 border-white/10 hover:border-white/25 hover:bg-white/[0.07]'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-mono text-xs font-bold text-amber-400 px-2 py-0.5 rounded bg-black/60 border border-amber-400/30">
                          {space.code}
                        </span>
                        <span className="text-xs text-slate-400 font-medium">
                          {space.floor}
                        </span>
                      </div>
                      <h4 className="font-display text-lg font-bold text-white">
                        {space.name}
                      </h4>
                    </div>

                    <div className="text-right shrink-0">
                      <div className="font-display font-bold text-xl text-white">
                        {space.areaSqm} <span className="text-xs font-sans text-slate-400">sqm</span>
                      </div>
                      <div className="text-[11px] font-mono text-slate-400">
                        ({space.areaSqft.toLocaleString()} sqft)
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed mb-3">
                    {space.description}
                  </p>

                  <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-300 pt-2 border-t border-white/10 mb-3">
                    <div>
                      <span className="text-slate-500 block">Clear Height:</span>
                      <span className="font-medium text-slate-200">{space.ceilingHeight}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block">Frontage:</span>
                      <span className="font-medium text-slate-200 truncate block">
                        {space.frontage}
                      </span>
                    </div>
                  </div>

                  {/* Feature bullet tags */}
                  <div className="space-y-1.5 mb-4">
                    {space.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                        <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-xs text-emerald-400 font-mono font-medium">
                      ● Status: {space.status}
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectUnitForInquiry(space.id);
                      }}
                      className="px-4 py-2 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs tracking-wider uppercase transition-all flex items-center gap-1.5"
                    >
                      <span>Inquire for {space.code}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-white/10 bg-black/60 sticky bottom-0">
          <button
            onClick={() => onSelectUnitForInquiry(activeUnit.id)}
            className="w-full py-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm tracking-wide uppercase transition-all shadow-xl flex items-center justify-center gap-2"
          >
            <span>PROCEED TO LEASE INQUIRY</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
