import '../scss/style.scss'; 
import preDefault from './default.js';
import start from './start.js';
import bg from './draw_bg.js';
import canDraw from './draw_pers.js';
 
$(window).on('load', () => {  
    $('.pulse').fadeOut();
    $('#page-preloader').delay(500).fadeOut('slow');
});

preDefault();
start();
canDraw(6, 0, 11, 50, 6, 0, 9, 720, 100);
bg();
