document.addEventListener("DOMContentLoaded", function() {
  const skillElements = document.querySelectorAll('.skill');

  skillElements.forEach(skill => {
      const percentage = skill.getAttribute('data-percentage');
      skill.style.width = `${percentage}%`;
  });

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault();
          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          });
      });
  });
});

function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}

function toggleMenu() {
  document.querySelector('.nav-links').classList.toggle('nav-active');
}