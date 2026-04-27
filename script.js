// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Fade-in animation on scroll
const fadeElements = document.querySelectorAll('.fade-in');

const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const fadeOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

fadeElements.forEach(element => {
    fadeOnScroll.observe(element);
});










// =========================================
// CUSTOM GOOGLE TRANSLATE TOGGLE LOGIC
// =========================================

document.addEventListener("DOMContentLoaded", function() {
    const langToggle = document.getElementById('lang-toggle');

    langToggle.addEventListener('click', function(e) {
        e.preventDefault(); // Prevents the page from jumping to the top
        
        // Find the hidden Google Translate dropdown
        const selectElement = document.querySelector('.goog-te-combo');

        if (selectElement) {
            // If the button says 'FR', switch page to French and change button to 'EN'
            if (langToggle.innerText === 'FR') {
                selectElement.value = 'fr';
                langToggle.innerText = 'EN';
            } 
            // If the button says 'EN', switch page back to English and change button to 'FR'
            else {
                selectElement.value = 'en';
                langToggle.innerText = 'FR';
            }
            
            // Tell the hidden Google widget that we made a selection
            selectElement.dispatchEvent(new Event('change'));
        }
    });
});