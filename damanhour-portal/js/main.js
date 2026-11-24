/* ============================================
   Damanhour University Portal — Main JS
   ============================================ */

'use strict';

/* ---------- AOS init ---------- */
document.addEventListener('DOMContentLoaded', () => {
  if (typeof AOS !== 'undefined') {
    AOS.init({ duration: 800, once: true, offset: 80 });
  }
});

/* ---------- Navbar scroll effect ---------- */
const navbar = document.getElementById('navbar');
const scrollTopBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar?.classList.add('scrolled');
    scrollTopBtn?.classList.add('show');
  } else {
    navbar?.classList.remove('scrolled');
    scrollTopBtn?.classList.remove('show');
  }
});

/* ---------- Mobile menu ---------- */
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const navActions = document.querySelector('.nav-actions');

hamburger?.addEventListener('click', () => {
  navLinks?.classList.toggle('active');
  navActions?.classList.toggle('active');
  hamburger.innerHTML = navLinks?.classList.contains('active')
    ? '<i class="fa-solid fa-xmark"></i>'
    : '<i class="fa-solid fa-bars"></i>';
});

/* Close menu on link click */
navLinks?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    navActions?.classList.remove('active');
    if (hamburger) hamburger.innerHTML = '<i class="fa-solid fa-bars"></i>';
  });
});

/* ---------- Active nav link on scroll ---------- */
const sections = document.querySelectorAll('section[id]');
const links = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const top = section.offsetTop - 120;
    if (window.scrollY >= top) current = section.id;
  });
  links.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) link.classList.add('active');
  });
});

/* ---------- Scroll to top ---------- */
scrollTopBtn?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ---------- Animated counters ---------- */
const counters = document.querySelectorAll('[data-count]');
let countersStarted = false;

function animateCounters() {
  if (countersStarted) return;
  const trigger = document.querySelector('.hero-stats');
  if (!trigger) return;

  const rect = trigger.getBoundingClientRect();
  if (rect.top < window.innerHeight) {
    countersStarted = true;
    counters.forEach(counter => {
      const target = +counter.getAttribute('data-count');
      const duration = 2000;
      const start = performance.now();

      function update(now) {
        const progress = Math.min((now - start) / duration, 1);
        counter.textContent = Math.floor(progress * target).toLocaleString();
        if (progress < 1) requestAnimationFrame(update);
      }
      requestAnimationFrame(update);
    });
  }
}
window.addEventListener('scroll', animateCounters);
animateCounters();

/* ---------- Contact form ---------- */
const contactForm = document.getElementById('contactForm');
contactForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  const btn = contactForm.querySelector('button[type="submit"]');
  const original = btn.innerHTML;
  btn.innerHTML = '<i class="fa-solid fa-check"></i> Message Sent!';
  btn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
  setTimeout(() => {
    btn.innerHTML = original;
    btn.style.background = '';
    contactForm.reset();
  }, 2500);
});