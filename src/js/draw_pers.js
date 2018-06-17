import DrawImg from './Draw';

let canvas = document.querySelector('#canvas2');
let context = canvas.getContext('2d');
let ind = _.random(0, 1);
let indArr1 = _.random(0, 1);
let indArr2 = _.random(2, 7);

let audio = new Audio();

let canDraw = (speedHero, startHero, endHero, posHero, speedEvil, startEvil, endEvil, posEvil, nxt, sts, sound) => {
  
  if (nxt) {
    ind = _.random(0, 1);
    indArr1 = _.random(0, 1);
    indArr2 = _.random(2, 7);
  }

  let evilArr = [
    ['./app/images/evil/ninja-evil.png', './app/audio/Socapex - new_hits.wav'],
    ['./app/images/evil/ronin-evil.png', './app/audio/Socapex - new_hits_3.wav'],
    ['./app/images/evil/mag-evil.png', './app/audio/Socapex - new_hits_5.wav'],
    ['./app/images/evil/knight-evil.png', './app/audio/Socapex - new_hits_1.wav'],
    ['./app/images/evil/vicking1-evil.png', './app/audio/Socapex - new_hits.wav'],
    ['./app/images/evil/vicking2-evil.png', './app/audio/Socapex - new_hits_3.wav'],
    ['./app/images/evil/vicking3-evil.png', './app/audio/Socapex - new_hits_1.wav'],
    ['./app/images/evil/archer-evil.png', './app/audio/Bow.wav']
  ];

  let objEvil = {
    '0': {
      'a': new DrawImg(evilArr[indArr1][0], context, 522, 522, speedEvil, startEvil, endEvil, 522),
      'b': posEvil,
      'posY': 163,
      'track': evilArr[indArr1][1]
    },
    '1': {
      'a': new DrawImg(evilArr[indArr2][0], context, 522, 522, speedEvil, startEvil, endEvil, 410),
      'b': posEvil - 50,
      'posY': 143,
      'track': evilArr[indArr2][1]
    }
  };

  if (evilArr[indArr2][0] === './app/images/evil/archer-evil.png') {
    objEvil['1']['b'] = 670;
  }

  let hero = new DrawImg('./app/images/hero/hero.png', context, 631, 579, speedHero, startHero, endHero, 300);
  let evil = objEvil[ind]['a'];

  

  if (sound === 0) {
    audio.src = './app/audio/Socapex - Swordsmall.wav';
  } else {
    audio.src = objEvil[ind]['track'];
  }


  if (sts) {
    audio.play();
    audio.loop = true;
  } else {
    audio.pause();
    audio.currentTime = 0.0;
  }
 
  let animate = () => {
    requestAnimationFrame(animate);

    context.clearRect(0, 0, canvas.width, canvas.height);

    hero.update();
    evil.update();

    hero.draw(posHero, 240);
    evil.draw(objEvil[ind]['b'], objEvil[ind]['posY']);
  }

  animate();
}


export default canDraw;
