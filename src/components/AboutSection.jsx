import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function AboutSection({ onOpenTourModal }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [prevSlide, setPrevSlide] = useState(null);
  const [direction, setDirection] = useState('next');

  // Authentic Indian Playschool Moments Slider
  const slides = [
    {
      id: 1,
      image: '/images/hero-indian-playschool-activities.jpg',
      alt: 'Happy Indian preschool child engaged in creative arts and paper activities in classroom',
      title: 'Creative Discovery & Art',
    },
    {
      id: 2,
      image: '/images/hero-indian-playschool-blocks.jpg',
      alt: 'Indian toddlers learning with wooden alphabet blocks and sensory toys',
      title: 'Montessori Play & Phonics',
    },
    {
      id: 3,
      image: '/images/hero-indian-playschool-playground.jpg',
      alt: 'Indian preschool children playing on lush green outdoor campus playground',
      title: 'Active Play & Kids Yoga',
    },
    {
      id: 4,
      image: '/images/hero-indian-playschool-classroom.jpg',
      alt: 'Spacious Indian playschool classroom with caring teacher and learning toys',
      title: 'Loving Teacher Care',
    },
  ];

  // Auto-advance slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentSlide, slides.length]);

  const handlePrev = () => {
    setDirection('prev');
    setPrevSlide(currentSlide);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setDirection('next');
    setPrevSlide(currentSlide);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section 
      id="about" 
      className="py-10 sm:py-12 lg:py-14 bg-[#FAF7F2] relative select-none"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center">
          
          {/* ======================================================== */}
          {/* 1. LEFT COLUMN: Text Content matching Reference Layout   */}
          {/* ======================================================== */}
          <ScrollReveal animation="fade-right" duration={650} className="lg:col-span-6 flex flex-col items-start text-left">
            <div>
              {/* Subtitle / Eyebrow in Purple */}
              <p className="font-display font-semibold text-sm sm:text-base text-[#9C29B2] mb-1.5 tracking-normal">
                More About Us
              </p>

              {/* Main Headline in Bold Navy */}
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-[42px] text-[#103741] leading-[1.2] tracking-tight mb-3 sm:mb-4">
                Special Care For <br className="hidden sm:inline" />
                Your Children
              </h2>

              {/* Narrative Paragraph in clean readable gray with Indian context */}
              <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed font-sans-clean mb-5 sm:mb-6 max-w-xl">
                At Nanhe Kadam, we provide a warm, nurturing second home rooted in authentic 
                Indian values (Sanskar) and modern early childhood learning. With attentive motherly care, 
                safe hygienic spaces, and engaging sensory play, we ensure every little step leads to 
                confidence, joy, and lifelong curiosity.
              </p>

              {/* Solid Purple Pill Button: "Learn More" with smooth Knirpse wave transition */}
              <button
                onClick={() => onOpenTourModal ? onOpenTourModal('About Us') : null}
                className="px-7 py-3 rounded-full bg-[#9C29B2] hover:bg-[#88C90D] text-white font-display font-bold text-sm sm:text-base tracking-wide shadow-sunny hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
              >
                Learn More
              </button>
            </div>
          </ScrollReveal>

          {/* ======================================================== */}
          {/* 2. RIGHT COLUMN: Wavy Organic Blue Blob Photo Slider     */}
          {/* ======================================================== */}
          <ScrollReveal animation="fade-left" duration={650} delay={120} className="lg:col-span-6 relative flex justify-center items-center pt-4 sm:pt-6">
            <div className="relative w-full max-w-[550px]">

              {/* Master SVG Canvas containing:
                  - Top Two Prominent Arched Floating Lines (100% visible, no clipping)
                  - Cyan-Blue Organic Blob Shape
                  - Floating Cloud, Origami Boat & Stars
                  - Clipped Slider Images
              */}
              <svg 
                viewBox="0 0 580 430" 
                className="w-full h-auto drop-shadow-xl overflow-visible"
                style={{ overflow: 'visible' }}
              >
                <defs>
                  {/* Organic Blob Mask / Clip Path */}
                  <clipPath id="knirpse-about-blob-clip">
                    <path d="M 85,85 
                             C 160,50 270,65 380,60 
                             C 450,55 510,95 528,145 
                             C 545,195 495,230 528,285 
                             C 548,318 505,372 445,382 
                             C 365,395 250,365 180,382 
                             C 105,398 45,365 28,312 
                             C 15,265 42,230 24,182 
                             C 10,145 35,95 85,85 Z" />
                  </clipPath>
                </defs>

                {/* ======================================================== */}
                {/* UPPER TWO CURVED LINES: 100% Visible with Floating Motion */}
                {/* ======================================================== */}
                <g className="animate-swoosh-float" style={{ transformOrigin: '430px 45px' }}>
                  {/* Lower Purple Arched Curve */}
                  <path 
                    d="M 315 32 C 405 84 485 76 555 46" 
                    stroke="#9C29B2" 
                    strokeWidth="13" 
                    strokeLinecap="round" 
                    fill="none" 
                  />
                  {/* Upper Dark Navy Arched Curve */}
                  <path 
                    d="M 370 28 C 430 50 480 46 525 22" 
                    stroke="#103741" 
                    strokeWidth="9" 
                    strokeLinecap="round" 
                    fill="none" 
                  />
                </g>

                {/* ======================================================== */}
                {/* ORGANIC CYAN-BLUE BLOB BASE                              */}
                {/* ======================================================== */}
                <path 
                  d="M 85,85 
                     C 160,50 270,65 380,60 
                     C 450,55 510,95 528,145 
                     C 545,195 495,230 528,285 
                     C 548,318 505,372 445,382 
                     C 365,395 250,365 180,382 
                     C 105,398 45,365 28,312 
                     C 15,265 42,230 24,182 
                     C 10,145 35,95 85,85 Z" 
                  fill="#00A8DE" 
                />

                {/* ======================================================== */}
                {/* PLAYFUL FLOATING ELEMENTS INSIDE BLOB                    */}
                {/* ======================================================== */}
                {/* Fluffy White Cloud on Top-Left */}
                <g className="animate-cloud-drift" opacity="0.95">
                  <circle cx="100" cy="135" r="22" fill="#ffffff" />
                  <circle cx="125" cy="125" r="28" fill="#ffffff" />
                  <circle cx="150" cy="135" r="20" fill="#ffffff" />
                  <circle cx="115" cy="150" r="18" fill="#ffffff" />
                  <circle cx="135" cy="150" r="18" fill="#ffffff" />
                </g>

                {/* White Origami Paper Boat & Stars on Upper Right */}
                <g className="animate-origami-float" opacity="0.95">
                  {/* Origami Paper Boat */}
                  <polygon points="445,155 482,155 470,168 455,168" fill="#ffffff" />
                  <polygon points="464,132 464,153 478,153" fill="#ffffff" />
                  <polygon points="461,138 461,153 450,153" fill="#ffffff" />

                  {/* Origami 5-Point Stars */}
                  <polygon points="480,98 484,110 497,110 487,118 491,130 480,122 469,130 473,118 463,110 476,110" fill="#ffffff" />
                  <polygon points="505,138 508,145 516,145 510,150 512,157 505,153 498,157 500,150 494,145 502,145" fill="#ffffff" />
                </g>

                {/* ======================================================== */}
                {/* SLIDER IMAGES: Smooth Horizontal Slide Animation         */}
                {/* ======================================================== */}
                {slides.map((s, idx) => {
                  const isActive = idx === currentSlide;
                  const isExiting = idx === prevSlide;

                  // Knirpse horizontal slide + scale transition
                  let transformValue = 'translate(100px, 0) scale(1.04)';
                  let opacityValue = 0;

                  if (isActive) {
                    transformValue = 'translate(0px, 0) scale(1)';
                    opacityValue = 1;
                  } else if (isExiting) {
                    transformValue = direction === 'next' 
                      ? 'translate(-100px, 0) scale(0.96)' 
                      : 'translate(100px, 0) scale(0.96)';
                    opacityValue = 0;
                  }

                  return (
                    <g 
                      key={s.id} 
                      clipPath="url(#knirpse-about-blob-clip)"
                      style={{
                        transform: transformValue,
                        opacity: opacityValue,
                        transition: 'transform 0.65s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.65s ease-in-out',
                        transformOrigin: '280px 240px'
                      }}
                    >
                      <image
                        href={s.image}
                        x="25"
                        y="55"
                        width="530"
                        height="350"
                        preserveAspectRatio="xMidYMid slice"
                        alt={s.alt}
                      />
                    </g>
                  );
                })}
              </svg>

              {/* ======================================================== */}
              {/* SLIDER CHEVRON BUTTONS (< and >)                        */}
              {/* Exact placement on the left notch and right notch        */}
              {/* ======================================================== */}
              {/* Left Chevron (<) */}
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous slide"
                className="absolute left-[-4px] sm:left-[-8px] top-[54%] -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full text-[#103741] hover:text-[#9C29B2] flex items-center justify-center transition-all duration-300 hover:scale-125 active:scale-90 z-30 cursor-pointer group"
              >
                <ChevronLeft className="w-7 h-7 sm:w-8 sm:h-8 stroke-[2.8] drop-shadow-sm group-hover:-translate-x-0.5 transition-transform" />
              </button>

              {/* Right Chevron (>) */}
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next slide"
                className="absolute right-[-4px] sm:right-[-8px] top-[54%] -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full text-[#103741] hover:text-[#9C29B2] flex items-center justify-center transition-all duration-300 hover:scale-125 active:scale-90 z-30 cursor-pointer group"
              >
                <ChevronRight className="w-7 h-7 sm:w-8 sm:h-8 stroke-[2.8] drop-shadow-sm group-hover:translate-x-0.5 transition-transform" />
              </button>

              {/* Slider Dots */}
              <div className="flex items-center justify-center gap-2 mt-4 sm:mt-6">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setDirection(i > currentSlide ? 'next' : 'prev');
                      setPrevSlide(currentSlide);
                      setCurrentSlide(i);
                    }}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      i === currentSlide 
                        ? 'bg-[#9C29B2] w-6 shadow-xs' 
                        : 'bg-slate-300 hover:bg-slate-400 w-2'
                    }`}
                    aria-label={`Go to about slide ${i + 1}`}
                  />
                ))}
              </div>

            </div>

          </ScrollReveal>

        </div>

      </div>
    </section>
  );
}
