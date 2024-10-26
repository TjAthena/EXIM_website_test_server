const slides = document.querySelector('.slides');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        changeSlide(index);
    });
});

function changeSlide(index) {
    // Update current index
    currentIndex = index;

    // Calculate the offset to slide
    const offset = -currentIndex * 100;

    // Apply the transform to slides container
    slides.style.transform = `translateX(${offset}%)`;

    // Update active dot
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentIndex].classList.add('active');
}
