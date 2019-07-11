$(document).ready(function(){

	const $badges = $('.badges')
	const $projectText = $('.project-text')
	const $githubForProject = $('.github-for-project')
	const $projectImg = $('[id^=site]')
	const $bigHead = $('#big-head')
	const $projects = $('.portfolio-piece')
	const	$project1 = $('#planted-site')
	const	$project2 = $('#budget-site')
	const	$project3 = $('#giphy-site')




$('.carousel').flickity({
	prevNextButtons: false,
	watchCSS: true,
});


// INITIALIZE


// HEADER SECTION //

// Spinning Head intro

function spinningHead() {
	const spinHead = new TimelineMax();

	TweenMax.set($bigHead, {scale: '0, 0'})

	spinHead.staggerTo($bigHead, 2, {scale: '1, 1', rotation: 360, ease:Elastic.easeOut})

	return spinHead;
}

// Bio animation

function revealBioText() {

	const splitBioText = new SplitText('#about-me-text', {type: "chars"});

	TweenLite.set("#about-me-text", {opacity: 1})

	TweenMax.staggerFrom(splitBioText.chars, 0.8, {y:100, opacity: 0, rotation: 90, ease:Elastic.easeOut}, 0.03)

	return splitBioText;

}

// Heading text animation



// Header Section Master Timeline

const tlMaster = new TimelineMax();

tlMaster.add(spinningHead)
				.add(revealBioText, '+=0.5')

/// PROJECT SECTION ///

// Raise Image and Spill Badges 

	$($projectImg).on('mouseenter', function(){
		const tl = new TimelineMax();

		tl.to($projectImg, 0.5, {boxShadow: "0 70px 80px rgba(0, 0, 0, 0.8);"})
		.staggerTo($projectText, 0.5, {x: -320})
		.staggerTo($githubForProject, 0.5, {x: 330})
		.staggerTo($badges, 0.5, {y: 200, display: 'block', ease:Bounce.easeInOut}, 0.05)
		.to($projectImg, 0.5, {boxShadow: "0"}, '-=0.1')
		
		TweenMax.killTweensOf(tl)
	})




// ROI Scene


// 'PROJECTS' -- FADE IN ON SCROLL

	function init() {



	}

	init();

});
