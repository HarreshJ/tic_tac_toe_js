let turnCounter = 1;
let topLeftClicked = false;
let topMiddleClicked = false;
let topRightClicked = false;
let middleLeftClicked = false;
let middleMiddleClicked = false;
let middleRightClicked = false;
let bottomLeftClicked = false;
let bottomMiddleClicked = false;
let bottomRightClicked = false;

let tl = '';
let tm = '';
let tr = '';
let ml = '';
let mm = '';
let mr = '';
let bl = '';
let bm = '';
let br = '';
let asking = true;

const topLeftSquare = document.getElementById('topLeft');
const topMiddleSquare = document.getElementById('topMiddle');
const topRightSquare = document.getElementById('topRight');
const middleLeftSquare = document.getElementById('middleLeft');
const middleMiddleSquare = document.getElementById('middleMiddle');
const middleRightSquare = document.getElementById('middleRight');
const bottomLeftSquare = document.getElementById('bottomLeft');
const bottomMiddleSquare = document.getElementById('bottomMiddle');
const bottomRightSquare = document.getElementById('bottomRight');


function checkEndGame() {
    if ((tl === 'X' && tm === 'X' && tr === 'X') || (ml === 'X' && mm === 'X' && mr === 'X') || (bl === 'X' && bm === 'X' && br === 'X') || (tl === 'X' && ml === 'X' && bl === 'X') || (tm === 'X' && mm === 'X' && bm === 'X') || (tr === 'X' && mr === 'X' && br === 'X') || (tl === 'X' && mm === 'X' && br === 'X') || (tr === 'X' && mm === 'X' && bl === 'X')) {
        alert('Player 1 wins!');
    } else if ((tl === 'O' && tm === 'O' && tr === 'O') || (ml === 'O' && mm === 'O' && mr === 'O') || (bl === 'O' && bm === 'O' && br === 'O') || (tl === 'O' && ml === 'O' && bl === 'O') || (tm === 'O' && mm === 'O' && bm === 'O') || (tr === 'O' && mr === 'O' && br === 'O') || (tl === 'O' && mm === 'O' && br === 'O') || (tr === 'O' && mm === 'O' && bl === 'O')) {
        alert('Player 2 wins!');
    };
}


topLeftSquare.addEventListener('click', function () {
    console.log('xxx')

    if (topLeftClicked === false && turnCounter % 2 != 0) {
        topLeftSquare.innerHTML = 'X';
        tl = 'X';
    } else if (topLeftClicked === false && turnCounter % 2 === 0) {
        topLeftSquare.innerHTML = 'O';
        tl = 'O';
    };
    topLeftClicked = true
    turnCounter++;

    checkEndGame()
});

topMiddleSquare.addEventListener('click', function () {
    if (topMiddleClicked === false && turnCounter % 2 != 0) {
        topMiddleSquare.innerHTML = 'X';
        tm = 'X';
    } else if (topMiddleClicked === false && turnCounter % 2 === 0) {
        topMiddleSquare.innerHTML = 'O';
        tm = 'O';
    };
    topMiddleClicked = true
    turnCounter++

    checkEndGame()
});

topRightSquare.addEventListener('click', function () {
    if (topRightClicked === false && turnCounter % 2 != 0) {
        topRightSquare.innerHTML = 'X';
        tr = 'X';
    } else if (topRightClicked === false && turnCounter % 2 === 0) {
        topRightSquare.innerHTML = 'O';
        tr = 'O';
    };
    topRightClicked = true
    turnCounter++

    checkEndGame()
});

middleLeftSquare.addEventListener('click', function () {
    if (middleLeftClicked === false && turnCounter % 2 != 0) {
        middleLeftSquare.innerHTML = 'X';
        ml = 'X';
    } else if (middleLeftClicked === false && turnCounter % 2 === 0) {
        middleLeftSquare.innerHTML = 'O';
        ml = 'O';
    };
    middleLeftClicked = true
    turnCounter++

    checkEndGame()
});

middleMiddleSquare.addEventListener('click', function () {
    if (middleMiddleClicked === false && turnCounter % 2 != 0) {
        middleMiddleSquare.innerHTML = 'X';
        mm = 'X';
    } else if (middleMiddleClicked === false && turnCounter % 2 === 0) {
        middleMiddleSquare.innerHTML = 'O';
        mm = 'O';
    };
    middleMiddleClicked = true
    turnCounter++

    checkEndGame()
});

middleRightSquare.addEventListener('click', function () {
    if (middleRightClicked === false && turnCounter % 2 != 0) {
        middleRightSquare.innerHTML = 'X';
        mr = 'X';
    } else if (middleRightClicked === false && turnCounter % 2 === 0) {
        middleRightSquare.innerHTML = 'O';
        mr = 'O';
    };
    middleRightClicked = true
    turnCounter++

    checkEndGame()
});

bottomLeftSquare.addEventListener('click', function () {
    if (bottomLeftClicked === false && turnCounter % 2 != 0) {
        bottomLeftSquare.innerHTML = 'X';
        bl = 'X';
    } else if (bottomLeftClicked === false && turnCounter % 2 === 0) {
        bottomLeftSquare.innerHTML = 'O';
        bl = 'O';
    };
    bottomLeftClicked = true
    turnCounter++

    checkEndGame()
});

bottomMiddleSquare.addEventListener('click', function () {
    if (bottomMiddleClicked === false && turnCounter % 2 != 0) {
        bottomMiddleSquare.innerHTML = 'X';
        bm = 'X';
    } else if (bottomMiddleClicked === false && turnCounter % 2 === 0) {
        bottomMiddleSquare.innerHTML = 'O';
        bm = 'O';
    };
    bottomMiddleClicked = true
    turnCounter++

    checkEndGame()
});

bottomRightSquare.addEventListener('click', function () {
    if (bottomRightClicked === false && turnCounter % 2 != 0) {
        bottomRightSquare.innerHTML = 'X';
        br = 'X';
    } else if (bottomRightClicked === false && turnCounter % 2 === 0) {
        bottomRightSquare.innerHTML = 'O';
        br = 'O';
    };
    bottomRightClicked = true
    turnCounter++

    checkEndGame()
});
