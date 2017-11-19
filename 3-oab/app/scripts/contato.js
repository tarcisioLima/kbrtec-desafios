
// Mascara
$("#telefone").mask("(99) 9999-9999");

//Mapa
function contatoMapa() {	
	var mapa = new google.maps.Map(document.getElementById("contatoMapa"), {
	  center: new google.maps.LatLng(-23.525529, -46.626248),
	  zoom: 17,
      mapTypeId: google.maps.MapTypeId.ROADMAP
	});	
	var marker = new google.maps.Marker({
      position: {lat: -23.525529, lng:-46.626248},
      map: mapa,
      animation: google.maps.Animation.DROP,
      icon: '../images/map-marker.png'
    });
}

//Form Validation
$("#contato").on("submit", function( event ) {
  event.preventDefault();
  let check = $( this ).serializeArray().filter(function(x){
  		return x == "";
  });
  console.log(check);
 if(check.length == 0) {
 	$('.alert-info').fadeIn();
 }else {
 	$('.alert-info').fadeOut();
 	alert('Preencha as campos corretamente.');
 }
});