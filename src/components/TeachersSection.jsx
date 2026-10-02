import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Share2,
  Phone,
  Mail,
  MessageCircle,
  Sparkles,
  Award,
  Pause,
  Play
} from 'lucide-react';
import { schoolConfig } from '../config/schoolConfig';
import ScrollReveal from './ScrollReveal';

export default function TeachersSection({ onOpenTourModal }) {
  // 6 Authentic Indian Playschool Educators with User-Provided Classroom Photos
  const teachers = [
    {
      id: 1,
      name: 'Mrs. Priya Sharma',
      role: 'Early Years & Phonics Specialist',
      shortRole: 'Kids Specialist',
      qualification: 'B.Ed, Certified ECCE Mentor (9+ Yrs Exp)',
      image: '/images/indian_teacher_1.jpg',
      alt: 'Mrs. Priya Sharma smiling Indian teacher with teacher badge in colorful playschool classroom',
      objectPosition: 'object-top',
      themeColor: '#9C29B2',
      socials: {
        whatsapp: `https://wa.me/${schoolConfig.contact.whatsappNumber}?text=Hello%20Priya%20Ma'am,%20I%20would%20like%20to%20know%20more%20about%20admissions%20at%20KVM%20Playschool`,
        phone: `tel:${schoolConfig.contact.primaryPhone}`,
        email: `mailto:${schoolConfig.contact.email}`,
      }
    },
    {
      id: 2,
      name: 'Dr. Sunita Kulkarni',
      role: 'Early Years Head & Montessori Director',
      shortRole: 'Early Years Head',
      qualification: 'M.Ed, ECCE Certified Mentor (18+ Yrs Exp)',
      image: '/images/indian_teacher_2.jpg',
      alt: 'Dr. Sunita Kulkarni senior Indian educator in saree sitting in classroom with Hindi alphabet chart',
      objectPosition: 'object-top',
      themeColor: '#88C90D',
      socials: {
        whatsapp: `https://wa.me/${schoolConfig.contact.whatsappNumber}?text=Hello%20Sunita%20Ma'am,%20I%20have%20an%20inquiry%20regarding%20preschool%20programs`,
        phone: `tel:${schoolConfig.contact.primaryPhone}`,
        email: `mailto:${schoolConfig.contact.email}`,
      }
    },
    {
      id: 3,
      name: 'Mrs. Meera Patel',
      role: 'Montessori Blocks & Cognitive Mentor',
      shortRole: 'Montessori Specialist',
      qualification: 'Senior Montessori Guide (12+ Yrs Exp)',
      image: '/images/indian_teacher_3.jpg',
      alt: 'Meera Patel Indian preschool teacher in blue saree sitting at student desk with rainbow school mural',
      objectPosition: 'object-top',
      themeColor: '#9C29B2',
      socials: {
        whatsapp: `https://wa.me/${schoolConfig.contact.whatsappNumber}?text=Hello%20Meera%20Ma'am,%20I%20would%20like%20to%20know%20about%20toddler%20activities`,
        phone: `tel:${schoolConfig.contact.primaryPhone}`,
        email: `mailto:${schoolConfig.contact.email}`,
      }
    },
    {
      id: 4,
      name: 'Swati Deshmukh',
      role: 'Language & Storytelling Guide',
      shortRole: 'Storytelling Guide',
      qualification: 'B.Ed, Play-Way Learning Specialist',
      image: '/images/indian_teacher_4.jpg',
      alt: 'Swati Deshmukh Indian teacher in floral kurti holding notes folder in preschool library',
      objectPosition: 'object-top',
      themeColor: '#FF7A1A',
      socials: {
        whatsapp: `https://wa.me/${schoolConfig.contact.whatsappNumber}?text=Hello%20Swati%20Ma'am,%20I%20am%20interested%20in%20storytelling%20and%20language%20classes`,
        phone: `tel:${schoolConfig.contact.primaryPhone}`,
        email: `mailto:${schoolConfig.contact.email}`,
      }
    },
    {
      id: 5,
      name: 'Priyanka Verma',
      role: 'Creative Arts & Fine Motor Coach',
      shortRole: 'Creative Arts Mentor',
      qualification: 'BFA, Creative Expression & Guided Art Coach',
      image: '/images/indian_teacher_5.jpg',
      alt: 'Priyanka Verma Indian teacher in dark blue embroidered kurti with books in cheerful classroom',
      objectPosition: 'object-top',
      themeColor: '#00A8DE',
      socials: {
        whatsapp: `https://wa.me/${schoolConfig.contact.whatsappNumber}?text=Hello%20Priyanka%20Ma'am,%20I%20am%20interested%20in%20creative%20arts%20classes`,
        phone: `tel:${schoolConfig.contact.primaryPhone}`,
        email: `mailto:${schoolConfig.contact.email}`,
      }
    },
    {
      id: 6,
      name: 'Kavita Menon',
      role: 'Sensory Play & Nursery Specialist',
      shortRole: 'Nursery Specialist',
      qualification: 'Child Psychology & Nursery Development Guide',
      image: '/images/indian_teacher_6.jpg',
      alt: 'Kavita Menon Indian teacher in traditional silk saree with jasmine flowers and classroom charts',
      objectPosition: 'object-top',
      themeColor: '#9C29B2',
      socials: {
        whatsapp: `https://wa.me/${schoolConfig.contact.whatsappNumber}?text=Hello%20Kavita%20Ma'am,%20I%20would%20like%20to%20know%20about%20nursery%20and%20sensory%20play`,
        phone: `tel:${schoolConfig.contact.primaryPhone}`,
        email: `mailto:${schoolConfig.contact.email}`,
      }
    }
  ];

  const totalTeachers = teachers.length;
  // We duplicate teachers 3 times for a seamless infinite carousel loop
  const extendedTeachers = [...teachers, ...teachers, ...teachers];

  // Start in the middle group so we can scroll infinitely in both directions
  const [currentIndex, setCurrentIndex] = useState(totalTeachers);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [activeShareIndex, setActiveShareIndex] = useState(null);
  const [cardsPerView, setCardsPerView] = useState(3);

  const touchStartXRef = useRef(0);
  const touchEndXRef = useRef(0);
  const autoScrollTimerRef = useRef(null);

  // Responsive items per view
  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth >= 1024) {
        setCardsPerView(3);
      } else if (window.innerWidth >= 640) {
        setCardsPerView(2);
      } else {
        setCardsPerView(1);
      }
    };
    updateCardsPerView();
    window.addEventListener('resize', updateCardsPerView);
    return () => window.removeEventListener('resize', updateCardsPerView);
  }, []);

  // Slide forward (Next card)
  const handleNext = useCallback(() => {
    setActiveShareIndex(null);
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  }, []);

  // Slide backward (Previous card)
  const handlePrev = useCallback(() => {
    setActiveShareIndex(null);
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  }, []);

  // Handle seamless infinite loop wrap-around without visual jumps
  const handleTransitionEnd = () => {
    if (currentIndex >= totalTeachers * 2) {
      setIsTransitioning(false);
      setCurrentIndex(currentIndex - totalTeachers);
    } else if (currentIndex < totalTeachers) {
      setIsTransitioning(false);
      setCurrentIndex(currentIndex + totalTeachers);
    }
  };

  // Turn transitions back on after wrapping
  useEffect(() => {
    if (!isTransitioning) {
      // Force next paint to re-enable transitions
      const timer = setTimeout(() => {
        setIsTransitioning(true);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  // Auto-scroll every 2 seconds (smooth left-to-right progression)
  useEffect(() => {
    if (isPaused || activeShareIndex !== null) return;

    autoScrollTimerRef.current = setInterval(() => {
      handleNext();
    }, 2000);

    return () => {
      if (autoScrollTimerRef.current) {
        clearInterval(autoScrollTimerRef.current);
      }
    };
  }, [isPaused, activeShareIndex, handleNext]);

  // Touch Swipe Handlers for mobile
  const handleTouchStart = (e) => {
    touchStartXRef.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndXRef.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartXRef.current || !touchEndXRef.current) return;
    const diff = touchStartXRef.current - touchEndXRef.current;
    if (diff > 50) {
      handleNext();
    } else if (diff < -50) {
      handlePrev();
    }
    touchStartXRef.current = 0;
    touchEndXRef.current = 0;
  };

  // Close share popover on outside click
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (activeShareIndex !== null && !e.target.closest('.share-container')) {
        setActiveShareIndex(null);
      }
    };
    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, [activeShareIndex]);

  // Active dot indicator (0 to 5)
  const currentActiveDot = currentIndex % totalTeachers;

  return (
    <section
      id="teachers"
      className="py-10 sm:py-12 lg:py-14 bg-[#FAF7F2] relative overflow-hidden select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* ======================================================== */}
      {/* PLAYFUL BACKGROUND DOODLE SKETCHES (Matching Screenshot)  */}
      {/* ======================================================== */}
      {/* 1. Top-Left: Light Blue Cartoon Toy Car Outline */}
      <div className="absolute top-10 sm:top-14 left-4 sm:left-12 lg:left-20 opacity-55 animate-float-slow pointer-events-none select-none z-0">
        <svg
          viewBox="0 0 110 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-18 sm:w-24 lg:w-28 h-auto text-[#00A8DE] drop-shadow-xs -rotate-6"
        >
          <path
            d="M 12,48 C 12,38 22,22 45,18 C 62,15 76,22 84,32 C 94,36 100,42 100,52 C 100,56 94,60 84,60 L 22,60 C 14,60 12,56 12,48 Z"
            stroke="currentColor"
            strokeWidth="2.8"
            strokeLinecap="round"
            strokeDasharray="4 2"
          />
          <path
            d="M 42,22 C 56,18 68,24 76,32 L 36,32 Z"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinejoin="round"
          />
          <path d="M 98,46 L 104,46" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="30" cy="60" r="11" stroke="currentColor" strokeWidth="2.8" />
          <circle cx="30" cy="60" r="4.5" fill="currentColor" />
          <circle cx="78" cy="60" r="11" stroke="currentColor" strokeWidth="2.8" />
          <circle cx="78" cy="60" r="4.5" fill="currentColor" />
        </svg>
      </div>

      {/* 2. Bottom-Left: Smiling Sun with Radiating Rays Outline */}
      <div className="absolute bottom-10 sm:bottom-16 left-4 sm:left-10 lg:left-16 opacity-60 animate-spin-slow pointer-events-none select-none z-0">
        <svg
          viewBox="0 0 90 90"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-16 sm:w-22 lg:w-26 h-auto text-[#00A8DE]"
        >
          <circle cx="45" cy="45" r="20" stroke="currentColor" strokeWidth="2.5" strokeDasharray="5 2.5" />
          <circle cx="38" cy="40" r="2.5" fill="currentColor" />
          <circle cx="52" cy="40" r="2.5" fill="currentColor" />
          <path d="M 38,49 C 41,53 49,53 52,49" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="45" y1="12" x2="45" y2="19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="45" y1="71" x2="45" y2="78" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="12" y1="45" x2="19" y2="45" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="71" y1="45" x2="78" y2="45" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="22" y1="22" x2="27" y2="27" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="63" y1="63" x2="68" y2="68" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="22" y1="68" x2="27" y2="63" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="63" y1="27" x2="68" y2="22" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      </div>

      {/* 3. Bottom-Right: Handwritten Chalk Math Formula 'a + b = c' */}
      <div className="absolute bottom-8 sm:bottom-14 right-4 sm:right-10 lg:right-16 opacity-65 pointer-events-none select-none -rotate-14 z-0">
        <svg
          viewBox="0 0 180 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-28 sm:w-36 lg:w-44 h-auto text-[#00A8DE]"
        >
          <path d="M 28,52 C 20,52 14,46 14,38 C 14,28 22,24 30,24 C 36,24 40,28 40,36 L 40,52 M 40,36 C 36,44 26,48 20,44" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M 58,38 L 74,38 M 66,30 L 66,46" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          <path d="M 90,14 L 90,52 M 90,40 C 94,30 108,30 108,41 C 108,51 95,53 90,48" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M 124,34 L 142,34 M 124,42 L 142,42" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          <path d="M 172,28 C 160,25 152,32 152,42 C 152,50 160,54 172,50" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        </svg>
      </div>

      {/* 4. Top-Right: Fluffy Cloud Sketch */}
      <div className="absolute -top-3 right-6 sm:right-16 lg:right-28 opacity-35 animate-float-gentle pointer-events-none select-none z-0">
        <svg
          viewBox="0 0 110 65"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-22 sm:w-32 lg:w-36 h-auto text-[#00A8DE]"
        >
          <path
            d="M 22,46 C 12,46 6,34 16,24 C 20,12 36,10 46,18 C 58,4 78,8 84,22 C 94,22 102,32 94,44 C 90,46 84,46 80,46 Z"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeDasharray="4 3"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ======================================================== */}
        {/* SECTION HEADER: Centered Title matching Screenshot       */}
        {/* ======================================================== */}
        <ScrollReveal animation="fade-up" duration={600}>
          <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8 lg:mb-10">
            {/* Eyebrow in Purple */}
            <p className="font-display font-semibold text-base sm:text-lg text-[#9C29B2] mb-2 sm:mb-3 tracking-normal">
              Our Expert Staff
            </p>

            {/* Main Headline in Dark Navy */}
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#103741] leading-[1.22] tracking-tight">
              Most Dedicated Staff For <br className="hidden sm:inline" />
              Your Child
            </h2>
          </div>
        </ScrollReveal>

        {/* ======================================================== */}
        {/* AUTO-SCROLLING 6-CARD TRACK WITH NAVIGATION ARROWS        */}
        {/* ======================================================== */}
        <ScrollReveal animation="fade-up" delay={120} duration={650}>
          <div className="relative max-w-6xl mx-auto px-3 sm:px-6 lg:px-10">

            {/* Left Arrow Button (<) in White Circle */}
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous teachers"
              className="absolute -left-1 sm:-left-4 lg:-left-6 top-[48%] -translate-y-1/2 w-10 h-10 sm:w-13 sm:h-13 rounded-full bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_25px_rgba(156,41,178,0.25)] text-[#9C29B2] hover:bg-[#9C29B2] hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 z-30 cursor-pointer border border-purple-50"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5]" />
            </button>

            {/* Right Arrow Button (>) in White Circle */}
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next teachers"
              className="absolute -right-1 sm:-right-4 lg:-right-6 top-[48%] -translate-y-1/2 w-10 h-10 sm:w-13 sm:h-13 rounded-full bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_25px_rgba(156,41,178,0.25)] text-[#9C29B2] hover:bg-[#9C29B2] hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 z-30 cursor-pointer border border-purple-50"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5]" />
            </button>

            {/* Carousel Viewport Container */}
          <div
            className="overflow-hidden py-3 -my-3"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Sliding Track: Shifts smoothly every 2s */}
            <div
              className="flex"
              style={{
                transform: `translateX(-${(currentIndex * 100) / cardsPerView}%)`,
                transition: isTransitioning ? 'transform 650ms cubic-bezier(0.25, 1, 0.5, 1)' : 'none'
              }}
              onTransitionEnd={handleTransitionEnd}
            >
              {extendedTeachers.map((teacher, idx) => (
                <div
                  key={`${teacher.id}-${idx}`}
                  className="w-full sm:w-1/2 lg:w-1/3 shrink-0 px-3 sm:px-3.5 lg:px-4"
                >
                  <div className="relative flex flex-col items-center group share-container transition-all duration-300 ease-out hover:-translate-y-2">

                    {/* 
                      1. WHITE BASE CARD 
                      Starts partway down the portrait, revealing the white "shoulders" 
                      on left and right, and extends to the bottom for name & designation.
                    */}
                    <div className="absolute inset-x-0 bottom-0 top-[34%] sm:top-[36%] bg-white rounded-[32px] sm:rounded-[36px] shadow-[0_10px_30px_rgba(16,55,65,0.06)] group-hover:shadow-[0_20px_45px_rgba(156,41,178,0.14)] transition-shadow duration-300 z-0 border border-slate-100/70" />

                    {/* 
                      2. TEACHER PORTRAIT CONTAINER 
                      Slightly narrower than base card, rounded top corners, 
                      and scalloped wave dip at the bottom.
                    */}
                    <div className="relative z-10 w-[88%] sm:w-[90%] aspect-[4/4.4] sm:aspect-[4/4.5] rounded-t-[28px] sm:rounded-t-[32px] overflow-hidden bg-slate-100 shadow-xs">
                      <img
                        src={teacher.image}
                        alt={teacher.alt}
                        className={`w-full h-full object-cover ${teacher.objectPosition || 'object-top'} group-hover:scale-106 transition-transform duration-600 ease-out`}
                        loading="lazy"
                      />

                      {/* Scalloped Wave Cutout at bottom of photo (blends seamlessly into white card) */}
                      <div className="absolute -bottom-1 left-0 w-full overflow-hidden leading-none pointer-events-none z-10">
                        <svg
                          viewBox="0 0 300 40"
                          preserveAspectRatio="none"
                          className="w-full h-9 sm:h-10 text-white fill-current"
                        >
                          <path d="M 0,0 C 75,34 225,34 300,0 L 300,40 L 0,40 Z" />
                        </svg>
                      </div>
                    </div>

                    {/* 
                      3. FLOATING PURPLE CIRCLE SHARE BUTTON 
                      Nestled directly in the center wave dip between photo and card
                    */}
                    <div className="relative z-20 -mt-5 sm:-mt-5.5">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveShareIndex(activeShareIndex === teacher.id ? null : teacher.id);
                        }}
                        aria-label={`Connect with ${teacher.name}`}
                        className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#9C29B2] hover:bg-[#88C90D] text-white flex items-center justify-center shadow-[0_4px_14px_rgba(156,41,178,0.4)] hover:shadow-[0_6px_18px_rgba(136,201,13,0.4)] hover:scale-115 active:scale-95 transition-all duration-300 cursor-pointer"
                      >
                        <Share2 className="w-4 h-4 sm:w-4.5 sm:h-4.5 stroke-[2.4]" />
                      </button>

                      {/* Interactive Quick Contact Popover */}
                      {activeShareIndex === teacher.id && (
                        <div
                          className="absolute bottom-13 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-[0_12px_36px_rgba(0,0,0,0.18)] border border-purple-100/80 p-2.5 flex items-center gap-2.5 z-40 animate-in fade-in zoom-in-95 duration-200"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <a
                            href={teacher.socials.whatsapp}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`WhatsApp ${teacher.name}`}
                            title="Chat on WhatsApp"
                            className="w-8 h-8 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:scale-115 transition-transform shadow-xs"
                          >
                            <MessageCircle className="w-4 h-4" />
                          </a>
                          <a
                            href={teacher.socials.phone}
                            aria-label={`Call ${teacher.name}`}
                            title="Direct Call"
                            className="w-8 h-8 rounded-full bg-[#9C29B2] text-white flex items-center justify-center hover:scale-115 transition-transform shadow-xs"
                          >
                            <Phone className="w-4 h-4" />
                          </a>
                          <a
                            href={teacher.socials.email}
                            aria-label={`Email regarding ${teacher.name}`}
                            title="Send Email"
                            className="w-8 h-8 rounded-full bg-[#103741] text-white flex items-center justify-center hover:scale-115 transition-transform shadow-xs"
                          >
                            <Mail className="w-4 h-4" />
                          </a>
                        </div>
                      )}
                    </div>

                    {/* 
                      4. TEACHER DETAILS: Name & Role 
                      Clean typography exactly matching reference screenshot
                    */}
                    <div className="relative z-10 pt-4 pb-7 sm:pb-8 px-4 text-center w-full">
                      <h3 className="font-display font-extrabold text-[20px] sm:text-[22px] text-[#103741] mb-1 leading-snug group-hover:text-[#9C29B2] transition-colors truncate">
                        {teacher.name}
                      </h3>
                      <p className="text-[13px] sm:text-sm font-semibold text-slate-500 font-sans-clean">
                        {teacher.shortRole}
                      </p>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Auto-Scroll Status Indicator & 6 Navigation Dots */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-4 sm:mt-5">

            {/* 6 Dots for the 6 Teachers */}
            <div className="flex items-center gap-2">
              {teachers.map((t, dotIdx) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => {
                    setIsTransitioning(true);
                    // Align to middle set of extended teachers
                    setCurrentIndex(totalTeachers + dotIdx);
                  }}
                  aria-label={`Go to ${t.name}`}
                  className={`transition-all duration-300 rounded-full cursor-pointer ${currentActiveDot === dotIdx
                      ? 'w-7 sm:w-8 h-2.5 bg-[#9C29B2] shadow-xs'
                      : 'w-2.5 h-2.5 bg-purple-200 hover:bg-purple-300'
                    }`}
                />
              ))}
            </div>
          </div>

        </div>
      </ScrollReveal>

    </div>
  </section>
  );
}
