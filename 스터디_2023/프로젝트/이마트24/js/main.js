'use strict';

try {
	//제이쿼리가 있으면
	this.jQuery = this.jQuery || undefined;

	//제이쿼리가 있으면
	if(jQuery) {
		//$ 중복방지
		(function($) {
			//태그객체
			var $window = $(window);
			$(function() {
				
				//패밀리사이트
                $('.family_site .family_btn').on('click', function() {
                    var $this = $(this),
                        $Parent = $this.parent('.family_site'),
                        IsActive = $Parent.is('.active'),
                        $Layer = $this.siblings('.layer');
                    if(!IsActive){
                        $Parent.addClass('active');
                        $this.attr('title', '패밀리사이트 닫기');
                        $Layer.slideDown(); 
                    } else{
                        $Parent.removeClass('active');
                        $this.attr('title', '패밀리사이트 열기');
                        $Layer.slideUp();
                    };
                });


				var $visual = $('.visual'),
					$visualSlide = $visual.find('.slide_list');



				$visualSlide.slick({
					autoplay : true,
					dots : false,
					swipe : false,
					draggable : false,
					slidesToShow : 1,
					slidesToScroll: 1,
					variableWidth: false,
					infinite: true,
					prevArrow : $('.visual .prev'),
					nextArrow : $('.visual .next'),

					//추가 기능
					autoArrow : $('.visual .auto'),
					isRunOnLowIE : false,
					pauseOnArrowClick : true,
					pauseOnDirectionKeyPush : true,
					pauseOnSwipe : true,
					pauseOnDotsClick : true,
					pauseText : '정지',
					playText : '재생',
					current : $('.visual .current'),
					total : $('.visual .total'),
					responsive: [
						{
							breakpoint: 1001,
							settings: {
								swipe : true,
								draggable : true
							}
						},
						{
							breakpoint: 641,
							settings: {
								slidesToShow : 1,
								swipe : true,
								draggable : true,
								variableWidth: true,
							}
						}]
				});

				$window.on('screen:wide screen:web', function(event) {

				});

				$window.on('screen:tablet screen:phone', function(event) {

				});

			});
		})(jQuery);
	}
}catch(e) {
	console.error(e);
}