let canvas;
let world;
let keyboard = new Keyboard();
let isMusicOn = true;
let isSoundOn = true;
// Variable ctx wurde gelöscht

function init() {
    canvas = document.getElementById('canvas');
}

function startGame() {
    initLevel();
    world = new World(canvas, keyboard);
    startscreen.classList.add('hidden');
    symbols.classList.remove('hidden'); 
    description.classList.remove('hidden')
}


function toggleMusic() {
    if (isMusicOn) {
        muteMusic();
        document.getElementById('music').src = 'img2/7_statusbars/3_icons/music-off.png';
    } else {
        playMusic();
        document.getElementById('music').src = 'img2/7_statusbars/3_icons/music-on.png';
    }
}

function toggleSound() {
    if (isSoundOn) {
        muteSound();
        document.getElementById('sound').src = 'img2/7_statusbars/3_icons/sound-off_02.png'
    } else {
        playSound();
        document.getElementById('sound').src = 'img2/7_statusbars/3_icons/sound-on.png'
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

function muteMusic() {
    world.character.background_music.volume = 0;
    isMusicOn = false;
}

function playMusic() {
    world.character.background_music.volume = 0.5;
    isMusicOn = true;
}

function muteSound() {
    world.character.walking_sound.volume = 0;
    world.character.jumping_sound.volume = 0;
    world.character.dying_sound.volume = 0;
    isSoundOn = false;
}

function playSound() {
    world.character.walking_sound.volume = 0.5;
    world.character.jumping_sound.volume = 0.5;
    world.character.dying_sound.volume = 0.5;
    isSoundOn = true;
}

function toggleFullscreen() {
    let titleAndFullscreen = document.getElementById('.title-and-canvas') || document.getElementById('canvas');

    if (!document.fullscreenElement) {
        if (titleAndFullscreen.requestFullscreen) {
            titleAndFullscreen.requestFullscreen();
        } else if (titleAndFullscreen.webkitRequestFullscreen) { // Safari
            titleAndFullscreen.webkitRequestFullscreen();
        } else if (titleAndFullscreen.mozRequestFullScreen) { // Firefox
            titleAndFullscreen.mozRequestFullScreen();
        } else if (titleAndFullscreen.msRequestFullscreen) { // IE
            titleAndFullscreen.msRequestFullscreen();
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) { // Safari
            document.webkitExitFullscreen();
        } else if (document.mozCancelFullScreen) { // Firefox
            document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) { // IE
            document.msExitFullscreen();
        }
    }
}
