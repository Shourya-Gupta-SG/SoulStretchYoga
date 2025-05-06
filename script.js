// Toggle Dark Mode
const toggleTheme = document.getElementById('toggle-theme');
toggleTheme.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Back to Top Button
const backToTopBtn = document.getElementById('backToTopBtn');

window.onscroll = function () {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    backToTopBtn.style.display = 'block';
  } else {
    backToTopBtn.style.display = 'none';
  }
};

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Form Validation
const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
  const name = form.querySelector('input[name="name"]');
  const email = form.querySelector('input[name="email"]');
  const message = form.querySelector('textarea[name="message"]');

  if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
    alert("Please fill in all fields.");
    e.preventDefault();
  } else if (!/\S+@\S+\.\S+/.test(email.value)) {
    alert("Please enter a valid email address.");
    e.preventDefault();
  }
});
