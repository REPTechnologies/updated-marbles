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
	

/////////////////////////////////////////////////// ALAN GI'S RESPONSIVE NAV BAR ///////////////////////////////////////


// Sticky Header
$(window).scroll(function() {

    if ($(window).scrollTop() >= 100) {
        $('.main_h').addClass('sticky');
        $('#logo').addClass('sticky');
    } else {
        $('.main_h').removeClass('sticky');
        $('#logo').removeClass('sticky');
    }
});


// Mobile Navigation
$('.mobile-toggle').click(function() {
    if ($('.main_h').hasClass('open-nav')) {
        $('.main_h').removeClass('open-nav');
    } else {
        $('.main_h').addClass('open-nav');
    }

});

$('.main_h li a').click(function() {
    if ($('.main_h').hasClass('open-nav')) {
        $('.navigation').removeClass('open-nav');
        $('.main_h').removeClass('open-nav');
    }
});

$('.mobile-toggle').click(function() {

});

$('.fixed li a').click(function() {
    if ($('.fixed').hasClass('open-nav')) {
        $('.navigation').removeClass('open-nav');
        $('.fixed').removeClass('open-nav');
    }
});

x

	
