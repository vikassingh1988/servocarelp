$(window).scroll(function(){
  if($(this).scrollTop() > 1){
    $('nav').addClass("sticky");
  }
  else{
   $('nav').removeClass("sticky");
  }
})

// slick js
$(document).ready(function(){
 $('.banner-slider').slick({
   dots: false,
   autoplay: true,
   autoplaySpeed: 1500,
  
 });
 $('.product-slider').slick({
  dots: true,
  infinite: true,
   autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
 
});
