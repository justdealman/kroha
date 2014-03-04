$(document).ready(function() {
	$('.dropf button').click(
		function() {
			if ($('.footer').is(':visible') == false) {
				$('.footer').slideDown(500);
				$(this).parent().height(58);
				$('html, body').animate({ scrollTop: $(document).height() }, 500);
				return false;
			}
			else {
				$('.list').delay(500).queue(function(){ $(this).removeClass('active'); $(this).dequeue(); });
				$('.list > li > div > ul').slideDown(250);
				$('.footer').slideUp(500);
				$(this).parent().delay(500).queue(function(){ $(this).height(61); $(this).dequeue(); });
				return false;
			}
		}
	);
	$('.list li button').click(
		function() {
			if ($('.list > li > div > ul').is(':visible') == true) {
				$('.list').delay(0).queue(function(){ $(this).addClass('active'); $(this).dequeue(); });
				$('.list > li > div > ul').slideUp(500);
				$('.footer').slideDown(500);
				$('.dropf').height(58);
				$('html, body').animate({ scrollTop: $(document).height() }, 500);
				return false;
			}
			else {
				$('.list').removeClass('active');
				$('.list > li > div > ul').slideDown(250);
				$('.footer').slideUp(500);
				$('.dropf').delay(250).queue(function(){ $(this).height(61); $(this).dequeue(); });
				return false;
			}
		}
	);
	$('.top .logo p span a, .rb .submit button').click(
		function() {
			$('.form').fadeIn(500);
			return false;
		}
	);
	$('.form .close, .form p.hide span a').click(
		function() {
			$('.form').fadeOut(500);
			return false;
		}
	);
    $(this).keydown(function(eventObject){
        if (eventObject.which == 27)
        $('.form').fadeOut(250);
    });
	$('.team li div img').each(function() {
		margin = - ($(this).width() / 2);
		$(this).css({'margin-left': margin + 'px'})
	});
	$('.team li div').append('<span class="hover"></span>');
	$('.team li').hover(
		function() {
			$(this).find('.hover').fadeIn(250);
		},
		function() {
			$(this).find('.hover').fadeOut(250);
		}
	);
	
	$('.hoverarea').hover(
		function() {
			$('.march8n').addClass('animate');
		},
		function() {
			$('.march8n').removeClass('animate');
		}
	);
	/*
	var count = 0;
	$('.int1').css({'opacity': '1'});
	$('.hoverarea').hover(
		function() {
			count++;	
			if(count == 1){
				$('.int4').animate({'opacity': '0'}, 250);
				$('.int1').delay(250).animate({'opacity': '1'}, 1500);
				$('.int1.dynamic').addClass('animate');
			}
			if(count == 2){
				$('.int1').animate({'opacity': '0'}, 250);
				$('.int2').delay(250).animate({'opacity': '1'}, 1500);
				$('.int2.dynamic').addClass('animate');
			}
			if(count == 3){
				$('.int2').animate({'opacity': '0'}, 250);
				$('.int3').delay(250).animate({'opacity': '1'}, 1500);
				$('.int3.dynamic').addClass('animate');
			}
			if(count == 4){
				$('.int3').animate({'opacity': '0'}, 250);
				$('.int4').delay(250).animate({'opacity': '1'}, 1500);
				$('.int4.dynamic').addClass('animate');
				count = 0;
			}
		}, 
		function() {
			$('.int1.dynamic, .int2.dynamic, .int3.dynamic, .int4.dynamic').removeClass('animate');
		}
	);*/
	$('input, textarea').each(function () {
		$(this).data('holder',$(this).attr('placeholder'));
		$(this).focusin(function(){
			$(this).attr('placeholder','');
		});
		$(this).focusout(function(){
			$(this).attr('placeholder',$(this).data('holder'));
		});
	});
	$('select').uniform();
	$('.lb .nav > li').each(function() {
		var menuheight = $(this).find('a').height();
		if (menuheight < 50) {
			$(this).find('a').css({'padding': '36px 40px 24px 20px'});
		}
	});
	$('.lb .nav > li.active').each(function() {
		var menuheight = $(this).find('a').height();
		if (menuheight < 50) {
			$(this).find('a').css({'padding': '35px 40px 25px 20px'});
		}
	});
	$('.rb h4 span').click(
		function() {
			$('.rb > div.more').slideToggle(250);
			return false;
		}
	);
	$('.rb .info strong.more').click(
		function() {
			$('.rb .info div.more').slideToggle(250);
			return false;
		}
	);
	$('.address li:first-child').css({'margin-right': '56px'});
	$('.address li:last-child, .list > li:last-child, .footer .map li:last-child').css({'float': 'right'});
});