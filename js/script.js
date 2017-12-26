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
        if ($('#menu').css('display') == 'none') {
            $('.drop').css('transform','rotate(90deg)');
            $('#menu').fadeIn();
            return false;
        } else {
            $('.drop').css('transform','rotate(0deg)');
            $('#menu').fadeOut();
        } 
    });

    $(document).click( function(event) {
        if( $(event.target).closest('#menu').length) 
        return;
        $('.drop').css('transform','rotate(0deg)');
        $('#menu').fadeOut('');
        event.stopPropagation();
    });

    $(window).resize(function () {
        if ($(window).width() >= 875) {
            $('#menu').css('display','block');
        } else {
            $('#menu').css('display','none');
            $('.drop').css('transform','rotate(0deg)');
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