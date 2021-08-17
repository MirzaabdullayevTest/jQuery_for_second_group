$(function () {
    var $red = $('.f-red')
    var $blue = $('.f-blue')
    var $green = $('.f-green')
    var $all = $('.f-all')
    var $color = $('.color')

    function toggleColor(val) {
        $color.not(val).slideUp()
        $color.filter(val).slideDown();
    }

    $red.click(function () {
        toggleColor('.red')
    })

    $blue.click(function () {
        toggleColor('.blue')
    })

    $green.click(function () {
        toggleColor('.green');
    })

    $all.click(function () {
        toggleColor($color);
    })


});