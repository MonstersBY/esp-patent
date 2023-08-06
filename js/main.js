$(document).ready(function() {

$('select').niceSelect();

$('.header__burger').on('click', function(evt) {
	let $this = $(this);
	$('.header__menu-container').slideToggle();
});

var waypoint_about_us = new Waypoint({
	element: document.querySelector('.about-us'),
	handler: function(direction) {
	  $('.about-us').find('.about-us__item').addClass('scroll-work')
	}
})


$(".areas-right__item").mouseover(function(){
    const $this = $(this)
    let animeId
    switch($this.attr('class').split(' ')[1]) {
        case 'anim-one':
            animeId = 0
          break;
        case 'anim-two':
            animeId = 1
          break;
        case 'anim-three':
            animeId = 2
          break;
        case 'anim-four':
            animeId = 3
          break;
    }
    $('.areas-left__animation > div').each(function( ) {
        $(this).css('display','none')
    });
    $('.areas-left__animation > div')[animeId].style.display = 'flex'
});

$('.form__item input').on('input', function(evt) {
	let $this = $(this);
	let $parent = $this.parent();
	let $placeholder = $parent.find('.placeholder');

	$this.removeClass('invalid');

	if ($this.val()) {
		$placeholder.addClass('active');
	} else {
		$placeholder.removeClass('active');
	}
});


$('.btn-sub-app').on('click', function(evt) {
	evt.preventDefault();
	$('html').toggleClass('modal');
  
	const $modal_box = $('.modal-box-sub-app')
	const $container = $modal_box.children('.filling')
	$modal_box.toggleClass('active');
	$container.slideToggle();
});
$('.open-mail').on('click', function(evt) {
	evt.preventDefault();
	$('html').toggleClass('modal');
  
	const $modal_box = $('.modal-box')
	const $container = $modal_box.children('.filling')
	$modal_box.toggleClass('active');
	$container.slideToggle();
});

$('.team-item__link, .team-item__img').on('click', function(evt) {
	evt.preventDefault();
	$('html').toggleClass('modal');
  
	const $modal_box = $('.modal-box-contact')
	const $container = $modal_box.children('.filling')
	$modal_box.toggleClass('active');
	$container.slideToggle();
});
$('.modal-box .modal-box__close').on('click', function(evt) {
	evt.preventDefault();
	$('html').toggleClass('modal');
	console.log($(this).parents('.modal-box__container'))
  
	const $modal_box = $('.modal-box')
	const $container = $(this).parents('.modal-box__container')
	$modal_box.removeClass('active');
	$container.slideToggle();
})
$('.modal-box .modal-box__btn').on('click', function(evt) {
	evt.preventDefault();
  
	const $modal_box = $('.modal-box')
	const $container = $modal_box.children('.filling')
	const $success = $modal_box.children('.success')
	$container.slideToggle();
	$success.slideToggle();
});


// ymaps.ready(init);
// function init(){
// 	// Создание карты.
// 	var map = new ymaps.Map("map", {
// 		center: [55.759289, 37.556756],
// 		zoom: 17,
// 	},{
// 		yandexMapDisablePoiInteractivity: true
// 	});

// 	map.controls.remove('geolocationControl');
// 	map.controls.remove('searchControl');
// 	map.controls.remove('trafficControl');
// 	map.controls.remove('typeSelector');
// 	map.controls.remove('fullscreenControl');
// 	map.controls.remove('zoomControl');
// 	map.controls.remove('rulerControl');
// 	map.controls.remove('scrollZoom');
// 	map.controls.remove('drag');
// 	map.behaviors.disable(['scrollZoom']);
// }

$('.services-container .services-right').each(function(x){
	$(this).find('.services-item__number').each(function(x){
		x<9 ? $(this).html('0'+(x+1)) : $(this).html(x+1)
	})
})


if($('.services-other .top-title span').length) {
	console.log(123)
	$('.services-other .top-title span').html(`${$('.services-other .services-other-item__count').length}`)
	$('.services-other .services-other-item__count').each(function(x){
		x<9 ? $(this).html('0'+(x+1)) : $(this).html(x+1)
	})
}


if($('.inner .inner__text-logo').length) {
	$('.inner-container').css("padding-top", "13.2rem")
}

if($('.news').length) {
	$('.news__item-img').each(function(x){
		if(!$(this).children('img').attr('src')) {
			$(this).css("display", "none")
		}
	})
}

if($('.trademark-registration').length) {
	$('.trademark-registration-container').each(function(x){
		$(this).find('.trademark-registration__item-number').each(function(i){
			i<9 ? $(this).html('/0'+(i+1)) : $(this).html('/'+(i+1))
		})
		$(this).find('.trademark-registration__item-drop-number').each(function(i){
			i<9 ? $(this).html('0'+(i+1)) : $(this).html(i+1)
		})
	})
}

$('.trademark-registration__list.drop .trademark-registration__item').click(function() {
	if (!event.target.classList.contains("link-arrow"))
	$(this).toggleClass('active');
});

if($('.rf').length) {
	$('.rf-item__left-number').each(function(x){
		x<9 ? $(this).html('0'+(x+1)) : $(this).html(x+1)
	})
}

});

