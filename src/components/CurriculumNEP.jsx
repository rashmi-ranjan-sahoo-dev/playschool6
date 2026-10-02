import React from 'react';
import { 
  Sparkles, 
  Activity, 
  HeartPulse, 
  Smile, 
  Lightbulb, 
  Heart,
  Clock,
  Music,
  Utensils,
  Sun,
  BookOpen
} from 'lucide-react';
import { schoolConfig } from '../config/schoolConfig';

export default function CurriculumNEP() {
  const koshaIcons = {
    "Annamaya Kosha": Activity,
    "Pranamaya Kosha": HeartPulse,
    "Manomaya Kosha": Smile,
    "Vijnanamaya Kosha": Lightbulb,
    "Anandamaya Kosha": Sparkles,
  };

  const dailySchedule = [
    { time: "08:30 AM", title: "Warm Welcome & Shloka / Morning Circle", desc: "Singing joyful morning ragas, greeting teachers, and setting a positive daily intention." },
    { time: "09:15 AM", title: "Montessori & Sensory Exploration", desc: "Hands-on math rods, puzzle pegs, sensory sand tubs, and fine-motor activities." },
    { time: "10:15 AM", title: "Nutritious Sattvic Snack Time", desc: "Fresh fruits, warm poha/idli, and learning table etiquette & gratitude for food." },
    { time: "10:45 AM", title: "Phonics, Stories & Mother-Tongue Circle", desc: "Jolly phonics songs, Hindi & English rhymes, and expressive puppet theater." },
    { time: "11:30 AM", title: "Outdoor Gross Motor & Nature Garden", desc: "Sand pit digging, balance beam walk, tricycle rides, and watering school plants." },
    { time: "12:15 PM", title: "Reflective Closing & Parent Pickup / Daycare", desc: "Reviewing the day's creations, calming shanti chants, and cheerful goodbyes." },
  ];

  return (
    <section id="curriculum" className="py-20 lg:py-28 bg-gradient-to-b from-[#FAF7F2] to-white relative overflow-hidden">
      
      {/* Decorative Doodles */}
      <div className="absolute top-12 left-10 text-4xl opacity-50 animate-float-slow select-none pointer-events-none">
        🌿
      </div>
      <div className="absolute bottom-16 right-8 text-4xl opacity-50 animate-float-gentle select-none pointer-events-none">
        🦚
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ECFDF5] text-[#065F46] border border-[#A7F3D0] text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>NEP 2020 Foundational Stage & Indian Pedagogy</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#103741] mb-5 leading-tight">
            The Panchakosha Holistic Learning Framework
          </h2>

          <p className="text-slate-600 text-base sm:text-lg font-sans-clean">
            India's National Education Policy (NEP 2020) places early childhood learning on the 
            ancient Indian wisdom of <strong>Panchakosha Vikas</strong> — developing all 5 dimensions of a child's being.
          </p>
        </div>

        {/* 5 Koshas Interactive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-20">
          {schoolConfig.panchakosha.map((item, index) => {
            const IconComp = koshaIcons[item.kosha] || Sparkles;
            const colors = [
              { border: "border-amber-200", bg: "bg-amber-50/70", iconBg: "bg-amber-500", text: "text-amber-900" },
              { border: "border-emerald-200", bg: "bg-emerald-50/70", iconBg: "bg-emerald-500", text: "text-emerald-900" },
              { border: "border-purple-200", bg: "bg-purple-50/70", iconBg: "bg-purple-500", text: "text-purple-900" },
              { border: "border-blue-200", bg: "bg-blue-50/70", iconBg: "bg-blue-500", text: "text-blue-900" },
              { border: "border-pink-200", bg: "bg-pink-50/70", iconBg: "bg-pink-500", text: "text-pink-900" },
            ][index % 5];

            return (
              <div
                key={item.kosha}
                className={`rounded-3xl p-6 border ${colors.border} ${colors.bg} shadow-sm hover:shadow-md hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between`}
              >
                <div>
                  <div className={`w-12 h-12 rounded-2xl ${colors.iconBg} text-white flex items-center justify-center mb-4 shadow-sm`}>
                    <IconComp className="w-6 h-6" />
                  </div>

                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block mb-1">
                    Layer {index + 1}
                  </span>

                  <h3 className="font-display font-bold text-lg text-[#103741] mb-1 leading-snug">
                    {item.kosha}
                  </h3>

                  <p className="text-xs font-bold text-[#9C29B2] mb-3">
                    {item.dimension}
                  </p>

                  <p className="text-xs text-slate-600 leading-relaxed font-sans-clean">
                    {item.meaning}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200/50 text-[11px] font-semibold text-slate-500">
                  Daily Integrated Activity
                </div>
              </div>
            );
          })}
        </div>

        {/* Daily Schedule Timeline: A Joyful Day at Nanhe Kadam */}
        <div className="bg-white rounded-[36px] p-8 sm:p-12 border border-slate-100 shadow-playful">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-[#88C90D] uppercase tracking-wider">Predictable & Loving Routine</span>
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#103741] mt-1">
              A Joyful Day at Nanhe Kadam
            </h3>
            <p className="text-slate-500 text-sm font-sans-clean mt-2">
              Children thrive on rhythm. Our daily flow balances energetic active exploration with peaceful reflective rest.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dailySchedule.map((slot, i) => (
              <div key={i} className="p-5 rounded-2xl bg-[#FAF7F2] border border-slate-100 hover:border-purple-200 transition-colors flex items-start gap-4">
                <div className="px-3 py-1.5 rounded-xl bg-purple-100 text-[#9C29B2] font-display font-extrabold text-xs shrink-0">
                  {slot.time}
                </div>
                <div>
                  <h4 className="font-display font-bold text-base text-[#103741] leading-snug">
                    {slot.title}
                  </h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed font-sans-clean">
                    {slot.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
