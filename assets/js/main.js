(function($) {

	skel.breakpoints({
		xlarge:	'(max-width: 1680px)',
		large:	'(max-width: 1280px)',
		medium:	'(max-width: 980px)',
		small:	'(max-width: 736px)',
		xsmall:	'(max-width: 480px)'
	});

	$(function() {

		var $window = $(window),
			$body = $('body');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				window.setTimeout(function() {
					$body.removeClass('is-loading');
				}, 100);
			});

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Banner.
			var $banner = $('#banner');

			if ($banner.length > 0) {
				// More button.
				$banner.find('.more')
					.addClass('scrolly');
			}

		// Scrolly.
			$('.scrolly').scrolly();

		// Poptrox
		$(document).ready(function() {
			var $thumbs = $('.thumbnails');
			
			if ($thumbs.length > 0) {
				// Small delay to ensure DOM is fully ready
				setTimeout(function() {
					$thumbs.poptrox({
						onPopupClose: function() { $body.removeClass('is-covered'); },
						onPopupOpen: function() { $body.addClass('is-covered'); },
						baseZIndex: 10001,
						useBodyOverflow: false,
						usePopupEasyClose: true,
						overlayColor: '#000000',
						overlayOpacity: 0.75,
						popupLoaderText: '',
						fadeSpeed: 500,
						usePopupDefaultStyling: false,
						windowMargin: 50,
						usePopupCaption: true,
						popupCloserText: '',
						selector: '.thumbnail a.image' // Specify the correct selector
					});
				}, 100);
			}
		});

		// Initial scroll.
			$window.on('load', function() {
				$window.trigger('scroll');
			});

	});

})(jQuery);