
$( document ).ready(function() {
   $('.reviews-slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1, 
		dots: true,
		dotsClass: 'reviews-slider__dots'
	});

	$('.banner-slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: false
	});

	$(".fancybox").fancybox({
		openEffect: 'elastic',
		closeEffect: 'elastic'
	});
});