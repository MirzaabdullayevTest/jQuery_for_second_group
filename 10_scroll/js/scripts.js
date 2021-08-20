$(document).ready(function () {
    var $links = $('.menu a')

    $links.click(function (e) {
        e.preventDefault()
        $links.removeClass('active')
        var $attr = $(this).addClass('active').attr('href')

        var $top = $($attr).offset().top - 60

        $('html, body').animate({
            scrollTop: $top
        }, 500)

    })

    $(window).scroll(function () {
        var $windowTop = $(this).scrollTop()

        $links.each(function () {
            var $href = $(this).attr('href')

            var $offsetTop = $($href).offset().top - 100

            if ($windowTop >= $offsetTop) {
                $links.removeClass('active')
                $(this).addClass('active')
            }
        })
    })
});