//Scroll To top
$('#go-to-top').click(function(){
	$('html,body').animate({ scrollTop: 0 }, 'slow');
});

//Items slider
var totalItems = $('#main-slider .item').length;

$('#main-slider').bind('slid.bs.carousel', function() {	
    let currentIndex =   $('div.active').index() + 1;
    $('.current').html('0' + currentIndex);
});

$('.controls-slider > div .total').html('/0' + totalItems);

$('.navegacao .navegacao-principal .alternador').click(function(){

	$('.overlay').fadeIn();
	$('.side-nav').fadeIn().css('transform', 'translateX(0%)');
	// $('.navegacao-lista').css({transition: "1s", transform: "translateX(0%)"});

});

$('#get-back').click(function(){
	$('.overlay').fadeOut();
	$('.navegacao .side-nav').css('transform', 'translateX(100%)');
	
});


	