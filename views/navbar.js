console.log('navbar.js connected');
var logo, projLink, projDrop, projWrap;
window.addEventListener('load', function(){
	projLink = $('#projLink')[0];
	projDrop = $('#projDrop')[0];
	projWrap = $('#fixedDropWrap')[0];
	
	projLink.onmouseover = function(){
		console.log('mouse over');
		projDrop.style.display = 'block';
	}
	projWrap.onmouseleave = function(){
		projDrop.style.display = 'none';
	}
	
	
	logo = $('#spilogo')[0];
	logo.onmouseover = function(){
		logo.src = 'SPILogoGray.png';
	}
	logo.onmouseleave = function(){
		logo.src = 'SPILogo.png';
	}
	
	document.body.addEventListener('click', function(event){
		console.log(event.clientX);
	});
});