
	


$('.nav-pills .nav-item').click(function(e) {	
	console.log($.each($('.nav-pills .nav-item').toArray(), function(i, v){
		console.log(v);
		$(v).removeClass("active");

	}));	
	return false;
});


function meuMapa() {
	var map = new google.maps.Map(document.getElementById('mapa'), {
      zoom: 15,
      center: {lat: -23.952296, lng: -46.331355},
      mapTypeControl: true,
      mapTypeControlOptions: {
        style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
        mapTypeIds: ['roadmap', 'terrain']
      }
	});

} 