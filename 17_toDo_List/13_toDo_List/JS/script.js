$(document).ready(function () {
    var $btnAdd = $('.btn')
    var $inpt = $('.form-control')
    var $ul = $('.list-group')

    $btnAdd.click(function () {
        var $val = $inpt.val()
        $inpt.val('')

        $ul.append('<li class="alert alert-dark d-flex justify-content-between align-items-center"><span>'
            + $val + '</span><button class="btn-close">x</button></li>')
    })

    $ul.on('click', '.btn-close', function () {
        $(this).parent().remove()
    })
});