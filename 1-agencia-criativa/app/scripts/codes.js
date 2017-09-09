

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