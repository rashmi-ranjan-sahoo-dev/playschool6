import React, { useState } from 'react';
import { 
  Sparkles, 
  Clock, 
  Users, 
  CheckCircle, 
  ArrowRight, 
  Calendar,
  Layers
} from 'lucide-react';
import { schoolConfig } from '../config/schoolConfig';

export default function ProgramsSection({ onOpenTourModal }) {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const programs = schoolConfig.programs;

  return (
    <section id="programs" className="py-20 lg:py-28 bg-[#FAF7F2] relative">
      {/* Decorative top wave */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FEF3C7] text-[#92400E] text-xs font-bold uppercase tracking-wider mb-4 border border-[#FDE68A]">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>Age-Tailored Developmental Milestones</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#103741] mb-5 leading-tight">
            Our Loving Educational Programs
          </h2>

          <p className="text-slate-600 text-base sm:text-lg font-sans-clean">
            Every age group has unique emotional, linguistic, and sensory needs. Explore our comprehensive 
            progression from toddlers' first joyful steps up to Grade 1 school readiness.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((prog) => (
            <div 
              key={prog.id}
              className="bg-white rounded-[32px] overflow-hidden border border-slate-100 shadow-playful hover:shadow-playful-hover hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Card Header with Color Band */}
              <div>
                <div className={`p-6 sm:p-7 bg-gradient-to-r ${prog.themeColor} text-white relative overflow-hidden`}>
                  {/* Subtle Background Pattern */}
                  <div className="absolute -right-4 -bottom-4 w-24 h-24 rounded-full bg-white/10 pointer-events-none"></div>
                  
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold text-white uppercase tracking-wider">
                      {prog.ageRange}
                    </span>
                    <span className="text-xs font-semibold text-white/90">
                      {prog.capacity}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-2xl text-white mb-1 group-hover:scale-[1.02] transition-transform">
                    {prog.title}
                  </h3>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-7">
                  {/* Badges: Timings & Ratio */}
                  <div className="flex flex-wrap items-center gap-2 mb-4 pb-4 border-b border-slate-100 text-xs">
                    <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 text-slate-700 font-semibold">
                      <Clock className="w-3.5 h-3.5 text-[#9C29B2]" />
                      {prog.timings}
                    </span>
                    <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 text-slate-700 font-semibold">
                      <Users className="w-3.5 h-3.5 text-[#88C90D]" />
                      {prog.ratio}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 font-sans-clean">
                    {prog.description}
                  </p>

                  {/* Key Activities List */}
                  <div className="space-y-2.5 mb-6">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Curriculum Highlights:
                    </p>
                    {prog.keyActivities.map((act, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                        <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{act}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Button */}
              <div className="p-6 sm:p-7 pt-0">
                <button
                  onClick={() => onOpenTourModal(prog.title)}
                  className="w-full py-3.5 px-4 rounded-2xl bg-[#FEF5FF] hover:bg-[#9C29B2] text-[#9C29B2] hover:text-white font-display font-bold text-sm flex items-center justify-center gap-2 transition-all duration-300 border border-purple-100 hover:border-transparent group/btn cursor-pointer shadow-sm"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Enquire & Book Tour for {prog.title.split(' ')[0]}</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Reassurance Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-white border border-purple-100 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center shrink-0 text-2xl">
              💡
            </div>
            <div>
              <h4 className="font-display font-bold text-lg text-[#103741]">Unsure which class is best for your child's birth date?</h4>
              <p className="text-sm text-slate-500 font-sans-clean">
                Use our instant NEP 2020 age eligibility tool below to see the recommended class in seconds.
              </p>
            </div>
          </div>

          <a 
            href="#calculator"
            className="px-6 py-3 rounded-full bg-[#103741] hover:bg-[#9C29B2] text-white font-display font-bold text-sm shrink-0 transition-colors"
          >
            Open Age Calculator
          </a>
        </div>

      </div>
    </section>
  );
}
