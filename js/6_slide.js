let slideIndex = 0;
const slides = document.querySelector('.slides');
const dots = document.querySelectorAll('.dot');

function showSlides() {
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove('active');
    }
    
    // Update active dot
    dots[slideIndex].classList.add('active');
    
    // Move to the correct slide
    slides.style.transform = `translateX(-${slideIndex * 100}%)`;
    
    // Go to the next slide, looping back to start if needed
    slideIndex = (slideIndex + 1) % dots.length;
}

// Automatically switch slides every 1.5 seconds
setInterval(showSlides, 1500);

// Initialize the first slide display
showSlides();






