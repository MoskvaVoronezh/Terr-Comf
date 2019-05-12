
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

	// появление ul в блоге
	$(".blog-list__link").on("click", function (e) {
		e.preventDefault();
		$(this).toggleClass("blog-link_active");
		$(".blog-list__item").toggleClass("blog-list_active");
	});

	// Анимируем якоря
	$("._click-link").on("click", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();
		//забираем идентификатор бока с атрибута href
		var id = $(this).attr('href'),
			//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({ scrollTop: top }, 1000);
	});
});