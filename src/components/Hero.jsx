import React, { useState, useEffect } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Sparkles 
} from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function Hero({ onOpenTourModal }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // 100% Authentic Indian Playschool Visuals (User Provided)
  const slides = [
    {
      id: 1,
      tag: "Play & Discovery",
      line1: "We Care for",
      highlight: "Children",
      line2: "start with us!",
      btnText: "Book A Visit",
      bgImage: "/images/hero-indian-playschool-blocks.jpg",
      alt: "Happy Indian preschool children and teacher playing with wooden alphabet blocks on classroom mat",
      badgeIcon: "car",
      imgPosition: "object-[center_top] md:object-[30%_center] lg:object-[28%_center]",
    },
    {
      id: 2,
      tag: "Arts & Creativity",
      line1: "Where Little Hands",
      highlight: "Paint Dreams",
      line2: "with pure joy!",
      btnText: "Explore Programs",
      bgImage: "/images/hero-indian-playschool-activities.jpg",
      alt: "Indian preschool children drawing and painting in vibrant classroom and outdoor garden",
      badgeIcon: "bus",
      imgPosition: "object-[center_top] md:object-[25%_center] lg:object-[20%_center]",
    },
    {
      id: 3,
      tag: "Playground & Sports",
      line1: "Active Play",
      highlight: "Healthy Fun",
      line2: "in lush green campus!",
      btnText: "Schedule Tour",
      bgImage: "/images/hero-indian-playschool-playground.jpg",
      alt: "Indian preschool playground with green lawn, slides, swings, football, and happy kids playing",
      badgeIcon: "plane",
      imgPosition: "object-[center_top] md:object-[35%_center] lg:object-[30%_center]",
    },
    {
      id: 4,
      tag: "Modern Montessori Campus",
      line1: "Spacious Loving",
      highlight: "Classrooms",
      line2: "where smiles bloom!",
      btnText: "Check Eligibility",
      bgImage: "/images/hero-indian-playschool-classroom.jpg",
      alt: "Spacious Indian playschool classroom with teacher, learning toys, sensory trays, and reading nook",
      badgeIcon: "car",
      imgPosition: "object-[center_top] md:object-[30%_center] lg:object-[25%_center]",
    },
  ];

  // Auto-advance slides every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  const active = slides[currentSlide];

  return (
    <section id="hero" className="relative w-full max-w-full h-[540px] sm:h-[600px] md:h-[640px] lg:h-[690px] overflow-hidden bg-slate-900 select-none">
      
      {/* 1. Full-Bleed Background Images with Authentic Indian Playschool Photography */}
      {slides.map((slide, idx) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
          }`}
          style={{ transitionProperty: 'opacity, transform' }}
        >
          <img
            src={slide.bgImage}
            alt={slide.alt}
            className={`w-full h-full object-cover transition-all duration-700 ${slide.imgPosition || 'object-center'}`}
          />
          {/* Subtle balanced dark gradient overlay so background is fully visible while text pops */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-black/35 md:bg-gradient-to-r md:from-black/15 md:via-black/10 md:to-black/40"></div>
        </div>
      ))}

      {/* 2. Glassmorphic Circular Pod - Shifted to RIGHT on PC/Laptop screen! */}
      <div className="absolute inset-0 z-20 pointer-events-none flex flex-col justify-end md:justify-center items-center md:items-end pb-8 sm:pb-10 md:pb-0 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-28 max-w-7xl mx-auto">
        
        {/* The Outer Orbit Swirl Ring Container */}
        <ScrollReveal animation="zoom-in" duration={800} delay={100} className="pointer-events-auto">
          <div className="relative flex items-center justify-center max-w-full">
          
          {/* Decorative Animated SVG Orbit Swirl */}
          <svg 
            className="absolute -inset-4 sm:-inset-8 w-[calc(100%+32px)] sm:w-[calc(100%+64px)] h-[calc(100%+32px)] sm:h-[calc(100%+64px)] pointer-events-none animate-spin-slow opacity-85"
            viewBox="0 0 500 500" 
            fill="none"
          >
            <path 
              d="M 250, 20 A 230,230 0 0,1 480, 250" 
              stroke="#ffffff" 
              strokeWidth="5" 
              strokeLinecap="round" 
              strokeDasharray="18 12"
            />
            <path 
              d="M 250, 480 A 230,230 0 0,1 20, 250" 
              stroke="#FEC624" 
              strokeWidth="4" 
              strokeLinecap="round" 
              opacity="0.9"
            />
          </svg>

          {/* Animated Mascot Perched on Top-Left of Circle (~11 o'clock) */}
          <div className="absolute -top-7 min-[380px]:-top-9 sm:-top-13 -left-2 sm:left-2 z-30 animate-float-slow filter drop-shadow-xl">
            {active.badgeIcon === 'car' && (
              /* Cartoon Blue Toy Car */
              <svg viewBox="0 0 120 90" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-13 min-[380px]:w-16 sm:w-22 h-auto">
                <path d="M20 50 C20 40 30 25 50 20 C70 15 85 25 95 38 C105 40 115 48 115 58 C115 66 110 70 100 70 L20 70 C15 70 10 65 10 58 C10 52 15 50 20 50 Z" fill="#4A8BF5" />
                <path d="M50 25 C65 20 78 28 85 38 L45 38 C38 38 34 32 38 28 Z" fill="#E0F2FE" />
                <path d="M88 40 L102 40 C104 40 106 43 105 46 L90 46 Z" fill="#E0F2FE" />
                <circle cx="112" cy="58" r="4" fill="#FEF08A" />
                <circle cx="35" cy="70" r="14" fill="#1E293B" />
                <circle cx="35" cy="70" r="6" fill="#CBD5E1" />
                <circle cx="90" cy="70" r="14" fill="#1E293B" />
                <circle cx="90" cy="70" r="6" fill="#CBD5E1" />
              </svg>
            )}

            {active.badgeIcon === 'bus' && (
              /* Cartoon Yellow School Bus */
              <svg viewBox="0 0 120 90" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-13 min-[380px]:w-16 sm:w-22 h-auto">
                <rect x="15" y="20" width="90" height="48" rx="14" fill="#FEC624" />
                <rect x="25" y="28" width="18" height="16" rx="4" fill="#E0F2FE" />
                <rect x="50" y="28" width="18" height="16" rx="4" fill="#E0F2FE" />
                <rect x="75" y="28" width="22" height="16" rx="4" fill="#E0F2FE" />
                <circle cx="35" cy="68" r="12" fill="#1E293B" />
                <circle cx="35" cy="68" r="5" fill="#CBD5E1" />
                <circle cx="85" cy="68" r="12" fill="#1E293B" />
                <circle cx="85" cy="68" r="5" fill="#CBD5E1" />
              </svg>
            )}

            {active.badgeIcon === 'plane' && (
              <span className="text-3xl min-[380px]:text-4xl sm:text-5xl select-none">✈️</span>
            )}
          </div>

          {/* Main Circular Pod - Transparent Glassmorphic Background with Blur */}
          <div className="w-[285px] h-[285px] min-[360px]:w-[315px] min-[360px]:h-[315px] min-[400px]:w-[340px] min-[400px]:h-[340px] sm:w-[410px] sm:h-[410px] md:w-[430px] md:h-[430px] lg:w-[480px] lg:h-[480px] max-w-[calc(100vw-28px)] aspect-square rounded-full bg-white/20 hover:bg-white/25 backdrop-blur-md shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] border-2 sm:border-4 border-white/60 flex flex-col items-center justify-center text-center p-4 min-[380px]:p-6 sm:p-10 relative z-20 transition-all duration-300">
            
            {/* Tagline Pill */}
            <span className="inline-block px-3.5 py-1 rounded-full bg-[#9C29B2]/90 text-white backdrop-blur-sm text-[11px] min-[380px]:text-xs sm:text-sm font-black uppercase tracking-wider mb-1 sm:mb-2 font-display shadow-md">
              {active.tag}
            </span>

            {/* Line 1 */}
            <h2 className="font-display font-extrabold text-xl min-[380px]:text-2xl sm:text-3xl lg:text-4xl text-white leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
              {active.line1}
            </h2>

            {/* Highlighted Word */}
            <span className="font-display font-black text-3xl min-[380px]:text-4xl sm:text-5xl lg:text-6xl text-[#FEC624] tracking-tight my-0.5 sm:my-1.5 leading-none drop-shadow-[0_3px_8px_rgba(0,0,0,0.95)]">
              {active.highlight}
            </span>

            {/* Line 2 */}
            <h3 className="font-display font-extrabold text-xl min-[380px]:text-2xl sm:text-3xl lg:text-4xl text-white leading-tight mb-3 sm:mb-5 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
              {active.line2}
            </h3>

            {/* CTA Button */}
            <button 
              onClick={() => onOpenTourModal()}
              className="px-6 min-[380px]:px-8 sm:px-9 py-2.5 min-[380px]:py-3 sm:py-3.5 rounded-full bg-[#9C29B2] hover:bg-[#88C90D] text-white font-display font-black text-xs sm:text-base tracking-wide shadow-sunny hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
            >
              {active.btnText}
            </button>

            {/* Slider Dots inside the bottom edge of Circle */}
            <div className="flex items-center gap-2 mt-3 sm:mt-5">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`h-2 sm:h-2.5 rounded-full transition-all cursor-pointer ${
                    i === currentSlide 
                      ? 'bg-[#FEC624] w-5 sm:w-6 shadow-md' 
                      : 'bg-white/60 hover:bg-white w-2 sm:w-2.5'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

          </div>
        </div>
      </ScrollReveal>

    </div>

      {/* 3. Slider Arrow Controls (Desktop & Tablet) */}
      <button 
        onClick={prevSlide}
        className="hidden md:flex absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white/80 hover:bg-white text-slate-800 hover:text-[#9C29B2] items-center justify-center shadow-lg transition-all hover:scale-110 active:scale-95 cursor-pointer backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button 
        onClick={nextSlide}
        className="hidden md:flex absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white/80 hover:bg-white text-slate-800 hover:text-[#9C29B2] items-center justify-center shadow-lg transition-all hover:scale-110 active:scale-95 cursor-pointer backdrop-blur-sm"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

    </section>
  );
}
