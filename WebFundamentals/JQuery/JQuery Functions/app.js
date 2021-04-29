$(document).ready(function () {
    console.log("ready!");
    /*
    
    $( window ).on("load",function() {
    console.log( "ready!" );*/
    //addClass
    $('article .shown').toggle();
    $('article .slideddown').slideToggle();
    $('article #fadedIn').fadeToggle();


    $("#addclass").click(function () {
        $(".Class  h2").css("background-color", "red");
    });
    //slideToggle
    $("#slidetoggle").click(function () {
        $("img").toggle();
    });
    //append

    $('#append').click(function () {
        $('article .appended').append('✧ (❀‿❀) ☆<br>(๑˃̵ᴗ˂̵)و');

    });
    $('#hideme').click(function () {
        $('article .hidden').hide();

    });
    $('#showme').click(function () {
        $('article .shown').show();

    });
    $('#showhide').click(function () {
        $('article .showorhide').toggle();

    });

    $('#slidemeup').click(function () {
        $('article .slidedup').slideUp();

    });
    $('#slidemedown').click(function () {
        $('article .slideddown').slideDown();

    });
    $('#slidetoggleme').click(function () {
        $('article .slidetoggled').slideToggle();

    });


    $("#fadeINme").click(function () {
        $("#fadedIn").fadeIn()
        // Animation complete
    });
    $("#fadeOUTme").click(function () {
        $("#fadedOut").fadeOut()
        // Animation complete
    });

    $("#addBefore").click(function () {
        $(".addedBefore").before("I came here through a nepotist called Add before master!")
        // Animation complete
    });
    $("#addAfter").click(function () {
        $(".addedAfter").after("<hr>" + "Nooo, why didn't I ask Add before master, I could have gone first, Add after Master you tricked me!")
        // Animation complete
    });

    $("#addingHTMLcode").click(function () {
        $(".HTMLcontainer").html("<h2>Add HTML</h2><p>I was added by a click, This is magic!</p>")
        // Animation complete
    });
    $("#addingAttr").click(function () {
        $(".attrContainer").attr({
            src: "nature.jpg",
            alt: "Nature picture",
            title: "photo of nature"
        });

    });
    /*
       $("#addingAttr").click(function () {
        $(".attrContainer").html('<img class="attrContainer"'
        + attr({
            src: "nature.jpg",
            alt: "Nature picture",
            title: "photo of nature"
        })
        +'>'
    */

    $("#addvalue").click(function () {
        $(".valueadded").val("Hi!I'm a value of a text field");
    });
    $("#addtext").click(function () {
        $(".textContainer").text("Hi!I'm a text, no magic.. really.");
    });
});
