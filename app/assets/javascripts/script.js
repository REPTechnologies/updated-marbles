$(document).ready(function(){
  
	// hide .navbar first
	$("header.fixed").hide();
	
	// fade in .navbar
	$(function () {
		$(window).scroll(function () {
            // set distance user needs to scroll before we fadeIn navbar
			if ($(this).scrollTop() > 150) {
				$('header.fixed').fadeIn();
			} else {
				$('header.fixed').fadeOut();
			}
		});

	
	});
	

	$('#bannerphoto').addClass('fastanimate');
    setTimeout( function() { $('#discovertext').addClass('fastanimate'); }, 300)
	setTimeout( function() { $('#phone').addClass('fastanimate'); }, 1100)
	setTimeout( function() { $('#monitor').addClass('fastanimate'); }, 600)

	$(window).scroll(function(event){

		var y = $(this).scrollTop();

 if (y >= 260) {
            $('.center-icons span').addClass('animate');
			setTimeout( function() { $('#balance').addClass('animate'); }, 350)
            setTimeout( function() { $('#find').addClass('animate'); }, 550)
            setTimeout( function() { $('#share').addClass('animate'); }, 750)
            setTimeout( function() { $('#dial').addClass('animate'); }, 850)
		}

		if (y >= 260) {
            $('.center-icons span').addClass('animate');
			setTimeout( function() { $('#light').addClass('animate'); }, 350)
            setTimeout( function() { $('#scale').addClass('animate'); }, 550)
            setTimeout( function() { $('#tracks').addClass('animate'); }, 750)
		}


		if (y >= 380) {
			$('#section1').addClass('fastanimate');
		}
        
        if (y >= 900) {
			$('#section2').addClass('fastanimate');
		}

        if (y >= 1050) {
			$('#section3').addClass('fastanimate');
		}
        
        if (y >= 1400) {
			$('#track').addClass('fastanimate');
		}

	});


});
	

	
