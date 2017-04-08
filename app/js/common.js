$(document).ready(function() {

	$(".toggle-menu").click(function() {
		$(this).toggleClass("on");
		$(".main-mnu").slideToggle();
		return false;
	});
});

$(document).ready(function() {
	$(".item").magnificPopup({
		type : 'image',
		gallery : {
			enabled : true
		},
		removalDelay: 300,
		mainClass: 'mfp-fade'
	});
});

$(document).ready(function() {
	$(".slider").owlCarousel({
		items : 1,
		nav : true,
		navText : "",
		loop : true,
		autoplay : true,
		autoplayHoverPause : true,
		fluidSpeed : 600,
		autoplaySpeed : 600,
		navSpeed : 600,
		dotsSpeed : 600,
		dragEndSpeed : 600
	});
});

$(document).ready(function() {
	$("#slider").owlCarousel({
		items : 1,
		nav : true,
		navText : "",
		loop : true,
		autoplay : true,
		autoplayHoverPause : true,
		fluidSpeed : 600,
		autoplaySpeed : 600,
		navSpeed : 600,
		dotsSpeed : 600,
		dragEndSpeed : 600
	});
});

$(document).ready(function(){
    $(".main-mnu").on("click","a", function (event) {
		event.preventDefault();
	        var id  = $(this).attr('href'),	 
	            top = $(id).offset().top;
     $('body,html').animate({scrollTop: top}, 1500);
   });
});

$(document).ready(function(){
    $('body').append("<a href='#header-slide' class='btn-up' /a>");
   		$('btn-up').click(function() {

		$('body, html').animate({scrollTop: 0}, "slow");
	});

   	$(window).scroll(function(){ 
	 	if($(window).scrollTop() > 650){
	 	 $('.btn-up').addClass('active'); 
	 	}
	 	 else{ 
	 	 $('.btn-up').removeClass('active'); 
	 	}
	 }); 
});

$(".section_3").waypoint(function() {

		$(".section_3 .s3-item-wrap").each(function(index) {
			var ths = $(this);
			setInterval(function() {
				ths.addClass("on");
			}, 350*index);
		});
	}, {
		offset : "25%"
	});

$(function() {

	 $(".s2-content-wrap h2,.section_3 .section-head h1, .section_3 .section-head p, .section_4 h1, .section_4 p, .section_5 h1").animated("fadeInRight");
	 $(".brands-right-wrap a, .brands-right-wrapper a").animated("bounceInUp");

	 $("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
    $(".preloader").fadeOut();
});