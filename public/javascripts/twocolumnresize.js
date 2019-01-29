const margin = '15%';

window.addEventListener('load', function(){
	var pastBig = true;
	var windowWidth = $(window).width();
	
	if (windowWidth < 975){
		$('.twoColumn').each(function(){
			pastBig = false;
			$(this)[0].style.marginLeft = margin;
			$(this)[0].style.marginRight = margin;
			$(this)[0].style.marginBottom = '10px';
		});
	}
	else{
		$('.leftMost').each(function(){
			$(this).css('margin-left', '16.66666667%');
		});
	}
	
	window.addEventListener('resize', function(){
		windowWidth = $(window).width();
		if (pastBig && windowWidth < 975){
			pastBig = false;
			$('.twoColumn').each(function(){
				$(this)[0].style.marginLeft = margin;
				$(this)[0].style.marginRight = margin;
				$(this)[0].style.marginBottom = '10px';
			});
		}
		else if (!pastBig && windowWidth >= 975){
			console.log('switching to big window');
			pastBig = true;
			$('.twoColumn').each(function(){
				$(this)[0].style.marginLeft = '0%';
				$(this)[0].style.marginRight = '0%';
				$(this)[0].style.marginBottom = '0px';
			});
			
			$('.leftMost').each(function(){
				$(this).css('margin-left', '16.66666667%');
			});
		}
	});
	
});