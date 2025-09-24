// Enhanced JavaScript for Multi-critic Locomanipulation Project Website
window.HELP_IMPROVE_VIDEOJS = false;

$(document).ready(function() {
    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function() {
      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");
    });

    // Add content box class to all abstract and model architecture sections
    $(".column.is-four-fifths").addClass("content-box");
    
    // Add scroll-to-top button
    $("body").append('<div class="scroll-to-top"><i class="fas fa-arrow-up"></i></div>');
    
    // Show/hide scroll-to-top button based on scroll position
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $('.scroll-to-top').addClass('show');
        } else {
            $('.scroll-to-top').removeClass('show');
        }
    });
    
    // Scroll to top when the button is clicked
    $('.scroll-to-top').click(function() {
        $('html, body').animate({scrollTop: 0}, 800);
        return false;
    });
    
    // Add class to results section for special styling
    $(".title.is-5").parent().addClass("results-section");
    
    // Add class to model architecture image
    $(".content.has-text-centered img").addClass("model-architecture-img");
    
    // Add video-container class to all video elements
    $("video").parent().addClass("video-container");
    
    // Add abstract-section class to the abstract section
    $(".column.is-four-fifths").first().addClass("abstract-section");
    
    // Enable autoplay when video is in viewport
    const videos = document.querySelectorAll('video[autoplay]');
    
    // Options for the Intersection Observer
    const options = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.1
    };
    
    // Function to handle intersection
    const handleIntersection = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.play();
            } else {
                entry.target.pause();
            }
        });
    };
    
    // Create an observer
    const observer = new IntersectionObserver(handleIntersection, options);
    
    // Observe each video
    videos.forEach(video => {
        observer.observe(video);
    });
    
    // Add animation to sections when scrolling
    const animateSections = document.querySelectorAll('.section');
    
    const sectionOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, sectionOptions);
    
    animateSections.forEach(section => {
        sectionObserver.observe(section);
    });
});