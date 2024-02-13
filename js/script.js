"use strict";
const reviewsSwiper = document.querySelector(".swiper-reviews");

if (reviewsSwiper) {
  console.log(reviewsSwiper);
  const swiper = new Swiper(".swiper-reviews", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
    },
  });
}

// const swiper = new Swiper(".swiper", {
//   // Optional parameters
//   direction: "vertical",
//   loop: true,

//   // If we need pagination
//   pagination: {
//     el: ".swiper-pagination",
//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },

//   // And if we need scrollbar
//   scrollbar: {
//     el: ".swiper-scrollbar",
//   },
// });
