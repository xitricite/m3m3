(function() {
	// Call yo self
	// https://stackoverflow.com/questions/9899372/pure-javascript-equivalent-of-jquerys-ready-how-to-call-a-function-when-t

	// Carousel
	var swiper = new Swiper('.swiper-container', {
		// direction: 'vertical',effect: 'fade',
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
	});

})();
