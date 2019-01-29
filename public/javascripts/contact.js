window.addEventListener('load', function(){
	var pastBig = true;
	var windowWidth = $(window).width();
	var leftForms = $('#leftForms');
	var projForm = $('#project');
	var hr = $('<hr>');
	//hr.id = 'rule';
	
	if (windowWidth < 975){
		pastBig = false;
		leftForms.css('border-right', 'none');
		hr.insertAfter(projForm);
	}
	
	window.addEventListener('resize', function(){
		windowWidth = $(window).width();
		if (windowWidth < 975 && pastBig){
			pastBig = false;
			leftForms.css('border-right', 'none');
			hr.insertAfter(projForm);
		}
		else if (windowWidth > 975 && !pastBig){
			pastBig = true;
			leftForms.css('border-right', '1px solid hsl(204,11%,50%)');
			hr.remove();
		}
		
	});
});