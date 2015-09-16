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


	
