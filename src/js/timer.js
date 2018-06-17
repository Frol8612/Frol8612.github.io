import { startFight, healthRestore, gameOver } from './fight.js';

let timer;

let changeOfTime = (sec) => {
    timer = setInterval(() => {

        if (sec < 0) {
            clearInterval(timer);
            gameOver();
        } else {
            $('.timer').html(sec);
            sec -= 1;
        }

    }, 1000);
}

let timeGame = (sec, reset) => {
    if (reset) {
        clearInterval(timer);
        changeOfTime(sec);
    } else {
        changeOfTime(sec);
    }

}

export default timeGame;