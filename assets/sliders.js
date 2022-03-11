var swiperReviews = new Swiper('#slider-reviews', {
  slidesPerView: 4,
  slidesPerGroup: 1,
  grabCursor: true,
  a11y: false,
  spaceBetween: 28,
  loop: true,
  centeredSlides: true,
  allowTouchMove: true,
  navigation: {
    nextEl: '.next-reviews',
    prevEl: '.previous-reviews',
  },
  breakpoints: {
    0: { /* when window >=0px - webflow mobile landscape/portriat */
      slidesPerView: 1.6,
      slidesPerGroup: 1,
      spaceBetween: 28,
    },
    480: { /* when window >=0px - webflow mobile landscape/portriat */
      slidesPerView: 1.2,
      slidesPerGroup: 1,
      spaceBetween: 28,
    },
    767: { /* when window >= 767px - webflow tablet */
      slidesPerView: 3,
      slidesPerGroup: 1,
      spaceBetween: 28,
    },
    992: { /* when window >= 988px - webflow desktop */
      slidesPerView: 3,
      slidesPerGroup: 1,
      spaceBetween: 28,
    }
  },
});