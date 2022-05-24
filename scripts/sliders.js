
    let swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    slidesPerGroup: 3,
    spaceBetween: 30,

    pagination: {
    el: ".news__swiper-pagination",
    clickable: true
},
    breakpoints: {
    1023: {
    spaceBetween: 32
},
    767: {
    spaceBetween: 30
}
},

    navigation: {
    nextEl: ".swiper-button-next_dark",
    prevEl: ".swiper-button-prev_dark",
},
});
    let swiperPub = new Swiper(".mySwiperPub", {
    slidesPerView: "auto",
    slidesPerGroup: 3,
    spaceBetween: 30,

    pagination: {
    // el: ".swiper-pagination",
    el: ".publications__swiper-pagination",
    clickable: true
},
    breakpoints: {
    1025: {
    spaceBetween: 30
},
    321: {
    spaceBetween: 20
}
},

    navigation: {
    nextEl: ".publications__swiper-button-next_light",
    prevEl: ".publications__swiper-button-prev_light",
},
});