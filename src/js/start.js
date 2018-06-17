import Name from './Name';
import losStProgress from './save.js';
import check from './check';
import timeGame from './timer.js';

let nameEvil = new Name();
let audioStart = new Audio();
audioStart.src = './app/audio/Ove Melaa - Heaven Sings.mp3';

let start = () => {
    audioStart.play();
    audioStart.loop = true;

    $('#btn-start-duel').click(() => {
        
        if ($('#name-gamer').val().trim().length > 0) {
            check();
            timeGame(59);
            audioStart.pause();
            $('.name-container, .btn-start-duel, .btn-leaderboard, .btn-back').addClass('hide');
            $('.canvas-wrapper, #btn-attack').removeClass('hide');
            $('#name-hero').html($('#name-gamer').val());
            $('#name-evil').html(nameEvil.generatorName());
          
        } else {
            $('.error-name').removeClass('hide');
        }
    });
    
    $('#name-gamer').focus(() => {
        $('.error-name').addClass('hide');
    });
    
    $('#btn-attack').click(() => {
        $('.magic-container').removeClass('scale');
        $('#btn-attack').addClass('hide');
    });

    $('#btn-leaderboard').click(() => {
        losStProgress();
        $('#btn-close').removeClass('hide');
        $('.total-result').removeClass('scaleY');
        $('.p').hide();
        
        $('#btn-close').click(() => {
            $('.total-result').addClass('scaleY');
            $('#btn-close').addClass('hide');
            $('.p').show();
        });
    });
}

export default start;






