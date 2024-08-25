let slider = document.querySelector(".slider");
let currentSlide = 0;
let totalSlides =
  slider.querySelectorAll(".wrapper .right .swiper-slide").length - 1;

function initializeSlides() {
  slider
    .querySelectorAll(".wrapper .right .swiper-slide")
    .forEach((slide, index) => {
      slide.style.transform = `translateY(${index * 100}vh)`;
    });
}

initializeSlides(); // Chame esta função logo após a definição

slider.querySelector(".controles .up").addEventListener("click", function () {
  if (currentSlide == 0) {
    return;
  }

  currentSlide--;
  slider
    .querySelectorAll(".wrapper .right .swiper-slide")
    .forEach((slide, index) => {
      slide.style.transform = `translateY(${(index - currentSlide) * 100}vh)`;
    });
});

slider.querySelector(".controles .down").addEventListener("click", function () {
  if (currentSlide == totalSlides) {
    return;
  }

  currentSlide++;
  slider
    .querySelectorAll(".wrapper .right .swiper-slide")
    .forEach((slide, index) => {
      slide.style.transform = `translateY(${(index - currentSlide) * 100}vh)`;
    });
});
