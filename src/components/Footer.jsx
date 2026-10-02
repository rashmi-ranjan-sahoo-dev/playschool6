import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Sparkles, 
  Heart, 
  MessageCircle,
  ExternalLink,
  ShieldCheck
} from 'lucide-react';
import { schoolConfig } from '../config/schoolConfig';
import ScrollReveal from './ScrollReveal';

export default function Footer({ onOpenTourModal }) {
  return (
    <footer className="bg-[#103741] text-white relative pt-12 pb-8 overflow-hidden">
      
      {/* Top Wave Divider Shape */}
      <div className="absolute top-0 inset-x-0 overflow-hidden leading-none pointer-events-none">
        <svg 
          className="relative block w-full h-7 sm:h-10 text-[#FAF7F2]" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path 
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
            fill="currentColor"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 pb-8 border-b border-white/10">
          
          {/* Column 1: Brand Info (5 cols) */}
          <ScrollReveal animation="fade-up" duration={600} className="lg:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#9C29B2] to-[#FF7A1A] p-0.5 shadow-md">
                <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center">
                  <span className="text-xl">👣</span>
                </div>
              </div>
              <div>
                <span className="font-display font-extrabold text-2xl text-white block leading-tight">
                  {schoolConfig.brand.name}
                </span>
                <span className="text-xs font-semibold text-[#88C90D] uppercase tracking-wider">
                  {schoolConfig.brand.tagline}
                </span>
              </div>
            </div>

            <p className="text-white/70 text-sm leading-relaxed mb-6 font-sans-clean max-w-sm">
              A loving playschool and daycare sanctuary blending global Montessori play 
              with foundational NEP 2020 early childhood pedagogy and timeless Indian values (Sanskar).
            </p>

            <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 text-xs text-amber-300 font-medium flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{schoolConfig.brand.affiliation}</span>
            </div>
          </ScrollReveal>

          {/* Column 2: Quick Links (2 cols) */}
          <ScrollReveal animation="fade-up" delay={80} duration={600} className="lg:col-span-2">
            <h4 className="font-display font-bold text-lg text-white mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm font-sans-clean text-white/70">
              <li><a href="#about" className="hover:text-amber-300 transition-colors">About Us</a></li>
              <li><a href="#programs" className="hover:text-amber-300 transition-colors">Our Programs</a></li>
              <li><a href="#curriculum" className="hover:text-amber-300 transition-colors">NEP 2020 Framework</a></li>
              <li><a href="#calculator" className="hover:text-amber-300 transition-colors">Age Calculator</a></li>
              <li><a href="#safety" className="hover:text-amber-300 transition-colors">Campus Safety</a></li>
              <li><a href="#gallery" className="hover:text-amber-300 transition-colors">Life at Campus</a></li>
              <li><a href="#faqs" className="hover:text-amber-300 transition-colors">Parent FAQs</a></li>
            </ul>
          </ScrollReveal>

          {/* Column 3: Classes / Programs (2 cols) */}
          <ScrollReveal animation="fade-up" delay={160} duration={600} className="lg:col-span-2">
            <h4 className="font-display font-bold text-lg text-white mb-4">
              Programs
            </h4>
            <ul className="space-y-2.5 text-sm font-sans-clean text-white/70">
              <li><button onClick={() => onOpenTourModal("Playgroup")} className="hover:text-amber-300 transition-colors text-left cursor-pointer">Playgroup (1.5-2.5 Y)</button></li>
              <li><button onClick={() => onOpenTourModal("Nursery")} className="hover:text-amber-300 transition-colors text-left cursor-pointer">Nursery (2.5-3.5 Y)</button></li>
              <li><button onClick={() => onOpenTourModal("Junior KG")} className="hover:text-amber-300 transition-colors text-left cursor-pointer">Junior KG / LKG</button></li>
              <li><button onClick={() => onOpenTourModal("Senior KG")} className="hover:text-amber-300 transition-colors text-left cursor-pointer">Senior KG / UKG</button></li>
              <li><button onClick={() => onOpenTourModal("Daycare")} className="hover:text-amber-300 transition-colors text-left cursor-pointer">Daycare & Clubs</button></li>
            </ul>
          </ScrollReveal>

          {/* Column 4: Contact & Hours (3 cols) */}
          <ScrollReveal animation="fade-up" delay={240} duration={600} className="lg:col-span-3">
            <h4 className="font-display font-bold text-lg text-white mb-4">
              Campus Visit
            </h4>
            <div className="space-y-3 text-sm text-white/70 font-sans-clean">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-300 shrink-0 mt-1" />
                <span>
                  {schoolConfig.contact.address.line1}, {schoolConfig.contact.address.line2}, {schoolConfig.contact.address.city} - {schoolConfig.contact.address.pincode}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-300 shrink-0" />
                <a href={`tel:${schoolConfig.contact.primaryPhone}`} className="hover:text-white font-semibold">
                  {schoolConfig.contact.primaryPhone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-300 shrink-0" />
                <a href={`mailto:${schoolConfig.contact.email}`} className="hover:text-white">
                  {schoolConfig.contact.email}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-amber-300 shrink-0" />
                <span>{schoolConfig.contact.timings.schoolHours}</span>
              </div>
            </div>

            <div className="mt-5">
              <button
                onClick={() => onOpenTourModal()}
                className="w-full py-2.5 px-4 rounded-xl bg-[#9C29B2] hover:bg-[#88C90D] text-white font-display font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
              >
                Schedule Walk-through
              </button>
            </div>
          </ScrollReveal>

        </div>

        {/* Bottom Bar: Copyright & Attribution */}
        <ScrollReveal animation="fade-up" delay={100} duration={500}>
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60 font-sans-clean">
            <p>© {new Date().getFullYear()} {schoolConfig.brand.fullName}. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <span className="text-white/40">Registration: {schoolConfig.brand.registrationNo}</span>
              <span className="text-white/40">•</span>
              <span className="text-amber-300 font-medium">Made with ❤️ for Indian Children</span>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </footer>
  );
}
