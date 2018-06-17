import canDraw from './draw_pers.js';
import Name from './Name';
import locStProgress from './save.js';
import timeGame from './timer';

let $btnAttack = $('#btn-attack');
let $animationHealth =  $('.animation-health');
let healthHero = 100;
let healthEvil = 100;
let win = 0;

let audioHealth = new Audio();
audioHealth.src = './app/audio/Accept.mp3'

let gameWin = () => {
    
    $btnAttack.css('display', 'none');

    setTimeout(() => {
        let nameEvil = new Name();
        healthRestore();
        $('.m-win').addClass('hide');
        canDraw(6, 0, 11, 50, 6, 0, 9, 720, true);
        $('#name-evil').html(nameEvil.generatorName());
        $btnAttack.removeAttr('style');
    }, 1500);

    $('.m-win').removeClass('hide');
    win += 1;
    $('#win').html(win);
}

let gameOver = () => {
    $('.m-game-over').removeClass('hide');
    $('.task-wrapper').addClass('hide')
    $btnAttack.css('display', 'none');
    setTimeout(() => {
        locStProgress(win);
        $('.total-result').removeClass('scaleY');
    }, 1500);
}

let statusBar = (prog, num, i) => {
    $(prog).css('width', `${i}%`);
    $(num).html(`${i}%`);

    if (prog === '#prog-evil' && healthEvil <= 0) {
        gameWin();
    } else if (prog === '#prog-hero' && i <= 0 && healthHero <= 0) {
        gameOver();
    }
}

$(document).keydown((e) => {
    if (e.which === 27) {
        console.log(win);
        locStProgress(win);
        window.location.reload();
    }
});

let healthRestore = (hero) => {
    
    timeGame(60, true);

    $('.timer').removeClass('timer-up');

    if (hero) {
        audioHealth.play();
        $animationHealth.removeClass('hide');

        setTimeout(() => {
            if (healthHero < 100) {
                healthHero = healthHero + hero;
                if (healthHero > 100) {
                    healthHero = 100;
                }
                $('#prog-hero').css('width', `${healthHero}%`);
                $('#hero-num').html(`${healthHero}%`);
            }

            $animationHealth.addClass('hide');
            $btnAttack.removeClass('hide');
        }, 2000);
        
        
        $('.task-voice').addClass('hide');
        $('#txt-voice').val('');
        
    } else {
        healthHero = 100;
        healthEvil = 100;
        $('#prog-evil, #prog-hero').css('width', '100%');
        $('#evil-num, #hero-num').html('100%');
    }
    
}

let startFight = (val, damage) => {
    timeGame(60, true);
    if (val) {
        canDraw(3, 12, 19, 520, 3, 20, 29, 720, false, true, 0);
     
        setTimeout(() => {
            statusBar('#prog-evil', '#evil-num', healthEvil -= damage);
            canDraw(6, 0, 11, 50, 6, 0, 9, 730, false, false);
            
            $btnAttack.removeClass('hide');
        }, 2000);

    } else {
        canDraw(3, 24, 31, 50, 3, 10, 19, 250, false, true);

        setTimeout(() => {
            statusBar('#prog-hero', '#hero-num', healthHero -= 25);
            canDraw(6, 0, 11, 50, 6, 0, 9, 720, false, false);
            $btnAttack.removeClass('hide');
        }, 2000);
    }

    $('.task-math, .task-translate, .task-swap, .task-voice').addClass('hide');
    $('#answer-translate, #answer-number, #txt-voice').val('');
}

export {startFight, healthRestore, gameOver};