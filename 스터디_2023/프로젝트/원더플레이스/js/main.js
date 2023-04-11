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

				//비주얼 슬라이드
				var $visual = $('.visual'),
					$visualSlide = $visual.find('.slide_list'),
					$visualControl = $visual.find('.slide_control');

				$visualSlide.slick({
					autoplay: true,
					arrows:true,
					dots: true,
		
					customPaging: function(slider, i){
						if(i < 9){
							return '<button type="button" data-role="none" role="button" tabindex="0">0'+(i+1)+'</button>';
						}else{
							return '<button type="button" data-role="none" role="button" tabindex="0">'+(i+1)+'</button>';
						}
						
					},
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

				//타이틀 마우스 휠 애니메이션
				$(window).on('mousewheel',function (){
					var $titleAni = $('.title_ani'),
						$title1 = $titleAni.find('.t1'),
						$title2 = $titleAni.find('.t2'),
						scrollTop = $(window).scrollTop() ,
						DecoScrollTop  = $titleAni.offset().top - 800;
						console.log(DecoScrollTop,scrollTop);
					if (DecoScrollTop < scrollTop){
						$title1.css({transform: 'translateX(-'+(scrollTop - DecoScrollTop)+'px)'})
						$title2.css({transform: 'translateX('+(scrollTop - DecoScrollTop)+'px)'})
					}

				})

			
				

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