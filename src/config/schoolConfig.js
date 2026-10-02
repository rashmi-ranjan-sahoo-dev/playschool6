/**
 * Centralized Brand & Content Configuration for the Playschool
 * Easily update the school name, tagline, logo, phone numbers, addresses,
 * and programs without modifying component code.
 */

export const schoolConfig = {
  // BRAND IDENTITY
  brand: {
    name: "Nanhe Kadam",
    fullName: "Nanhe Kadam Early Learning Academy",
    shortTitle: "Nanhe Kadam Preschool",
    tagline: "Every Little Step Leads to Big Dreams",
    motto: "Rooted in Indian Values • Powered by NEP 2020 • Nurtured with Love",
    establishedYear: "2015",
    affiliation: "Recognized ECE Center • Aligned with NEP 2020 Foundational Stage & ECA India",
    registrationNo: "DEL/EDU/PRE/2015/884",
  },

  // CONTACT & LOCATION
  contact: {
    primaryPhone: "+91 83284 11176",
    phoneClean: "8328411176",
    secondaryPhone: "+91 83284 11176",
    whatsappNumber: "918328411176",
    whatsappDisplay: "+91 83284 11176",
    email: "admissions@nanhekadam.edu.in",
    supportEmail: "care@nanhekadam.edu.in",
    address: {
      line1: "Campus Plot 18, Block C, Green Meadows",
      line2: "Near City Central Park & Metro Station",
      city: "Noida / New Delhi NCR",
      pincode: "201301",
      state: "Uttar Pradesh",
      googleMapsUrl: "https://maps.google.com",
    },
    timings: {
      schoolHours: "8:30 AM – 1:00 PM",
      daycareHours: "8:00 AM – 6:30 PM",
      officeHours: "Monday to Saturday: 8:00 AM – 5:00 PM",
      days: "Monday to Saturday",
    },
  },

  // ADMISSIONS BANNER
  admissions: {
    session: "2027 – 2028",
    statusBadge: "Admissions Open 2027-28",
    subNotice: "Limited batch sizes of 12 children per class for focused care",
    ctaPrimary: "Book a Campus Tour",
    ctaSecondary: "Download Brochure",
    applyDeadline: "Phase 1 Closes Soon",
  },

  // KEY METRICS / STATS
  stats: [
    { number: "10+", label: "Years of Trust", suffix: "Yrs" },
    { number: "2,400+", label: "Happy Little Graduates", suffix: "+" },
    { number: "1:8", label: "Care Ratio", suffix: "Ratio" },
    { number: "100%", label: "Live CCTV & GPS Van Safety", suffix: "%" },
  ],

  // 4 PILLARS (Knirpse Inspired Highlight Cards)
  pillars: [
    {
      id: "safety",
      title: "Safe & Nurturing Campus",
      description: "Live mobile CCTV access for parents, female Didis on all floors, child-safe rubberized flooring & RO water.",
      bgColor: "bg-[#FFF4E5]",
      accentColor: "#FF7A1A",
      icon: "ShieldCheck",
    },
    {
      id: "nep",
      title: "NEP 2020 & Panchakosha",
      description: "Activity-based experiential learning blending modern Montessori with foundational Indian moral values (Sanskar).",
      bgColor: "bg-[#F3E8FF]",
      accentColor: "#9C29B2",
      icon: "Sparkles",
    },
    {
      id: "nutrition",
      title: "Hygienic Sattvic Meals",
      description: "Freshly prepared wholesome snacks and warm nutritious meals planned by pediatric nutritionists.",
      bgColor: "bg-[#ECFDF5]",
      accentColor: "#10B981",
      icon: "Apple",
    },
    {
      id: "transport",
      title: "GPS-Enabled School Vans",
      description: "Speed-governed vans with lady marshals, GPS live tracking, and verified friendly drivers.",
      bgColor: "bg-[#EFF6FF]",
      accentColor: "#0284C7",
      icon: "Bus",
    },
  ],

  // PROGRAMS / CLASSES OFFERED
  programs: [
    {
      id: "playgroup",
      title: "Playgroup (Toddler Bloom)",
      ageRange: "1.5 – 2.5 Years",
      minAgeMonths: 18,
      timings: "9:00 AM – 11:30 AM",
      badgeColor: "bg-[#FEF3C7] text-[#92400E] border-[#FDE68A]",
      accentColor: "#F59E0B",
      themeColor: "from-amber-400 to-orange-400",
      description: "A gentle transition from home to school through sensory play tubs, musical circles, messy art, and foundational social skills.",
      keyActivities: [
        "Sensory tactile exploration & sand play",
        "Rhyme rhythm & mother-tongue storytelling",
        "Fine & gross motor obstacle runs",
        "Potty training support with caring Didis",
      ],
      ratio: "1 Teacher : 6 Toddlers",
      capacity: "12 Seats / Batch",
    },
    {
      id: "nursery",
      title: "Nursery (Little Explorers)",
      ageRange: "2.5 – 3.5 Years",
      minAgeMonths: 30,
      timings: "8:30 AM – 12:00 PM",
      badgeColor: "bg-[#F3E8FF] text-[#6B21A8] border-[#E9D5FF]",
      accentColor: "#9C29B2",
      themeColor: "from-purple-500 to-pink-500",
      description: "Sparking lifelong curiosity with phonics sounds, early numeracy games, science discoveries, and conversational Hindi & English.",
      keyActivities: [
        "Jolly Phonics & conversational vocabulary",
        "Pattern recognition, counting & sorting",
        "Clay modeling & finger painting",
        "Nature walks & mini kitchen gardening",
      ],
      ratio: "1 Teacher : 8 Children",
      capacity: "14 Seats / Batch",
    },
    {
      id: "junior-kg",
      title: "Junior KG / LKG (Curious Champs)",
      ageRange: "3.5 – 4.5 Years",
      minAgeMonths: 42,
      timings: "8:30 AM – 12:30 PM",
      badgeColor: "bg-[#ECFDF5] text-[#065F46] border-[#A7F3D0]",
      accentColor: "#10B981",
      themeColor: "from-emerald-400 to-teal-500",
      description: "Structured foundational literacy, sight words, mathematical concepts, STEM curiosity lab, and Indian culture celebrations.",
      keyActivities: [
        "Sentence building & reading readiness",
        "Addition concepts with wooden manipulatives",
        "STEM tinkering & water buoyancy labs",
        "Indian festival theatrical role-play",
      ],
      ratio: "1 Teacher : 10 Children",
      capacity: "15 Seats / Batch",
    },
    {
      id: "senior-kg",
      title: "Senior KG / UKG (Future Leaders)",
      ageRange: "4.5 – 5.5 Years",
      minAgeMonths: 54,
      timings: "8:30 AM – 1:00 PM",
      badgeColor: "bg-[#EFF6FF] text-[#1E40AF] border-[#BFDBFE]",
      accentColor: "#2563EB",
      themeColor: "from-blue-500 to-indigo-600",
      description: "Grade 1 school readiness program focusing on independent reading, writing, environmental studies, and public speaking confidence.",
      keyActivities: [
        "Fluent reading, creative journaling & spelling",
        "Mental math, time concepts & money math",
        "Show & Tell public speaking assemblies",
        "Junior computer & logic coding games",
      ],
      ratio: "1 Teacher : 12 Children",
      capacity: "16 Seats / Batch",
    },
    {
      id: "daycare",
      title: "Daycare & Extended After-School",
      ageRange: "1.5 – 8 Years",
      minAgeMonths: 18,
      timings: "8:00 AM – 6:30 PM",
      badgeColor: "bg-[#FFF1F2] text-[#9F1239] border-[#FECDD3]",
      accentColor: "#E11D48",
      themeColor: "from-rose-500 to-pink-600",
      description: "A second home for working parents. Includes healthy home-style meals, homework guidance, afternoon nap zones, and hobby clubs.",
      keyActivities: [
        "Warm home-cooked fresh meals & milk/fruits",
        "Quiet supervised afternoon rest pods",
        "Classical/Folk dance, Yoga & Karate",
        "Homework assistance & reading library",
      ],
      ratio: "1 Attendant : 5 Children",
      capacity: "20 Seats Only",
    },
  ],

  // PANCHAKOSHA & NEP 2020 HOLISTIC PILLARS
  panchakosha: [
    {
      kosha: "Annamaya Kosha",
      dimension: "Physical Agility & Nutrition",
      meaning: "Developing motor coordination, balance, clean eating habits, and love for outdoor games.",
      icon: "Activity",
    },
    {
      kosha: "Pranamaya Kosha",
      dimension: "Vital Energy & Breathing",
      meaning: "Kid-friendly breathing games, pranayama, yoga postures, and stamina-building activities.",
      icon: "HeartPulse",
    },
    {
      kosha: "Manomaya Kosha",
      dimension: "Emotional & Social Well-being",
      meaning: "Artistic expression, empathy, music, shloka recitation, and sharing with peers.",
      icon: "Smile",
    },
    {
      kosha: "Vijnanamaya Kosha",
      dimension: "Intellectual Curiosity & Logic",
      meaning: "Experiential inquiry, science experiments, puzzles, bilingual phonics, and reasoning.",
      icon: "Lightbulb",
    },
    {
      kosha: "Anandamaya Kosha",
      dimension: "Inner Joy & Core Values",
      meaning: "Pure joy of childhood, celebration of Indian festivals, respect for elders, and gratitude.",
      icon: "Sparkle",
    },
  ],

  // SAFETY & CAMPUS FACILITIES
  safetyFeatures: [
    {
      title: "Live CCTV Streaming",
      desc: "Secure mobile login for parents to check in on their little one anytime during school hours.",
      icon: "Video",
    },
    {
      title: "Biometric & Verified Gate",
      desc: "Strict OTP-based pickup authorization card; no unauthorized person permitted on premises.",
      icon: "Lock",
    },
    {
      title: "Pediatric First Aid & Doctor",
      desc: "Full-time nurse on campus and tie-up with nearby children's hospital for immediate care.",
      icon: "Stethoscope",
    },
    {
      title: "Air-Purified, Sanitized AC Rooms",
      desc: "HEPA air purifiers, daily non-toxic sanitization of wooden toys and germ-free washrooms.",
      icon: "Wind",
    },
    {
      title: "Lady Attendants (Didis)",
      desc: "Experienced, background-checked female staff for loving restroom assistance and feeding.",
      icon: "Users",
    },
    {
      title: "GPS-Tracked Safe Transport",
      desc: "Real-time bus tracking on phone, speed control, safety belts, and dedicated lady marshal.",
      icon: "Navigation",
    },
  ],

  // AUTHENTIC INDIAN PARENT TESTIMONIALS
  testimonials: [
    {
      id: 1,
      parentName: "Pooja & Rajesh Sharma",
      childName: "Aarav (Nursery Batch)",
      role: "IT Professionals, Noida",
      rating: 5,
      content: "As working parents, finding a preschool that gives motherly warmth was our biggest worry. Nanhe Kadam surpassed all expectations! The live CCTV, the loving Didis, and Aarav's joyful eagerness to run to school every morning give us complete peace of mind.",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80",
    },
    {
      id: 2,
      parentName: "Dr. Ananya Sen & Vikram Sen",
      childName: "Meera (Junior KG)",
      role: "Pediatrician & Architect",
      rating: 5,
      content: "The balance between modern STEM learning and Indian sanskar is remarkable. Meera not only identifies phonics and counts with ease, but she also learned to fold her hands, greet grandparents, and respect food. Highly recommended!",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80",
    },
    {
      id: 3,
      parentName: "Kavita & Amit Chawla",
      childName: "Reyansh (Daycare & Playgroup)",
      role: "Bank Manager & Entrepreneur",
      rating: 5,
      content: "The daycare facilities are top-tier. Clean beds, nutritious hot khichdi & fruit bowls, and attentive staff. Reyansh has blossomed into a confident, social toddler who loves singing rhymes!",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    },
  ],

  // LIFE AT CAMPUS / GALLERY CATEGORIES
  galleryMoments: [
    {
      id: 1,
      title: "Janmashtami Kanha & Radha Fancy Dress",
      category: "Celebrations",
      image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=600&q=80",
      tag: "Cultural Harmony",
    },
    {
      id: 2,
      title: "Sensory Play & Colored Sand Art",
      category: "Learning",
      image: "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?auto=format&fit=crop&w=600&q=80",
      tag: "Fine Motor Skills",
    },
    {
      id: 3,
      title: "Organic Kitchen Garden Harvest",
      category: "Nature",
      image: "https://images.unsplash.com/photo-1566004100631-35d015d6a491?auto=format&fit=crop&w=600&q=80",
      tag: "Experiential Learning",
    },
    {
      id: 4,
      title: "Grandparents Day Joy & Blessings",
      category: "Celebrations",
      image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=600&q=80",
      tag: "Indian Values",
    },
    {
      id: 5,
      title: "Little Scientist Water & Bubble Lab",
      category: "Learning",
      image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=600&q=80",
      tag: "STEM Tinkering",
    },
    {
      id: 6,
      title: "Annual Sports Day Obstacle Dash",
      category: "Sports",
      image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=600&q=80",
      tag: "Gross Motor Agility",
    },
  ],

  // 4-STEP ADMISSION PROCESS
  admissionSteps: [
    {
      step: "01",
      title: "Connect & Book a Visit",
      desc: "Fill our quick online form or WhatsApp us to schedule a personalized school walk-through.",
      icon: "CalendarCheck",
    },
    {
      step: "02",
      title: "Campus Tour & Observation",
      desc: "Visit our campus with your child; let them play in our sensory zone while you meet the Principal.",
      icon: "Eye",
    },
    {
      step: "03",
      title: "Simple Documentation",
      desc: "Submit basic documents (birth certificate, immunization card, and parent ID proof) with zero stress.",
      icon: "FileCheck",
    },
    {
      step: "04",
      title: "Welcome Kit & Joyful Start",
      desc: "Receive your Nanhe Kadam Welcome Hamper, parent app credentials, and begin the joyous journey!",
      icon: "SmilePlus",
    },
  ],

  // FREQUENTLY ASKED QUESTIONS (INDIAN PARENTS)
  faqs: [
    {
      q: "What is the age criteria for Nursery as per NEP 2020?",
      a: "As per the NEP 2020 guidelines followed across India, a child should generally be 3 years of age as of March 31st or June 1st of the academic admission year. You can use our interactive Age Calculator above to verify exact eligibility.",
    },
    {
      q: "How can parents access live CCTV cameras?",
      a: "Upon admission confirmation, parents are provided secure credentials to our mobile app. You can view high-definition live feeds of the classrooms, dining area, and outdoor play zones on your phone during operating hours.",
    },
    {
      q: "What is the teacher-to-child ratio in classrooms?",
      a: "We maintain a strict ratio of 1:6 in Playgroup and 1:8 to 1:10 in Nursery and Kindergarten. Each classroom is also staffed with a dedicated female helper (Didi) to assist with hydration, washroom visits, and hygiene.",
    },
    {
      q: "Are mid-day snacks provided by the school?",
      a: "Yes! We serve freshly cooked, wholesome vegetarian snacks (such as vegetable poha, idli-sambar, fresh seasonal fruit platters, and organic ragi halwa) prepared under strict hygiene standards in our school kitchen.",
    },
    {
      q: "Do you offer transport with tracking?",
      a: "Yes, our AC vans cover all major residential societies within an 8 km radius. Every vehicle features speed limiters, GPS tracking, seat belts, and an accompanying female bus attendant throughout the route.",
    },
  ],
};
