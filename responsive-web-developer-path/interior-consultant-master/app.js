const btn = document.querySelector('#hamburger-icon');
const nav = document.getElementById('nav__links');

btn.addEventListener('click', function () {
	nav.classList.toggle('active');
	btn.innerText === 'menu'
		? (btn.innerText = 'close')
		: (btn.innerText = 'menu');
});

window.addEventListener(
	'resize',
	function () {
		// fire when above 1000
		if (document.documentElement.clientWidth > 1000) {
			nav.classList.remove('active');
			btn.innerHTML = 'menu';
		}
	},
	true
);
