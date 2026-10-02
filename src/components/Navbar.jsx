import React, { useState, useEffect } from 'react';
import { 
  ArrowRight,
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { schoolConfig } from '../config/schoolConfig';

export default function Navbar({ onOpenTourModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

  // Exact 7 nav links requested by user
  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Services', href: '#services' },
    { name: 'About Us', href: '#about' },
    { name: 'Classes', href: '#classes' },
    { name: 'Teachers', href: '#teachers' },
    { name: 'Contact', href: '#contact' },
    { name: 'Testimonial', href: '#testimonial' },
  ];

  // Smart Header: Hide on scroll-down, reveal on scroll-up
  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateScrollDirection = () => {
      const currentScrollY = window.scrollY;

      // Check if scrolled past top threshold
      setIsScrolled(currentScrollY > 20);

      // Keep header visible if mobile menu drawer is open
      if (mobileMenuOpen) {
        setIsVisible(true);
        lastScrollY = currentScrollY;
        ticking = false;
        return;
      }

      // Always show when near the very top of the page
      if (currentScrollY <= 40) {
        setIsVisible(true);
        lastScrollY = currentScrollY;
        ticking = false;
        return;
      }

      const diff = currentScrollY - lastScrollY;
      // Filter out tiny scrolls (< 6px) to avoid jitter
      if (Math.abs(diff) < 6) {
        ticking = false;
        return;
      }

      if (diff > 0 && currentScrollY > 70) {
        // Scrolling DOWN -> Hide header in top
        setIsVisible(false);
      } else if (diff < 0) {
        // Scrolling UP -> Reveal header smoothly
        setIsVisible(true);
      }

      lastScrollY = currentScrollY > 0 ? currentScrollY : 0;
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDirection);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mobileMenuOpen]);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <header 
      className={`sticky top-0 z-50 bg-white/95 backdrop-blur-md transition-all duration-350 ease-[cubic-bezier(0.25,1,0.5,1)] ${
        isVisible ? 'translate-y-0' : '-translate-y-full pointer-events-none shadow-none'
      } ${
        isScrolled 
          ? 'shadow-md py-2.5 sm:py-3' 
          : 'shadow-sm py-3 sm:py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2 sm:gap-4 lg:gap-6">
          
          {/* ======================================================== */}
          {/* 1. LEFT: Playschool Logo & Brand Name (No Sub-name)       */}
          {/* ======================================================== */}
          <a 
            href="#hero" 
            className="flex items-center gap-2.5 sm:gap-3 group shrink-0 select-none py-1"
            aria-label={`${schoolConfig.brand.name} Home`}
          >
            {/* Bespoke Kindergarten Vector Logo Badge */}
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-tr from-[#9C29B2] via-[#88C90D] to-[#FEC624] p-0.5 shadow-sm group-hover:scale-105 group-hover:rotate-3 transition-all duration-300">
              <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center p-1 relative overflow-hidden">
                {/* Modern Preschool House & Rising Sun SVG Logo */}
                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 sm:w-8 sm:h-8">
                  {/* Rising Sun */}
                  <circle cx="28" cy="14" r="6" fill="#FEC624" />
                  <path d="M28 6V4M34 8L35.5 6.5M36 14H38M34 20L35.5 21.5" stroke="#FEC624" strokeWidth="1.5" strokeLinecap="round" />
                  {/* Playful School House Roof */}
                  <path d="M7 21L19 10C19.5 9.5 20.5 9.5 21 10L33 21" stroke="#88C90D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  {/* House Body */}
                  <path d="M10 20V31C10 32 11 33 12 33H28C29 33 30 32 30 31V20" fill="#F3E8FF" stroke="#9C29B2" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  {/* Heart / Child Window */}
                  <path d="M20 22C21.5 20 24 21 24 23C24 25.5 20 28 20 28C20 28 16 25.5 16 23C16 21 18.5 20 20 22Z" fill="#FF5E7E" />
                  {/* Sprout / Little Leaf */}
                  <path d="M19 8C17 6 15 7 15 9C15 11 19 12 19 12" stroke="#88C90D" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>

              {/* Pulsing Happy Dot */}
              <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
            </div>

            {/* Clean Brand Title in Baloo 2 */}
            <span className="font-display font-black text-2xl sm:text-3xl lg:text-[26px] xl:text-[30px] text-[#9C29B2] tracking-tight leading-none group-hover:text-[#88C90D] transition-colors duration-300 whitespace-nowrap">
              {schoolConfig.brand.name}
            </span>
          </a>

          {/* ======================================================== */}
          {/* 2. MIDDLE: Clean, Single-Line Nav Links (No BG/Border)    */}
          {/* ======================================================== */}
          <nav className="hidden lg:flex items-center justify-center gap-1 xl:gap-3 mx-auto flex-nowrap">
            {navLinks.map((link) => {
              const isActive = activeLink === link.name;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setActiveLink(link.name)}
                  className={`px-2 lg:px-2.5 xl:px-3.5 py-1.5 font-display font-black text-[15px] xl:text-[17px] tracking-normal transition-all duration-200 whitespace-nowrap select-none ${
                    isActive
                      ? 'text-[#9C29B2]'
                      : 'text-slate-700 hover:text-[#9C29B2]'
                  }`}
                >
                  <span className="transition-transform duration-200 inline-block hover:-translate-y-0.5">
                    {link.name}
                  </span>
                </a>
              );
            })}
          </nav>

          {/* ======================================================== */}
          {/* 3. RIGHT: CTA Button (PC/Laptop ONLY) & Menu Toggle      */}
          {/* ======================================================== */}
          <div className="flex items-center gap-3 shrink-0">
            
            {/* CTA Button: HIDDEN ON PHONE/TABLET SCREENS (< lg), ONLY VISIBLE ON PC/LAPTOP */}
            <button
              onClick={() => onOpenTourModal()}
              className="hidden lg:inline-flex relative group overflow-hidden px-5 xl:px-7 py-2.5 xl:py-3 rounded-full bg-gradient-to-r from-[#9C29B2] to-[#851E9B] hover:from-[#88C90D] hover:to-[#6CA507] text-white font-display font-black text-xs xl:text-sm tracking-wide shadow-sunny hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer items-center gap-2 whitespace-nowrap"
            >
              {/* Shimmer effect */}
              <span className="absolute inset-0 w-1/2 h-full bg-white/25 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-700 ease-out pointer-events-none" />
              
              <Sparkles className="w-4 h-4 text-amber-300 animate-spin-slow" />
              <span>Join Now</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </button>

            {/* Mobile Hamburger / Cross Toggle with Slow Smooth Morph Animation */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden w-11 h-11 rounded-2xl bg-[#9C29B2] hover:bg-[#851E9B] text-white flex items-center justify-center transition-all duration-500 cursor-pointer shadow-md hover:scale-105 active:scale-95 z-50 relative"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              <div className="relative w-5 h-5 flex items-center justify-center">
                {/* Top line */}
                <span 
                  className={`absolute h-0.5 w-5 bg-white rounded-full transition-all duration-500 ease-in-out ${
                    mobileMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-1.5'
                  }`} 
                />
                {/* Middle line */}
                <span 
                  className={`absolute h-0.5 w-5 bg-white rounded-full transition-all duration-500 ease-in-out ${
                    mobileMenuOpen ? 'opacity-0 scale-x-0' : 'opacity-100'
                  }`} 
                />
                {/* Bottom line */}
                <span 
                  className={`absolute h-0.5 w-5 bg-white rounded-full transition-all duration-500 ease-in-out ${
                    mobileMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-1.5'
                  }`} 
                />
              </div>
            </button>

          </div>

        </div>
      </div>

      {/* Scalloped Cloud Fringe Border along bottom */}
      <div className="absolute -bottom-3 left-0 w-full h-3 overflow-hidden pointer-events-none z-30">
        <svg className="w-full h-full text-white" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="knirpse-navbar-scallop" x="0" y="0" width="36" height="12" patternUnits="userSpaceOnUse">
              <path d="M 0,0 A 18 12 0 0 0 36,0 Z" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="12" fill="url(#knirpse-navbar-scallop)" />
        </svg>
      </div>

      {/* ======================================================== */}
      {/* 4. Full-Screen / Smooth Slow Animated Mobile Menu Drawer */}
      {/* ======================================================== */}
      <div 
        className={`lg:hidden fixed inset-0 top-[60px] sm:top-[68px] z-40 bg-slate-900/40 backdrop-blur-sm transition-all duration-700 ease-in-out ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto visible' : 'opacity-0 pointer-events-none invisible'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      >
        <div 
          onClick={(e) => e.stopPropagation()}
          className={`w-full bg-white shadow-2xl rounded-b-[36px] border-b-4 border-[#9C29B2] px-6 pt-5 pb-8 max-h-[calc(100vh-80px)] overflow-y-auto transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] transform ${
            mobileMenuOpen 
              ? 'translate-y-0 opacity-100 scale-y-100' 
              : '-translate-y-12 opacity-0 scale-y-95'
          }`}
        >
          {/* Header inside drawer */}
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-purple-100">
            <span className="text-xs font-black uppercase tracking-wider text-[#9C29B2] font-display">
              Explore Nanhe Kadam
            </span>
            <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full">
              Admissions Open 2027-28
            </span>
          </div>

          {/* 7 Nav Links */}
          <div className="flex flex-col gap-1.5 font-display font-extrabold text-slate-800 text-lg">
            {navLinks.map((link) => {
              const isActive = activeLink === link.name;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => {
                    setActiveLink(link.name);
                    setMobileMenuOpen(false);
                  }}
                  className={`flex items-center justify-between py-3 px-4 rounded-2xl transition-all duration-300 ${
                    isActive
                      ? 'text-[#9C29B2] font-black'
                      : 'text-slate-700 hover:text-[#9C29B2]'
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#88C90D]"></span>
                    <span>{link.name}</span>
                  </span>
                  <ChevronRight className="w-5 h-5 text-purple-400" />
                </a>
              );
            })}
          </div>

          {/* Prominent CTA Button inside Mobile Drawer */}
          <div className="mt-6 pt-4 border-t border-slate-100">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTourModal();
              }}
              className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#9C29B2] to-[#88C90D] hover:from-[#88C90D] hover:to-[#9C29B2] text-white font-display font-black text-base shadow-sunny flex items-center justify-center gap-2.5 cursor-pointer active:scale-95 transition-all duration-300"
            >
              <Sparkles className="w-5 h-5 text-amber-300 animate-spin-slow" />
              <span>Join Now</span>
              <ArrowRight className="w-5 h-5" />
            </button>

          </div>

        </div>
      </div>

    </header>
  );
}
