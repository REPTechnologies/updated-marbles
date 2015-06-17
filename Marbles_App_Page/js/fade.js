// Fade JavaScript code

/*var divs = $('div[id^="row-content-"]');
console.log("LENGTH: " + divs.length);*/
/*var $viewer = $('.image-slide-viewer');
divs.hide();
var i = 0;
(function cycle() {
	divs.eq(i).fadeOut(1000);
})();*/

   var el = $('div[id^="row-content-"]'),
    n = el.length,
    c = 0;
el.hide();
el.eq(c).show();
$(document).ready(function(e) {
(function loop() {
    el.delay(4000).fadeOut(800).eq(++c%n).fadeIn(800, loop);
}()); 
});