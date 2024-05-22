function init() {
	
	
	var phrases = $(".hero-type").data("type").split("/");
	var index = 0;
	var element = $(".hero-type");


	
	
	
	
	
	
	function typeEffect(element, speed) {
	  var text = phrases[index];
	  element.html("");

	  var i = 0;
	  var timer = setInterval(function() {
		if (i < text.length) {
		  element.append(text.charAt(i));
		  i++;
	
		} else {
		  clearInterval(timer);
		  var cursor = $("<span class='cursor'>|</span>");
		  element.append(cursor);
		  blinkCursor(cursor);
		  setTimeout(function() {
			 cursor.remove(); // remove cursor before starting deletion
			deleteEffect(element, speed);
		  }, 5000); // delay deletion for 5 seconds
		}
	  }, speed);
	}

	function blinkCursor(cursor) {
	  setInterval(function() {
		cursor.toggle();
	  }, 500);
	}

	function deleteEffect(element, speed) {
	  var text = element.html();

	  var i = text.length - 1;
	  var timer = setInterval(function() {
		if (i >= 0) {
		  var newText = text.substring(0, i);
		  element.html(newText);
		  i--;
		} else {
		  clearInterval(timer);
		  index++;
		  if (index >= phrases.length) {
			index = 0;
		  }
		  typeEffect(element, speed);
		}
	  }, speed);
	}

	typeEffect(element, 50);



	
	
	var $element = $('.dashed > svg > path');
		$element.on('animationend', function() {
		$('.dashed').addClass('hide');
		setTimeout(function() {
			 $('.dashed').removeClass('hide');
		  }, 3000);
	});
	


	
	
      var headerHeight = $('header').outerHeight();
	  var offerTop = $('#offer').offset().top - 500;
	  var offerHeight = $('#offer').outerHeight();
	  var offerCount = $('.offer').length;
	  var currentOffer = 0;
	  var scrolling = false;

	  $('.offer.of-0').fadeIn(500);

	  var brandColor1 = "#fff";
	  var brandColor2 = "#4db7ff";
	  var brandColor3 = "#4db7ff";
	
	  $(window).on('scroll', function() {

		var scrollTop = $(this).scrollTop();
		var windowHeight = $(this).height();
		var documentHeight = $(document).height();

		var offset = scrollTop / 2;
		var offsets = scrollTop * 1.5;	
		
		var aboutOffset = $('#about').offset().top;
		var aboutHeight = $('#testimonials').outerHeight();  
		var offerOffset = $('#offer').offset().top;
		var mainOffset = $('main').offset().top;
		  

		var md = new MobileDetect(window.navigator.userAgent);
		if (!md.phone()) {
				var marginLeft = -500 - offsets; 
				var marginTop = -500 + offset;   
				$('#globe').css({
				'margin-left': marginLeft + 'px',
				'margin-top': marginTop + 'px'
				});
		}


		var headerOp = Math.min(scrollTop / aboutOffset, 1); 	
		$('header .hbg').css('opacity', headerOp); 

		$.get({
			url: 'img/logo.svg',
			dataType: 'text',
			success: function(data) {
			  var svg = $(data);
			  st0 = svg.find('path.st0'); 
			  st0.css('fill', brandColor1);
			  st1 = svg.find('path.st1'); 
			  st1.css('fill', brandColor2);
			  st2 = svg.find('.st2'); 	
			  st2.css('fill', brandColor3);

			  var encodedSvg = btoa(svg[0].outerHTML); // Encode the modified SVG code as a base64 string
			  var dataUrl = 'data:image/svg+xml;base64,' + encodedSvg; // Create a new data URL containing the modified SVG code
			  $('img.logo').attr('src', dataUrl); // Set the source of the logo image to the new data URL
			},
			error: function(jqXHR, textStatus, errorThrown) {
			  console.log('Error loading SVG file:', textStatus, errorThrown);
			}
		});
		  


	   var footerOffset = $('footer').offset().top - $(window).height();
		if (scrollTop > footerOffset) {
			$('header').slideUp();
		} else {
			$('header').slideDown();
		}


		if (scrollTop > $('.hero').outerHeight() + headerHeight) {
			$('.hero').css({'position':'relative',});
			$('main').addClass("off")
		} else {
			$('.hero').css({'position':'fixed',});
			$('main').removeClass("off")
		}
		  
		  var platformOffset = $('#platform').offset().top;
		 if (scrollTop >= mainOffset && scrollTop <= platformOffset) {
			 $('header').addClass('scrolled').removeClass('darkbg');
			 $('header .hbg').css('opacity', 1); 
			 brandColor1 = "#35414f";
			 brandColor2 = "#64a7de";
			 brandColor3 = "#fff";
			 $('#globe').hide();
		 }else{
			var brandColor1 = "#fff";
			var brandColor2 = "#4db7ff";
			var brandColor3 = "#4db7ff";
			$('header').removeClass('scrolled').addClass('darkbg');
			 $('#globe').show();
		 }
		  var servicesOffset = $('#services').offset().top;
		  if (scrollTop >= offerOffset && scrollTop <= servicesOffset) {
			$('header').removeClass('scrolled').addClass('darkbg');
			var percentage = (scrollTop - offerOffset) / offerHeight * 100;
			var borderWidth = percentage / 100 * 1000;
			$('.offer-shadow').css('border-width', borderWidth + 'px');
		 }
			 
			 
			 
			 

		if (scrollTop >= offerTop && scrollTop <= offerTop + offerHeight) {
		  var progress = (scrollTop - offerTop) / offerHeight;
		  var nextOffer = Math.floor(progress * offerCount);

		  if (nextOffer !== currentOffer) {
			if (!scrolling) {
			  scrolling = true;
			  $('.offer.of-' + currentOffer).fadeOut(500, function() {
			  $('.offers-icon').removeClass('act-' + currentOffer);
				$('.offer.of-' + nextOffer).fadeIn(500, function() {
				  currentOffer = nextOffer;
				  $('.offers-icon').addClass('act-' + currentOffer);
				  scrolling = false;
				  $.iconStep(); 
				});
			  });
			}
		  }
		} else if (scrollTop < offerTop) {
		  if (currentOffer !== 0 && !scrolling) {
			scrolling = true;
			$('.offer.of-' + currentOffer).fadeOut(500, function() {
			$('.offers-icon').removeClass('act-' + currentOffer);
			  $('.offer.of-0').fadeIn(500, function() {
				currentOffer = 0;
				$('.offers-icon').addClass('act-' + currentOffer);
				scrolling = false;
				$.iconStep();   
			  });
			
			});
		  }
		} else {
		  if (currentOffer !== offerCount - 1 && !scrolling) {
			scrolling = true;
			$('.offer.of-' + currentOffer).fadeOut(500, function() {
			$('.offers-icon').removeClass('act-' + currentOffer);
			  $('.offer').last().fadeIn(500, function() {
				currentOffer = offerCount - 1;
				$('.offers-icon').addClass('act-' + currentOffer);
				scrolling = false;
				$.iconStep();   
			  });
			
			});
		  }
		}


	$.iconStep = function() {
		var offersIcon = $('.offers-icon');
		
		if (!md.phone()) {
			if (currentOffer == 0) {
			  offersIcon.css('transform', 'rotate(334deg)');
			} else if (currentOffer == 1) {
			  offersIcon.css('transform', 'rotate(370deg)');
			} else if (currentOffer == 2) {
			  offersIcon.css('transform', 'rotate(407deg)');
			} else if (currentOffer == 3) {
			  offersIcon.css('transform', 'rotate(436deg)');
			}
		}	
		

		if (currentOffer == 0) {
			$('#offer-num').html("01")
		} else if (currentOffer == 1) {
			$('#offer-num').html("02")
		} else if (currentOffer == 2) {
			$('#offer-num').html("03")
		} else if (currentOffer == 3) {
		  $('#offer-num').html("04")
		}

	}  


		  
	  });
	

  const navbarCollapse = $('.navbar-collapse');

  navbarCollapse.on('show.bs.collapse', function() {
    $('header').addClass('navbar-shown');
  });

  navbarCollapse.on('hide.bs.collapse', function() {
    $('header').removeClass('navbar-shown');
  });

}


$(document).ready(init);