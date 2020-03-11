$(function() {
  window.sr = ScrollReveal();
<<<<<<< HEAD
	if ($(window).width() < 768) {
		if ($('.timeline-content').hasClass('js--fadeInLeft')) {
			$('.timeline-content').removeClass('js--fadeInLeft').addClass('js--fadeInRight');
		}
		sr.reveal('.js--fadeInRight', {
			origin: 'right',
			distance: '300px',
			easing: 'ease-in-out',
			duration: 800,
		});
	} 
  else {
		sr.reveal('.js--fadeInLeft', {
			origin: 'left',
			distance: '300px',
			easing: 'ease-in-out',
			duration: 800,
		});
=======
  if ($(window).width() < 768) {
  	if ($('.timeline-content').hasClass('js--fadeInLeft')) {
  		$('.timeline-content').removeClass('js--fadeInLeft').addClass('js--fadeInRight');
  	}
  	sr.reveal('.js--fadeInRight', {
	    origin: 'right',
	    distance: '300px',
	    easing: 'ease-in-out',
	    duration: 800,
	  });

  } else {
   	sr.reveal('.js--fadeInLeft', {
	    origin: 'left',
	    distance: '300px',
		  easing: 'ease-in-out',
	    duration: 800,
	  });
>>>>>>> 4f61cd8cffa343497290ed51991b61ce450df94e

		sr.reveal('.js--fadeInRight', {
			origin: 'right',
			distance: '300px',
			easing: 'ease-in-out',
			duration: 800,
		});
	}
  
	sr.reveal('.js--fadeInLeft', {
		origin: 'left',
		distance: '300px',
		easing: 'ease-in-out',
		duration: 800,
	});

	sr.reveal('.js--fadeInRight', {
		origin: 'right',
		distance: '300px',
		easing: 'ease-in-out',
		duration: 800,
	});
});
