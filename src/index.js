$(document).ready(function(){
    $('.slider').slick({
        dots: true,
        arrows: false,
        
        // fade: true,
    });
    $('.animation').slick({
        arrows: false,
        // fade: true,
        autoplay: true,
        autoplaySpeed: 5000, 
       });
  });

  AOS.init();