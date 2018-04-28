$('#carouselExample').on('slide.bs.carousel', function (e) {

  
    var $e = $(e.relatedTarget);
    var idx = $e.index();
    var itemsPerSlide = 4;
    var totalItems = $('.carousel-item').length;
    
    if (idx >= totalItems-(itemsPerSlide-1)) {
        var it = itemsPerSlide - (totalItems - idx);
        for (var i=0; i<it; i++) {
            // append slides to end
            if (e.direction=="left") {
                $('.carousel-item').eq(i).appendTo('.carousel-inner');
            }
            else {
                $('.carousel-item').eq(0).appendTo('.carousel-inner');
            }
        }
    }
});


  $('#carouselExample').carousel({ 
                interval: 1000
        });


  $(document).ready(function() {
	  $('#phone').mask('+0 (000) 000-00-00');
	 /*Скроллы*/
	$("#contacts").click(function() {
		$('html, body').animate({
			scrollTop: $("#contacts-block").offset().top - 90
		}, 750);
	});
	$("#energy-building").click(function() {
		$('html, body').animate({
			scrollTop: $("#energy-building-block").offset().top - 90
		}, 750);
	});
	
	$(".order-recall").click(function() {
		$('html, body').animate({
			scrollTop: $("#order-recall-block").offset().top - 90
		}, 750);
	});
	/**/

	$(".nav-link").click(function() {
		$(".nav-item").removeClass( 'active' );
		this.parentNode.classList.add('active' );
	});
	
  });