/******************************************************************
*******************************************************************

Template Name: Treviso
Theme URI: http://themeforest.ninetofive.me/treviso/
Description: Responsive HTML5 Template
Author: ninetofive
Author URI: http://www.ninetofive.me
Version: 1.0
							
Designed & Handcrafted by Zan from ninetofive.me
									
*******************************************************************
******************************************************************/

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
		if ($('body').scrollTop() > $('.home.hero').height()/2 && scroll == 'true') {
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

	// Start Carousel
	$('div.section.full').jcarousel();

    $(function() {
        var jcarousel = $('div.section.full');

        jcarousel
            .on('jcarousel:reload jcarousel:create', function () {
                var carousel = $(this),
                    width = carousel.innerWidth();
                carousel.jcarousel('items').css('width', Math.ceil(width) + 'px');
            })
            .jcarousel({
                wrap: 'circular', animation: 0
            })
         //    .jcarouselAutoscroll({
         //    interval: 1000,
         //    target: '+=1',
         //    autostart: true
        	// });

        $('.jcarousel-control-prev')
            .jcarouselControl({
                target: '-=1'
            });

        $('.jcarousel-control-next')
            .jcarouselControl({
                target: '+=1'
            });
    });

    // Rotate Carousel with left and right
	$(document).keydown( 
		function(eventObject) {
		     if(eventObject.which==37) {//left arrow
		    	$(".jcarousel-control-prev").trigger('click'); //emulates click on prev button 
		     } else if(eventObject.which==39) {//right arrow
		        $(".jcarousel-control-next").trigger('click'); //emulates click on next button
		     }
		} 
	);
});