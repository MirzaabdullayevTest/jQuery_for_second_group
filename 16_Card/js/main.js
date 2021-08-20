$(document).ready(function () {
    var $input = $('.input-cart-number')
    var $cardCCV = $('#card-ccv')

    $input.on('input', function () {
        var $length = $(this).val().length
        var $index = $(this).index()

        $('.number span:nth-child(' + $index + ')').html($(this).val())

        if ($length >= 4) {
            $(this).next().focus()
        }
        if ($length < 1) {
            $(this).prev().focus()
        }
    })


    $cardCCV.focus(function () {
        $('.credit-card-box .flip').css('transform', 'rotateY(180deg)')
    })
    
    $cardCCV.blur(function () {
        $('.credit-card-box .flip').css('transform', 'rotateY(0deg)')
    })

    $cardCCV.on('input', function () {
        console.log($(this).val())
        $('.ccv div').html($(this).val())
    })

});