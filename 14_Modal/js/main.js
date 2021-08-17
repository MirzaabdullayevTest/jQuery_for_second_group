$(function () {
    var $btnOpen = $('.btn')
    var $overlay = $('.overlay')
    var $popup = $('.popup')
    var $phone = $('.popup .phone')
    var $btnClose = $('.close-btn')

    $btnOpen.on('click', function () {
        $overlay.show()
        $popup.css('transform', 'translate(-50%, -100%)')
        var $attr = $(this).attr('data-phone')
        $phone.html($attr)
    })

    $overlay.click(function () {
        $(this).hide()
        $popup.css('transform', 'translate(-50%, 200%)')
    })

    $btnClose.click(function () {
        $overlay.hide()
        $popup.css('transform', 'translate(-50%, 200%)')
    })
});