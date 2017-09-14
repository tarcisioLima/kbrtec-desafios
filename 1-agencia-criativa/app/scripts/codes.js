
//Scroll
$(document).scroll(function(){
	let scroll = $(this).scrollTop();
	scroll > 300 ? $('#go-to-top').fadeIn() : $('#go-to-top').fadeOut();	
});

$('#go-to-top').click(function(){
	$('html,body').animate({ scrollTop: 0 }, 'slow');
});


$('.nav-fill .nav-item .nav-link').click(function(e) {
	$('.nav-fill .nav-item .nav-link').removeClass('active');         
    $(this).addClass('active');    
    switchDataPills($(this).data('projeto-nome'));
    return false;        
});

function switchDataPills(dataType) {
   $('.galeria-projetos figure').hide();
	dataType ===  'todos' ? $('.galeria-projetos figure').fadeIn() 
						  : $(".galeria-projetos").find("[data-projeto-item='" + dataType + "']").fadeIn();	
}

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