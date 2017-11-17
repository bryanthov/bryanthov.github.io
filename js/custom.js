$(document).ready(function() { 

	// Scroll Down Link
	$('.scrolldown').click(function() {
		var targetOffset = $('.home.hero').height()+2;
		$('html,body').animate({scrollTop: targetOffset}, 1000);
	});

	// Menu Scroll Hide
	var nav = $('.menubar');
	var scroll = $('.menubar').attr('data-scroll');
	$(function(){
		$('.menubar').data('size','big');
		if (scroll == 'false') {
			nav.css({
				marginTop:'0px'
			});
		};
	});
	$(window).scroll(function(){
		if ($(window).scrollTop() > $('.home.hero').height()/2 && scroll == 'true') {
			if (nav.data('size') == 'big') {
				nav.data('size','small').stop().animate({
					marginTop:'0px'
				}, 300);
			}
		} else {
			if (nav.data('size') == 'small' && scroll == 'true') {
				nav.data('size','big').stop().animate({
					marginTop:'-80px'
				}, 300);
			}
			
		}
	});

	// Text Rotator
	$('.rotate').each(function(){
		var el = $(this);
		var text = $(this).html().split(",");
		el.html(text[0]);
		setInterval(function() {
			el.animate({
              textShadowBlur:20,
              opacity: 0
            }, 500 , function() {
              index = $.inArray(el.html(), text)
              if((index + 1) == text.length) index = -1
              el.text(text[index + 1]).animate({
                textShadowBlur:0,
                opacity: 1
              }, 500 );
            });
		}, 2000);
	});

	// Services Icon Hover
	var original_text = $('p#services').text();
	var services_p = $('p#services');
	$('div.servicesitem').hover(
		function () {
			var text = $(this).children('.front').children('p').text();
			$(services_p).fadeOut(200,function(){ $(services_p).text(text).fadeIn(200); });
		},
		function () {
			$(services_p).fadeOut(200,function(){ $(services_p).text(original_text).fadeIn(200); });
		}
	);

	// Quote Hover
	$('div.quotefade').hover(
		function () {
			$(this).children('div.quotehover').fadeIn('slow');
		},
		function () {
			$(this).children('div.quotehover').fadeOut('slow');
		}
	);

	// Portfolio
	$(function(){
		$('ul.portfolio').mixitup({
			targetSelector: '.item',
			filterSelector: '.filter',
			easing: 'smooth',
			effects: ['fade'],
			layoutMode: 'grid',
			targetDisplayGrid: 'inline-block'
		});
	});

	// FL
	$(function(){
		$('ul.fl').mixitup({
			targetSelector: '.item',
			filterSelector: '.filter',
			easing: 'smooth',
			effects: ['fade'],
			layoutMode: 'grid',
			targetDisplayGrid: 'inline-block'
		});
	});

	// Carousel Hover
	$('div.section.block').hover(
		function () {
			$(this).children('div.hover').fadeIn('slow');
			$(this).children('div.content').fadeOut('slow');
		},
		function () {
			$(this).children('div.hover').fadeOut('slow');
			$(this).children('div.content').fadeIn('slow');
		}
	);

	$('div.section.full').slick({
  	  infinite:true,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  touchMove: true,
	  touchThreshold: 1,
	  swipe:true,
	  swipeToSlide: true,
	  draggable: true,
	  dots: true,
	  autoplay: true,
	  autoplaySpeed:1000
	});
	

    // Rotate Carousel with left and right
	$(document).keydown( 
		function(eventObject) {
		     if(eventObject.which==37) {//left arrow
		    	$('.slick-prev').trigger('click'); //emulates click on prev button 
		     } else if(eventObject.which==39) {//right arrow
		        $('.slick-next').trigger('click'); //emulates click on next button
		     }
		} 
	);

});

/******************************************************************
Made by Bryan Thov - 2017
Adapted from Template - Treviso							
Designed & Handcrafted by Zan from ninetofive.me								
******************************************************************/