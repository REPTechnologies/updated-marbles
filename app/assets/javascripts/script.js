$(document).ready(function(){


	$('#bannerphoto').addClass('fastanimate');
    setTimeout( function() { $('#discovertext').addClass('fastanimate'); }, 300)
	setTimeout( function() { $('#phone').addClass('fastanimate'); }, 1100)
	setTimeout( function() { $('#monitor').addClass('fastanimate'); }, 600)

	$(window).scroll(function(event){

		var y = $(this).scrollTop();

 
		if (y >= 260) {
            $('.center-icons span').addClass('animate');
			setTimeout( function() { $('#light').addClass('animate'); }, 350)
            setTimeout( function() { $('#scale').addClass('animate'); }, 550)
            setTimeout( function() { $('#tracks').addClass('animate'); }, 750)
		}


		if (y >= 580) {
			$('#section1').addClass('fastanimate');
		}
        
        if (y >= 1100) {
			$('#section2').addClass('fastanimate');
		}

        
        if (y >= 1250) {
			$('#section3').addClass('fastanimate');
		}
        
        if (y >= 1800) {
			$('#track').addClass('fastanimate');
		}

	});



});