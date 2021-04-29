$(document).ready(function () {

    $('img').hover(function () {
        var tmp = $(this).attr('data-alt-src');
        $(this).attr('data-alt-src', $(this).attr('src'));
        $(this).attr('src', tmp);

    })

});
