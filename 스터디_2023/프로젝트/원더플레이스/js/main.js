'use strict';

try {
	//제이쿼리가 있으면
	this.jQuery = this.jQuery || undefined;

	//제이쿼리가 있으면
	if (jQuery) {
		//$ 중복방지
		(function ($) {
			//태그객체
			var $window = $('window'),
				$html = $('html');
			$(function () {
				//헤더 픽스
				$(window).scroll(function() {
					var windowTop = $(this).scrollTop();
		
					if(0 < windowTop) {
						$('html').addClass("fixed");
					} else {
						$('html').removeClass("fixed");
					}
				});


				var $visual = $('.visual'),
					$visualSlide = $visual.find('.slide_list'),
					$visualControl = $visual.find('.slide_control');

				$visualSlide.slick({
					autoplay: true,
					arrows:true,
					dots: false,
					slidesToShow: 1,
					slidesToScroll: 1,
					autoplaySpeed: 5000,
					infinite: false,
					swipe: false,
					draggable: false,
					prevArrow: $visualControl.find('.prev'),
					nextArrow: $visualControl.find('.next'),
					responsive: [
						{
							breakpoint: 1001,
							settings: {
								swipe: true,
								draggable: true,
								swipeToSlide: true,
							}
						},
						{
							breakpoint: 801,
							settings: {
								swipe: true,
								draggable: true,
								swipeToSlide: true,
								centerMode: true,
								initialSlide: 1,
								slidesToShow: 1,
							}
						}
					]
				});

	

			
				

				$window.on('screen:wide screen:web', function (event) {

				});

				$window.on('screen:tablet screen:phone', function (event) {

				});

			});
		})(jQuery);
	}
} catch (e) {
	console.error(e);
}