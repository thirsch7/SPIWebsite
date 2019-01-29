window.addEventListener('load', function(){
	console.log('homepage.js connected');
	var pastPoint = 2; //0: < 480 | 1: < 768 | 2: >= 768
	var windowWidth = window.innerWidth;

	var student = $('#studentWrap')[0];
	var policy = $('#policyWrap')[0];
	var initiative = $('#initiativeWrap')[0];
	
	var studSpan = $('#student')[0];
	var polSpan = $('#policy')[0];

	console.log(student);
	console.log(policy);
	console.log(initiative);
	if (windowWidth < 768){
		student.classList.remove('text-right');
		student.classList.add('text-center');
		initiative.classList.remove('text-left');
		initiative.classList.add('text-center');
		
		studSpan.style.paddingRight = '0px';
		polSpan.style.paddingRight = '0px';
		if (windowWidth < 480){
			$('.titleText').each(function(){
				console.log($(this));
				$(this)[0].style.fontSize = '1.5em';
			});
			pastPoint = 0;
		}
		else{
			pastPoint = 1;
			
			
			console.log($('.titleText'));
			
			$('.titleText').each(function(){
				console.log($(this));
				$(this)[0].style.fontSize = '2em';
			});
		}
	}

	window.addEventListener('resize', function(){
		windowWidth = window.innerWidth;
			
		if (windowWidth < 768){
			if (pastPoint > 1){
				student.classList.remove('text-right');
				student.classList.add('text-center');
				initiative.classList.remove('text-right');
				initiative.classList.add('text-center');
				
				studSpan.style.paddingRight = '0px';
				polSpan.style.paddingRight = '0px';
			}
			
			if (windowWidth < 480 && pastPoint > 0){
				pastPoint = 0;
				
				$('.titleText').each(function(){
					$(this)[0].style.fontSize = '1.5em';
				});
			}
			else if (windowWidth >= 480 && pastPoint != 1){
				pastPoint = 1;
				
				$('.titleText').each(function(){
					$(this)[0].style.fontSize = '2em';
				});
			}
			
		}
		else if (pastPoint < 2){
			pastPoint = 2;
		
			student.classList.remove('text-center');
			student.classList.add('text-right');
			initiative.classList.remove('text-center');
			initiative.classList.add('text-left');
			
			studSpan.style.paddingRight = '12%';
			polSpan.style.paddingRight = '12%';
			
			$('.titleText').each(function(){
				console.log($(this));
				$(this)[0].style.fontSize = '3.3vw';
			});
		}
	});
});