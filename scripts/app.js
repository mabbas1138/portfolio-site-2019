$(document).ready(function(){

	const badges = $('.badges')
				back = $('#back');
				next = $('#forward');
				projects = ['#planted-slide', '#budget-slide', '#giphy-slide']
				backgrounds = ['.planted-bg', '.budget-bg', '.giphy-bg']

	TweenMax.set(backgrounds, {opacity: 0, scaleX: 0})



// INITIALIZE

	function init() {
		animationOnInitialLoad();
		navSlides();

	};

	init();

	const controller = new ScrollMagic.Controller();



// PROGRAM BADGES //

// First Slide 


	function animationOnInitialLoad(){

  	const tlBadges = new TimelineMax();
  	const badgesBezier = [{x: 10, y: 100}, {x: 20, y: 100}]
	

		function circleForever() {
			TweenMax.to(badges, 5, {rotation: "+=360", ease:Linear.easeNone, onComplete:circleForever})
		}
	}

// 'Planted' slide

	if ($('.portfolio-piece' === '#planted-slide')) {
		$('.projects-section').addClass('planted')

	} else {
		return;
	}


// PROJECT SECTION - NAVIGATE TO NEXT SLIDE 

	function navSlide() {




	}
});
