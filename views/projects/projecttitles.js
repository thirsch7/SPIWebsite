window.addEventListener('load', function(){
	var windowWidth = $(window).width();
	var title = $('#pageTitle');
	var leader = $('#projLeader');
	var pastPoint = 2 // 0: < 480 | 1: < 768 | 2: >= 768
	if (windowWidth < 480){
		pastPoint = 0;
		title.css('font-size', '2em');
		leader.css('font-size', '1em');
	}
	else if (windowWidth < 768){
		pastPoint = 1;
		title.css('font-size', '2.8em');
		leader.css('font-size', '1.2em');
	}
	window.addEventListener('resize', function(){
		windowWidth = $(window).width();
		if (windowWidth < 480){
			if (pastPoint > 0){
				pastPoint = 0;
				title.css('font-size', '2em');
				leader.css('font-size', '1em');
			}
		}
		else if (windowWidth < 768){
			if (pastPoint != 1){
				pastPoint = 1;
				title.css('font-size', '2.8em');
				leader.css('font-size', '1.2em');
			}
		}
		else if (windowWidth >= 768 && pastPoint != 2){
			pastPoint = 2;
			title.css('font-size', '4em');
			leader.css('font-size', '1.5em');
		}
	});
});