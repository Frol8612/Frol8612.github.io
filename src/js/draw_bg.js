let canvas = document.querySelector('#canvas');
let ctx = canvas.getContext('2d');
let bg = new Image();

let rand = _.random(1, 10);

bg.src = `./app/images/bg/battleback${rand}.png`;

let bgDraw = () => {
    bg.addEventListener('load', () => {
        ctx.drawImage(bg, 0 , 0);
    });
}

export default bgDraw;