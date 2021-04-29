$(document).ready(function () {

    $("#btn-reset").click(function () {
        $("img").show(900);
    });
    $("img").click(function () {
        $(this).hide(900);
    });

});