var button = document.getElementById('drop');
var menuHeader = document.getElementById('menu');

function removeStyle() {
    menuHeader.removeAttribute('style');
}

function buttonRotate() {
    button.style.transform = 'rotate(0deg)';
}

function showMenu() {
    if (menuHeader.style.display == !'block' || menuHeader.style.display == 'none') {
        button.style.cssText = 'transform: rotate(90deg); \
                                transition: .3s ease-out; \
        ';
        menuHeader.style.cssText = 'display: block; \
                                    opacity: 1; \
                                    transition: 1s ease-out; \
        ';
    } 
    else {
        buttonRotate();
        removeStyle();
    }
}

function sizeWindow () {
    buttonRotate();
    if (window.screen.width >= 875) {
        removeStyle();
    } else {
        menuHeader.style.cssText = 'display: none; \
                                    opacity: 0; \
        ';
    }
}

button.addEventListener('click', showMenu);
window.addEventListener('resize', sizeWindow);

var clickMenu = false;
document.addEventListener('click',(e)=>{
    if (!clickMenu && !menuHeader.contains(e.target) && menuHeader.style.display != 'none') {
        buttonRotate()
        removeStyle();
    }
    clickMenu = false;
});

button.addEventListener('click',()=>{
    clickMenu = true;
});