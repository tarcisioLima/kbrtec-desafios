$(document).ready(function(){
	//Slider
	var swiper1 = new Swiper('.swiper1', {
	  navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      slidesPerView: 4,
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination-1',
        clickable: true,
      },
      breakpoints: {        
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        }
      }
    });    
    var swiper2 = new Swiper('.swiper2', {
	  navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      slidesPerView: 4,
      spaceBetween: 30,

      breakpoints: {        
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        }
      }
    });  
});