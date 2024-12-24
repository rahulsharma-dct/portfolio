var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
  breakpoints: {
    480: {
      slidesPerView: 1,
    },
    680: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  },
});
