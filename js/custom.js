// carousel
$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});

$("#news_carousel").owlCarousel({
	autoplay:true,
	autoplayTimeout: 2000,
	autoplayHoverPause:false,
	 margin: 10,
	 items : 3,
     loop: true,
     nav: false,
     center: true,
     dots: true,
     smartSpeed: 650,
     autoWidth: false,
     // autoplayTimeout: 15,
     responsiveClass: true,

 });

$("#team_carousel").owlCarousel({
	autoplay:true,
	autoplayTimeout: 2000,
	autoplayHoverPause:false,
	loop: true,
    margin: 15,
    items : 4,
    center: false,
    smartSpeed: 650
});