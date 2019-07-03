$(document).ready(function(){

	const badges = $('.badges')


// INITIALIZE

	function init() {
  	animationOnInitialLoad();

	};

	init();

	const controller = new ScrollMagic.Controller();

	TweenMax.set(badges, {x: -150})


// PROGRAM BADGES

// First Slide


	function animationOnInitialLoad(){

  	const tlBadges = new TimelineMax();
  	const badgesBezier = [{x: 10, y: 100}, {x: 20, y: 100}]
	

		function circleForever() {
			TweenMax.to(badges, 5, {rotation: "+=360", ease:Linear.easeNone, onComplete:circleForever})
		}
	
	// Reveal-On-Intro (ROI)

  	tlBadges
    	.staggerFromTo(badges, 0.3, {x: 0, display: 'none'}, {x: 120, display: 'block', ease:Power3.ease, onComplete:circleForever
    }, 0.3)
		// .to(badges, 0., {}, '-=0.1')
};



// ROI Scene


// 'PROJECTS' -- FADE IN ON SCROLL



});
