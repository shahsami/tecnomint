/*

	Template Name: Drubo
    Template URI: http://hastech.company/
    Description: This is html5 template
    Author: HasTech
    Author URI: http://hastech.company/
    Version: 1.0

*/
/*================================================
[  Table of contents  ]
================================================

	01. jQuery MeanMenu
	02. nivoSlider 
	03. Client Testimonial active
	04. Brand Curosel Active
	05. Client Curosel Active
	06. Magnific Popup For Video
	07. Magnific Popup For Image
	08. Portfolio Isotop active
	09. Latestshot/Portfolio Isotop active
	10. Counter Up
	11. Circular Bars - Knob
	12. scrollUp
	13. TOP Menu Stick
	14. Mail Chimp
	15. wow js active
	
======================================
[ End table content ]
======================================*/


(function($) {
    "use strict";
	
	/*--------------------------------
		01. jQuery MeanMenu
	---------------------------------- */
    jQuery('#mobile-nav').meanmenu();
	
	/*--------------------------------
		02. nivoSlider
	---------------------------------- */     
	$('#slider').nivoSlider({
        effect: 'random',
        slices: 25,
        boxCols: 10,
        boxRows: 8,
        animSpeed: '600',
        pauseTime: '4000',
        startSlide: 0,
        directionNav: 1,
        controlNav: 0,
        controlNavThumbs: false,
        pauseOnHover: false,
        manualAdvance: false,
        prevText: '<i class="fa fa-angle-left nivo-prev-icon"></i>',
        nextText: '<i class="fa fa-angle-right nivo-next-icon"></i>'
    });
	
	/*---------------------------------
		03. Client Testimonial active
	-----------------------------------*/
	$(".client-testimonial-owl").owlCarousel({
      autoPlay: false,
	  slideSpeed:0,
	  effect: 'random',
	  pagination:false,
	  navigation:false,  
      items : 1,
	  navigationText:["<i class='fas fa-angle-left'></i>","<i class='fas fa-angle-right'></i>"],
      itemsDesktop : [1199,1],
	  itemsDesktopSmall : [980,1],
	  itemsTablet: [768,1],
	  itemsMobile : [479,1],
	});
	
	/*---------------------------------
		04. Brand Curosel Active
	-----------------------------------*/
	$(".brand-carsoul").owlCarousel({
      autoPlay: false,
	  slideSpeed:2000,
	  pagination:false,
	  navigation:false,  
      items : 6,
	  navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
      itemsDesktop : [1199,6],
	  itemsDesktopSmall : [980,4],
	  itemsTablet: [768,1],
	  itemsMobile : [479,1],
	});
	
	/*---------------------------------
		05. Client Curosel Active
	-----------------------------------*/
	$(".client-carousel").owlCarousel({
      autoPlay: false,
	  slideSpeed:2000,
	  pagination:true,
	  navigation:false,  
      items : 1,
	  navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
      itemsDesktop : [1199,1],
	  itemsDesktopSmall : [980,1],
	  itemsTablet: [768,1],
	  itemsMobile : [479,1],
	});
	
	/*---------------------------------
		06. Magnific Popup For Video
	-----------------------------------*/
	$('.popup-youtube').magnificPopup({
		type: 'iframe'
	});
	
	/*---------------------------------
		07. Magnific Popup For Image
	-----------------------------------*/
	$('.venobox').magnificPopup({
	  type: 'image',
	  gallery: {
			  enabled: true, // set to true to enable gallery
			}
	});

	/*--------------------------------
		08. Portfolio Isotop active 
	---------------------------------- */
	// images have loaded
	$('.portfolio-box').imagesLoaded( function() {
	  // Isotop Active
	  $('.portfolio-menu').on( 'click', 'li', function() {
		var filterValue = $(this).attr('data-filter');
		$grid.isotope({ filter: filterValue });
	  });

	  // Isotop Full Grid
	  var $grid = $('.grid').isotope({
		itemSelector: '.grid-item',
		percentPosition: true,
		masonry: {
		columnWidth: '.grid-sizer'
		}
	  });
	  // Isotop Menu Active
	  $('.portfolio-menu li').on('click', function(event) {
			$(this).siblings('.active').removeClass('active');
			$(this).addClass('active');
			event.preventDefault();
		});
		$('.grid').masonry({
		  // set itemSelector so .grid-sizer is not used in layout
		  itemSelector: '.grid-item',
		  // use element for option
		  columnWidth: '.grid-sizer',
		  percentPosition: true
		})
	});
	
	/*--------------------------------
		09. Latestshot/Portfolio Isotop active 
	---------------------------------- */
	// images have loaded
	$('.latestshot-box').imagesLoaded( function() {
	  // Isotop Active
	  $('.latestshot-menu').on( 'click', 'li', function() {
		var filterValue = $(this).attr('data-filter');
		$grid.isotope({ filter: filterValue });
	  });

	  // Isotop Full Grid
	  var $grid = $('.grid').isotope({
		itemSelector: '.grid-item',
		percentPosition: true,
		masonry: {
		columnWidth: '.grid-sizer'
		}
	  });
	  // Isotop Menu Active
	  $('.latestshot-menu li').on('click', function(event) {
			$(this).siblings('.active').removeClass('active');
			$(this).addClass('active');
			event.preventDefault();
		});
		$('.grid').masonry({
		  // set itemSelector so .grid-sizer is not used in layout
		  itemSelector: '.grid-item',
		  // use element for option
		  columnWidth: '.grid-sizer',
		  percentPosition: true
		})
	});
	
	/*----------------------------
		10. Counter Up 
	------------------------------ */
	$('.counter').counterUp({
		delay: 10,
		time: 1000
	});
	
	/*---------------------------
	   11. Circular Bars - Knob
	----------------------------- */	
	$('.knob').each(function () {
	  var $this = $(this),
		  knobVal = $this.attr('data-rel');

	  $this.knob({
		'draw' : function () { 
		  $(this.i).val(this.cv + '%')
		}
	  });
	  
	  $this.appear(function() {
		$({
		  value: 0
		}).animate({
		  value: knobVal
		}, {
		  duration : 2000,
		  easing   : 'swing',
		  step     : function () {
			$this.val(Math.ceil(this.value)).trigger('change');
		  }
		});
	  }, {accX: 0, accY: -130});
	});
	/*--------------------------
	 12. scrollUp
	---------------------------- */	
	$.scrollUp({
		scrollText: '<i class="fas fa-angle-double-up"></i>',
		easingType: 'linear',
		scrollSpeed: 900,
		animation: 'fade'
	});
	/*--------------------------
	 13. TOP Menu Stick
	---------------------------- */	
	$(window).on('scroll',function() {    
	   var scroll = $(window).scrollTop();
	   if (scroll < 200) {
		$("#sticky-header").removeClass("sticky");
	   }else{
		$("#sticky-header").addClass("sticky");
	   }
	});
	
	/*--------------------------
	 14. Mail Chimp
	---------------------------- */	
	$('#mc-form').ajaxChimp({
	 language: 'en',
	 callback: mailChimpResponse,
	 // ADD YOUR MAILCHIMP URL BELOW HERE!
	 url: 'http://themeshaven.us8.list-manage.com/subscribe/post?u=759ce8a8f4f1037e021ba2922&amp;id=a2452237f8'
	});
	function mailChimpResponse(resp) {
	 
	 if (resp.result === 'success') {
	  $('.mailchimp-success').html('' + resp.msg).fadeIn(900);
	  $('.mailchimp-error').fadeOut(400);
	  
	 } else if(resp.result === 'error') {
	  $('.mailchimp-error').html('' + resp.msg).fadeIn(900);
	 }  
	}
	
	/*-------------------------------------------
		15. wow js active
	--------------------------------------------- */
    new WOW().init();
	
})(jQuery);


// Matrix

var c = document.getElementById("c");
var ctx = c.getContext("2d");

//making the canvas full screen
c.height = window.innerHeight;
c.width = window.innerWidth;

//chinese characters - taken from the unicode charset
var chinese = "田10HTML男10町CSS甾REACT畁JAVASCRIPT畇10畊ANGULAR畍DIGITAL畑";
//converting the string into an array of single characters
chinese = chinese.split("");

var font_size = 15;
var columns = c.width/font_size; //number of columns for the rain
//an array of drops - one per column
var drops = [];
//x below is the x coordinate
//1 = y co-ordinate of the drop(same for every drop initially)
for(var x = 0; x < columns; x++)
	drops[x] = 1; 

//drawing the characters
function draw()
{
	//Black BG for the canvas
	//translucent BG to show trail
	ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
	ctx.fillRect(0, 0, c.width, c.height);
	
	ctx.fillStyle = "#0F0"; //green text
	ctx.font = font_size + "px arial";
	//looping over drops
	for(var i = 0; i < drops.length; i++)
	{
		//a random chinese character to print
		var text = chinese[Math.floor(Math.random()*chinese.length)];
		//x = i*font_size, y = value of drops[i]*font_size
		ctx.fillText(text, i*font_size, drops[i]*font_size);
		
		//sending the drop back to the top randomly after it has crossed the screen
		//adding a randomness to the reset to make the drops scattered on the Y axis
		if(drops[i]*font_size > c.height && Math.random() > 0.975)
			drops[i] = 0;
		
		//incrementing Y coordinate
		drops[i]++;
	}
}

setInterval(draw, 75);



