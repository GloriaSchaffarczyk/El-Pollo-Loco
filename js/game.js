let canvas;
let world;
let keyboard = new Keyboard();
let isMusicOn = true;
let isSoundOn = true;
// Variable ctx wurde gelöscht

function init() {
    canvas = document.getElementById('canvas'); // hier ist das HTML des Canvas gespeichert
    world = new World(canvas, keyboard);

    console.log('My character is', world['character']);
}

function toggleMusic() {
    if (isMusicOn) {
        muteMusic();
    } else {
        playMusic();
    }
}

function toggleSound() {
    if (isSoundOn) {
        muteSound();
    } else {
        playSound();
    }
}

window.addEventListener('keydown', (event) => {
    if (event.keyCode == 32) {
        keyboard.SPACE = true;
    }
    if (event.keyCode == 37) {
        keyboard.LEFT = true;
    }
    if (event.keyCode == 38) {
        keyboard.UP = true;
    }
    if (event.keyCode == 39) {
        keyboard.RIGHT = true;
    }
    if (event.keyCode == 40) {
        keyboard.DOWN = true;
    }
    if (event.keyCode == 81) {
        keyboard.Q = true;
    }
    if (event.keyCode == 87) {
        keyboard.W = true;
    }
    if (event.keyCode == 69) {
        keyboard.E = true;
    }
});

window.addEventListener('keyup', (event) => {
    if (event.keyCode == 32) {
        keyboard.SPACE = false;
    }
    if (event.keyCode == 37) {
        keyboard.LEFT = false;
    }
    if (event.keyCode == 38) {
        keyboard.UP = false;
    }
    if (event.keyCode == 39) {
        keyboard.RIGHT = false;
    }
    if (event.keyCode == 40) {
        keyboard.DOWN = false;
    }
    if (event.keyCode == 81) {
        keyboard.Q = false;
    }
    if (event.keyCode == 87) {
        keyboard.W = false;
    }
    if (event.keyCode == 69) {
        keyboard.E = false;
    }
});

function restartGame() {
    location.reload();
}
