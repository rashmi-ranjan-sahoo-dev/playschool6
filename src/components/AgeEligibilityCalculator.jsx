import React, { useState } from 'react';
import { 
  Calculator, 
  Sparkles, 
  CheckCircle, 
  Calendar, 
  ArrowRight,
  Info,
  Clock
} from 'lucide-react';
import { schoolConfig } from '../config/schoolConfig';

export default function AgeEligibilityCalculator({ onOpenTourModal }) {
  // Default to a 3-year-old child DOB
  const [dob, setDob] = useState('2023-01-15');
  const [cutoffDate, setCutoffDate] = useState('2027-03-31');

  // Calculate age on cutoff date
  const getEligibility = () => {
    if (!dob) return null;

    const birth = new Date(dob);
    const target = new Date(cutoffDate);

    let months = (target.getFullYear() - birth.getFullYear()) * 12 + (target.getMonth() - birth.getMonth());
    if (target.getDate() < birth.getDate()) {
      months--;
    }

    const years = Math.floor(months / 12);
    const remMonths = months % 12;

    let program = null;
    let note = "";

    if (months < 18) {
      program = {
        name: "Infant Care & Daycare",
        desc: "Your child is currently under 1.5 years. We offer nurturing infant daycare and sensory mother-toddler play sessions.",
        badge: "Under 1.5 Years",
        color: "bg-amber-50 text-amber-900 border-amber-200",
      };
      note = "Recommended for gentle socialization & mother-toddler weekend clubs.";
    } else if (months >= 18 && months < 30) {
      program = {
        name: "Playgroup (Toddler Bloom)",
        desc: "Ideal age for sensory motor development, rhyme circles, and joyful gentle socialization.",
        badge: "1.5 – 2.5 Years",
        color: "bg-amber-100 text-amber-900 border-amber-300",
      };
      note = "Compliant with NEP 2020 Early Childhood Care (ECCE) Foundational guidelines.";
    } else if (months >= 30 && months < 42) {
      program = {
        name: "Nursery (Little Explorers)",
        desc: "Perfect timing for phonics, vocabulary building, pre-math games, and curiosity discovery labs.",
        badge: "2.5 – 3.5 Years",
        color: "bg-purple-100 text-purple-900 border-purple-300",
      };
      note = "Most sought-after entry level for early primary preparedness.";
    } else if (months >= 42 && months < 54) {
      program = {
        name: "Junior KG / LKG (Curious Champs)",
        desc: "Designed for emergent reading, early arithmetic manipulatives, Hindi/English conversations & creative arts.",
        badge: "3.5 – 4.5 Years",
        color: "bg-emerald-100 text-emerald-900 border-emerald-300",
      };
      note = "Full immersion in foundational literacy and numeracy.";
    } else if (months >= 54 && months < 66) {
      program = {
        name: "Senior KG / UKG (Future Leaders)",
        desc: "Comprehensive Grade-1 transition readiness, reading fluency, logical science projects, and confidence building.",
        badge: "4.5 – 5.5 Years",
        color: "bg-blue-100 text-blue-900 border-blue-300",
      };
      note = "Ensures seamless admission into top CBSE, ICSE, and Cambridge primary schools.";
    } else {
      program = {
        name: "Grade 1 or After-School Club",
        desc: "Your child is 5.5+ years and ready for primary Grade 1! Check our exciting Daycare & Hobby Clubs.",
        badge: "5.5+ Years",
        color: "bg-rose-100 text-rose-900 border-rose-300",
      };
      note = "We also run extended Daycare, Phonics, Robotics, and Dance clubs for primary schoolers.";
    }

    return { years, remMonths, program, note };
  };

  const result = getEligibility();

  return (
    <section id="calculator" className="py-20 lg:py-24 bg-white relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Card Wrapper with Playful Border */}
        <div className="rounded-[40px] bg-gradient-to-br from-[#FEF5FF] via-white to-[#FAF7F2] p-8 sm:p-12 border-2 border-purple-100 shadow-playful relative overflow-hidden">
          
          {/* Decorative Corner Doodles */}
          <div className="absolute top-4 right-6 text-3xl opacity-60 animate-spin-slow pointer-events-none">
            🎡
          </div>
          <div className="absolute bottom-4 left-6 text-2xl opacity-60 animate-bounce pointer-events-none">
            🧸
          </div>

          {/* Heading */}
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 text-[#9C29B2] text-xs font-bold uppercase tracking-wider mb-3">
              <Calculator className="w-3.5 h-3.5" />
              <span>Interactive Parent Tool</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#103741] mb-3">
              Check Your Child's Class Eligibility (NEP 2020)
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-sans-clean">
              Select your little one's Date of Birth to instantly find their ideal academic class 
              as per Indian National Education Policy criteria.
            </p>
          </div>

          {/* Form Controls */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end bg-white p-6 rounded-3xl border border-slate-100 shadow-sm mb-8">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                Child's Date of Birth (DOB)
              </label>
              <input 
                type="date" 
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                className="w-full px-4 py-3 rounded-2xl border-2 border-purple-100 focus:border-[#9C29B2] focus:outline-none font-semibold text-slate-800 text-base bg-[#FAF7F2]/50"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                Admission Cutoff Date Reference
              </label>
              <select 
                value={cutoffDate}
                onChange={(e) => setCutoffDate(e.target.value)}
                className="w-full px-4 py-3 rounded-2xl border-2 border-purple-100 focus:border-[#9C29B2] focus:outline-none font-semibold text-slate-800 text-base bg-[#FAF7F2]/50"
              >
                <option value="2027-03-31">March 31, 2027 (Standard CBSE/State)</option>
                <option value="2027-06-01">June 01, 2027 (Karnataka / Maharashtra / South)</option>
                <option value="2027-07-31">July 31, 2027 (Late Entry)</option>
              </select>
            </div>
          </div>

          {/* Real-time Calculation Result Card */}
          {result && (
            <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-dashed border-[#9C29B2]/30 shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
              
              <div className="text-left w-full md:w-auto">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Calculated Age on Cutoff:
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-800 font-bold text-xs">
                    {result.years} Years, {result.remMonths} Months
                  </span>
                </div>

                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#9C29B2]">
                    {result.program.name}
                  </h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-extrabold border ${result.program.color}`}>
                    {result.program.badge}
                  </span>
                </div>

                <p className="text-sm text-slate-600 font-sans-clean max-w-xl mb-3">
                  {result.program.desc}
                </p>

                <p className="text-xs text-emerald-700 font-semibold flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                  {result.note}
                </p>
              </div>

              {/* Action Button */}
              <div className="w-full md:w-auto shrink-0">
                <button
                  onClick={() => onOpenTourModal(result.program.name)}
                  className="w-full md:w-auto px-6 py-4 rounded-2xl bg-gradient-to-r from-[#9C29B2] to-[#7A1D8D] hover:from-[#88C90D] hover:to-[#6CA507] text-white font-display font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-sunny hover:shadow-lg transition-all cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-amber-300" />
                  <span>Enroll for {result.program.name.split(' ')[0]}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          )}

          {/* Info note */}
          <div className="mt-6 flex items-center justify-center gap-2 text-xs text-slate-500 text-center">
            <Info className="w-4 h-4 text-slate-400 shrink-0" />
            <span>Age criteria is relaxed by 30 days based on individual developmental readiness during campus interaction.</span>
          </div>

        </div>

      </div>
    </section>
  );
}
