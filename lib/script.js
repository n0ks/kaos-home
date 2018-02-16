$(document).ready(function () {

	/* Menu Jquery -- Start */

	$(".toggle-menu").click(function () {
		$(".menu-sidebar").removeClass("hide-menu");
	});

	$('.fa-times').click(function () {
		$('.menu-sidebar').addClass('hide-menu')
	});

	$('.menu-sidebar a').click(function () {
		setTimeout(() => {
			$('.menu-sidebar').addClass('hide-menu')
		}, 200);
	})

	$(function () {
		$('a[href*="#"]:not([href="#"])').click(function () {
			if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				if (target.length) {
					$('html, body').animate({
						scrollTop: target.offset().top - 100
					}, 600);
					return false;
				}
			}
		});
	});

	/* Menu Jquery -- End */


	/* Formulário com formspree */

	$("#contact-form").submit(function (e) {
		var name = document.getElementById('name'),
			email = document.getElementById('email'),
			message = document.getElementById('message');

		if (!name.value || !email.value || !message.value) {
			alertify.error('Por favor, preencha todos os campos..')
			return false;
		} else {
			$.ajax({
				url: "https://formspree.io/frat.kaos@gmail.com",
				method: "POST",
				data: $(this).serialize(),
				dataType: "json"
			});
			e.preventDefault()
			$(this).get(0).reset()
			alertify.success('Mensagem enviada!')
		}
	});
});