import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Heart,
  ShieldCheck
} from 'lucide-react';
import { schoolConfig } from '../config/schoolConfig';
import ScrollReveal from './ScrollReveal';

export default function TestimonialsSection() {
  // 5 Authentic Indian Parent Reviews
  const reviews = [
    {
      id: 1,
      parentName: 'Pooja & Rajesh Sharma',
      childInfo: 'Parents of Aarav (Nursery Batch)',
      tag: 'CCTV Access & Care',
      rating: 5,
      content:
        'As working parents, finding a preschool that provides genuine motherly warmth was our biggest worry. The live CCTV access, the caring Didis who feed with affection, and Aarav’s joyful eagerness to run to school every single morning give us complete peace of mind.'
    },
    {
      id: 2,
      parentName: 'Dr. Vikram & Ananya Sen',
      childInfo: 'Parents of Meera (Junior KG)',
      tag: 'Values & Phonics',
      rating: 5,
      content:
        'The balance between modern phonics, STEM curiosity toys, and foundational Indian sanskar is remarkable. Meera not only speaks and counts with great confidence, but she also naturally learned to fold her hands for Namaste, greet elders, and respect her food.'
    },
    {
      id: 3,
      parentName: 'Kavita & Amit Chawla',
      childInfo: 'Parents of Reyansh (Playgroup & Daycare)',
      tag: 'Hygienic Meals & Daycare',
      rating: 5,
      content:
        'The daycare facilities are truly top-tier. Clean rest pods, fresh warm vegetarian snacks like vegetable poha and khichdi, and attentive staff. Reyansh was shy initially, but now he is an active, confident toddler who loves singing rhymes!'
    },
    {
      id: 4,
      parentName: 'Sunil & Deepa Nair',
      childInfo: 'Parents of Advait (Senior KG)',
      tag: 'Grade 1 School Readiness',
      rating: 5,
      content:
        'Our main priority was Grade 1 school readiness without academic pressure. The teachers here make reading and math concepts fun through hands-on games. Advait’s stage fear vanished completely after his Annual Day performance!'
    },
    {
      id: 5,
      parentName: 'Meenakshi & Rahul Iyer',
      childInfo: 'Parents of Diya (Toddler Bloom)',
      tag: 'Gentle Transition & Safety',
      rating: 5,
      content:
        'The transition from home to school was seamless within just three days. The female attendants are like family, the campus is spotless, and Diya loves the sensory sandpit and music circles. Even on weekends, she asks to go to school!'
    }
  ];

  const totalReviews = reviews.length;
  // Duplicate reviews 3 times for a seamless infinite loop
  const extendedReviews = [...reviews, ...reviews, ...reviews];

  const [currentIndex, setCurrentIndex] = useState(totalReviews);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [cardsPerView, setCardsPerView] = useState(3);

  const touchStartXRef = useRef(0);
  const touchEndXRef = useRef(0);
  const autoScrollTimerRef = useRef(null);

  // Responsive cards per view
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

  // Slide forward (Next)
  const handleNext = useCallback(() => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  }, []);

  // Slide backward (Previous)
  const handlePrev = useCallback(() => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  }, []);

  // Seamless infinite loop wrap-around
  const handleTransitionEnd = () => {
    if (currentIndex >= totalReviews * 2) {
      setIsTransitioning(false);
      setCurrentIndex(currentIndex - totalReviews);
    } else if (currentIndex < totalReviews) {
      setIsTransitioning(false);
      setCurrentIndex(currentIndex + totalReviews);
    }
  };

  // Re-enable transitions after wrap
  useEffect(() => {
    if (!isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(true);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  // Smooth auto-scroll every 3 seconds
  useEffect(() => {
    if (isPaused) return;

    autoScrollTimerRef.current = setInterval(() => {
      handleNext();
    }, 3000);

    return () => {
      if (autoScrollTimerRef.current) {
        clearInterval(autoScrollTimerRef.current);
      }
    };
  }, [isPaused, handleNext]);

  // Mobile Touch Gestures
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

  const currentActiveDot = currentIndex % totalReviews;

  return (
    <section
      id="testimonial"
      className="py-10 sm:py-12 lg:py-14 bg-[#FAF7F2] relative overflow-hidden select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Subtle Warm Background Glows */}
      <div className="absolute top-1/4 left-0 -translate-y-1/2 w-80 h-80 rounded-full bg-amber-100/40 filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 translate-y-1/2 w-80 h-80 rounded-full bg-purple-100/40 filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header: Clean & Simple */}
        <ScrollReveal animation="fade-up" duration={600}>
          <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 text-[#FF7A1A] border border-amber-200/80 text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-2 shadow-2xs">
              <Heart className="w-3.5 h-3.5 text-[#FF7A1A] fill-[#FF7A1A]" />
              <span>Words From Our Parents</span>
            </div>

            <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-[#103741] leading-tight tracking-tight mb-2.5">
              Loved By 2,400+ Indian Families
            </h2>
          </div>
        </ScrollReveal>

        {/* Carousel Container */}
        <ScrollReveal animation="fade-up" delay={120} duration={650}>
          <div className="relative max-w-6xl mx-auto px-2 sm:px-8 lg:px-10">

            {/* Left Arrow Button */}
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous testimonials"
              className="absolute -left-1 sm:-left-3 lg:-left-5 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-white shadow-[0_4px_16px_rgba(0,0,0,0.08)] hover:shadow-[0_6px_20px_rgba(156,41,178,0.2)] text-[#103741] hover:text-[#9C29B2] hover:bg-purple-50 flex items-center justify-center transition-all duration-300 hover:scale-108 active:scale-95 z-30 cursor-pointer border border-slate-100"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5]" />
            </button>

            {/* Right Arrow Button */}
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next testimonials"
              className="absolute -right-1 sm:-right-3 lg:-right-5 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-white shadow-[0_4px_16px_rgba(0,0,0,0.08)] hover:shadow-[0_6px_20px_rgba(156,41,178,0.2)] text-[#103741] hover:text-[#9C29B2] hover:bg-purple-50 flex items-center justify-center transition-all duration-300 hover:scale-108 active:scale-95 z-30 cursor-pointer border border-slate-100"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5]" />
            </button>

            {/* Viewport */}
          <div
            className="overflow-hidden py-3 -my-3"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Sliding Track */}
            <div
              className="flex"
              style={{
                transform: `translateX(-${(currentIndex * 100) / cardsPerView}%)`,
                transition: isTransitioning ? 'transform 600ms cubic-bezier(0.25, 1, 0.5, 1)' : 'none'
              }}
              onTransitionEnd={handleTransitionEnd}
            >
              {extendedReviews.map((item, idx) => (
                <div
                  key={`${item.id}-${idx}`}
                  className="w-full sm:w-1/2 lg:w-1/3 shrink-0 px-2.5 sm:px-3 lg:px-3.5"
                >
                  {/* Clean Simple Card: Standard Rounded Rectangle with Gentle Hover */}
                  <div className="h-full bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-[0_4px_20px_rgba(16,55,65,0.04)] hover:shadow-[0_12px_32px_rgba(156,41,178,0.12)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between relative group">

                    {/* Top Row: Stars, Verified Tag & Decorative Quote */}
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-4">
                        {/* 5 Golden Stars */}
                        <div className="flex items-center gap-1">
                          {[...Array(item.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-4 h-4 text-amber-400 fill-amber-400 drop-shadow-2xs"
                            />
                          ))}
                        </div>

                        {/* Verified Pill */}
                        <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-100">
                          <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                          <span>Verified</span>
                        </span>
                      </div>

                      {/* Parent Feedback Text */}
                      <p className="text-slate-700 text-sm sm:text-[14.5px] leading-relaxed font-sans-clean mb-6 relative">
                        "{item.content}"
                      </p>
                    </div>

                    {/* Bottom Author Row: Clean Name & Child Info (No Image & No Address) */}
                    <div className="pt-4 border-t border-slate-100/90 flex items-center justify-between gap-3">
                      <div className="min-w-0">
                        <h4 className="font-display font-bold text-base text-[#103741] leading-snug">
                          {item.parentName}
                        </h4>
                        <p className="text-xs font-semibold text-[#9C29B2] mt-0.5">
                          {item.childInfo}
                        </p>
                      </div>
                      <Quote className="w-6 h-6 text-[#9C29B2]/20 shrink-0" />
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Indicators & Auto-Scroll Status */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-4 sm:mt-5">

            {/* 5 Navigation Dots */}
            <div className="flex items-center gap-2">
              {reviews.map((r, dotIdx) => (
                <button
                  key={r.id}
                  type="button"
                  onClick={() => {
                    setIsTransitioning(true);
                    setCurrentIndex(totalReviews + dotIdx);
                  }}
                  aria-label={`Go to testimonial by ${r.parentName}`}
                  className={`transition-all duration-300 rounded-full cursor-pointer ${
                    currentActiveDot === dotIdx
                      ? 'w-7 sm:w-8 h-2.5 bg-[#9C29B2] shadow-2xs'
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
