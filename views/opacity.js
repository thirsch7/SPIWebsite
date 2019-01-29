/*window.addEventListener('load', function(){
	var scrollTop = $(window).scrollTop();
	var windowHeight = $(window).height();
	var maxScrollTop = $(document).height() - windowHeight;
	var exp, opacity, imgTop;
	
	var imgs = $('.opacity');
	
	imgs.each(function(){
		imgTop = maxScrollTop > $(this).offset().top ? maxScrollTop - $(this).height() : $(this).offset().top - $(this).height();
		console.log(imgTop);
		exp = (scrollTop - imgTop + windowHeight / 4) / 100;
		opacity = -1/(1 + Math.pow(Math.E, exp)) + 1;
		$(this).css('opacity', '' + opacity);
	});
		
	window.addEventListener('scroll', function(){
		maxScrollTop = $(document).height() - $(window).height();
		scrollTop = $(window).scrollTop();
		
		imgs.each(function(){
			imgTop = maxScrollTop > $(this).offset().top ? maxScrollTop - $(this).height() : $(this).offset().top - $(this).height();
			console.log(imgTop);
			exp = (scrollTop - imgTop + windowHeight / 4) / 100;
			opacity = -1/(1 + Math.pow(Math.E, exp)) + 1;
			$(this).css('opacity', '' + opacity);
		});	
	});
});*/

window.addEventListener('load', function(){
	var scrollTop = $(window).scrollTop();
	var windowHeight = $(window).height();
	var maxScrollCenter = $(document).height() - windowHeight / 2;
	var scrollCenter, imgCenter, difference, exp, opacity;
	
	var imgs = $('.opacity');
	
	imgs.each(function(){
		imgCenter = maxScrollCenter < $(this).offset().top + $(this).height() / 2 ? maxScrollCenter : $(this).offset().top + $(this).height() / 2;
		console.log(imgCenter);
		scrollCenter = $(window).scrollTop() + $(window).height() / 2;
		difference = scrollCenter - imgCenter;
		if (difference == 0)
			$(this).css('opacity', '1');
		else {
			exp = 15 * difference / windowHeight - 5;
			opacity = 0.9 / (1 + Math.pow(Math.E, exp)) + 0.1;
			$(this).css('opacity', '' + opacity);
		}
	});
		
	window.addEventListener('scroll', function(){
		maxScrollCenter = $(document).height() - $(window).height()/2;
		scrollTop = $(window).scrollTop();
		
		imgs.each(function(){
			imgCenter = maxScrollCenter < $(this).offset().top + $(this).height() / 2 ? maxScrollCenter : $(this).offset().top + $(this).height() / 2;
			
			scrollCenter = $(window).scrollTop() + $(window).height() / 2;
			console.log('imgCenter: ' + imgCenter);
			console.log('scrollCenter: ' + scrollCenter);
			
			difference = Math.abs(scrollCenter - imgCenter);
			console.log('difference: ' + difference);
			if (difference == 0)
				$(this).css('opacity', '1');
			else {
				exp = 15 * difference / windowHeight - 5;
				opacity = 0.9 / (1 + Math.pow(Math.E, exp)) + 0.1;
				$(this).css('opacity', '' + opacity);
			}
		});
	});
});
