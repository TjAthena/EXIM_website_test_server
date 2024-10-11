const thumbs = document.querySelectorAll('.thumbs li');
const infoslider = document.querySelectorAll('.info_slider');
const imgslider = document.querySelectorAll('.img-slider');
const items = document.querySelectorAll('.item');
let index =0;

thumbs.forEach((thumbs,ind) => {
    thumbs.addEventListener('click', () => {

        document.querySelector('.thumbs .selected').classList.remove('selected');
        thumbs.classList.add('selected');

        index = ind;
        infoslider.forEach(slide => { 
            slide.style.transform =`translateY(${index * -100}%)`;
        });
        imgslider.forEach(slide => { 
            slide.style.transform =`translateX(${index * -100}%)`;
        });


        document.querySelector('.item.active').classList.remove('active');
        items[index].classList.add('active');

    }); 
});