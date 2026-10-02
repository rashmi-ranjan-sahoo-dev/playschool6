import React from 'react';
import { 
  ShieldCheck, 
  Video, 
  Lock, 
  Stethoscope, 
  Wind, 
  Users, 
  Navigation,
  CheckCircle2,
  Calendar
} from 'lucide-react';
import { schoolConfig } from '../config/schoolConfig';

export default function SafetySection({ onOpenTourModal }) {
  const iconMap = {
    Video: Video,
    Lock: Lock,
    Stethoscope: Stethoscope,
    Wind: Wind,
    Users: Users,
    Navigation: Navigation,
  };

  return (
    <section id="safety" className="py-20 lg:py-28 bg-[#103741] text-white relative overflow-hidden">
      
      {/* Background Decorative Rings */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-purple-500/10 filter blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-amber-500/10 filter blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-amber-300 text-xs font-bold uppercase tracking-wider mb-4 border border-white/15">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Zero-Compromise Child Security & Hygiene</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white mb-5 leading-tight">
            Your Child’s Safety is Our Sacred Trust
          </h2>

          <p className="text-white/80 text-base sm:text-lg font-sans-clean">
            We understand the emotional leap of sending your toddler to school. Our campus is built 
            from the ground up with multi-tier physical and digital safety protocols.
          </p>
        </div>

        {/* Safety Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {schoolConfig.safetyFeatures.map((feat, idx) => {
            const IconComp = iconMap[feat.icon] || ShieldCheck;

            return (
              <div
                key={feat.title}
                className="rounded-3xl p-7 bg-white/5 border border-white/10 hover:border-amber-400/40 hover:bg-white/10 transition-all duration-300 flex items-start gap-5 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#9C29B2] to-[#FF7A1A] text-white flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 transition-transform">
                  <IconComp className="w-7 h-7 text-white" />
                </div>

                <div>
                  <h3 className="font-display font-bold text-lg text-white mb-2 group-hover:text-amber-300 transition-colors">
                    {feat.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed font-sans-clean">
                    {feat.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Live CCTV Reassurance Callout Box */}
        <div className="rounded-[32px] bg-gradient-to-r from-purple-900/60 via-indigo-900/40 to-slate-900/60 p-8 sm:p-10 border border-purple-500/30 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center shrink-0 text-emerald-400">
              <Video className="w-8 h-8 animate-pulse" />
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
                <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-400">Parent Transparency Guarantee</span>
              </div>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-white mt-1">
                Watch Your Child Smile & Learn in Real-Time
              </h3>
              <p className="text-sm text-white/70 font-sans-clean mt-1 max-w-xl">
                Every parent gets authorized secure credentials to our mobile app. You can view 
                uninterrupted HD footage of classroom play, outdoor activities, and lunchtime.
              </p>
            </div>
          </div>

          <button
            onClick={() => onOpenTourModal("Campus Safety Walk")}
            className="px-8 py-4 rounded-full bg-[#FEC624] hover:bg-amber-400 text-[#103741] font-display font-bold text-sm sm:text-base shrink-0 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all cursor-pointer"
          >
            Inspect Our Security in Person
          </button>
        </div>

      </div>
    </section>
  );
}
