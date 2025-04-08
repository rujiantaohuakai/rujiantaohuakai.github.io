!(function($) {
	"use strict";

// PreLoader
setTimeout(function(){
	$('.loader-wrap').fadeToggle();
  }, 3000);

// Sticky Navbar
window.onscroll = function() {myFunction()};
var navbar = document.getElementById("sticky-nav");
function myFunction() {
  if (window.pageYOffset >= 60) {
	navbar.classList.add("sticky")
  } else {
	navbar.classList.remove("sticky");
  }
}

//   VenoBox 
$(document).ready(function() {
$('.venobox').venobox({
	'share': false
});
});

// Contact Form Validation
(function() {
    'use strict';
    window.addEventListener('load', function() {
      var forms = document.getElementsByClassName('needs-validation');
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();

//   Owl Carousel
  $("#main-banner-carousel").owlCarousel({      
	pagination : false,
	loop:true,
	dots:false,
	nav:false,
	autoplay:true,
	smartSpeed:2000,
	autoplayTimeout:5000,
	autoplayHoverPause:true,
	responsive:{
		0:{
			items:1
		}
	}
  });

  $("#services-carousel").owlCarousel({      
	pagination : false,
	loop:false,
	dots:false,
	nav:false,
	margin:10,
	autoplay:false,
	smartSpeed:2000,
	autoplayTimeout:5000,
	autoplayHoverPause:true,
	responsive:{
		0:{
			items:1
		},
		360:{
			items:2
		},
		575:{
			items:3
		},
		800:{
			items:4
		}
	}
  });

  $("#testimonial-carousel").owlCarousel({      
	pagination : false,
	loop:true,
	dots:false,
	nav:false,
	margin: 20,
	autoplay: true,
	smartSpeed: 1500,
	autoplayTimeout:5000,
	autoplayHoverPause:true,
	responsive:{
		0:{
			items:1
		},
		768:{
			items:2
		},
		991:{
			items:1
		}
	}
  });
  $("#collection-carousel").owlCarousel({      
	pagination : false,
	loop:true,
	dots:false,
	nav:false,
	autoplay: true,
	smartSpeed: 1500,
	autoplayTimeout:5000,
	autoplayHoverPause:true,
	responsive:{
		0:{
			items:3
		},
		500:{
			items:5
		},
		800:{
			items:6
		},
		900:{
			items:7
		},
	}
  });

})(jQuery);