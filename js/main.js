$('select').niceSelect();

$('.header__burger').on('click', function(evt) {
	let $this = $(this);

	// $('.header__menu-list').toggleClass('active');
	$('.header__menu-container').slideToggle();

});

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


$('.btn-sub-app, .modal-box-sub-app .modal-box__close, .modal-box-sub-app .modal-box__btn').on('click', function(evt) {
	evt.preventDefault();
	$('html').toggleClass('modal');
  
	const $modal_box = $('.modal-box-sub-app')
	const $container = $modal_box.children('.modal-box__container')
	$modal_box.toggleClass('active');
	$container.slideToggle();
});

$('.team-item__link, .team-item__img, .modal-box-contact .modal-box__close, .modal-box-contact .modal-box__btn').on('click', function(evt) {
	evt.preventDefault();
	$('html').toggleClass('modal');
  
	const $modal_box = $('.modal-box-contact')
	const $container = $modal_box.children('.modal-box__container')
	$modal_box.toggleClass('active');
	$container.slideToggle();
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
