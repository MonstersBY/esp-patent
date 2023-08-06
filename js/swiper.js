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
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: rem(20),
    observer: true,
    observeParents: true,
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
    breakpoints: {
        769: {
            slidesPerView: 2,
        }
    },
    on: {
        slideChangeTransitionStart: (swiper) => {
            for (let i = 0; i < arrBalls.length; i++) {
                $(arrBalls[i]).find('video').trigger('pause')
                $(arrBalls[i]).find('video').prop('currentTime', 0.0)
            }
        },
        slideChangeTransitionEnd: (swiper) => {
            for (let i = 0; i < arrBalls.length; i++) {
                $(arrBalls[i]).find('video').attr("autoplay",'')
                $(arrBalls[i]).find('video').attr("loop",'')
                $(arrBalls[i]).find('video').trigger('play')
                setInterval(() => {
                    if($(arrBalls[i]).find('video').prop('currentTime') >= 3.501) {
                        $(arrBalls[i]).find('video').prop('currentTime', 0.0)
                    }
                }, 1)
            }
        }
    }
});


if (document.querySelector('.video-main')) {
	document.querySelector('.video-main').addEventListener('ended',myHandler,false);
}

const arrBalls = ['.swiper-slide-active','.swiper-slide-prev','.swiper-slide-next']
	
function myHandler() {
	$('.baner__video').css('opacity',0)
	$('.baner__video').css('z-index',-1)
	$('.baner-container').css('opacity',1)
	$('.header').css('opacity',1)
	$('.header').css('margin-top','2.5rem')
	$('.header').css('max-height','10rem')
	setTimeout(() =>{
		$('.header').css('overflow','unset')
		if ($('.gif-ball video').length) {

            for (let i = 0; i < arrBalls.length; i++) {
                $(arrBalls[i]).find('video').attr("autoplay",'')
                $(arrBalls[i]).find('video').attr("loop",'')
                $(arrBalls[i]).find('video').trigger('play')
                setInterval(() => {
                    if($(arrBalls[i]).find('video').prop('currentTime') >= 3.501) {
                        $(arrBalls[i]).find('video').prop('currentTime', 0.0)
                    }
                }, 1)
            }
		}
	}, 420);
}

baner_swiper.on('beforeSlideChangeStart', function () {
    console.log('i work');
});






var baner_swiper1 = new Swiper(".baner-swiper1", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: rem(20),
    observer: true,
    observeParents: true,
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