import React from 'react';
import { 
  ShieldCheck, 
  Sparkles, 
  Apple, 
  Bus,
  ArrowRight
} from 'lucide-react';
import { schoolConfig } from '../config/schoolConfig';

export default function Pillars() {
  const iconMap = {
    ShieldCheck: ShieldCheck,
    Sparkles: Sparkles,
    Apple: Apple,
    Bus: Bus,
  };

  return (
    <section className="relative z-20 -mt-8 sm:-mt-12 max-w-7xl mx-auto px-4 sm:px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {schoolConfig.pillars.map((pillar, idx) => {
          const IconComponent = iconMap[pillar.icon] || Sparkles;

          return (
            <div
              key={pillar.id}
              className={`rounded-3xl p-6 sm:p-7 shadow-playful hover:shadow-playful-hover transition-all duration-300 hover:-translate-y-2 border border-slate-100 flex flex-col justify-between group ${pillar.bgColor}`}
            >
              <div>
                {/* Floating Icon Badge */}
                <div 
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 shadow-sm group-hover:scale-110 group-hover:rotate-6 transition-transform"
                  style={{ backgroundColor: pillar.accentColor, color: '#ffffff' }}
                >
                  <IconComponent className="w-7 h-7" />
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-xl text-[#103741] mb-2.5 group-hover:text-[#9C29B2] transition-colors">
                  {pillar.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 text-sm leading-relaxed font-sans-clean">
                  {pillar.description}
                </p>
              </div>

              {/* Bottom Subtle Indicator */}
              <div className="mt-5 pt-4 border-t border-slate-900/5 flex items-center justify-between text-xs font-bold" style={{ color: pillar.accentColor }}>
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
