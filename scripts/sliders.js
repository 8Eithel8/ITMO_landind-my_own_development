
    new Swiper(".mySwiper", {
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
    nextEl: ".news__swiper-button-next_dark",
    prevEl: ".news__swiper-button-prev_dark",
},
});
    new Swiper(".mySwiperPub", {
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
    nextEl: ".swiper-button-next_light",
    prevEl: ".swiper-button-prev_light",
},
});

    new Swiper(".mySwiperTeam", {
    slidesPerView: "auto",
    spaceBetween: 30,


    pagination: {
        // el: ".swiper-pagination",
        el: ".team__swiper-pagination",
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
        nextEl: ".team__swiper-button-next_dark",
        prevEl: ".team__swiper-button-prev_dark",
    },
});

new Swiper(".mySwiperProject", {
    slidesPerView: "auto",
    spaceBetween: 30,
    slidesPerGroup: 3,
    pagination: {
        el: ".projects-block__swiper-pagination",
        type: "fraction",
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
        nextEl: ".swiper-button-next_projects-block",
        prevEl: ".swiper-button-prev_projects-block",
    },
});