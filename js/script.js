$(document).ready(function () {
    $(".mscrol").addClass("hidden").viewportChecker({
        classToAdd: "visible fadeIn animated",
        offset: 200
    });
});

$(document).ready(function () {
    $(".scrol").addClass("hidden").viewportChecker({
        classToAdd: "visible fadeIn animated",
        offset: 15
    });
});

$(function () {
    $('.drop').click(function () {
        $('.drop').toggleClass('gum');
        if ($('#menu').css('display') == 'none') {
            $('#menu').fadeIn();
        } else {
            $('#menu').fadeOut();
        }
    });
    $(window).resize(function () {
        if ($(window).width() >= 875) {
            $('#menu').css('display','block');
        } else {
            $('#menu').css('display','none');
        }
    });
});

$(function() {
    $('.menu').hover(function () {
        $('#head').toggleClass('active'); 
        $('#mn1').toggleClass('active1');
        $('.mn23').toggleClass('active23');
        $('#mn4').toggleClass('active4');
    });
});