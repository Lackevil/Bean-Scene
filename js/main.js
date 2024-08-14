const burger = document.getElementById('burger')
const header = document.querySelector('.header')
const body = document.querySelector('body')

burger.addEventListener('click', () => {
  header.classList.toggle('active')
  body.classList.toggle('scroll-lock')
})

const images = document.querySelectorAll('.item-coffee__image img');
new simpleParallax(images);

document.addEventListener('DOMContentLoaded', function () {
  const sliderItems = document.querySelectorAll('.slider-feedback__item');
  const prevButton = document.querySelector('.slider-feedback__btn:first-child');
  const nextButton = document.querySelector('.slider-feedback__btn:last-child');
  let currentIndex = 0;

  let startX = 0;
  let endX = 0;

  // Изначально показываем первый слайд
  sliderItems[currentIndex].classList.add('active');

  function showSlide(index) {
    sliderItems.forEach((item, i) => {
      item.classList.remove('active');
      if (i === index) {
        item.classList.add('active');
      }
    });
  }

  prevButton.addEventListener('click', function () {
    currentIndex = (currentIndex === 0) ? sliderItems.length - 1 : currentIndex - 1;
    showSlide(currentIndex);
  });

  nextButton.addEventListener('click', function () {
    currentIndex = (currentIndex === sliderItems.length - 1) ? 0 : currentIndex + 1;
    showSlide(currentIndex);
  });

  const sliderWrapper = document.querySelector('.slider-feedback__wrapper');

  sliderWrapper.addEventListener('touchstart', function (e) {
    startX = e.touches[0].clientX;
  });

  sliderWrapper.addEventListener('touchmove', function (e) {
    endX = e.touches[0].clientX;
  });

  sliderWrapper.addEventListener('touchend', function () {
    if (startX > endX + 50) { 
      currentIndex = (currentIndex === sliderItems.length - 1) ? 0 : currentIndex + 1;
      showSlide(currentIndex);
    } else if (startX < endX - 50) { 
      currentIndex = (currentIndex === 0) ? sliderItems.length - 1 : currentIndex - 1;
      showSlide(currentIndex);
    }
  });
});
