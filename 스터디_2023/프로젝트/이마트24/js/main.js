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