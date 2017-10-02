

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
	$('.overlay').fadeIn();
	$('.navegacao-expansivel').show();

});


//Map Options Factory
let mapaOptions = function(lat, long){
	return {
	  center: new google.maps.LatLng(lat, long),
	  zoom: 17,
      mapTypeId: google.maps.MapTypeId.ROADMAP
	}
}

function meuMapa() {
	new google.maps.Map(document.getElementById("meuMapa1"), mapaOptions(-23.525529, -46.626248));
	new google.maps.Map(document.getElementById("meuMapa2"), mapaOptions(-23.967356, -46.324333));
	new google.maps.Map(document.getElementById("meuMapa3"), mapaOptions(-5.148969, -37.357346));
}