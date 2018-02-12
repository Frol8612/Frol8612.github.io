
let t1 = document.getElementById('t1'),
    num = Math.floor(Math.random() * 11),
    sp = document.getElementById('sp');
    sp.innerHTML = 3;
    console.log(num);

function addNum (e) {
    if(e.key == 'Enter') {
        if (!isNaN(parseFloat(t1.value))) {
            if (parseInt(t1.value) || t1.value == 0) {
                if (t1.value < 0 || t1.value > 10) {
                    alert('Введите значение от 1 до 10');
                } else {
                    if (t1.value > num) {
                        alert('Число больше данного');
                        
                    } else if (t1.value < num) {
                        alert('Число меньше данного');
                    } else {
                        alert('Вы угадали!!!');
                        location.reload();
                        alert('Сгенерированно новое число!!!');
                        return;
                    }
                }
            } else {
                alert('Введите целое число!');
            }
        } else {
            alert('Ведите число!');
        }
        t1.value = null;
        numPop();
    }
}

function numPop() { 
    sp.innerHTML--;
    if (sp.innerHTML == 0) {
        alert('Попытки использованны!!!');
        location.reload();
        alert('Сгенерированно новое число!!!');
    }
}

t1.addEventListener('keydown', addNum);