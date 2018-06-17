import TaskCount from './Task_count';
import 'webpack-jquery-ui/sortable';
import dict from './../json/dictionary.json';
import sortArr from './sort';
import {startFight, healthRestore} from './fight';
import taskVoice from './voice.js';
import timeGame from './timer';

let arr = [];
let arrTranslate;
let strSwap = '';
let strVoice = '';
let sortStrSwap;
let $magicContainer = $('.magic-container');
let $taskMath = $('.task-math');
let $taskDisplay = $('#task');
let $answerNumber = $('#answer-number');
let $taskTranslate = $('.task-translate');
let $answerTranslate = $('#answer-translate');
let $wordDisplay = $('#word');
let $sort = $("#sort");
let $taskSwap = $('.task-swap');
let $btnSwap = $('#btn-swap');
let $btnTranslate = $('#btn-translate');
let $btnNumber = $('#btn-number');
let $taskVoice = $('.task-voice');
let $btnAnsVoice = $('#btn-answer-voice');
let $txtVoice = $('#txt-voice');

let classChange = (nameVar) => {
    timeGame(90, true);
    $('.timer').addClass('timer-up');
    $magicContainer.addClass('scale');
    nameVar.removeClass('hide');
}

$magicContainer.click((e) => {

    if (e.target.className == 'btn-fire') {

        let taskCount = new TaskCount();
        classChange($taskMath);
        arr = taskCount.arithmetic();
        $taskDisplay.html(arr[0]);

    } else if (e.target.className == 'btn-air') {

        arrTranslate = dict[_.random(0, dict.length - 1)];
        classChange($taskTranslate)
        $wordDisplay.html(arrTranslate.word);

    } else if (e.target.className == 'btn-water') {
        
        strSwap = dict[_.random(0, dict.length - 1)].word;
        sortStrSwap = strSwap.split('')
        sortArr(sortStrSwap);
        classChange($taskSwap);

        let word = '';

        _.forEach(sortStrSwap, (a) => {
            word += `<li class="ui-state-default letter">${a}</li>`;
            $sort.html(word);
        });
       
        
    } else if (e.target.className == 'btn-earth') {
        strVoice = dict[_.random(0, dict.length - 1)].word;
        taskVoice(strVoice);
        classChange($taskVoice);
    } 
});




let check = () => {

    $sort.sortable({
        containment: '.task-swap'
    });
    $sort.disableSelection();
 
    $btnSwap.click(() => {
        if ($('.letter').text() === strSwap) {
            startFight(true, 15);
            
        } else {
            startFight(false);
        }
    });

    let translateCheck = () => {
        if ($answerTranslate.val().trim().length > 0 && arrTranslate.translate.some(a => a === $answerTranslate.val().trim().toLowerCase())) {
            startFight(true, 10);
        } else {
            startFight(false);
        }
    }

    $btnTranslate.click(() => {
        translateCheck();
    });

    $answerTranslate.keydown((e) => {
        if (e.which === 13) {
            translateCheck();
        }
    });

    let numberCheck = () => {
        if ($answerNumber.val().trim().length > 0 && $answerNumber.val() === arr[1]) {
            startFight(true, 15);
        } else {
            startFight(false);
        }
    }

    $btnNumber.click(() => {
        numberCheck();
    });

    $answerNumber.keydown((e) => {
        if (e.which === 13) {
            numberCheck();
        }
    });

    let voiceCheck = () => {
        if ($txtVoice.val().trim().length > 0 && $txtVoice.val().trim().toLowerCase() === strVoice) {
            healthRestore(20);  
        } else {
            startFight(false);
        }
    }

    $btnAnsVoice.click(() => {
        voiceCheck();
    });

    $txtVoice.keydown((e) => {
        if (e.which === 13) {
            voiceCheck();
        }
    });

}
export default check;




