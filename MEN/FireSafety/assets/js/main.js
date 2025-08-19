
/*
Theme Name: Squad - Fire Brigade Emergency Services Bootstrap HTML5 Template.
Author: codezionsoftwares
Author URL: https://www.templatemonster.com/authors/codezion/
Version: 1.0.0

*/

//-------- %%%%%%% Javascripts %%%%%%% ----------//



$(document).ready(function() {

  $(window).on('scroll',function(){

    if($(this).scrollTop()>5){
    $('.mr-nav').addClass('nav-change');

  }
    else{

      $('.mr-nav').removeClass('nav-change');
    }
  });

  // ------Open Mobile Menu--------//
  $('.menu-btn').on('click',function(){

    $('close-btn').show(1000);
    $('.sidenav-overlay').addClass('show');


  });

  $('.close-btn').on('click',function(){
    $('.sidenav-overlay').removeClass('show');
    $('.menu-btn').show(1000);

  });
  // ------Mobile menu dropdown--------//
  $('.drop-link').on('click',function(){
    $('.dropdown').toggleClass('active');

  });

	
	//-----Service Slide--------// 
	
	$('.slider-wrap').slick({
	autoplay:true,
	speed:800,
	fade:false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll:1,
    prevArrow:'.slick-prev',
    nextArrow:'.slick-next',
    centerMode:true,
    speed:1200,
    centerPadding:'40px',
     responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll:1,
        infinite: true,
        centerMode:false,
        dots:false
      }
    },
    {
    	 breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll:1,
        infinite: true,
        centerMode:false,
        dots:false
      }
    }
    ]

  	});

  	

	// ---------- Progress Bar---------//

	$('.colorPipe').waypoint(function() {
	$('.colorPipe').addClass('fill');
	},

	{offset:'75%'});


	// -------CounterUp-------//

	jQuery(function ($) {
    	"use strict";
    
    	var counterUp = window.counterUp["default"]; // import counterUp from "counterup2"
    
    	var $counters = $(".counter");
    
    	/* Start counting, do this on DOM ready or with Waypoints. */
		$counters.each(function (ignore, counter) {
			var waypoint = new Waypoint( {
				element: $(this),
				handler: function() { 
					counterUp(counter, {
						duration: 5000,
						delay: 16
					}); 
					this.destroy();
				},
				offset: 'bottom-in-view',
			} );
		});

	});
  
  // -------Coming Soon --------//
  window.onload = function() {
  const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

let countDown = new Date('April 29, 2021 00:00:00').getTime(),
    x = setInterval(function() {

      let now = new Date().getTime(),
          distance = countDown - now;

        var days = Math.floor(distance / (day));
        var hours = Math.floor((distance % (day)) / (hour));
        var minutes = Math.floor((distance % (hour)) / (minute));
        var seconds =  Math.floor((distance % (minute)) / second);
      
        $('#days').text(days);
        $('#hours').text(hours);
        $('#minutes').text(minutes);
        $('#seconds').text(seconds);

    }, second);

  }


});