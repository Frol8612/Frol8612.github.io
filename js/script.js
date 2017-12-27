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

var button = document.getElementById('drop');
var menuHeader = document.getElementById('menu');
button.onclick = function showMenu() {
    if (menuHeader.style.display == 'none') {
        button.style.cssText = 'transform: rotate(90deg); \
                                transition: .3s ease-out; \
        ';
        menuHeader.style.cssText = 'display: block; \
                                    opacity: 1; \
                                    transition: 1s ease-out; \
        ';
    }  else {
        button.style.transform = 'rotate(0deg)';
        menuHeader.style.cssText = 'display: none; \
                                    opacity: 0; \
        ';
    }
}

window.onresize = function sizeWindow () {
    if (window.screen.width >= 875) {
        menuHeader.style.cssText = 'display: block; \
                                    opacity: 1; \
        ';
    } else {
        menuHeader.style.cssText = 'display: none; \
                                    opacity: 0; \
        ';
        button.style.transform = 'rotate(0deg)';
    }
}

$(function() {
    $('.menu').hover(function () {
        $('#head').toggleClass('active'); 
        $('#mn1').toggleClass('active1');
        $('.mn23').toggleClass('active23');
        $('#mn4').toggleClass('active4');
    });
});