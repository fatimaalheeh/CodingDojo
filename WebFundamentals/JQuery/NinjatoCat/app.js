$(document).ready(function () {

    $('img').click(function () {
        var tmp = $(this).attr('data-alt-src');
        $(this).attr('data-alt-src', $(this).attr('src'));
        $(this).attr('src', tmp);

    })

});



    // if($('img').attr({src: 'ninja.jpg'}))
    // {
    //     $('img').click(function () {
    //         $(this).attr({
    //             src: 'cat.jpg',
    //             alt: 'cat img',
    //             title: 'cat'

    //         },10);
    //     });
    // }`  
    // else if(($('img').attr({src: 'cat.jpg'}))
    // {
    //     $('img').click(function () {
    //         $(this).attr({
    //             src: 'ninja.jpg',
    //             alt: 'ninja img',
    //             title: 'ninja'

    //         },10);
    //     });
    // }
