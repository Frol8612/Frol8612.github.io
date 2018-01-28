var button = document.getElementById('drop');
var menuHeader = document.getElementById('menu');
var clickMenu = false;

function removeStyle() {
    menuHeader.removeAttribute('style');
}

function buttonRotate() {
    button.style.cssText = 'transform: rotate(0deg); \
                            transition: transform .3s ease-out; \
    ';
}

//Открывает и скрывает меню при нажатии на кнопку.
function showMenu() {
    if (menuHeader.style.display == !'block' || menuHeader.style.display == 'none') {
        button.style.cssText = 'transform: rotate(90deg); \
                                transition: transform .3s ease-out; \
        ';
        button.classList.add('active');
        menuHeader.style.cssText = 'display: block; \
                                    opacity: 1; \
        ';
    } 
    else {
        buttonRotate();
        button.classList.remove('active');
        removeStyle();
    }
    clickMenu = true;
}

//При изменении размера экрана скрывает меню.
function sizeWindow () {
    buttonRotate();
    button.classList.remove('active');
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

//Закрывает меню при нажатии вне его.
document.addEventListener('click', function closeMenu(e) {
    if (!clickMenu && !menuHeader.contains(e.target) && menuHeader.style.display != 'none') {
        buttonRotate()
        button.classList.remove('active');
        removeStyle();
    }
    clickMenu = false;
});

// Вывод текса в span при нажатии на radio и автоматически
var radioFlag = document.querySelectorAll('.radButton');
var spanT = document.getElementById('stext');
showRad();
function showRad() {
    setTimeout(function() {
        if(radioFlag[0].checked == true) {
            radioFlag[0].checked = false;
            radioFlag[1].checked = true;
            spanT.innerHTML = radioFlag[1].value;
        } else if(radioFlag[1].checked == true) {
            radioFlag[1].checked = false;
            radioFlag[2].checked = true;
            spanT.innerHTML = radioFlag[2].value;
        }  else if(radioFlag[2].checked == true) {
            radioFlag[2].checked = false;
            radioFlag[3].checked = true;
            spanT.innerHTML = radioFlag[3].value;
        } else {
            radioFlag[3].checked = false;
            radioFlag[0].checked = true;
            spanT.innerHTML = radioFlag[0].value;
        }
        showRad();
    }, 3000);
    for (var i = 0; i < radioFlag.length; i++){
        radioFlag[i].addEventListener('click', function() {
            spanT.innerHTML = this.value;
        });
    }
}





 





