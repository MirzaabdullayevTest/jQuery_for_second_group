$(document).ready(function () {
    var $show = $('.show')
    var $hide = $('.hide')
    var $section = $('section')
    var $success = $('.success')
    var $footer = $('footer')

    $show.click(function () {
        $(this).hide()
        $section.slideDown();
        $hide.show()
    })

    $hide.click(function () {
        $(this).hide()
        $section.slideUp();
        $footer.slideUp();
        $show.show()
    })

    $success.click(function () {
        $footer.slideDown()
    })
});