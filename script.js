
document.getElementById('year').textContent = new Date().getFullYear();

// Header scroll effect
window.addEventListener('scroll', () => {
  const header = document.getElementById('header');
  if (window.scrollY > 100) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe project cards
document.querySelectorAll('.grid-item').forEach(card => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(30px)';
  card.style.transition = 'all 0.6s ease';
  observer.observe(card);
});




// circulo roxo
const cursor = document.getElementById('cursor-circle');
const inverter = document.getElementById('cursor-inverter');
const images = document.querySelectorAll('.grid-item');
let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animateCursor() {
  const cursorWidth = cursor.offsetWidth;
  const cursorHeight = cursor.offsetHeight;

  const inverterWidth = inverter.offsetWidth;
  const inverterHeight = inverter.offsetHeight;
  cursor.style.transform = `translate(${mouseX - cursorWidth / 2}px, ${mouseY - cursorHeight / 2}px)`;
  inverter.style.transform = `translate(${mouseX - inverterWidth / 2}px, ${mouseY - inverterHeight / 2}px)`;
  requestAnimationFrame(animateCursor);
}
animateCursor();

// expandir ciruclo com imagens
images.forEach(img => {
  img.addEventListener('mouseenter', () => {
    cursor.classList.add('expanded');
    cursor.style.width = '100px';
    cursor.style.height = '100px';
    cursor.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
    // cursor.style.transition = 'width 0.5s, height 0.5s, background-color 0.2s, border 0.2s, transform 0.08s';
    cursor.style.cursor = 'none';
    // cursor.style.border = '2px solid cyan';
    inverter.style.opacity = '1';
  });

  img.addEventListener('mouseleave', () => {
    cursor.classList.remove('expanded');
    cursor.style.width = '30px';
    cursor.style.height = '30px';
    cursor.style.backgroundColor = '#5a35ff';
    cursor.style.border = 'none';
    inverter.style.opacity = '0';
  });
});

// expansão menor do criculo

const interactiveElements = [
  ...document.querySelectorAll('header nav a'),
  ...document.querySelectorAll('.cta-button'),
  ...document.querySelectorAll('footer .footer-social a'),
  ...document.querySelectorAll('footer .contact-info a')
];
interactiveElements.forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.classList.add('small');
    cursor.classList.remove('expanded');
  });
  el.addEventListener('mouseleave', () => {
    cursor.classList.remove('small');
  });
});

// Toggle menu mobile
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');
const ve = false;

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});
  
// Close menu when clicking outside
document.addEventListener('click', (event) => {
  if (!navMenu.contains(event.target) && !menuToggle.contains(event.target)) {
    navMenu.classList.remove('show');
  }
});