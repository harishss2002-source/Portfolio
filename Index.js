// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close menu when link is clicked (mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Smooth Scroll Reveal Animation
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'all 0.8s ease-out';
    observer.observe(section);
});

// Testimonial Carousel Logic
const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');

let currentSlideIndex = 0;

function updateCarousel() {
    const width = slides[0].getBoundingClientRect().width;
    track.style.transform = `translateX(-${currentSlideIndex * width}px)`;
}

nextBtn.addEventListener('click', () => {
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    updateCarousel();
});

prevBtn.addEventListener('click', () => {
    currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
    updateCarousel();
});

// Auto-play Carousel
setInterval(() => {
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    updateCarousel();
}, 5000);

// Dynamic Glitch Effect for Hero Title (Console-like feel)
const glitchText = document.querySelector('.glitch-text');
const phrases = ['SYSTEM_INITIALIZED', 'READY_FOR_DEPLOYMENT', 'QUALITY_LOCKED'];
let phraseIndex = 0;

setInterval(() => {
    glitchText.innerText = phrases[phraseIndex];
    phraseIndex = (phraseIndex + 1) % phrases.length;
}, 3000);