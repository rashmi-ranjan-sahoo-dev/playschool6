import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function ClassesSection({ onOpenTourModal }) {
  const scrollContainerRef = useRef(null);

  // 4 Core Classes with 100% Authentic User-Provided Indian Playschool Photography
  const classes = [
    {
      id: 'language-class',
      title: 'Language Class',
      themeColor: '#9C29B2',
      buttonBg: 'bg-[#9C29B2] hover:bg-[#7A1D8D]',
      image: '/images/hero-indian-playschool-classroom.jpg',
      alt: 'Indian preschool children sitting in classroom with teacher learning phonics and stories',
      description: 'Interactive Jolly Phonics, conversational English & Hindi vocabulary, and storytelling circles.',
      age: '3-5 Yrs',
      time: '8-10 am',
      capacity: '15 Kids',
    },
    {
      id: 'drawing-class',
      title: 'Drawing Class',
      themeColor: '#88C90D',
      buttonBg: 'bg-[#88C90D] hover:bg-[#6CA507]',
      image: '/images/hero-indian-playschool-activities.jpg',
      alt: 'Indian toddlers drawing, coloring with crayons and paints at preschool activity table',
      description: 'Hands-on tactile art, non-toxic finger painting, clay modeling, and creative Indian crafts.',
      age: '3-4 Yrs',
      time: '9-11 am',
      capacity: '12 Kids',
    },
    {
      id: 'mathematics-class',
      title: 'Mathematics Class',
      themeColor: '#FF7A1A',
      buttonBg: 'bg-[#FF7A1A] hover:bg-[#E0640F]',
      image: '/images/hero-indian-playschool-blocks.jpg',
      alt: 'Indian children counting with wooden Montessori number blocks and abacus beads',
      description: 'Foundational numeracy, pattern recognition, counting with abacus beads, and logic games.',
      age: '4-6 Yrs',
      time: '11-12 am',
      capacity: '15 Kids',
    },
    {
      id: 'sports-yoga-class',
      title: 'Sports & Yoga Class',
      themeColor: '#00A8DE',
      buttonBg: 'bg-[#00A8DE] hover:bg-[#0288B5]',
      image: '/images/hero-indian-playschool-playground.jpg',
      alt: 'Indian preschool children enjoying outdoor play, slides, swings and morning yoga on green turf',
      description: 'Gentle morning Kids Yoga, gross motor obstacle games, and safe outdoor playground play.',
      age: '2-6 Yrs',
      time: '8:30-10 am',
      capacity: '18 Kids',
    },
  ];

  // Manual scroll triggers for arrows
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="classes" 
      className="py-10 sm:py-12 lg:py-14 bg-white relative overflow-hidden select-none"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-5 sm:mb-7">
        
        {/* ======================================================== */}
        {/* SECTION HEADER: Centered Title with Optional Nav Arrows  */}
        {/* ======================================================== */}
        <ScrollReveal animation="fade-up" duration={600}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 text-center md:text-left">
            <div className="mx-auto md:mx-0 max-w-2xl">
              {/* Eyebrow / Subtitle in Purple */}
              <p className="font-display font-semibold text-sm sm:text-base text-[#9C29B2] mb-1.5 tracking-normal">
                On Going Classes
              </p>

              {/* Main Headline in Bold Navy */}
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-[40px] text-[#103741] leading-[1.25] tracking-tight">
                Take The Classes & Start <br className="hidden sm:inline" />
                Learning From Today
              </h2>
            </div>

            {/* Interactive Navigation Chevrons for Manual Control */}
            <div className="hidden md:flex items-center justify-end gap-2 shrink-0">
              <button
                type="button"
                onClick={scrollLeft}
                aria-label="Scroll classes left"
                className="w-10 h-10 rounded-full border border-purple-100 bg-[#FEF5FF] hover:bg-[#9C29B2] text-slate-700 hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 shadow-2xs cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
              </button>
              <button
                type="button"
                onClick={scrollRight}
                aria-label="Scroll classes right"
                className="w-10 h-10 rounded-full border border-purple-100 bg-[#FEF5FF] hover:bg-[#9C29B2] text-slate-700 hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 shadow-2xs cursor-pointer"
              >
                <ChevronRight className="w-5 h-5 stroke-[2.5]" />
              </button>
            </div>
          </div>
        </ScrollReveal>

      </div>

      {/* ======================================================== */}
      {/* AUTO-SCROLLING RIGHT-TO-LEFT CARDS TRACK (Seamless Loop)  */}
      {/* ======================================================== */}
      <ScrollReveal animation="fade-up" delay={120} duration={650}>
        <div 
          ref={scrollContainerRef}
          className="w-full overflow-x-auto no-scrollbar scroll-smooth relative"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
        <div className="animate-scroll-right-to-left flex items-stretch gap-5 sm:gap-6 px-4">
          
          {/* We repeat the 4 cards twice for a continuous infinite marquee loop */}
          {[...classes, ...classes].map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="w-[260px] min-[400px]:w-[280px] sm:w-[300px] md:w-[315px] shrink-0 rounded-[26px] sm:rounded-[28px] bg-[#FEF5FF] border border-purple-100/70 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-out flex flex-col justify-between group"
            >
              <div>
                {/* 1. TOP IMAGE BOX: Compact proportions, NO price badge */}
                <div className="p-3 sm:p-3.5 pb-0">
                  <div className="relative h-40 sm:h-44 rounded-[20px] sm:rounded-[22px] overflow-hidden shadow-2xs">
                    <img 
                      src={item.image} 
                      alt={item.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>

                {/* 2. CARD CONTENT: Compact & Clean */}
                <div className="px-4 sm:px-5 pt-4 pb-2 text-left">
                  
                  {/* Class Title */}
                  <h3 
                    className="font-display font-extrabold text-lg sm:text-[19px] mb-1.5 leading-tight"
                    style={{ color: item.themeColor }}
                  >
                    {item.title}
                  </h3>

                  {/* Class Description */}
                  <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed font-sans-clean mb-3.5 min-h-[36px]">
                    {item.description}
                  </p>

                  {/* 3. META INFO: Age | Time | Capacity */}
                  <div className="grid grid-cols-3 gap-1 py-2 px-1 border-t border-b border-purple-100/80 mb-3.5">
                    {/* Age */}
                    <div className="border-r border-purple-200/60 pr-1">
                      <span className="block text-[11px] font-bold text-[#103741]">
                        Age:
                      </span>
                      <span 
                        className="block text-[11px] sm:text-xs font-extrabold font-sans-clean mt-0.5"
                        style={{ color: item.themeColor }}
                      >
                        {item.age}
                      </span>
                    </div>

                    {/* Time */}
                    <div className="border-r border-purple-200/60 pr-1 pl-1">
                      <span className="block text-[11px] font-bold text-[#103741]">
                        Time:
                      </span>
                      <span 
                        className="block text-[11px] sm:text-xs font-extrabold font-sans-clean mt-0.5"
                        style={{ color: item.themeColor }}
                      >
                        {item.time}
                      </span>
                    </div>

                    {/* Capacity */}
                    <div className="pl-1">
                      <span className="block text-[11px] font-bold text-[#103741]">
                        Capacity:
                      </span>
                      <span 
                        className="block text-[11px] sm:text-xs font-extrabold font-sans-clean mt-0.5"
                        style={{ color: item.themeColor }}
                      >
                        {item.capacity}
                      </span>
                    </div>
                  </div>

                </div>
              </div>

              {/* 4. BUTTON: "Read More" (Compact pill button) */}
              <div className="px-4 sm:px-5 pb-4 pt-0">
                <button
                  type="button"
                  onClick={() => onOpenTourModal ? onOpenTourModal(item.title) : null}
                  className={`px-5 py-2 rounded-full ${item.buttonBg} text-white font-display font-bold text-xs tracking-wide shadow-2xs hover:shadow-md hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer`}
                >
                  Read More
                </button>
              </div>

            </div>
          ))}
          
        </div>
        </div>
      </ScrollReveal>

      {/* Subtle indicator under the track */}
      <div className="text-center mt-3 sm:mt-4">
        <span className="inline-block text-[11px] font-semibold text-slate-400 font-sans-clean">
          ✨ Hover over any class to pause auto-scroll
        </span>
      </div>

    </section>
  );
}
