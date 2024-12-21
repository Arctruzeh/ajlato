(() => {
	skel.breakpoints({
		xlarge: '(max-width: 1680px)',
		large:  '(max-width: 1280px)',
		medium: '(max-width: 980px)',
		small:  '(max-width: 736px)',
		xsmall: '(max-width: 480px)'
	});

	const body = document.body;
	body.classList.add('is-loading');

	window.addEventListener('load', () => {
		setTimeout(() => {
			body.classList.remove('is-loading');
		}, 100);
		window.dispatchEvent(new Event('scroll'));
	});
})();

if (!('scrollBehavior' in document.documentElement.style)) {
  // Import and use a small polyfill only when needed
  import('scroll-behavior-polyfill');
}
