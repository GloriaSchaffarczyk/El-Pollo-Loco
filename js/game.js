let canvas;
let world;
let keyboard = new Keyboard();
let isMusicOn = true;
let isSoundOn = true;
let gameState = 'init';

/**
 * Initializes the game environment, sets up canvas, and starts game music.
 */
function init() {
    canvas = document.getElementById('canvas');
    sounds.startscreenSound.play();
    addMobileControls();
    updateVisibility();
    window.addEventListener('resize', updateVisibility);
}

/**
 * Starts the game by initializing the level, hiding the start screen, and playing background music.
 */
function startGame() {
    initLevel();
    world = new World(canvas, keyboard);
    startscreen.classList.add('d-none');
    sounds.startscreenSound.pause();
    sounds.backgroundMusic.play();
    symbols.classList.remove('d-none');
    gameState = 'playing';
    updateVisibility();
}

/**
 * Ends the game and displays either the victory or defeat screen based on the outcome.
 * @param {boolean} isVictory - Determines if the end scenario is a victory or defeat.
 */
function endGame(isVictory) {
    setTimeout(() => {
        if (isVictory) {
            showVictoryScreen();
            sounds.victorySound.play();
        } else {
            showDefeatScreen();
            sounds.defeatSound.play();
        }
        sounds.endbossBattleMusic.pause();
        sounds.backgroundMusic.pause();
        sounds.startscreenSound.pause();
        endscreen.classList.remove('d-none');
        canvas.classList.add('d-none');
        symbols.classList.add('d-none');
        title.classList.add('d-none');
        rotateDeviceMessage.classList.remove('absolute');
        gameState = 'end';
        updateVisibility();
        clearAllIntervals();
    }, 4000);
}

/**
 * Reloads the page to restart the game.
 */
function restartGame() {
    location.reload();
}

/**
 * Toggles the background music on or off.
 */
function toggleMusic() {
    if (isMusicOn) {
        muteMusic();
        document.getElementById('music').src = 'img2/7_statusbars/3_icons/music-off.png';
    } else {
        playMusic();
        document.getElementById('music').src = 'img2/7_statusbars/3_icons/music-on.png';
    }
}

/**
 * Toggles sound effects on or off.
 */
function toggleSound() {
    if (isSoundOn) {
        muteSound();
        document.getElementById('sound').src = 'img2/7_statusbars/3_icons/sound-off_02.png'
    } else {
        playSound();
        document.getElementById('sound').src = 'img2/7_statusbars/3_icons/sound-on.png'
    }
}

/** 
 * Mutes the game music.
 */
function muteMusic() {
    sounds.backgroundMusic.pause();
    sounds.endbossDyingSound.pause();
    isMusicOn = false;
}

/**
 * Plays the game music if it was paused.
 */
function playMusic() {
    if (sounds.backgroundMusic.sound.paused) {
        sounds.backgroundMusic.play();
        sounds.endbossDyingSound.play();
    }
    isMusicOn = true;
}

/**
 * Mutes all game sound effects.
 */
function muteSound() {
    sounds.walkingSound.sound.volume = 0;
    sounds.jumpingSound.sound.volume = 0;
    sounds.dyingSound.sound.volume = 0;
    sounds.collectingBombsSound.sound.volume = 0;
    sounds.collectingCandySound.sound.volume = 0;
    sounds.hurtSound.sound.volume = 0;
    sounds.bombExplosionSound.sound.volume = 0;
    sounds.endbossDyingSound.sound.volume = 0;
    sounds.monsterDyingSound.sound.volume = 0;
    sounds.zombieDyingSound.sound.volume = 0;
    isSoundOn = false;
}

/**
 * Starts various game sound effects.
 */
function playSound() {
    sounds.walkingSound.sound.volume = 1;
    sounds.jumpingSound.sound.volume = 1;
    sounds.dyingSound.sound.volume = 1;
    sounds.collectingBombsSound.sound.volume = 1;
    sounds.collectingCandySound.sound.volume = 1;
    sounds.hurtSound.sound.volume = 1;
    sounds.bombExplosionSound.sound.volume = 1;
    sounds.endbossDyingSound.sound.volume = 1;
    sounds.monsterDyingSound.sound.volume = 1;
    sounds.zombieDyingSound.sound.volume = 1;
    isSoundOn = true;
}

/**
 * Toggles fullscreen mode for the game.
 */
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

/**
 * Displays the victory screen upon winning the game.
 */
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

/**
 * Displays the defeat screen upon losing the game.
 */
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

/**
 * Clears all intervals to stop ongoing processes when the game ends.
 */
function clearAllIntervals() {
    for (let i = 1; i < 9999; i++) window.clearInterval(i);
}

/**
 * Updates visibility of game elements based on device orientation and screen size.
 */
function updateVisibility() {
    const isMobile = window.innerWidth < 720 || window.innerHeight < 480;
    const isLandscape = window.innerWidth > window.innerHeight;
    const mobileButtons = document.getElementById('mobilebuttons');
    const description = document.getElementById('description');
    const rotateDeviceMessage = document.getElementById('rotateDeviceMessage');

    rotateDeviceMessage.classList.toggle('d-none', isLandscape);
    let showMobileButtons = false;
    let showDescription = false;

    if (isMobile && gameState !== 'init' && gameState !== 'end') {
        showMobileButtons = true;
    }
    if (!isMobile && gameState !== 'end' && gameState !== 'init') {
        showDescription = true;
    }
    mobileButtons.classList.toggle('d-none', !showMobileButtons);
    description.classList.toggle('d-none', !showDescription);
    if (gameState === 'end') {
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

/**
 * Adds mobile control listeners to facilitate gameplay on mobile devices.
 */
function addMobileControls() {
    const options = { passive: true };
    document.getElementById('go-left').addEventListener('touchstart', (e) => {
        keyboard.LEFT = true;
    }, options);
    document.getElementById('go-right').addEventListener('touchstart', (e) => {
        keyboard.RIGHT = true;
    }, options);
    document.getElementById('jump').addEventListener('touchstart', (e) => {
        keyboard.SPACE = true;
    }, options);
    document.getElementById('throw').addEventListener('touchstart', (e) => {
        keyboard.W = true;
    }, options);

    document.getElementById('go-left').addEventListener('touchend', (e) => {
        keyboard.LEFT = false;
    }, options);
    document.getElementById('go-right').addEventListener('touchend', (e) => {
        keyboard.RIGHT = false;
    }, options);
    document.getElementById('jump').addEventListener('touchend', (e) => {
        keyboard.SPACE = false;
    }, options);
    document.getElementById('throw').addEventListener('touchend', (e) => {
        keyboard.W = false;
    }, options);
}
