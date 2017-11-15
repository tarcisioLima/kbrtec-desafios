$(document).ready(function(){

 $('.slider-eventos').slick({
  	slidesToShow: 1,
  	slidesToScroll: 1,
  	arrows: true,
  	fade: true,
  	asNavFor: '.slider-eventos-nav'
	});
 $('.slider-eventos-nav').slick({
	  slidesToShow: 5,
	  slidesToScroll: 1,
	  asNavFor: '.slider-eventos',
	  dots: false,
	  arrows: false,	 	
	  focusOnSelect: true,
	  responsive: [
	    {	 
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 4,
	        slidesToScroll: 1
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 1
	      }
	    }]
	});
});
