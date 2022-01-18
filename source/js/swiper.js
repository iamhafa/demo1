// import Swiper bundle with all modules installed
import Swiper from 'https://unpkg.com/swiper@7/swiper-bundle.esm.browser.min.js'

new Swiper('.swiper', {
  spaceBetween: 30,
  keyboard: true,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});