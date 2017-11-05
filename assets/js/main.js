(function() {
	// Call yo self
	// https://stackoverflow.com/questions/9899372/pure-javascript-equivalent-of-jquerys-ready-how-to-call-a-function-when-t

	// Carousel
	var swiper = new Swiper('.swiper-container', {
		// direction: 'vertical',effect: 'fade',
		spaceBetween: 0,
    keyboard: {
      enabled: true,
    },
    speed: 600,
    parallax: true,
		autoplay: {
			delay: 7000,
			disableOnInteraction: false,
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
	});

})();
