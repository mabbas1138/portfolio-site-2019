$(document).ready(function(){

	// Header Caches //
	const $wholeHead = $('.whole-head')
	const $topHead = $('#top-head')
	const $bioText = $('#about-me-text')
	const $title = $('#headings')

	// Contact Caches //
	const $contactHeading = $('#contact-container h1')
	const $contactLink = $('.contact-link')

	// Nav Caches //
	const $navBar = $('#navbar');
	const $navBarUl = $('#navbar-ul')
	const $navUl = $('.nav-ul');
	const $hamMenu = $('.ham-menu')
	const $menuLi = $('ul#navbar-ul li')

	// Skills Caches //
	const $listHeadings = $('.list h1')
	const $langPar = $('#languages-list p')
	const $libPar = $('#libraries-list p')
	const $toolsPar = $('#tools-list p')
	const $learnPar = $('#learning-list p')
	const $badgeLang = $('#languages-list img')
	const $badgeLib = $('#libraries-list img')
	const $badgeTool = $('#tools-list img')
	const $badgeLearn = $('#learning-list img')

	// Project Caches// 
	const projectType = $('.project-type');
	const projectTypeP = $('.project-type p');
	const allCatLink = $('#all-projects p');
	const vanCatLink = $('#vanilla-projects p');
	const reactCatLink = $('#react-projects p');
	const vueCatLink = $('#vue-projects p');
	const noJSCatLink = $('#noJS-projects p');
	const vanillaJSType = $('#vanilla-js');
	const reactType = $('#react');
	const vueType = $('#vue');
	const noJSType = $('#noJS');
	const projectCard = $('.project-card');


// NAVBAR SECTION //

// Smooth scroll //

	$('a[href*="#"]').on('click', function (e) {
		e.preventDefault()

		$('html, body').animate({
			scrollTop: $($(this).attr('href')).offset().top,
		},
			500,
			'linear'
		)
})

	// Open Nav Menu and fade in bg //

	const hamMenuTl = new TimelineMax();

	TweenMax.set($menuLi, {autoAlpha: 0})

	$($hamMenu).on('click', function (e) {
		e.preventDefault();
		$(this).toggleClass('on')
		
		if (!$($navBarUl).hasClass('active')) {
			$($navBarUl).addClass('active')

			hamMenuTl
			.to($navUl, 0.1, {className: "-=hidden"})
			.to($('.one, .two, .three'), 0.5, {css: {background: 'white'}}, "-=0.5")
			.to($($navBar), 0.2, {css: {background: '#43655A'}}, {ease: Power0.easeNone})
			.to($menuLi, 0.1, {autoAlpha: 1})
			.staggerFromTo($menuLi, 0.2, {x: 130}, {x:0}, {ease:Power1.Linear})

		} else if ($($navBarUl).hasClass('active')) {
			$($navBarUl).removeClass('active')
			
			hamMenuTl
			.to($navUl, 0.2, {className: "+=hidden"})
			.to($('.one, .two, .three'), 0.1, {css: {background: '#43655A'}})
			.to($($navBar), 0.2, {css: {background: 'initial'}})
			.staggerFromTo($menuLi, 0.1, {x: 0}, {x: 130}, {autoAlpha: 1}, {autoAlpha: 0}, {ease:Power1.Linear}, "-0.1")
		}
	})

	// HEADER SECTION //

	function headShake() {
		const shakeHead = new TimelineMax();
		const wiggles = 20;
		CustomWiggle.create("wiggle", {
			wiggles: wiggles,
			type: "anticipate"
		});

		shakeHead
			.to($wholeHead, 1, {rotation: 30, ease: "wiggle"});

		return headShake;
	}		
	
	function headPop() {
		const popHeadTop = new TimelineMax();

		popHeadTop
			.staggerTo($topHead, 3.7, {rotation: 230, transformOrigin:"right 91% 50px", ease:Elastic.easeOut})
			.staggerTo($topHead, 0.2, {rotation: 0})

		return headPop;
	}		

// Title animation

	TweenLite.set($title, {autoAlpha: 0})

	function revealTitle() {
		const titleTl = new TimelineLite,
					liftTitle = new SplitText($title, {type: "chars", opacity: 0}),
					chars = liftTitle.chars;
		
		TweenLite.set($title, {autoAlpha: 1})

		titleTl
			.staggerFromTo(chars, 0.5, {y: 150, scale: 0},{autoAlpha: 1, scale:1, y: 0, ease:Back.easeOut}, 0.01)

		return revealTitle;
	}

// Bio animation
	
	TweenLite.set($bioText, {perspective: 400, autoAlpha: 0})

	function revealBioText() {
		const textTl = new TimelineLite,
					splitBioText = new SplitText('#about-me-text', {type: "chars", opacity: 0}),
					chars = splitBioText.chars;
		
		TweenLite.set($bioText, {perspective: 400, autoAlpha: 1})

		textTl
			.staggerFrom(chars, 0.8, {opacity: 0, scale:0, y: 80, rotationX: 180, transformOrigin: '0% 50% -50', ease:Back.easeOut}, 0.01, "+=0")

		return revealBioText;
}

/// CONTACT SECTION ///

	const contactFrom = {
		scale: 0,
		opacity: 0,
	}

	const contactTo = {
		scale: 1,
		opacity: 1,
		delay: 0.2,
		ease: Power1.easeOut
	}

	TweenLite.set($contactHeading, {opacity: 0})
	TweenLite.set($contactLink, {opacity: 0})

	function revealContact() {
		const contactTl = new TimelineMax();

		contactTl
			.staggerFromTo($contactHeading, 0.2, contactFrom, contactTo, 0.3)
			.staggerFromTo($contactLink, 0.2, contactFrom, contactTo, 0.3)

		return revealContact;
	}


// HEADER and CONTACT Section Master Timeline

	const tlMaster = new TimelineMax();

	tlMaster
		.add(headShake)
		.add(headPop, '+=1')
		.add(revealTitle, '+=0.5')
		.add(revealBioText, '+=0.5')
		.add(revealContact, '+=0.8')

/// SKILLS SECTION ///

	const listHeadingsFrom = {
		scale: 0,
		opacity: 0,
		x:-200,
	}

	const listHeadingsTo = {
		scale: 1,
		opacity: 1,
		x: 10,
		delay: 0.2,
		ease: Power1.easeOut
	}

	const badgeImg = {
		opacity: 0,
		x: -200,
		transform: 'rotateY(180deg)',
		ease: Elastic.easeOut
	}

	const badgeTxtFrom = {
		scale: 0,
		opacity: 0
	}

	const badgeTxtTo = {
		scale: 1,
		opacity: 1,
		ease: Power1.easeOut
	}

	const skillsTl = new TimelineMax();

	skillsTl
		.staggerFromTo($listHeadings, 0.2, listHeadingsFrom, listHeadingsTo, 0.3)

		.staggerFrom($badgeLang, 0.7, badgeImg, 0.2, '+=0.1')
		.staggerFromTo($langPar, 0.3, badgeTxtFrom, badgeTxtTo, 0.2, '-=1')

		.staggerFrom($badgeLib, 0.7, badgeImg, 0.2, '-=0.1')
		.staggerFromTo($libPar, 0.3, badgeTxtFrom, badgeTxtTo, 0.2, '-=1.4')

		.staggerFrom($badgeTool, 0.7, badgeImg, 0.2, '-=0.1')
		.staggerFromTo($toolsPar, 0.3, badgeTxtFrom, badgeTxtTo, 0.2, '-=1')

		.staggerFrom($badgeLearn, 0.7, badgeImg, 0.2, '-=0.1')
		.staggerFromTo($learnPar, 0.3, badgeTxtFrom, badgeTxtTo, 0.2, '-=1.4')

		const controller = new ScrollMagic.Controller();

		const skillsScene = new ScrollMagic.Scene({
			triggerElement: '#main',
			offset: 150,
			reverse: false
		})
		.setTween(skillsTl)
		.addTo(controller);


// 'MY WORK' NAV
	const workTl = new TimelineMax()

	workTl
		.staggerFromTo('.projects-title', 0.3, {scale: 0, opacity: 0, x: -200}, {scale: 1, opacity: 1, x: 10, delay: 0.5, ease: Power1.easeOut}, 0.3)
		.staggerFromTo('.project-type', 0.3, {scale: 0, opacity: 0, x: -200}, {scale: 1, opacity: 1, x: 10, delay: 0.5, ease: Power1.easeOut}, 0.3)
		.to($(allCatLink), 0.2, {className: '+=green-bg white-text'})
		.fromTo('.project-list', 1, {opacity: 0}, {opacity: 1}, '+=0.1')
		.staggerFromTo('.project-card', 0.5, {scale: 0, opacity: 0, x: -200}, {scale: 1, opacity: 1, x: 10, ease: Power1.easeOut}, 0.3, '-=1.0')

	const workScene = new ScrollMagic.Scene({
			triggerElement: '#projects',
			offset: -150,
			reverse: false
		})
		.setTween(workTl)
		.addTo(controller);

// Shift background color to selected project type in nav

	function moveBgAndWhite(category) {
		const tl = new TimelineMax()

		TweenMax.set($(projectTypeP).not(category), {className: '-=green-bg white-text'})

		tl.to(category, 0.2,  {className: '+=green-bg white-text'})
	}

	// 'MY WORK' HIGHLIGHT ON CLICK

	function showType(type) {
		const unhideTl = new TimelineMax();
		const showTl = new TimelineMax()

		type === projectCard ? (

		unhideTl
			.to($(type), 0.1, {className: '-=hover-effect', opacity: 1})

		) : (

		unhideTl
			.to($(type), 0.1, {className: '-=hover-effect', opacity: 1}),

		showTl
			.to($(projectCard).not(type), 0.3, {className: '+=hover-effect', opacity: 0.1})
		)
	}

	$(projectType).on('click', function(e){
		e.preventDefault();

		if ($(this).hasClass('all-projects')) {
			moveBgAndWhite(allCatLink)
			showType(projectCard)

		} else if ($(this).hasClass('vanilla-projects')) {
			moveBgAndWhite(vanCatLink)
			showType(vanillaJSType)

		} else if ($(this).hasClass('vue-projects')) {
			moveBgAndWhite(vueCatLink)
			showType(vueType)

		} else if ($(this).hasClass('react-projects')) {
			moveBgAndWhite(reactCatLink)
			showType(reactType)

		} else if ($(this).hasClass('jQuery-projects')) {
			moveBgAndWhite(jQCatLink)
			showType(jQueryType)

		} else if ($(this).hasClass('noJS-projects')) {
			moveBgAndWhite(noJSCatLink)
			showType(noJSType)
		}
	})
});
