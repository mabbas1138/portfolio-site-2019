$(document).ready(function(){

		
	const badges = $('.badges')
				slideToProject1 = $('#project-1');
				slideToProject2 = $('#project-2');
				slideToProject3 = $('#project-3');

				projects = ['#planted-slide', '#budget-slide', '#giphy-slide']
				backgrounds = ['.planted-bg', '.budget-bg', '.giphy-bg']


	TweenMax.set(backgrounds, {opacity: 0})
	TweenMax.set(projects, {opacity: 0})



	forward.on('click', function(){
		if (index++ < projects.length) {
			slideForward(index);
		} else {
			index = 0;
			TweenLite.set(projects, {
				opacity: 0,
				scaleX: 0
			})
			slideForward(index);
		}
	}) 


	back.on('click', function() {
		if (index-- > -1) {
			TweenLite.set(projects, {
				scaleX: 0
			})
			slideBack(index);
		} else {
			index = projects.length - 1;
			slideBack(index);
		}
	})


// LANDING PAGE 
	function animationOnInitialLoad(){

  	const tlBadges = new TimelineMax();
  	const badgesBezier = [{x: 10, y: 100}, {x: 20, y: 100}]
	
		// function circleForever() {
		// 	TweenMax.to(badges, 5, {rotation: "+=360", ease:Linear.easeNone, onComplete:circleForever})
		// }
	}

// PROJECT SECTION - NAVIGATE TO NEXT SLIDE 

	// // Navigate forward
	// function slideForward(index) {
	// 	const tl = new TimelineLite();

	// 	tl
	// 		.fromTo(projects[index], 0.3, 
	// 			{opacity: 0, scaleX: 0, transformOrigin: '0% 100%'}, 
	// 			{opacity: 1,scaleX: 1,}, 0)
	// 		.to(backgrounds[index], 0.3, {opacity: 1, scaleX: 1}, '-=0.3')

	// }

	// // Navigate back

	// function slideBack(index) {
	// 	const tl = new TimelineLite();

  // 	tl.fromTo(projects[index], 0.3, {
  // 		opacity: 0,
  // 		scaleX: 0,
  // 		transformOrigin: '100% 0%'
  // 	}, {
  // 		opacity: 1,
  // 		scaleX: 1
  // 	}, 0)
	// }

	// INITIALIZE

	function init() {
		animationOnInitialLoad();

	};

	init();

});
