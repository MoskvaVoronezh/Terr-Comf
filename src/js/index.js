
$( document ).ready(function() {
   $('.reviews-slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1, 
		dots: true,
		dotsClass: 'reviews-slider__dots',
		responsive: [
			{
				breakpoint: 900,
				settings: {
					arrows: false
				}
			}
		]
	});

	$('.banner-slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		adaptiveHeight: true
	});

	$(".fancybox").fancybox({
		openEffect: 'elastic',
		closeEffect: 'elastic'
	});

	$(".blog-list__link").on("click", function (e) {
		e.preventDefault();
		$(this).toggleClass("blog-link_active");
	});
});