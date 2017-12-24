$(document).ready(function() {
    $(".mscrol").addClass("hidden").viewportChecker({
        classToAdd: "visible fadeIn animated",
        offset: 200
    });
});

$(document).ready(function() {
    $(".scrol").addClass("hidden").viewportChecker({
        classToAdd: "visible fadeIn animated",
        offset: 15
    });
});

$('.drop').click(function() {
    $('.menu').fadeToggle();
    $('.drop').toggleClass('gum');
});
