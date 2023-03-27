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

				//섹션 애니메이션
				$(window).on('scroll load', function(){
					var scrollTop = $(window).scrollTop(),
						winBottom = scrollTop + $(window).height(),
						$section = $('.scroll_ani');
					$section.each(function(){
						var $this = $(this),
							thisTop = $this.offset().top;
						if(winBottom > (thisTop + 50)){
							$this.attr('data-on', 'on');
						}
						if(winBottom < (thisTop - 50)){
							$this.attr('data-on', 'off');
						}
					});
				});

			
				//비주얼 슬라이드
				var $visual = $('.visual'),
					$visualSlide = $('.visual .slide_list'),
					$SlideItem = $visualSlide.find('.slide_item'),
					ItemLength = $SlideItem.length,
					$SlideControl = $visual.find('.slide_control'),
					$ControlBox = $visual.find('.progress'),
					$SlideThumbnailBox = $ControlBox.find('.thumbnail_box');


				var boardSlideCount = null;
				$visualSlide.on('init', function (event, slick) {
					boardSlideCount = slick.slideCount;
					setboardSlideCount();
					setboardSlideCurrentSlideNumber(slick.currentSlide);
				});
				$visualSlide.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
					setboardSlideCurrentSlideNumber(nextSlide);
				});
				function setboardSlideCount() {
					var $StateBar = $ControlBox.find('.state_bar'),
						ThumbnailWidth = (100 / ItemLength);
					$StateBar.attr('data-total', ItemLength);
					$ControlBox.find('.thumbnail_box').find('li').css('width', ThumbnailWidth + '%');
				}
				function setboardSlideCurrentSlideNumber(currentSlide) {
					var $StateBar = $ControlBox.find('.state_bar'),
						StateBarWidth = 0,
						current = currentSlide + 1;
					StateBarWidth = (100 / boardSlideCount) * current;
					$StateBar.attr('data-current', currentSlide + 1).css('width', StateBarWidth + '%');
				}
				$visualSlide.slick({
					autoplay: true,
					slidesToShow: 1,
					slidesToScroll: 1,
					prevArrow: $SlideControl.find('.prev'),
					nextArrow: $SlideControl.find('.next'),
					pauseOnDotsHover: true,
					swipe: false,
					draggable: false,
					infinite: true,
					dots: true,
					appendDots: $SlideThumbnailBox,
					dotsClass: 'slick-dots clearfix',
					customPaging: function (slider, i) {
						return '<button type="button"><span>' + (i + 1) + '번 슬라이드 보기</span></button>';
					},
					total: $SlideControl.find('.total'),
					current: $SlideControl.find('.current'),

					//추가 기능
					variableWidth: false,
					autoArrow: $('.visual .auto'),
					isRunOnLowIE: false,
					pauseOnArrowClick: true,
					pauseOnDirectionKeyPush: true,
					pauseOnSwipe: true,
					pauseOnDotsClick: true,
					pauseText: '정지',
					playText: '재생',
					responsive: [
						{
							breakpoint: 1001,
							settings: {
								swipe: true,
								draggable: true
							}
						}]
				});


				//이벤트탭 슬라이드
				var $eventTabSlide = $('.event_tab .tab_content');
				$eventTabSlide.each(function () {
					var $this = $(this),
						$slide = $this.find('.slide_list'),
						$slideDots = $this.find('.dots');
					$slide.slick({
						autoplay: true,
						arrows:false,
						dots: true,
						appendDots: $slideDots,
						dotsClass: 'slick-dots clearfix',
						slidesToShow: 4,
						slidesToScroll: 4,
						infinite: true,
						swipe: false,
						draggable: false,
						variableWidth:false,
						//추가 기능
						isRunOnLowIE: false,
						pauseOnArrowClick: true,
						pauseOnDirectionKeyPush: true,
						pauseOnSwipe: true,
						pauseOnDotsClick: true,
						responsive: [
							{
								breakpoint: 1001,
								settings: {
									swipe: true,
									draggable: true,
									swipeToSlide: true,
									slidesToShow: 3,
									slidesToScroll: 3,

								}
							},
							{
								breakpoint: 851,
								settings: {
									swipe: true,
									draggable: true,
									swipeToSlide: true,
									slidesToShow: 2,
									slidesToScroll: 2,

								}
							},
							{
								breakpoint: 801,
								settings: {
									swipe: true,
									draggable: true,
									swipeToSlide: true,
									slidesToShow: 3,
									slidesToScroll: 3,

								}
							}
							,
							{
								breakpoint: 601,
								settings: {
									swipe: true,
									draggable: true,
									swipeToSlide: true,
									slidesToShow: 2,
									slidesToScroll: 2,

								}
							}
						]
					});

				});

				// 행사상품(event) 탭
				var $eventTab = $('.event_tab'),
					$eventButton = $eventTab.find('.tab_btn'),
					$eventContent = $eventTab.find('.tab_content');

				$eventButton.click(function () {
					var $this = $(this),
						thisTitle = $this.text(),
						index = $eventButton.index(this);
					$eventButton.parent().removeAttr('title').removeClass("active");
					$this.parent().addClass("active").attr('title', thisTitle + ' 열림');
					$eventContent.addClass("active").attr('title', '열림');
					$eventContent.eq(index).addClass('active').siblings('.tab_content').removeClass('active').removeAttr('title');

				});
				$('.event_tab .tab_btn').on('click', function () {
					var $this = $(this),
						$MyParent = $this.parent('.tab_item'),
						ParentIndex = $MyParent.index(),
						$MyCon = $('.event_tab').find('.tab_content').eq(ParentIndex),
						$Myslide = $MyCon.find('.slide_list');
					$Myslide.slick('setPosition');
				});

				//only이마트 슬라이드
				$(window).on('load resize', function(){
					var $onlyEmart = $('.only_emart'),
						$onlyEmartSlide = $onlyEmart.find('.slide_list');

					$onlyEmartSlide.slick({
						autoplay: false,
						arrows:false,
						dots: false,
						slidesToShow: 3,
						slidesToScroll: 1,
						infinite: false,
						swipe: false,
						draggable: false,
						centerMode: true,
						responsive: [
							{
								breakpoint: 9999,
								settings: 'unslick'
							},
							{
								breakpoint: 1001,
								settings: {
									swipe: true,
									draggable: true,
									swipeToSlide: true
								}
							}
						]
					});
				});
				


				//스토리 슬라이드
				var $story = $('.story'),
					$storySlide = $story.find('.slide_list'),
					$storyControl = $story.find('.control_box');

				$storySlide.slick({
					autoplay: false,
					arrows:true,
					dots: false,
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: false,
					swipe: false,
					draggable: false,
					prevArrow: $storyControl.find('.prev'),
					nextArrow: $storyControl.find('.next'),
					variableWidth:true,
					//추가 기능
					isRunOnLowIE: false,
					pauseOnArrowClick: true,
					pauseOnDirectionKeyPush: true,
					pauseOnSwipe: true,
					pauseOnDotsClick: true,
					responsive: [
						{
							breakpoint: 1451,
							settings: {
								swipe: true,
								draggable: true,
								swipeToSlide: true
							}
						}
					]
				});

				$storySlide.on('beforeChange', function(event, slick, currentSlide, nextSlide){
					if($(this).hasClass('odd')){
						$(this).removeClass('odd').addClass('even');
					}else{
						$(this).removeClass('even').addClass('odd');
					}
				});

				//풋터 패밀리사이트
				$('.family_site .family_btn').on('click', function () {
					var $this = $(this),
						$Parent = $this.parent('.family_site'),
						IsActive = $Parent.is('.active'),
						$Layer = $this.siblings('.layer');
					if (!IsActive) {
						$Parent.addClass('active');
						$this.attr('title', '패밀리사이트 닫기');
						$Layer.slideDown();
					} else {
						$Parent.removeClass('active');
						$this.attr('title', '패밀리사이트 열기');
						$Layer.slideUp();
					};
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