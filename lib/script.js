$(document).ready(function () {

	$(".toggle-menu").click(function () {
		$(".menu-sidebar").removeClass("hide-menu");
	});

	$(".fa-times").click(function () {
		$(".menu-sidebar").addClass("hide-menu");
	});


	$(function () {
		$('a[href*="#"]:not([href="#"])').click(function () {
			if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				if (target.length) {
					$('html, body').animate({
						scrollTop: target.offset().top -100
					}, 600);
					return false;
				}
			}
		});
	});

});
