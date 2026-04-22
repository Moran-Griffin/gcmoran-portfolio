// Active sidebar nav state via IntersectionObserver
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.sidebar-nav .nav-link');

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => link.classList.remove('active'));
        const active = document.querySelector(
          `.sidebar-nav [data-section="${entry.target.id}"]`
        );
        if (active) active.classList.add('active');
      }
    });
  },
  { rootMargin: '-40% 0px -55% 0px' }
);

sections.forEach((s) => sectionObserver.observe(s));

// Mobile hamburger toggle
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobile-nav');

hamburger?.addEventListener('click', () => {
  const open = hamburger.classList.toggle('open');
  mobileNav.classList.toggle('open', open);
  hamburger.setAttribute('aria-expanded', String(open));
  mobileNav.setAttribute('aria-hidden', String(!open));
});

// Close mobile nav when a link is tapped
mobileNav?.querySelectorAll('.nav-link').forEach((link) => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    mobileNav.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    mobileNav.setAttribute('aria-hidden', 'true');
  });
});
