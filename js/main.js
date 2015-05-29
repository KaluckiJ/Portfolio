$(document).ready(function () {

// About me show text on hover
$('.easter').hover(function(){
	$('#easter-egg-text').css({
		'display':'block',
	});

$('.easter').hover(function(){
	$('#easter-egg-text').toggle()
	});

});

//Activate Modal
	$('.js-modal-activate').on('click', function(e){
		e.preventDefault(); //prevent link follow
		$('.modal-wrapper').fadeIn(); //show modal
		$('body').addClass('modal-on');//prevent scrolling
	});

	//Close Modal
	$('.js-modal-close').on('click', function(e){
		e.preventDefault();
		$('.modal-wrapper').fadeOut();
		$('body').removeClass('modal-on');
	});

	$('.phoneHome').on('click', function(){
		$.playSound('../joe-portfolio/sounds/phoneHome')
	});


})