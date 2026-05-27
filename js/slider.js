
  // const slides = document.querySelector('.slides');
  // const slide = document.querySelector('.slide');
  // const slideWidth = slide.offsetWidth;
  // const totalSlides = document.querySelectorAll('.slide').length;
  // const visibleSlides = 2;

  // let index = 0;

  // document.querySelector('.next').addEventListener('click', () => {
  //   if (index < totalSlides - visibleSlides) {
  //     index++;
  //     slides.style.transform = `translateX(-${index * slideWidth}px)`;
  //   }
  // });

  // document.querySelector('.prev').addEventListener('click', () => {
  //   if (index > 0) {
  //     index--;
  //     slides.style.transform = `translateX(-${index * slideWidth}px)`;
  //   }
  // });

  // window.addEventListener('resize', () => {
  //   slides.style.transform = `translateX(-${index * slide.offsetWidth}px)`;
  // });
const slides = document.querySelector('.slides');
const slidesArr = document.querySelectorAll('.slide');

let index = 0;

function slideWidth() {
  return slidesArr[0].getBoundingClientRect().width + 0;
}

function visibleSlides() {
  return window.innerWidth <= 1024 ? 1 : 2;
}

document.querySelector('.next').onclick = () => {
  if (index < slidesArr.length - visibleSlides()) {
    index++;
    slides.style.transform = `translateX(-${index * slideWidth()}px)`;
  }
};

document.querySelector('.prev').onclick = () => {
  if (index > 0) {
    index--;
    slides.style.transform = `translateX(-${index * slideWidth()}px)`;
  }
};

window.addEventListener('resize', () => {
  slides.style.transform = `translateX(-${index * slideWidth()}px)`;
});
