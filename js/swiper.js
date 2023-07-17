// Пересчет rem в px для swiper
// spaceBetween: rem(5),
const rem = function (rem) {
    if ($(window).width() > 768) {
        return 0.005208335 * $(window).width() * rem;
    } else {
        // где 375 это ширина моб версии макета
        return (100/375) * (0.1 * $(window).width()) * rem;
    }
}

var baner_swiper = new Swiper(".baner-swiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: rem(28),
    loop: true,
    pagination: {
        el: ".baner-pagination",
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">0' + (index + 1) + "</span>";
        },
    },
    navigation: {
        nextEl: ".baner-swiper-next",
        prevEl: ".baner-swiper-prev",
    },
});

var partners_main_swiper = new Swiper(".partners-main-swiper", {
    spaceBetween: rem(1),
    loop: true,
    slidesPerView: 1.4,
    autoplay: {
        delay: 1000,
    },
});

const life_storiesDate = [2018, 2017, 2014, 2013, 2012, 2010, 2009, 2008, 2006, 2005, 2004, 2002, 2001, 200, 1999]
var life_stories_swiper = new Swiper(".life-stories-swiper", {
    loop: true,
    pagination: {
        el: ".life-stories-pagination",
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + life_storiesDate[index] + "</span>";
        },
    },
});

var partners_swiper = new Swiper(".partners-swiper", {
    autoplay: {
        delay: 5000,
    },
    navigation: {
        nextEl: ".partners-swiper-next",
        prevEl: ".partners-swiper-prev",
    },
});


$('.partners-left__page').html(`<span>01</span>/0${$('.partners-left__page').length}`)
partners_swiper.on('slideChange', function (x) {
    $('.partners-left__page span')[x.activeIndex].innerHTML = `0${(x.activeIndex+1)}`
})