/*  ============================================================
    Gurukul Shikshan Sansthan — Site Configuration
    All school details are managed from this single file.
    ============================================================ */

const SCHOOL_CONFIG = {

  /* ── Identity ─────────────────────────────────────────────── */
  name: "Gurukul Shikshan Sansthan",
  nameHindi: "गुरुकुल शिक्षण संस्थान",
  tagline: "शिक्षा · संस्कार · अनुशासन · सेवा",
  heroBadge: "विगत 18 वर्षो से संचालित खामपार की No. 1 School 🏫",
  shloka1: "तमसो मां ज्योतिर्गमय",
  shloka2: "सा विद्या या विमुक्तय",
  showAdmissionBanner: true,          // Set to false to hide admission banners
  admissionBannerFree: "FREE",
  admissionBannerLabel: "ADMISSION",
  admissionBannerHindi: "प्रवेश प्रारंभ",
  admissionBannerSession: "सत्र 2026-27",
  logo: "logo.png",
  domain: "gurukulkhampar.in",

  /* ── Contact ──────────────────────────────────────────────── */
  phone: "+91 9628123917",
  phoneRaw: "+919628123917",
  phone2: "+91 9919821260",
  phone2Raw: "+919919821260",
  email: "info@gurukulkhampar.in",
  whatsapp: "+919919199848",
  whatsappMessage: "Hello! I would like to know more about admissions at Gurukul Shikshan Sansthan.",

  /* ── Address ──────────────────────────────────────────────── */
  address: "Khampar (Jaipur), Deoria, Uttar Pradesh, India",
  addressLine1: "Khampar (Jaipur)",
  addressLine2: "Deoria, Uttar Pradesh",
  addressLine3: "",

  /* ── URLs ──────────────────────────────────────────────────── */
  loginUrl: "https://login.gurukulkhampar.in",

  /* ── Google Maps ───────────────────────────────────────────── */
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3565.0!2d84.0517017!3d26.3502544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3993b3aedc9f8dc9%3A0x52a69f6813e10756!2sGurukul%20Shikshan%20Sansthan!5e0!3m2!1sen!2sin!4v1700000000000",

  /* ── Social Media ──────────────────────────────────────────── */
  social: {
    facebook: "#",
    instagram: "#",
    twitter: "#",
    youtube: "#",
  },

  /* ── About Section ─────────────────────────────────────────── */
  aboutTitle: "About Our School",
  aboutText: [
    "Gurukul Shikshan Sansthan, nestled in the serene village of Khampar (Jaipur), Deoria, is a beacon of quality education in rural Uttar Pradesh. Founded with the vision of nurturing young minds through a blend of traditional values and modern pedagogy, our institution has been shaping the leaders of tomorrow.",
    "We believe that education is not merely the acquisition of knowledge but the holistic development of character, intellect, and compassion. Our experienced faculty, state-of-the-art facilities, and a curriculum that balances academics with co-curricular excellence ensure every child discovers their true potential.",
    "At Gurukul Shikshan Sansthan, we uphold the timeless Guru-Shishya tradition while embracing 21st-century learning, creating an environment where curiosity thrives and dreams take flight."
  ],

  /* ── Facilities ────────────────────────────────────────────── */
  facilities: [
    { icon: "fa-chalkboard-teacher", title: "Smart Classrooms", desc: "Digital boards and interactive teaching tools for an immersive learning experience." },
    { icon: "fa-laptop-code",        title: "Computer Lab",      desc: "Modern computers with internet connectivity fostering digital literacy." },
    { icon: "fa-flask",              title: "Science Lab",       desc: "Well-equipped laboratory for hands-on experiments in Physics, Chemistry & Biology." },
    { icon: "fa-book-open",          title: "Library",           desc: "A vast collection of books, journals, and digital resources to ignite curiosity." },
    { icon: "fa-futbol",             title: "Sports Ground",     desc: "Spacious grounds with facilities for cricket, football, athletics and more." },
    { icon: "fa-music",              title: "Cultural Activities",desc: "Regular events celebrating art, dance, music and India's rich cultural heritage." }
  ],

  /* ── Academics ─────────────────────────────────────────────── */
  academics: [
    { icon: "fa-baby",          title: "Nursery",       classes: "LKG – UKG", desc: "A nurturing foundation through play-based learning and creative exploration." },
    { icon: "fa-child",         title: "Primary",       classes: "Class I – V",       desc: "Building strong fundamentals in language, mathematics, science and social skills." },
    { icon: "fa-user-graduate", title: "Middle School",  classes: "Class VI – VIII",   desc: "Deepening knowledge with analytical thinking and project-based learning." },
    { icon: "fa-graduation-cap",title: "High School",    classes: "Class IX – X",      desc: "Board exam preparation with comprehensive academic and career guidance." }
  ],

  /* ── Why Choose Us ─────────────────────────────────────────── */
  whyChooseUs: [
    { icon: "fa-chalkboard-teacher", title: "Experienced Teachers",    desc: "Dedicated educators with years of expertise committed to student success." },
    { icon: "fa-building",           title: "Modern Infrastructure",   desc: "Contemporary campus designed to inspire learning at every corner." },
    { icon: "fa-hands-helping",      title: "Holistic Development",    desc: "Balanced focus on academics, sports, arts and character building." },
    { icon: "fa-trophy",             title: "Strong Academic Results", desc: "Consistently outstanding board results and competitive exam achievements." }
  ],

  /* ── Animated Counters ─────────────────────────────────────── */
  counters: [
    { value: 650, suffix: "+", label: "Students" },
    { value: 15,   suffix: "+", label: "Expert Teachers" },
    { value: 18,   suffix: "+", label: "Years of Excellence" },
    { value: 100,   suffix: "%", label: "Board Results" }
  ],

  /* ── Gallery Images (placeholders — replace with real paths) ─ */
  gallery: [
    { src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&q=80", alt: "School Building" },
    { src: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&q=80", alt: "Library" },
    { src: "https://images.unsplash.com/photo-1588072432836-e10032774350?w=600&q=80", alt: "Classroom" },
    { src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&q=80", alt: "Students Learning" },
    { src: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=600&q=80", alt: "Sports Activities" },
    { src: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=600&q=80", alt: "Computer Lab" },
    { src: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&q=80", alt: "Science Lab" },
    { src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80", alt: "Cultural Event" }
  ],

  /* ── Admissions CTA ────────────────────────────────────────── */
  admissionTitle: "Admissions Open 2026-27",
  admissionText: "Give your child the gift of quality education rooted in values. Join the Gurukul family today!",

  /* ── Image Slider ──────────────────────────────────────────── */
  sliderImages: [
    { src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80", alt: "School Campus" },
    { src: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&q=80", alt: "Library" },
    { src: "https://images.unsplash.com/photo-1588072432836-e10032774350?w=800&q=80", alt: "Classroom" },
    { src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80", alt: "Students Learning" },
    { src: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=800&q=80", alt: "Computer Lab" }
  ],

  /* ── Notice Board ──────────────────────────────────────────── */
  notices: [
    { date: "10 Mar 2026", title: "Admission Open for Session 2026-27", detail: "New admissions are now open for Nursery to Class X. Apply before 30 April 2026." },
    { date: "05 Mar 2026", title: "Annual Sports Day 2026", detail: "Annual Sports Day will be held on 20 March 2026. All students must participate." },
    { date: "28 Feb 2026", title: "Parent-Teacher Meeting", detail: "PTM scheduled for 15 March 2026 from 10:00 AM to 1:00 PM." },
    { date: "20 Feb 2026", title: "Science Exhibition", detail: "Inter-class Science Exhibition on 25 March. Register with your class teacher." },
    { date: "15 Feb 2026", title: "Winter Vacation Homework", detail: "Submit all holiday homework by 1 March 2026 to respective class teachers." }
  ],

  /* ── Quick Links (footer) ──────────────────────────────────── */
  quickLinks: [
    { label: "Home",       href: "#home" },
    { label: "About",      href: "#about" },
    { label: "Facilities", href: "#facilities" },
    { label: "Academics",  href: "#academics" },
    { label: "Gallery",    href: "#gallery" },
    { label: "Contact",    href: "#contact" },
    { label: "Login",      href: "https://login.gurukulkhampar.in" }
  ]
};
