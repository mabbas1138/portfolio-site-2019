$(document).ready(function () {

	// Header Caches //
	const $wholeHead = $('.whole-head')
	const $bioText = $('#about-me-text')
	const $title = $('#headings')

	// Contact Caches //
	const $contactHeading = $('#contact-container h1')
	const $contactLink = $('.contact-link')

	// Nav Caches //
	const $circMenu = $('#circular-menu-1')
	const $floatingBtn = $('.floating-btn')

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


	///////// NAVBAR SECTION ///////////
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

	$($floatingBtn).on('click', function (e) {
		e.preventDefault();
		$($circMenu).toggleClass('active')
	})


	//////// HERO SECTION /////////

	// Slide in head with elastic landing 

	function slideInHead() {
		const headSlide = new TimelineMax();

		headSlide
			.from($wholeHead, 1, {
				x: -850,
				autoAlpha: 0,
				ease: Elastic.easeOut.config(1, 0.5)
			})

		return headSlide;
	}

	// Job title animation

	TweenLite.set($title, {
		autoAlpha: 0
	})

	function revealTitle() {
		const titleTl = new TimelineLite,
			liftTitle = new SplitText($title, {
				type: "chars",
				opacity: 0
			}),
			chars = liftTitle.chars;

		TweenLite.set($title, {
			autoAlpha: 1
		})

		titleTl
			.staggerFromTo(chars, 0.5, {
				y: 50,
				scale: 0
			}, {
				autoAlpha: 1,
				scale: 1,
				y: 0,
				ease: Back.easeOut
			}, 0.01)

		return revealTitle;
	}

	// Bio text animation

	TweenLite.set($bioText, {
		perspective: 400,
		autoAlpha: 0
	})

	function revealBioText() {
		const textTl = new TimelineLite,
			splitBioText = new SplitText('#about-me-text', {
				type: "chars",
				opacity: 0
			}),
			chars = splitBioText.chars;

		TweenLite.set($bioText, {
			perspective: 400,
			autoAlpha: 1
		})

		textTl
			.staggerFrom(chars, 0.8, {
				autoAlpha: 0,
				scale: 0,
				y: 80,
				rotationX: 180,
				transformOrigin: '0% 50% -50',
				ease: Back.easeOut
			}, 0.01, "+=0")

		return revealBioText;
	}


	///////// CONTACT SECTION /////////

	const contactFrom = {
		scale: 0,
		autoAlpha: 0,
	}

	const contactTo = {
		scale: 1,
		autoAlpha: 1,
		delay: 0.2,
		ease: Power1.easeOut
	}

	TweenLite.set($contactHeading, {
		autoAlpha: 0
	})
	TweenLite.set($contactLink, {
		autoAlpha: 0
	})

	// Stagger-reveal contact icons

	function revealContact() {
		const contactTl = new TimelineMax();

		contactTl
			.staggerFromTo($contactHeading, 0.1, contactFrom, contactTo, 0.2)
			.staggerFromTo($contactLink, 0.1, contactFrom, contactTo, 0.2)

		return revealContact;
	}


	// HEADER and CONTACT Section Master Timeline

	$(window).on("load", function () {
		const tlMaster = new TimelineMax();

		tlMaster
			.add(slideInHead)
			.add(revealTitle, '+=0.5')
			.add(revealBioText, '+=0.5')
			.add(revealContact, '+=0.8')
	})

	///////// 'MY WORK' NAV BAR /////////

	// Highlight 'All' tab by default

	const workTl = new TimelineMax()

	workTl.to($(allCatLink), 0.2, {
		className: '+=green-bg white-text'
	})


	// Shift background color to selected project type in navbar

	function moveBgAndWhite(category) {
		const tl = new TimelineMax()

		TweenMax.set($(projectTypeP).not(category), {
			className: '-=green-bg white-text'
		})

		tl.to(category, 0.2, {
			className: '+=green-bg white-text'
		})
	}

	// Highlight selected project type on click, and shift highlight to another project that's clicked on

	function showType(type) {
		const unhideTl = new TimelineMax();
		const showTl = new TimelineMax()

		type === projectCard ? (

			unhideTl
			.to($(type), 0.1, {
				className: '-=hover-effect',
				opacity: 1
			})

		) : (

			unhideTl
			.to($(type), 0.1, {
				className: '-=hover-effect',
				opacity: 1
			}),

			showTl
			.to($(projectCard).not(type), 0.3, {
				className: '+=hover-effect',
				opacity: 0.1
			})
		)
	}

	$(projectType).on('click', function (e) {
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

		} else if ($(this).hasClass('noJS-projects')) {
			moveBgAndWhite(noJSCatLink)
			showType(noJSType)
		}
	})
});