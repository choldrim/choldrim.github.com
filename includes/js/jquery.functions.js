$(document).ready(function(){

	$.getJSON('http://api.twitter.com/1/statuses/user_timeline/fresh_creations.json?count=2&callback=?', function(tweets){
		$("div#tweets").html(format_twitter(tweets, '2'));
	});
	
		
	//$('div#socialmedia ul li a').hover(
	//	function(){
	//		$(this).stop(true, true).animate({backgroundColor: '#fff'});
	//		$(this).find('img.hover').stop(true, true).fadeIn(500);
	//		$(this).find('img.normal').stop(true, true).fadeOut(500);
	//	},
	//	function(){
	//		$(this).stop(true, true).animate({backgroundColor: '#ee4e1d'});
	//		$(this).find('img.hover').stop(true, true).fadeOut(500);
	//		$(this).find('img.normal').stop(true, true).fadeIn(500);			
	//	}
	//);
	
	$('div#socialmedia ul li').hover(function(){
	    $(this).find('a').stop(true, true).fadeIn(500);
	}, function(){
	    $(this).find('a').stop(true, true).fadeOut(500);
	});
	
	
	$('div#blog a, a.showcase.back, a.blue, ul.contact a, div.readmore a').hover(
		function(){
			$(this).stop(true, true).animate({color: '#0072bc'});
		},
		function(){
			$(this).stop(true, true).animate({color: '#ee4e1d'});			
		}
	);
	
	$('div#copyright ul li a').hover(
		function(){
			$(this).stop(true, true).animate({color: '#ee4e1d'});
		},
		function(){
			$(this).stop(true, true).animate({color: '#525351'});			
		}
	);
	
	$('div#content div#navigation ul li a').hover(
		function(){
			$(this).stop(true, true).animate({color: '#ee4e1d'});
		},
		function(){
			$(this).stop(true, true).animate({color: '#fff'});			
		}
	);

	$('div#menu ul li a').hover(
		function(){
			$(this).stop(true, true).animate({color: '#ee4e1d'});
		},
		function(){
			$(this).stop(true, true).animate({color: '#fff'});			
		}
	);
	
	$('div#options ul li a, div#maanden ul li a').hover(
		function(){
			$(this).stop(true, true).animate({color: '#ee4e1d'});
		},
		function(){
			$(this).stop(true, true).animate({color: '#767772'});			
		}
	);
	
	$('div#col_right div#recent_work h2 a, div#col_right div#featured_blog h2 a, div#content_showcase h2 a, div#recent_work h3 a, div#blogs h3 a').hover(
		function(){
			$(this).stop(true, true).animate({color: '#0072bc'});
		},
		function(){
			$(this).stop(true, true).animate({color: '#767772'});			
		}
	);
	
	$('input.submit').hover(
		function(){
			$(this).stop(true, true).animate({color: '#eb4c1b', backgroundColor: '#fff', borderColor: '#dededa'});
		},
		function(){
			$(this).stop(true, true).animate({color: '#fff', backgroundColor: '#eb4c1b', borderColor: '#db4011'});			
		}
	);
	
	$('div.photo').hover(
		function(){
			$(this).find('div.overlay_flickr').stop(true, true).fadeIn(500);
		},
		function(){
			$(this).find('div.overlay_flickr').stop(true, true).fadeOut(500);
		}
	);	
	
	
	
	
	
	/* thumbs click */
	$('div#homepage div.element_thumb, div#homepage div.element_big_thumb').hover(
		function () {
			$(this).find('div.item_overlay').stop(true, true).fadeIn(500);
		},
		function () {
			$(this).find('div.item_overlay').stop(true, true).fadeOut(500);
		}
	);
	
	/* thumbs click */
	$('div#thumb_showcase div.element_thumb').hover(
		function () {
			$(this).find('div.item_overlay').stop(true, true).fadeIn(500);
		},
		function () {
			$(this).find('div.item_overlay').stop(true, true).fadeOut(500);
		}
	);
	
	$('img.plus').click(function(){
		$(this).parent().parent().prev().click();
	});
	
	$("a.colorbox").colorbox({rel:'colorbox'});
	
	// portfolio
	$('div#content_showcase div.element').hover(
		function () {
			$(this).find('div.item_overlay').stop(true, true).fadeIn(500);
		},
		function () {
			$(this).find('div.item_overlay').stop(true, true).fadeOut(500);
		}
	);	
	
	$('#slider').anythingSlider({
	  // Appearance
	  width               : null,      // Override the default CSS width
	  height              : null,      // Override the default CSS height
	  resizeContents      : false,      // If true, solitary images/objects in the panel will expand to fit the viewport

	  // Navigation
	  startPanel          : 1,         // This sets the initial panel
	  hashTags            : false,      // Should links change the hashtag in the URL?
	  buildArrows         : false,      // If true, builds the forwards and backwards buttons
	  buildNavigation     : true,      // If true, buildsa list of anchor links to link to each panel
	  navigationFormatter : null,      // Details at the top of the file on this use (advanced use)
	  forwardText         : "&raquo;", // Link text used to move the slider forward (hidden by CSS, replaced with arrow image)
	  backText            : "&laquo;", // Link text used to move the slider back (hidden by CSS, replace with arrow image)

	  // Slideshow options
	  autoPlay            : false,      // This turns off the entire slideshow FUNCTIONALY, not just if it starts running or not
	  startStopped        : false,     // If autoPlay is on, this can force it to start stopped
	  pauseOnHover        : true,      // If true & the slideshow is active, the slideshow will pause on hover
	  resumeOnVideoEnd    : true,      // If true & the slideshow is active & a youtube video is playing, it will pause the autoplay until the video has completed
	  stopAtEnd           : false,     // If true & the slideshow is active, the slideshow will stop on the last page
	  playRtl             : false,     // If true, the slideshow will move right-to-left
	  startText           : "Start",   // Start button text
	  stopText            : "Stop",    // Stop button text
	  delay               : 3000,      // How long between slideshow transitions in AutoPlay mode (in milliseconds)
	  animationTime       : 600,       // How long the slideshow transition takes (in milliseconds)
	  easing              : "swing",    // Anything other than "linear" or "swing" requires the easing plugin
	  buildStartStop   : false
	});
	
	$('#slider1').anythingSlider({
	  // Appearance
	  width               : null,      // Override the default CSS width
	  height              : null,      // Override the default CSS height
	  resizeContents      : false,      // If true, solitary images/objects in the panel will expand to fit the viewport

	  // Navigation
	  startPanel          : 1,         // This sets the initial panel
	  hashTags            : false,      // Should links change the hashtag in the URL?
	  buildArrows         : true,      // If true, builds the forwards and backwards buttons
	  buildNavigation     : false,      // If true, buildsa list of anchor links to link to each panel
	  navigationFormatter : null,      // Details at the top of the file on this use (advanced use)
	  forwardText         : "&raquo;", // Link text used to move the slider forward (hidden by CSS, replaced with arrow image)
	  backText            : "&laquo;", // Link text used to move the slider back (hidden by CSS, replace with arrow image)

	  // Slideshow options
	  autoPlay            : false,      // This turns off the entire slideshow FUNCTIONALY, not just if it starts running or not
	  startStopped        : false,     // If autoPlay is on, this can force it to start stopped
	  pauseOnHover        : true,      // If true & the slideshow is active, the slideshow will pause on hover
	  resumeOnVideoEnd    : true,      // If true & the slideshow is active & a youtube video is playing, it will pause the autoplay until the video has completed
	  stopAtEnd           : false,     // If true & the slideshow is active, the slideshow will stop on the last page
	  playRtl             : false,     // If true, the slideshow will move right-to-left
	  startText           : "Start",   // Start button text
	  stopText            : "Stop",    // Stop button text
	  delay               : 3000,      // How long between slideshow transitions in AutoPlay mode (in milliseconds)
	  animationTime       : 600,       // How long the slideshow transition takes (in milliseconds)
	  easing              : "swing",    // Anything other than "linear" or "swing" requires the easing plugin
	  buildStartStop   : false
	});	
	
});