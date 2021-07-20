(function () {

	"use strict";
	/*=====================================
	Sticky
	======================================= */
	window.onscroll = function () {
		var header_navbar = document.querySelector(".navbar-area");
		var sticky = header_navbar.offsetTop;

		if (window.pageYOffset > sticky) {
			header_navbar.classList.add("sticky");
		} else {
			header_navbar.classList.remove("sticky");
		}


		// show or hide the back-top-top button
		var backToTo = document.querySelector(".scroll-top");
		if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
			backToTo.style.display = "block";
		} else {
			backToTo.style.display = "none";
		}
	};


	//===== navbar-toggler
	let navbarToggler = document.querySelector(".navbar-toggler");
	navbarToggler.addEventListener('click', function () {
		navbarToggler.classList.toggle("active");
	})


	//WOW Scroll Spy
	var wow = new WOW({
		//disabled for mobile
		mobile: false
	});
	wow.init();



var navLinks = document.querySelectorAll(".navbar-nav .nav-item a");

navLinks.forEach(function (navLink) {
	navLink.addEventListener("click", function (event) {
		event.target.parentNode.childNodes.forEach(function (node) {
			if (!node.isEqualNode(event.target) && node.classList) {
				node.classList.toggle("show");
			}
		});
	});
});

	navLinks.forEach(e =>
		e.addEventListener('click', () => {
			e.classList.toggle('show');
		})
	)
	$('#demo-button').on('click', function(e) {
		e.preventDefault();
		let contactNo = $('#contact-demo').val();
		if ($('#name-demo').val() == '') {
			$('#invalid-name-demo').css('display', 'block');
		} else {
			$('#invalid-name-demo').css('display', 'none');
		}
		if (contactNo.length != 10) {
			$('#invalid-contact_no-demo').css('display', 'block');
		} else {
			$('#invalid-contact_no-demo').css('display', 'none');;
		}
		if ($('#date-demo').val() == '') {
			$('#invalid-date').css('display', 'block');
		} else {
			$('#invalid-date').css('display', 'none');
		}
		if ($('#date-demo').val() != '' && contactNo.length == 10 && $('#name-demo').val() != '') {
			$('.invalid-feedback').hide();
			let name = $('#name-demo').val();
            let contact_no = $('#contact-demo').val();
			contact_no = contact_no.toString(); 
            let date = $('#date-demo').val();
            let type = $('#type-demo').val();
			$('#demo-button').hide();
			$('#spinner').css('display', 'block');

			$.ajax({
				url: 'http://localhost:3000/dev/hello',
                    type: 'POST',
                    dataType: 'json',
                    cors: true,
                    contentType: 'application/json',
                    data: JSON.stringify({
                            name: name,
                            contact_no: contact_no,
                            date: date,
                            type: type
                        }),
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                    },
				success: function(data) {
					$('#success_message').show();
					$('#error_message').hide();
					$('#spinner').css('display', 'none');
					$('#demo-button').show();
					$('#demo-form')[0].reset();
				},
				error: function() {
					$('#success_message').hide();
					$('#error_message').show();
					$('#spinner').css('display', 'none');
					$('#demo-button').show();
				}
			});
		}
	})
	$(function() {
		var dtToday = new Date();

		var month = dtToday.getMonth() + 1;
		var day = dtToday.getDate();
		var year = dtToday.getFullYear();
		if (month < 10)
			month = '0' + month.toString();
		if (day < 10)
			day = '0' + day.toString();

		var maxDate = year + '-' + month + '-' + day;

		// or instead:
		// var maxDate = dtToday.toISOString().substr(0, 10);

		$('#date-demo').attr('min', maxDate);
	});
	$(window).bind("pageshow", function() {
		var form = $('#demo-form'); 
		// let the browser natively reset defaults
		form[0].reset();
	});
	$('#contact-demo').on('keyup', function() {
		let contactNo = $('#contact-demo').val();
		if (contactNo.length > 10) {
			let contactNo = $('#contact-demo').val();
			contactNo = contactNo.substr(0, 10);
			$('#contact-demo').val(contactNo);
		}
	})
})();
function dwnldDesktopApplication() {
  let link = document.createElement('a');
  link.href = 'https://vyaparapp.in/desktop/download-v2?referrer_code=VBILLING';
  link.download = 'VyaparApp.exe';
  link.dispatchEvent(new MouseEvent('click'));
}



