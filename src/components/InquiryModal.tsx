import React, { useState } from 'react';
import { X, CheckCircle, Send, Phone, Mail, Building, Calendar, Download, Shield } from 'lucide-react';
import { AVAILABLE_SPACES } from '../data/propertyData';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialUnitCode?: string;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({
  isOpen,
  onClose,
  initialUnitCode,
}) => {
  const [selectedUnit, setSelectedUnit] = useState(initialUnitCode || 'unit-g01');
  const [intendedUse, setIntendedUse] = useState('Commercial Office / Corporate HQ');
  const [targetMoveIn, setTargetMoveIn] = useState('Q3 - Q4 2026');
  const [fullName, setFullName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [downloadBrochure, setDownloadBrochure] = useState(true);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#0c1018] border border-white/15 rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-white/10 flex items-start justify-between bg-gradient-to-r from-slate-900 to-[#0c1018]">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-xs font-semibold mb-2">
              <Building className="w-3.5 h-3.5" />
              <span>DIRECT DEVELOPER LEASING</span>
            </div>
            <h3 className="font-display text-2xl font-bold text-white tracking-tight">
              Inquire for Commercial Lease
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Corner Square Commercial Building • Prime Office & Retail Spaces
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/10 transition-colors"
            id="close-inquiry-modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {isSubmitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h4 className="font-display text-2xl font-bold text-white">
                Leasing Inquiry Received
              </h4>
              <p className="text-sm text-slate-300 max-w-md mx-auto">
                Thank you, <span className="text-amber-400 font-semibold">{fullName || 'Valued Client'}</span>.
                Our Senior Commercial Leasing Director has received your request for{' '}
                <span className="text-white font-medium">
                  {AVAILABLE_SPACES.find((s) => s.id === selectedUnit)?.name || 'Corner Square'}
                </span>
                .
              </p>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 max-w-md mx-auto text-left text-xs space-y-2 text-slate-300">
                <div className="flex justify-between">
                  <span className="text-slate-400">Target Move-in:</span>
                  <span className="text-white font-mono font-medium">{targetMoveIn}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Representative Contact:</span>
                  <span className="text-amber-400 font-mono font-semibold">+1 (800) 555-CORN</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Official Dossier:</span>
                  <span className="text-emerald-400 font-semibold">Sent to {email || 'your email'}</span>
                </div>
              </div>

              <div className="pt-4 flex justify-center gap-3">
                <button
                  onClick={handleReset}
                  className="px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm transition-all"
                  id="done-inquiry-btn"
                >
                  Return to Property Overview
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Unit Selection */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                  Select Unit / Space of Interest
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {AVAILABLE_SPACES.map((space) => (
                    <button
                      key={space.id}
                      type="button"
                      onClick={() => setSelectedUnit(space.id)}
                      className={`p-3 rounded-xl text-left border transition-all ${
                        selectedUnit === space.id
                          ? 'bg-amber-400/10 border-amber-400 text-white shadow-md'
                          : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-bold text-amber-400">
                          {space.code}
                        </span>
                        <span className="text-[10px] text-slate-400">{space.areaSqm} sqm</span>
                      </div>
                      <div className="text-xs font-semibold mt-1 truncate">{space.name}</div>
                      <div className="text-[10px] text-slate-400 mt-0.5">{space.floor}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Business Purpose & Timeline */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Intended Use / Industry
                  </label>
                  <select
                    value={intendedUse}
                    onChange={(e) => setIntendedUse(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-black/60 border border-white/15 text-slate-200 text-xs focus:outline-none focus:border-amber-400"
                  >
                    <option value="Commercial Office / Corporate HQ">Commercial Office / Corporate HQ</option>
                    <option value="Prime Retail & Flagship Store">Prime Retail & Flagship Store</option>
                    <option value="Banking & Financial Services">Banking & Financial Services</option>
                    <option value="Medical / Specialty Clinic">Medical / Specialty Clinic</option>
                    <option value="Tech & Creative Studio">Tech & Creative Studio</option>
                    <option value="Specialty Food & Beverage">Specialty Food & Beverage</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Target Move-in Timeline
                  </label>
                  <select
                    value={targetMoveIn}
                    onChange={(e) => setTargetMoveIn(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-black/60 border border-white/15 text-slate-200 text-xs focus:outline-none focus:border-amber-400"
                  >
                    <option value="Immediate (Next 30 Days)">Immediate (Next 30 Days)</option>
                    <option value="Q3 - Q4 2026">Q3 - Q4 2026</option>
                    <option value="Q1 2027">Q1 2027</option>
                    <option value="Planning / Exploring Options">Planning / Exploring Options</option>
                  </select>
                </div>
              </div>

              {/* Contact Information */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Eleanor Vance"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-black/60 border border-white/15 text-slate-200 text-xs focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Company / Organization *
                  </label>
                  <input
                    type="text"
                    required
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="e.g. Apex Global Ventures"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-black/60 border border-white/15 text-slate-200 text-xs focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Corporate Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. name@company.com"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-black/60 border border-white/15 text-slate-200 text-xs focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. +1 (555) 019-2834"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-black/60 border border-white/15 text-slate-200 text-xs focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              {/* Special Requirements */}
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Specific Space Requirements or Questions (Optional)
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Tell us about your spatial needs, power requirements, fit-out timeline..."
                  className="w-full px-3.5 py-2 rounded-lg bg-black/60 border border-white/15 text-slate-200 text-xs focus:outline-none focus:border-amber-400 resize-none"
                />
              </div>

              {/* Brochure checkbox */}
              <div className="flex items-center gap-2 pt-1">
                <input
                  type="checkbox"
                  id="brochure-check"
                  checked={downloadBrochure}
                  onChange={(e) => setDownloadBrochure(e.target.checked)}
                  className="w-4 h-4 rounded bg-slate-900 border-white/20 text-amber-400 focus:ring-amber-400"
                />
                <label htmlFor="brochure-check" className="text-xs text-slate-300">
                  Include official Corner Square Architectural & Leasing PDF brochure
                </label>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm tracking-wide transition-all shadow-lg hover:shadow-amber-400/20 flex items-center justify-center gap-2"
                  id="submit-leasing-inquiry-btn"
                >
                  <Send className="w-4 h-4" />
                  <span>SUBMIT LEASING INQUIRY</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
