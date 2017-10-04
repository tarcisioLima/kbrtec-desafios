// $('.imagens-galeria').slick(); 

 $('.imagens-galeria').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  centerMode: true,
  asNavFor: '.preview',
  initialSlide: 0,
  mobileFirst: true
});
$('.preview').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  asNavFor: '.imagens-galeria',
  dots: false,
  centerMode: false,
  focusOnSelect: true, 
  arrows: false,
  initialSlide: 0,
  mobileFirst: true,
  responsive: [
  	{
      breakpoint: 1200,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
      
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
      
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 0,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }]
});

$('#galeria .prev').click(function(){
    $("#galeria .preview").slick('slickPrev');
});

$('#galeria .next').click(function(){
    $("#galeria .preview").slick('slickNext');
});