const thumbs = document.querySelectorAll('.thumbs li');
const infoslider = document.querySelectorAll('.info_slider');
const imgslider = document.querySelectorAll('.img-slider');
const items = document.querySelectorAll('.item');
let index = 0;

function showSlide(newIndex) {
    document.querySelector('.thumbs .selected').classList.remove('selected');
    thumbs[newIndex].classList.add('selected');

    infoslider.forEach(slide => {
        slide.style.transform = `translateY(${newIndex * -100}%)`;
    });
    imgslider.forEach(slide => {
        slide.style.transform = `translateX(${newIndex * -100}%)`;
    });

    document.querySelector('.item.active').classList.remove('active');
    items[newIndex].classList.add('active');
}

thumbs.forEach((thumb, ind) => {
    thumb.addEventListener('click', () => {
        index = ind;
        showSlide(index);
    });
});

// Automatic slide progression
setInterval(() => {
    index = (index + 1) % items.length;
    showSlide(index);
}, 2000); // 800 ms (0.8 seconds)
