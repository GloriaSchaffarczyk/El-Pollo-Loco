let canvas;
let world;
let keyboard = new Keyboard();
let isMusicOn = true;
let isSoundOn = true;
let gameState = 'init';
startscreen_sound = new Audio('audio/475300__adnova__bell-cave.wav')
startscreen_sound.loop = true;

function init() {
    canvas = document.getElementById('canvas');
    startscreen_sound.loop = true;
    startscreen_sound.play();
    addMobileControls();
    updateVisibility();
    window.addEventListener('resize', updateVisibility);
}

function startGame() {
    initLevel();
    world = new World(canvas, keyboard);
    startscreen.classList.add('d-none');
    startscreen_sound.pause();
    symbols.classList.remove('d-none');
    gameState = 'playing';
    updateVisibility();
}

function endGame(isVictory) {
    setTimeout(() => {
        if (isVictory) {
            showVictoryScreen();
        } else {
            showDefeatScreen();
        }
        endscreen.classList.remove('d-none');
        canvas.classList.add('d-none');
        symbols.classList.add('d-none');
        title.classList.add('d-none');
        rotateDeviceMessage.remove('absolute');
        gameState = 'end';
        updateVisibility();
        clearAllIntervals();
    }, 4000);
}

function restartGame() {
    location.reload();
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
    let titleAndFullscreen = document.getElementById('canvas');

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

function showVictoryScreen() {
    endscreen.innerHTML = `
    <div class="victory" id="victory">
        <div class="upper-victory-screen">
            <div class="upper-victory-screen-left">
                <img src="img2/9_intro_outro_screens/game_over/victory.gif" alt="victory-gif">
            </div>
            <div class="upper-victory-screen-right">
                <h2>Congratulations, adventurer!</h2>
                <p>As the dawn breaks on this eerie Halloween morning, your valor and cunning have triumphed over the
                    darkness.&#127774;<br>
                    Every zombie has been vanquished, every monster defeated,
                    and the laser-shooting terror, that haunted the graveyard, is no more.&#128165;<br>
                    As you gaze upon the now-peaceful cemetery, take a moment to savor your victory.
                    The world is a little safer because of you, and the spirits of Halloween will forever
                    whisper tales of your courage and determination.&#128123; &#127875; Well done, hero, 
                    and until next Halloween, may your path be filled with joy and lots of candy! &#127852;</p>
                </p>
            </div>
        </div>
        <div class="lower-victory-screen">
            <button onclick="restartGame()" id="victoryButton" class="victory-button">Restart Game</button>
        </div>
    </div>
    `
}

function showDefeatScreen() {
    endscreen.innerHTML = `
    <div class="defeat" id="defeat">
        <h2>You've been defeated!</h2>
        <p>Your valiant efforts in the eerie Halloween night have come to an end.
            Despite your bravery, the graveyard's darkness has overwhelmed you.
            Remember, every hero faces setbacks, but it's not the end. 
            Rise again, stronger and wiser, ready to conquer the shadows. &#128128;
        </p>
        <button onclick="restartGame()" id="defeatButton" class="defeatButton">Try again</button>
    </div>
    `
}

function clearAllIntervals() {
    for (let i = 1; i < 9999; i++) window.clearInterval(i);
}

function updateVisibility() {
    const isMobile = window.innerWidth < 720 || window.innerHeight < 480;
    const isLandscape = window.innerWidth > window.innerHeight;
    const mobileButtons = document.getElementById('mobilebuttons');
    const description = document.getElementById('description');
    const rotateDeviceMessage = document.getElementById('rotateDeviceMessage');

    if (isMobile && !isLandscape) {
        rotateDeviceMessage.classList.remove('d-none');
    } else {
        rotateDeviceMessage.classList.add('d-none');
    }

    if (gameState === 'playing') {
        if (isMobile && isLandscape) {
            mobileButtons.classList.remove('d-none');
            description.classList.add('d-none');
        } else {
            mobileButtons.classList.add('d-none');
            if (!isMobile) {
                description.classList.remove('d-none');
            }
        }
    } else {
        mobileButtons.classList.add('d-none');
        description.classList.add('d-none');
    }
}



/* EVENT LISTENER */

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

function addMobileControls() {
    document.getElementById('go-left').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.LEFT = true;
    });
    document.getElementById('go-right').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.RIGHT = true;
    });
    document.getElementById('jump').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.SPACE = true;
    });
    document.getElementById('throw').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.W = true;
    });

    document.getElementById('go-left').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.LEFT = false;
    });
    document.getElementById('go-right').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.RIGHT = false;
    });
    document.getElementById('jump').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.SPACE = false;
    });
    document.getElementById('throw').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.W = false;
    });
}