// Dark mode toggle
const toggleBtn = document.getElementById('toggleMode');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// Smooth scroll for navbar links
document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Scroll-triggered animations (basic fade-in)
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.1,
});

document.querySelectorAll('.animate-on-scroll').forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});

// Back to top button
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  backToTop.style.display = window.scrollY > 300 ? 'block' : 'none';
});
backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// CTA button scrolls to form
document.querySelectorAll('.cta-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const formSection = document.querySelector('#contact');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Form validation
document.querySelector('form')?.addEventListener('submit', e => {
  const name = document.querySelector('#name');
  const email = document.querySelector('#email');
  const message = document.querySelector('#message');

  if (!name.value || !email.value || !message.value) {
    alert('Please fill in all fields.');
    e.preventDefault();
  } else if (!/^\S+@\S+\.\S+$/.test(email.value)) {
    alert('Please enter a valid email.');
    e.preventDefault();
  }
});
