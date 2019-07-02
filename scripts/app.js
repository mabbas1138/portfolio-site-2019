const mySiteApp = {};

// Initialize

mySiteApp.init = () => {
    mySiteApp.fixedNav();
    mySiteApp.burgerMenu();
};

// SMOOTH SCROLL //

$("a[href^='#']").click(function (e) {
    e.preventDefault();

    let position = $($(this).attr("href")).offset().top;
        $("body, html").animate({
            scrollTop: position
        }, 1000);
});


// HAMBURGER MENU //
mySiteApp.burgerMenu = () => {
    $(".nav-links").hide();
    $(".hamburger").click(function () {
        $(".hamburger").toggleClass("is-active");
        // START: accessibility feature -- //
        $(this).attr('aria-expanded', function(i, attr) {
            return attr === 'true';
        });
        // -- END //
        $('.nav-bar').addClass('dark-blue-bg');
        $(".nav-links").slideToggle("medium", function () {
            $(".cross").show();
        });
    });

};


// FIXED NAVIGATION UPON SCROLL

mySiteApp.fixedNav = () => {
    $(window).scroll(function() {
        if ($(window).scrollTop() < 500 && $(window).scrollTop() > 500) {
            $('.nav-bar').addClass('nav-scroll');
        } else {
            $('.nav-bar').removeClass('nav-scroll');
        }
    });
};

/// ANIMATION ///

// Header 

const nameHeading = $("#name"),
      positionHeading = $("#position"),
      myHeadImg = $("#big-head");


TweenMax.fromTo(nameHeading, 5, {y: -300}, { ease: Elastic.easeOut.config(1, 0.5), y: 5 })
TweenMax.fromTo(positionHeading, 5, {y: -900}, { ease: Elastic.easeOut.config(1, 0.5), y: 10, delay: 0.25})
TweenMax.from(myHeadImg, 2, {opacity: 0})


$('.toggle-head').on("click", function (e) {
    e.preventDefault();

})


// 

// 'Send' button and email validation
    // eslint-disable-next-line no-unused-vars
    $('.submit-form').on( "click", function(e) {
        e.preventDefault();

        const userName = $('#name').val();
        const userEmail = $('#email').val();
        const userMsg = $('#message').val();

        $('.email-error').remove();
        let hasError = false;

        if (hasError == true) {
            return false;
        }

        function isEmail(userEmail) {
            const regex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            if (!regex.test(userEmail)) {
                return false;
            } else {
                return true;
            }
        }

        if (userName != "" && userEmail != "" && userMsg !== "") {
          $("submit-form").addClass("wider sent-hand");
          $(".hidden").addClass("visible");
          $(".send-text").html("Sent!").addClass("fade").css('font-size', '0.8rem');
          $(".done").removeClass("revert-send");
          $(this).addClass("done");

        } else if (userName == "" && userEmail == "" && userMsg == "") {
          alert("All fields are mandatory.");
        } else if (userName == "") {
          alert("Please enter your name");
        } else if (userEmail == "") {
          alert("Please enter your email");
        } else if (userMsg == "") {
          alert("Please include a message.");
        } else if (!regex.test(emailValid)) {
          return false;
        } 

    });

      

// RESET BUTTON ALSO CLEARS EMAIL VALIDATION ERRORS AND REVERTS 'SENT' BUTTON TO DEFAULT STYLING

$('.reset').on('click', function(){
    $('.email-error').remove();
    $('.submit-form').removeClass('wider');
    $('.replace').removeClass('fa-paper-plane').removeClass('sent-hand');
    $('.send-text').text('Sent!').removeClass('fade');
    $('.hidden').removeClass('visible');
    $('.done').addClass('revert-send');

    if ($('#name').val() == '' && $('#email').val() == '' && $('#message').val() == '') {
        alert('Nothing to reset!');
    }
});

// 'PROJECTS' -- FADE IN ON SCROLL



$(function () {
    mySiteApp.init();
});
