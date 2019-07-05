$(document).ready(function(){

	const $badges = $('.badges')
	const $projectText = $('.project-text')
	const $githubForProject = $('.github-for-project')
	const $projects = $('.portfolio-piece')
	const	$project1 = $('#planted-site')
	const $projectImg = $('[id^=site]')
	const	$project2 = $('#budget-site')
	const	$project3 = $('#giphy-site')


				// goToPlantedPage = $('#go-to-planted')

const $carousel = $('.carousel').flickity();



$('.carousel').flickity({
	prevNextButtons: false,
	pageDots: false,


	// on: {
	// 	ready: function () {
	// 		console('Flickity is ready');
	// 	},
	// 	// change: function (index) {
	// 	// 	console.log('Slide changed to' + index);
	// 	// }
	// }
});



$carousel.on('change.flickity', function () {
	$('.badges').hide();
});


// INITIALIZE

	// function hideProjects() {
	// 	$($projects).hide();
	// 	// $('#planted-site').hide();
	// 	// 	$('#budget-site').hide();
	// 	// 		$('#giphy-site').hide();
	// }


/// GENERAL ///

// Raise Image and Spill Badges 




	$($projectImg).on('mouseenter', function(){
		const tl = new TimelineMax();

		
		tl.to($projectImg, 0.5, {boxShadow: "0 70px 80px rgba(0, 0, 0, 0.8);"})
		.staggerTo($projectText, 0.5, {x: -320})
		.staggerTo($githubForProject, 0.5, {x: 370})
		.staggerTo($badges, 0.5, {y: 200, display: 'block'})
		.to($projectImg, 1, {boxShadow: "0"})

		
	})



// PLANTED PROJECT //

// Show 'Planted' Slide

// 	const revealProject1 = () => {
// 		$('#go-to-planted').click(function () {
// 			$($project1).fadeIn(1000);
// 		},
// 	)}

// revealProject1();



	function initialPageLoad(){

		const tl = new TimelineLite();
		


}



// ROI Scene


// 'PROJECTS' -- FADE IN ON SCROLL

	function init() {
		initialPageLoad();


	}

	init();

});
