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

$('.modal-box .modal-box__close, .modal-box .modal-box__btn').on('click', function(evt) {
	evt.preventDefault();
	$('html').toggleClass('modal');
  
	const $modal_box = $(this).closest('.modal-box')
	const $container = $modal_box.children('.modal-box__container')
	$modal_box.toggleClass('active');
	$container.slideToggle();

});

$('.btn-sub-app').on('click', function(evt) {
	evt.preventDefault();
	$('html').toggleClass('modal');
  
	const $modal_box = $(this).siblings('.modal-box')
	const $container = $modal_box.children('.modal-box__container')
	$modal_box.toggleClass('active');
	$container.slideToggle();
});
