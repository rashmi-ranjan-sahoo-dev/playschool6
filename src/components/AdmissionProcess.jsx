import React, { useState } from 'react';
import { 
  CalendarCheck, 
  Eye, 
  FileCheck, 
  SmilePlus, 
  HelpCircle, 
  ChevronDown, 
  Sparkles,
  ArrowRight,
  PhoneCall
} from 'lucide-react';
import { schoolConfig } from '../config/schoolConfig';

export default function AdmissionProcess({ onOpenTourModal }) {
  const [openFaq, setOpenFaq] = useState(0);

  const stepIcons = {
    "01": CalendarCheck,
    "02": Eye,
    "03": FileCheck,
    "04": SmilePlus,
  };

  return (
    <section id="admissions" className="py-20 lg:py-28 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ECFDF5] text-[#065F46] border border-[#A7F3D0] text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Smooth, Transparent & Child-Friendly</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#103741] mb-5 leading-tight">
            Our 4-Step Admission Journey
          </h2>

          <p className="text-slate-600 text-base sm:text-lg font-sans-clean">
            We keep admissions transparent and stress-free. No formal interviews for children — only 
            loving interaction and developmental comfort.
          </p>
        </div>

        {/* 4 Steps Visual Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {schoolConfig.admissionSteps.map((step, idx) => {
            const IconComp = stepIcons[step.step] || Sparkles;

            return (
              <div
                key={step.step}
                className="bg-white rounded-[32px] p-7 border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1.5 transition-all duration-300 relative group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-display font-extrabold text-3xl text-purple-200 group-hover:text-[#9C29B2] transition-colors">
                      {step.step}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-[#FEF5FF] text-[#9C29B2] flex items-center justify-center group-hover:bg-[#9C29B2] group-hover:text-white transition-all">
                      <IconComp className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="font-display font-bold text-lg text-[#103741] mb-2 leading-snug">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-500 font-sans-clean leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-xs font-bold text-[#88C90D]">
                  <span>Step {idx + 1} of 4</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Callout Strip for Tour */}
        <div className="bg-gradient-to-r from-[#9C29B2] via-[#851E9B] to-[#7A1D8D] rounded-[36px] p-8 sm:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 mb-24">
          <div>
            <span className="px-3.5 py-1 rounded-full bg-white/20 text-xs font-extrabold uppercase tracking-wider text-amber-300">
              Limited Seats per Batch
            </span>
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white mt-3">
              Ready to Experience the Magic in Person?
            </h3>
            <p className="text-white/80 text-sm sm:text-base font-sans-clean mt-2 max-w-xl">
              Schedule a personalized school tour. Bring your little one along so they can play in our activity room!
            </p>
          </div>

          <button
            onClick={() => onOpenTourModal()}
            className="px-8 py-4 rounded-full bg-[#FEC624] hover:bg-amber-400 text-[#103741] font-display font-bold text-base shrink-0 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all cursor-pointer flex items-center gap-2"
          >
            <span>Book Campus Tour Now</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Frequently Asked Questions Section */}
        <div id="faqs" className="max-w-4xl mx-auto pt-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 text-[#9C29B2] text-xs font-bold uppercase tracking-wider mb-3">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Got Questions?</span>
            </div>
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#103741]">
              Frequently Asked Questions by Parents
            </h3>
          </div>

          <div className="space-y-4">
            {schoolConfig.faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-display font-bold text-base sm:text-lg text-[#103741] hover:text-[#9C29B2] transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#9C29B2]' : ''}`} />
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-slate-600 text-sm sm:text-base font-sans-clean leading-relaxed border-t border-slate-50">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
