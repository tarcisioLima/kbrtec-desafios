

//Items slider
var totalItems = $('#main-slider .item').length;

$('#main-slider').bind('slid.bs.carousel', function() {
	
    let currentIndex =   $('div.active').index() + 1;
    $('.current').html('0' + currentIndex);

});

$('.controls-slider > div .total').html('/0' + totalItems);
