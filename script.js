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

const topLeftSquare = document.getElementById('topLeft');
const topMiddleSquare = document.getElementById('topMiddle');
const topRightSquare = document.getElementById('topRight');
const middleLeftSquare = document.getElementById('middleLeft');
const middleMiddleSquare = document.getElementById('middleMiddle');
const middleRightSquare = document.getElementById('middleRight');
const bottomLeftSquare = document.getElementById('bottomLeft');
const bottomMiddleSquare = document.getElementById('bottomMiddle');
const bottomRightSquare = document.getElementById('bottomRight');

topLeftSquare.addEventListener('click', function() {
    if (topLeftClicked === false && turnCounter%2 != 0) {
        topLeftSquare.innerHTML = 'X'
    } else if (topLeftClicked === false && turnCounter%2 === 0) {
        topLeftSquare.innerHTML = 'O'
    };
    topLeftClicked = true
});

topMiddleSquare.addEventListener('click', function() {
    if (topMiddleClicked === false && turnCounter%2 != 0) {
        topMiddleSquare.innerHTML = 'X'
    } else if (topMiddleClicked === false && turnCounter%2 === 0) {
        topMiddleSquare.innerHTML = 'O'
    };
    topMiddleClicked = true
});

topRightSquare.addEventListener('click', function() {
    if (topRightClicked === false && turnCounter%2 != 0) {
        topRightSquare.innerHTML = 'X'
    } else if (topRightClicked === false && turnCounter%2 === 0) {
        topRightSquare.innerHTML = 'O'
    };
    topRightClicked = true
});

middleLeftSquare.addEventListener('click', function() {
    if (middleLeftClicked === false && turnCounter%2 != 0) {
        middleLeftSquare.innerHTML = 'X'
    } else if (middleLeftClicked === false && turnCounter%2 === 0) {
        middleLeftSquare.innerHTML = 'O'
    };
    middleLeftClicked = true
});

middleMiddleSquare.addEventListener('click', function() {
    if (middleMiddleClicked === false && turnCounter%2 != 0) {
        middleMiddleSquare.innerHTML = 'X'
    } else if (middleMiddleClicked === false && turnCounter%2 === 0) {
        middleMiddleSquare.innerHTML = 'O'
    };
    middleMiddleClicked = true
});

middleRightSquare.addEventListener('click', function() {
    if (middleRightClicked === false && turnCounter%2 != 0) {
        middleRightSquare.innerHTML = 'X'
    } else if (middleRightClicked === false && turnCounter%2 === 0) {
        middleRightSquare.innerHTML = 'O'
    };
    middleRightClicked = true
});

bottomLeftSquare.addEventListener('click', function() {
    if (bottomLeftClicked === false && turnCounter%2 != 0) {
        bottomLeftSquare.innerHTML = 'X'
    } else if (bottomLeftClicked === false && turnCounter%2 === 0) {
        bottomLeftSquare.innerHTML = 'O'
    };
    bottomLeftClicked = true
});

bottomMiddleSquare.addEventListener('click', function() {
    if (bottomMiddleClicked === false && turnCounter%2 != 0) {
        bottomMiddleSquare.innerHTML = 'X'
    } else if (bottomMiddleClicked === false && turnCounter%2 === 0) {
        bottomMiddleSquare.innerHTML = 'O'
    };
    bottomMiddleClicked = true
});

bottomRightSquare.addEventListener('click', function() {
    if (bottomRightClicked === false && turnCounter%2 != 0) {
        bottomRightSquare.innerHTML = 'X'
    } else if (bottomRightClicked === false && turnCounter%2 === 0) {
        bottomRightSquare.innerHTML = 'O'
    };
    bottomRightClicked = true
});