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

const product_slider = new Swiper('.product__slider', {
    effect: "fade",
    speed: 700,

    mousewheel: {
        sensitivity: 1,
    },

    pagination: {
        el: '.product__pagination',
        clickable: true,
        renderBullet: function (index, className) {
            index += 1;
            if (index < 10) {
                index = '0' + index;
            }
            return '<span class="' + className + '">' + index + '</span>';
        },
    },
});

$('.product__slider-cards').on('click', '.product__card-img-box', function() {
    product_slider.slideTo($( this ).index());
});

const catalog_slider = new Swiper('.catalog__cards.swiper', {
    direction: 'horizontal',

    breakpoints: {
        0: {
            slidesPerView: 2,
            spaceBetween: rem(1.5),
        },
        769: {
            slidesPerView: 4,
            spaceBetween: rem(5),
        },
    },

    pagination: {
        el: '.catalog__pagination',
        type: 'bullets',
        clickable: true,
    },

    navigation: {
        nextEl: '.catalog__arrow.next',
        prevEl: '.catalog__arrow.prev',
    },
});

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

var partners_swiper = new Swiper(".partners-swiper", {
    spaceBetween: rem(1),
    loop: true,
    slidesPerView: 1.4,
    autoplay: {
        delay: 1000,
    },
});