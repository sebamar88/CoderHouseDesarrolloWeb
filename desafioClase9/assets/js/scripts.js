new Splide( '.splide', {
	type   : 'loop',
	perPage: 3,
	focus  : 'center',
    breakpoints: {
		640: {
			perPage: 1,
		},
	}
} ).mount();

lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true,
    'showImageNumberLabel': false
  })