// Smooth scroll for navigation links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
      // Close mobile nav after click
      document.querySelector('.nav-links').classList.remove('open');
    }
  });
});

// Mobile nav toggle
document.getElementById('navToggle').addEventListener('click', function() {
  document.querySelector('.nav-links').classList.toggle('open');
});