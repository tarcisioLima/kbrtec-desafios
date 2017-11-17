
$(document).ready(function(){
  $('.carousel-cp').slick({
  	dots: true,
  	customPaging: function(slider, i) { 
  		return '<a>' + (i + 1) + '</a>';
  	}
  });
  // $('.carousel-cp').on('beforeChange', function(event, slick, currentSlide, nextSlide){ 
  // 		$('.carousel-cp .slick-dots li').eq(currentSlide).removeClass('slick-prev-active');
  // });

  $('.carousel-cp').on('afterChange', function(event, slick, currentSlide, nextSlide){
	 var c = currentSlide + 1;	 
	 var prev = null;
	 if(c === 1){
	 	prev = 3;	
	 }else {
	 	prev = c - 1;
	 }
	 // $('.carousel-cp .slick-dots li').removeClass('slick-prev-active');

	 // $('.carousel-cp .slick-dots li').eq(prev).addClass('slick-prev-active');
	 console.log('current ', currentSlide + 1);
	 console.log('prev ', prev);
	 
	 // $('.carousel-cp .slick-dots li').removeClass('slick-prev-active');
	 
	 $('.carousel-cp .slick-dots li').eq(prev).addClass('slick-prev-active');
  });

});

