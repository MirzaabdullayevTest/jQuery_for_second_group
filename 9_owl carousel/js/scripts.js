$(document).ready(function () {
    $(".owl-carousel.slider").owlCarousel({
        items: 4,
        margin: 20,
        loop: true,
        center: true,
        autoplay: true,
        autoplayTimeout: 1000,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 3,
            },
            1000: {
                items: 5,
            }
        },
        nav: true,
    });
    $(".owl-carousel.slider2").owlCarousel({
        items: 4,
        margin: 20,
        loop: true,
        center: true,
        autoplay: true,
        autoplayTimeout: 1000,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 3,
            },
            1000: {
                items: 4,
            }
        },
        nav: true,
    });
});