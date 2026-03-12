/* =============================================================
   Gurukul Shikshan Sansthan — Main JavaScript
   Reads everything from SCHOOL_CONFIG (js/config.js)
   ============================================================= */

document.addEventListener("DOMContentLoaded", () => {
  const C = SCHOOL_CONFIG;

  /* ── Populate text content from config ────────────────────── */
  const setText = (sel, val) => {
    document.querySelectorAll(sel).forEach(el => {
      if (el.tagName === "A" && val.startsWith("http")) el.href = val;
      el.textContent = val;
    });
  };
  const setHref = (sel, val) => {
    document.querySelectorAll(sel).forEach(el => (el.href = val));
  };

  // Brand & hero
  setText("[data-cfg='name']", C.name);
  setText("[data-cfg='tagline']", C.tagline);
  setText("[data-cfg='heroBadge']", C.heroBadge);

  // Admission side banners — configurable visibility
  if (C.showAdmissionBanner === false) {
    document.querySelectorAll('.admission-side-banner').forEach(el => el.classList.add('hidden'));
  } else {
    setText("[data-cfg='admissionBannerFree']", C.admissionBannerFree);
    setText("[data-cfg='admissionBannerLabel']", C.admissionBannerLabel);
    setText("[data-cfg='admissionBannerHindi']", C.admissionBannerHindi);
    setText("[data-cfg='admissionBannerSession']", C.admissionBannerSession);
  }

  setText("[data-cfg='address']", C.address);
  setText("[data-cfg='phone']", C.phone);
  setText("[data-cfg='email']", C.email);
  setText("[data-cfg='addressLine1']", C.addressLine1);
  setText("[data-cfg='addressLine2']", C.addressLine2);
  setText("[data-cfg='addressLine3']", C.addressLine3);

  // Logo
  document.querySelectorAll("[data-cfg='logo']").forEach(img => {
    img.src = C.logo;
    img.alt = C.name + " Logo";
  });

  // Links
  setHref("[data-cfg='loginUrl']", C.loginUrl);
  setHref("[data-cfg='emailLink']", "mailto:" + C.email);
  setHref("[data-cfg='phoneLink']", "tel:" + C.phoneRaw);

  // Second phone number (optional)
  if (C.phone2 && C.phone2.replace(/\D/g, '').length > 5) {
    setText("[data-cfg='phone2']", C.phone2);
    setHref("[data-cfg='phone2Link']", "tel:" + C.phone2Raw);
    const phone2Line = document.getElementById('phone2-line');
    if (phone2Line) phone2Line.style.display = '';
  }

  // Map
  const mapFrame = document.querySelector("[data-cfg='map']");
  if (mapFrame) mapFrame.src = C.mapEmbedUrl;

  /* ── WhatsApp Button ──────────────────────────────────────── */
  const waBtn = document.getElementById("whatsapp-float");
  if (waBtn) {
    const waNumber = C.whatsapp.replace(/[^0-9]/g, "");
    const waMsg = encodeURIComponent(C.whatsappMessage);
    waBtn.href = `https://wa.me/${waNumber}?text=${waMsg}`;
  }

  /* ── Social Links ─────────────────────────────────────────── */
  Object.entries(C.social).forEach(([key, url]) => {
    document.querySelectorAll(`[data-social='${key}']`).forEach(a => (a.href = url));
  });

  /* ── Render Facilities ────────────────────────────────────── */
  const facilitiesContainer = document.getElementById("facilities-cards");
  if (facilitiesContainer) {
    facilitiesContainer.innerHTML = C.facilities
      .map(
        f => `
      <div class="card reveal">
        <div class="card-icon"><i class="fas ${f.icon}"></i></div>
        <h3>${escapeHTML(f.title)}</h3>
        <p>${escapeHTML(f.desc)}</p>
      </div>`
      )
      .join("");
  }

  /* ── Render Academics ─────────────────────────────────────── */
  const academicsContainer = document.getElementById("academics-cards");
  if (academicsContainer) {
    academicsContainer.innerHTML = C.academics
      .map(
        a => `
      <div class="glass-card reveal">
        <div class="card-icon"><i class="fas ${a.icon}"></i></div>
        <h3>${escapeHTML(a.title)}</h3>
        <div class="card-classes">${escapeHTML(a.classes)}</div>
        <p>${escapeHTML(a.desc)}</p>
      </div>`
      )
      .join("");
  }

  /* ── Render Why Choose Us ─────────────────────────────────── */
  const whyContainer = document.getElementById("why-cards");
  if (whyContainer) {
    whyContainer.innerHTML = C.whyChooseUs
      .map(
        w => `
      <div class="card reveal">
        <div class="card-icon"><i class="fas ${w.icon}"></i></div>
        <h3>${escapeHTML(w.title)}</h3>
        <p>${escapeHTML(w.desc)}</p>
      </div>`
      )
      .join("");
  }

  /* ── Render Counters ──────────────────────────────────────── */
  const countersContainer = document.getElementById("counters");
  if (countersContainer) {
    countersContainer.innerHTML = C.counters
      .map(
        c => `
      <div class="counter-item reveal">
        <div class="counter-number" data-target="${c.value}" data-suffix="${escapeHTML(c.suffix)}">0${escapeHTML(c.suffix)}</div>
        <div class="counter-label">${escapeHTML(c.label)}</div>
      </div>`
      )
      .join("");
  }

  /* ── Render Gallery ───────────────────────────────────────── */
  const galleryContainer = document.getElementById("gallery-grid");
  if (galleryContainer) {
    galleryContainer.innerHTML = C.gallery
      .map(
        g => `
      <div class="gallery-item reveal" data-full="${g.src}">
        <img src="${g.src}" alt="${escapeHTML(g.alt)}" loading="lazy">
        <span class="gallery-label">${escapeHTML(g.alt)}</span>
      </div>`
      )
      .join("");
  }

  /* ── Render Admission CTA ─────────────────────────────────── */
  setText("[data-cfg='admissionTitle']", C.admissionTitle);
  setText("[data-cfg='admissionText']", C.admissionText);

  /* ── Image Slider ─────────────────────────────────────────── */
  const sliderWrapper = document.getElementById("slider-wrapper");
  const sliderDotsContainer = document.getElementById("slider-dots");
  if (sliderWrapper && sliderDotsContainer && C.sliderImages && C.sliderImages.length) {
    sliderWrapper.innerHTML = C.sliderImages
      .map(s => `<div class="slider-slide"><img src="${s.src}" alt="${escapeHTML(s.alt)}" loading="lazy"><div class="slider-caption">${escapeHTML(s.alt)}</div></div>`)
      .join("");

    sliderDotsContainer.innerHTML = C.sliderImages
      .map((_, i) => `<button class="slider-dot${i === 0 ? ' active' : ''}" data-slide="${i}" aria-label="Go to slide ${i + 1}"></button>`)
      .join("");

    let currentSlide = 0;
    const totalSlides = C.sliderImages.length;
    const dots = sliderDotsContainer.querySelectorAll(".slider-dot");

    const goToSlide = idx => {
      currentSlide = ((idx % totalSlides) + totalSlides) % totalSlides;
      sliderWrapper.style.transform = `translateX(-${currentSlide * 100}%)`;
      dots.forEach((d, i) => d.classList.toggle("active", i === currentSlide));
    };

    document.getElementById("slider-prev").addEventListener("click", () => { goToSlide(currentSlide - 1); resetAutoSlide(); });
    document.getElementById("slider-next").addEventListener("click", () => { goToSlide(currentSlide + 1); resetAutoSlide(); });
    dots.forEach(dot => dot.addEventListener("click", () => { goToSlide(parseInt(dot.dataset.slide, 10)); resetAutoSlide(); }));

    let autoSlide = setInterval(() => goToSlide(currentSlide + 1), 4000);
    const resetAutoSlide = () => { clearInterval(autoSlide); autoSlide = setInterval(() => goToSlide(currentSlide + 1), 4000); };
  }

  /* ── Notice Board ─────────────────────────────────────────── */
  const noticeList = document.getElementById("notice-list");
  if (noticeList && C.notices && C.notices.length) {
    noticeList.innerHTML = C.notices
      .map(n => `<div class="notice-item"><div class="notice-date"><i class="fas fa-calendar-alt"></i> ${escapeHTML(n.date)}</div><h4>${escapeHTML(n.title)}</h4><p>${escapeHTML(n.detail)}</p></div>`)
      .join("");
  }

  /* ── Render Footer Quick Links ────────────────────────────── */
  const footerLinks = document.getElementById("footer-links");
  if (footerLinks) {
    footerLinks.innerHTML = C.quickLinks
      .map(l => `<a href="${l.href}">${escapeHTML(l.label)}</a>`)
      .join("");
  }

  /* ── About Section ────────────────────────────────────────── */
  setText("[data-cfg='aboutTitle']", C.aboutTitle);
  const aboutTextEl = document.getElementById("about-text-content");
  if (aboutTextEl) {
    aboutTextEl.innerHTML = C.aboutText.map(p => `<p>${escapeHTML(p)}</p>`).join("");
  }

  /* ── Hero Particles ───────────────────────────────────────── */
  const particlesEl = document.getElementById("hero-particles");
  if (particlesEl) {
    let particleHTML = "";
    for (let i = 0; i < 30; i++) {
      const left = Math.random() * 100;
      const delay = Math.random() * 15;
      const size = 2 + Math.random() * 4;
      particleHTML += `<span style="left:${left}%;bottom:-10px;width:${size}px;height:${size}px;animation-delay:${delay}s;"></span>`;
    }
    particlesEl.innerHTML = particleHTML;
  }

  /* ── Preloader ────────────────────────────────────────────── */
  const preloader = document.getElementById("preloader");
  if (preloader) {
    setTimeout(() => preloader.classList.add("hidden"), 600);
  }

  /* ── Sticky Navbar Scroll Effect ──────────────────────────── */
  const navbar = document.querySelector(".navbar");
  const backToTop = document.getElementById("back-to-top");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 60) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
    if (backToTop) {
      backToTop.classList.toggle("visible", window.scrollY > 400);
    }
  });

  if (backToTop) {
    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* ── Mobile Menu ──────────────────────────────────────────── */
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      menuToggle.classList.toggle("active");
      navLinks.classList.toggle("active");
    });
    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        menuToggle.classList.remove("active");
        navLinks.classList.remove("active");
      });
    });
  }

  /* ── Scroll Reveal ────────────────────────────────────────── */
  const revealObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));

  /* ── Animated Counters ────────────────────────────────────── */
  const counterElements = document.querySelectorAll(".counter-number");
  let countersAnimated = false;

  const animateCounters = () => {
    if (countersAnimated) return;
    countersAnimated = true;

    counterElements.forEach(el => {
      const target = parseInt(el.dataset.target, 10);
      const suffix = el.dataset.suffix || "";
      const duration = 2000;
      const step = Math.ceil(target / (duration / 16));
      let current = 0;

      const update = () => {
        current += step;
        if (current >= target) {
          el.textContent = target + suffix;
          return;
        }
        el.textContent = current + suffix;
        requestAnimationFrame(update);
      };
      requestAnimationFrame(update);
    });
  };

  const countersSection = document.getElementById("counters");
  if (countersSection) {
    const counterObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animateCounters();
            counterObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );
    counterObserver.observe(countersSection);
  }

  /* ── Gallery Lightbox ─────────────────────────────────────── */
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxClose = document.getElementById("lightbox-close");

  document.querySelectorAll(".gallery-item").forEach(item => {
    item.addEventListener("click", () => {
      if (lightbox && lightboxImg) {
        lightboxImg.src = item.dataset.full;
        lightboxImg.alt = item.querySelector("img").alt;
        lightbox.classList.add("active");
      }
    });
  });

  if (lightboxClose) {
    lightboxClose.addEventListener("click", () => lightbox.classList.remove("active"));
  }
  if (lightbox) {
    lightbox.addEventListener("click", e => {
      if (e.target === lightbox) lightbox.classList.remove("active");
    });
    document.addEventListener("keydown", e => {
      if (e.key === "Escape") lightbox.classList.remove("active");
    });
  }

  /* ── Contact Form (front-end only) ────────────────────────── */
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", e => {
      e.preventDefault();
      const formData = new FormData(contactForm);
      const name = formData.get("name");
      alert(`Thank you, ${name}! Your message has been received. We will get back to you soon.`);
      contactForm.reset();
    });
  }

  /* ── Active Nav Highlight on Scroll ───────────────────────── */
  const sections = document.querySelectorAll("section[id]");
  const navItems = document.querySelectorAll(".nav-links a[href^='#']");

  const activateNav = () => {
    const scrollPos = window.scrollY + 120;
    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute("id");

      if (scrollPos >= top && scrollPos < top + height) {
        navItems.forEach(a => a.classList.remove("active"));
        const activeLink = document.querySelector(`.nav-links a[href='#${id}']`);
        if (activeLink) activeLink.classList.add("active");
      }
    });
  };
  window.addEventListener("scroll", activateNav);
});

/* ── Utility: escape HTML ───────────────────────────────────── */
function escapeHTML(str) {
  const div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}
