// Initializing AOS for the scroll-based animations (Fade in, Slide up)
AOS.init();

// Logic for Portfolio "Hover Scale" if using dynamic elements
const portfolioItems = document.querySelectorAll('.portfolio-item');

portfolioItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = "scale(1.05)"; // Hover Scale requirement
        item.style.transition = "0.3s ease";
    });
    item.addEventListener('mouseleave', () => {
        item.style.transform = "scale(1)";
    });
});
