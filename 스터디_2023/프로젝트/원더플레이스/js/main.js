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