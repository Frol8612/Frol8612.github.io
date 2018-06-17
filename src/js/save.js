let locArr = [];
let $gameList = $('.total-table');
let $nameGame = $('#name-gamer');
let key = 'progress';
let table = '';

let locStProgress = (win) => {
    table = '';
    if (localStorage.getItem(key) === null) {
        localStorage.setItem(key, '[]');
    }

    locArr = JSON.parse(localStorage.getItem(key));

    if (win !== undefined && $nameGame.val().trim().length > 0) {
        locArr.push(`${$nameGame.val()} &rarr; ${win}`);
    }

    locArr = locArr.filter((b, i) => locArr.indexOf(b) === i).sort((x, y) => Number(y.split(' ')[2]) - Number(x.split(' ')[2]));

    if (locArr.length > 10) {
        locArr.pop();
    }

    locArr.forEach((a, i) => {
       table += `<li>${i + 1}) ${a}</li>`;
    });
   
    $gameList.html(table);

    locArr = JSON.stringify(locArr);
    localStorage.setItem(key, locArr);
}

export default locStProgress;