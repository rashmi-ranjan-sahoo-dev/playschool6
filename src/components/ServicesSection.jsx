import React from 'react';
import ScrollReveal from './ScrollReveal';

export default function ServicesSection() {
  const services = [
    {
      id: 'bus-service',
      title: 'Bus Service',
      themeColor: '#FF5B35',
      bgColor: 'bg-[#FFF0EB]',
      hoverShadow: 'hover:shadow-[0_20px_40px_-15px_rgba(255,91,53,0.22)]',
      description: 'Safe doorstep pickup & drop in air-conditioned vans with live GPS tracking and caring female Didis.',
      icon: (
        <svg 
          viewBox="0 0 160 140" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className="w-22 h-22 sm:w-26 sm:h-26 transition-transform duration-300 group-hover:scale-108"
        >
          {/* Ground shadow */}
          <ellipse cx="80" cy="132" rx="52" ry="5" fill="#FF5B35" opacity="0.12" />
          
          {/* Left & Right Tires */}
          <rect x="23" y="102" width="15" height="26" rx="5" fill="#2C3437" />
          <rect x="122" y="102" width="15" height="26" rx="5" fill="#2C3437" />

          {/* Side Mirrors */}
          <path d="M18 52L26 56" stroke="#E04824" strokeWidth="3.5" strokeLinecap="round" />
          <rect x="10" y="44" width="8" height="19" rx="3" fill="#FF5B35" />
          <path d="M142 52L134 56" stroke="#E04824" strokeWidth="3.5" strokeLinecap="round" />
          <rect x="142" y="44" width="8" height="19" rx="3" fill="#FF5B35" />

          {/* Bus Body */}
          <rect x="26" y="22" width="108" height="96" rx="28" fill="#FF5B35" />
          
          {/* Top Roof Dome */}
          <path d="M38 22C46 14 62 10 80 10C98 10 114 14 122 22" fill="#FF5B35" />
          
          {/* Roof Marker Lights */}
          <circle cx="50" cy="18" r="3" fill="#FEC624" />
          <circle cx="80" cy="16" r="3.5" fill="#FEC624" />
          <circle cx="110" cy="18" r="3" fill="#FEC624" />

          {/* School Bus Sign Board */}
          <rect x="44" y="26" width="72" height="12" rx="3" fill="#E04824" />
          <rect x="50" y="29" width="60" height="6" rx="2" fill="#FFF0EB" opacity="0.95" />
          <text x="80" y="34.2" textAnchor="middle" fill="#E04824" fontSize="5" fontWeight="900" fontFamily="sans-serif">SCHOOL BUS</text>

          {/* Dual Windshield Panes */}
          <rect x="36" y="44" width="41" height="32" rx="8" fill="#E2F5FC" />
          <rect x="83" y="44" width="41" height="32" rx="8" fill="#E2F5FC" />
          
          {/* Glass Reflection Sheen */}
          <path d="M41 50L56 70" stroke="white" strokeWidth="2.5" strokeLinecap="round" opacity="0.85" />
          <path d="M88 50L103 70" stroke="white" strokeWidth="2.5" strokeLinecap="round" opacity="0.85" />

          {/* Front Radiator Grill */}
          <rect x="52" y="88" width="56" height="18" rx="5" fill="#E04824" />
          <line x1="58" y1="93" x2="102" y2="93" stroke="#FF5B35" strokeWidth="2" strokeLinecap="round" />
          <line x1="58" y1="97" x2="102" y2="97" stroke="#FF5B35" strokeWidth="2" strokeLinecap="round" />
          <line x1="58" y1="101" x2="102" y2="101" stroke="#FF5B35" strokeWidth="2" strokeLinecap="round" />

          {/* Headlights */}
          <circle cx="41" cy="97" r="7.5" fill="#FFF0EB" />
          <circle cx="41" cy="97" r="5" fill="#FEC624" />
          <circle cx="119" cy="97" r="7.5" fill="#FFF0EB" />
          <circle cx="119" cy="97" r="5" fill="#FEC624" />

          {/* Front Bumper & License Plate */}
          <rect x="30" y="110" width="100" height="10" rx="4" fill="#3D4447" />
          <rect x="68" y="112" width="24" height="6" rx="2" fill="#FFFFFF" />
        </svg>
      )
    },
    {
      id: 'sports-training',
      title: 'Sports Training',
      themeColor: '#6C5CE7',
      bgColor: 'bg-[#EEF0FF]',
      hoverShadow: 'hover:shadow-[0_20px_40px_-15px_rgba(108,92,231,0.22)]',
      description: 'Active physical play with morning kids yoga, fun obstacle games, and safe cushioned turf grounds.',
      icon: (
        <svg 
          viewBox="0 0 160 140" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className="w-22 h-22 sm:w-26 sm:h-26 transition-transform duration-300 group-hover:scale-108"
        >
          {/* Ground shadow */}
          <ellipse cx="80" cy="130" rx="52" ry="5" fill="#6C5CE7" opacity="0.12" />

          {/* Left Ball: Basketball in Violet (#6C5CE7) */}
          <g transform="translate(18, 26)">
            <circle cx="44" cy="44" r="40" fill="#6C5CE7" />
            <circle cx="44" cy="44" r="39" stroke="#5645D4" strokeWidth="2.8" fill="none" />
            <line x1="4" y1="44" x2="84" y2="44" stroke="#5645D4" strokeWidth="2.8" />
            <line x1="44" y1="4" x2="44" y2="84" stroke="#5645D4" strokeWidth="2.8" />
            <path d="M 16 16 C 36 28 36 60 16 72" stroke="#5645D4" strokeWidth="2.8" strokeLinecap="round" />
            <path d="M 72 16 C 52 28 52 60 72 72" stroke="#5645D4" strokeWidth="2.8" strokeLinecap="round" />
            <path d="M 22 22 A 30 30 0 0 1 48 14" stroke="white" strokeWidth="3" strokeLinecap="round" opacity="0.6" />
          </g>

          {/* Right Ball: Rugby / Football in Violet-Indigo */}
          <g transform="translate(70, 52) rotate(34)">
            <ellipse cx="44" cy="24" rx="38" ry="24" fill="#7D6DF2" stroke="#5645D4" strokeWidth="2.8" />
            <path d="M 18 10 C 22 24 22 24 18 38" stroke="#5645D4" strokeWidth="2.2" strokeLinecap="round" />
            <path d="M 70 10 C 66 24 66 24 70 38" stroke="#5645D4" strokeWidth="2.2" strokeLinecap="round" />
            <line x1="28" y1="24" x2="60" y2="24" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
            <line x1="34" y1="18" x2="34" y2="30" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
            <line x1="40" y1="17" x2="40" y2="31" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
            <line x1="46" y1="17" x2="46" y2="31" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
            <line x1="52" y1="18" x2="52" y2="30" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
          </g>
        </svg>
      )
    },
    {
      id: 'music-training',
      title: 'Music Training',
      themeColor: '#E69138',
      bgColor: 'bg-[#FFF8E5]',
      hoverShadow: 'hover:shadow-[0_20px_40px_-15px_rgba(230,145,56,0.22)]',
      description: 'Joyful bilingual nursery rhymes, morning shlokas, and interactive rhythm instrument sessions.',
      icon: (
        <svg 
          viewBox="0 0 160 140" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className="w-22 h-22 sm:w-26 sm:h-26 transition-transform duration-300 group-hover:scale-108"
        >
          {/* Ground shadow */}
          <ellipse cx="80" cy="130" rx="48" ry="5" fill="#E69138" opacity="0.12" />

          {/* Left Note Head */}
          <ellipse cx="44" cy="98" rx="19" ry="14" transform="rotate(-22 44 98)" fill="#E69138" />
          <ellipse cx="43" cy="97" rx="14" ry="9" transform="rotate(-22 43 97)" fill="#F59E0B" />
          <ellipse cx="41" cy="95" rx="7" ry="4" transform="rotate(-22 41 95)" fill="white" opacity="0.55" />

          {/* Right Note Head */}
          <ellipse cx="114" cy="78" rx="19" ry="14" transform="rotate(-22 114 78)" fill="#E69138" />
          <ellipse cx="113" cy="77" rx="14" ry="9" transform="rotate(-22 113 77)" fill="#F59E0B" />
          <ellipse cx="111" cy="75" rx="7" ry="4" transform="rotate(-22 111 75)" fill="white" opacity="0.55" />

          {/* Stems */}
          <path d="M 58 92 L 58 32" stroke="#E69138" strokeWidth="7" strokeLinecap="round" />
          <path d="M 128 72 L 128 16" stroke="#E69138" strokeWidth="7" strokeLinecap="round" />

          {/* Connected Horizontal Beam */}
          <path d="M 54 36 L 132 20 L 132 34 L 54 50 Z" fill="#E69138" />
          <path d="M 58 39 L 128 24" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      )
    },
    {
      id: 'best-teachers',
      title: 'Best Teachers',
      themeColor: '#14B8A6',
      bgColor: 'bg-[#E6FAF6]',
      hoverShadow: 'hover:shadow-[0_20px_40px_-15px_rgba(20,184,166,0.22)]',
      description: 'Motherly certified educators providing loving care, individual attention, and cultural values.',
      icon: (
        <svg 
          viewBox="0 0 160 140" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className="w-22 h-22 sm:w-26 sm:h-26 transition-transform duration-300 group-hover:scale-108"
        >
          {/* Ground shadow */}
          <ellipse cx="80" cy="132" rx="46" ry="5" fill="#14B8A6" opacity="0.12" />

          {/* Teacher Kurti in Teal */}
          <path d="M 52 130 C 52 104 60 92 80 92 C 100 92 108 104 108 130 Z" fill="#14B8A6" />
          <path d="M 72 92 L 80 106 L 88 92" stroke="#0D9488" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />

          {/* Neck & Face */}
          <rect x="74" y="78" width="12" height="16" rx="4" fill="#F5BE98" />
          <ellipse cx="80" cy="56" rx="22" ry="24" fill="#FAD2B0" />
          
          {/* Rosy Cheeks */}
          <circle cx="68" cy="62" r="3.5" fill="#FF8A8A" opacity="0.45" />
          <circle cx="92" cy="62" r="3.5" fill="#FF8A8A" opacity="0.45" />

          {/* Indian Red Bindi */}
          <circle cx="80" cy="46" r="2" fill="#DC2626" />

          {/* Eyes & Brows */}
          <path d="M 68 49 C 71 47 75 48 76 50" stroke="#4A2810" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M 84 50 C 85 48 89 47 92 49" stroke="#4A2810" strokeWidth="1.8" strokeLinecap="round" />
          <ellipse cx="72" cy="54" rx="2.5" ry="3" fill="#2C1810" />
          <ellipse cx="88" cy="54" rx="2.5" ry="3" fill="#2C1810" />

          {/* Smile */}
          <path d="M 73 66 C 77 71 83 71 87 66" stroke="#C2410C" strokeWidth="2" strokeLinecap="round" />

          {/* Dark Hair */}
          <path d="M 56 50 C 56 30 68 22 80 22 C 92 22 104 30 104 50 C 104 56 102 62 100 66 C 98 56 94 40 80 40 C 66 40 62 56 60 66 C 58 62 56 56 56 50 Z" fill="#2C1810" />
          <ellipse cx="80" cy="22" rx="14" ry="8" fill="#2C1810" />

          {/* Left Arm Waving */}
          <path d="M 54 98 C 42 92 34 84 32 72" stroke="#14B8A6" strokeWidth="9" strokeLinecap="round" />
          <path d="M 32 72 L 28 60" stroke="#F5BE98" strokeWidth="7" strokeLinecap="round" />
          <circle cx="26" cy="56" r="5.5" fill="#FAD2B0" />

          {/* Right Arm Holding Book */}
          <path d="M 106 98 C 114 96 122 92 124 86" stroke="#14B8A6" strokeWidth="9" strokeLinecap="round" />
          <rect x="116" y="80" width="12" height="12" rx="4" fill="#F5BE98" />

          {/* Open Book */}
          <g transform="translate(104, 66)">
            <path d="M 4 28 L 22 34 L 40 28 L 38 12 L 22 17 L 6 12 Z" fill="#B45309" stroke="#92400E" strokeWidth="1.2" />
            <path d="M 6 14 L 21 18 L 21 32 L 6 27 Z" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="0.8" />
            <path d="M 23 18 L 38 14 L 38 27 L 23 32 Z" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="0.8" />
          </g>
        </svg>
      )
    }
  ];

  return (
    <section 
      id="services" 
      className="py-10 sm:py-12 lg:py-14 bg-white relative overflow-hidden select-none"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ======================================================== */}
        {/* SECTION HEADER: Clean & minimal like original screenshot */}
        {/* ======================================================== */}
        <ScrollReveal animation="fade-up" duration={600}>
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
            {/* Eyebrow / Subtitle */}
            <p className="font-display font-semibold text-sm sm:text-base text-[#9C29B2] mb-1.5 tracking-normal">
              Service We Provide
            </p>

            {/* Main Heading */}
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-[#103741] leading-[1.25] tracking-tight">
              Providing Good Qualities <br className="hidden sm:inline" />
              For Your Loving Kids
            </h2>
          </div>
        </ScrollReveal>

        {/* ======================================================== */}
        {/* 4 CARDS GRID: Identical 4-Col Layout, Pastel Squircles   */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-5 xl:gap-6">
          {services.map((item, idx) => (
            <ScrollReveal
              key={item.id}
              animation="fade-up"
              delay={idx * 100}
              duration={600}
              className="h-full"
            >
              <div
                className={`h-full rounded-[32px] sm:rounded-[36px] py-7 px-5 sm:py-8 sm:px-6 text-center flex flex-col items-center justify-between ${item.bgColor} ${item.hoverShadow} hover:-translate-y-2 transition-all duration-300 ease-out cursor-default group`}
              >
                {/* 1. Playful Icon Graphic */}
                <div className="flex items-center justify-center mb-4 h-22 sm:h-24">
                  {item.icon}
                </div>

                {/* 2. Service Title */}
                <h3 
                  className="font-display font-extrabold text-2xl sm:text-[23px] xl:text-2xl mb-3.5 leading-tight"
                  style={{ color: item.themeColor }}
                >
                  {item.title}
                </h3>

                {/* 3. Concise 2-3 Line Description */}
                <p className="text-slate-500 text-[13px] sm:text-sm leading-relaxed font-sans-clean max-w-[240px] mx-auto">
                  {item.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
