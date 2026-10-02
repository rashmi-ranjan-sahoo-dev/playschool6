import React, { useEffect, useRef, useState } from 'react';

/**
 * ScrollReveal: Premium Scroll-Trigger Animation Component
 * Animates child elements smoothly as they scroll into view.
 * 
 * Props:
 * - animation: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'zoom-in' | 'fade'
 * - delay: number (milliseconds) e.g. 0, 100, 200, 300
 * - duration: number (milliseconds) e.g. 600, 700
 * - threshold: number (0.0 to 1.0)
 * - once: boolean (default: true)
 * - className: string
 */
export default function ScrollReveal({
  children,
  animation = 'fade-up',
  delay = 0,
  duration = 650,
  threshold = 0.12,
  once = true,
  className = ''
}) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    // If IntersectionObserver is not supported, reveal immediately
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (once && elementRef.current) {
              observer.unobserve(elementRef.current);
            }
          } else if (!once) {
            setIsVisible(false);
          }
        });
      },
      {
        threshold,
        rootMargin: '0px 0px -30px 0px'
      }
    );

    const currentElem = elementRef.current;
    if (currentElem) {
      observer.observe(currentElem);
    }

    return () => {
      if (currentElem) {
        observer.unobserve(currentElem);
      }
    };
  }, [threshold, once]);

  // Compute CSS classes based on visibility and chosen animation type
  const getTransformClasses = () => {
    switch (animation) {
      case 'fade-up':
        return isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-7';
      case 'fade-down':
        return isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 -translate-y-7';
      case 'fade-left':
        return isVisible 
          ? 'opacity-100 translate-x-0' 
          : 'opacity-0 translate-x-7';
      case 'fade-right':
        return isVisible 
          ? 'opacity-100 translate-x-0' 
          : 'opacity-0 -translate-x-7';
      case 'zoom-in':
        return isVisible 
          ? 'opacity-100 scale-100' 
          : 'opacity-0 scale-[0.93]';
      case 'fade':
      default:
        return isVisible ? 'opacity-100' : 'opacity-0';
    }
  };

  return (
    <div
      ref={elementRef}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
        willChange: isVisible ? 'auto' : 'transform, opacity'
      }}
      className={`transition-all ${getTransformClasses()} ${className}`}
    >
      {children}
    </div>
  );
}
