
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

// Menu
// $('.navegacao-expansivel').click(function(){
// 	$(this).fadeOut();
	
// })

$('.navegacao .navegacao-principal .alternador').click(function(){
	// $('.overlay').show();
	$('.navegacao-expansivel').show();
	$('.navegacao-lista').css({transition: "1s", transform: "translateX(0%)"});

});


	