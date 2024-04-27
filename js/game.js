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
            sounds.victoryMusic.play();
        } else {
            showDefeatScreen();
            sounds.defeatMusic.play();
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
    isMusicOn = !isMusicOn;
    if (isMusicOn) {
        playMusic();
        document.getElementById('music').src = 'img/7_statusbars/3_icons/music-on.png';
    } else {
        muteMusic();
        document.getElementById('music').src = 'img/7_statusbars/3_icons/music-off.png';
    }
}

/**
 * Toggles sound effects on or off.
 */
function toggleSound() {
    isSoundOn = !isSoundOn;
    if (isSoundOn) {
        playSound();
        document.getElementById('sound').src = 'img/7_statusbars/3_icons/sound-on.png';
    } else {
        muteSound();
        document.getElementById('sound').src = 'img/7_statusbars/3_icons/sound-off_02.png';
    }
}

/**
 * Mutes only the background music.
 */
function muteMusic() {
    sounds.backgroundMusic.pause();
    sounds.defeatMusic.volume = 0;
    sounds.victoryMusic.volume = 0;
    sounds.endbossBattleMusic.volume = 0;
    isMusicOn = false;
}

/**
 * Plays the background music if it was paused.
 */
function playMusic() {
    sounds.backgroundMusic.play();
    sounds.defeatMusic.volume = 0.1;
    sounds.victoryMusic.volume = 0.2;
    sounds.endbossBattleMusic.volume = 0.2;
    isMusicOn = true;
}

/**
 * Mutes all game sound effects, except background music.
 */
function muteSound() {
    sounds.collectingBombsSound.volume = 0;
    sounds.collectingCandySound.volume = 0;
    sounds.walkingSound.volume = 0;
    sounds.jumpingSound.volume = 0;
    sounds.hurtSound.volume = 0;
    sounds.dyingSound.volume = 0;
    sounds.bombExplosionSound.volume = 0;
    sounds.endbossDyingSound.volume = 0;
    sounds.monsterDyingSound.volume = 0;
    sounds.zombieDyingSound.volume = 0;
    isSoundOn = false;
}

/**
 * Starts various game sound effects.
 */
function playSound() {
    sounds.collectingBombsSound.volume = 0.5;
    sounds.collectingCandySound.volume = 0.2;
    sounds.walkingSound.volume = 0.1;
    sounds.jumpingSound.volume = 0.5;
    sounds.hurtSound.volume = 0.2;
    sounds.dyingSound.volume = 0.5;
    sounds.bombExplosionSound.volume = 0.4;
    sounds.endbossDyingSound.volume = 0.5;
    sounds.monsterDyingSound.volume = 0.5;
    sounds.zombieDyingSound.volume = 0.5;
    isSoundOn = true;
}

/**
 * Listens for changes in fullscreen status and updates the icon accordingly.
 */
document.addEventListener('fullscreenchange', updateFullscreenIcons);

/**
 * Updates the icon based on the fullscreen status.
 * - If in fullscreen mode, it changes the icon to a 'close' image.
 * - If not in fullscreen mode, it changes back to the 'maximize' image.
 */
function updateFullscreenIcons() {
    let fullscreenIcon = document.getElementById('fullscreenToggle');
    if (document.fullscreenElement) {
        fullscreenIcon.src = 'img/7_statusbars/3_icons/close.png';
    } else {
        fullscreenIcon.src = 'img/7_statusbars/3_icons/maximize_02.png';
    }
}

/**
 * Toggles fullscreen mode for the document.
 * - If not currently in fullscreen, requests fullscreen mode.
 * - If in fullscreen, exits fullscreen mode.
 */
function toggleFullscreen() {
    let doc = document.documentElement;

    if (!document.fullscreenElement) {
        if (doc.requestFullscreen) {
            doc.requestFullscreen().catch(err => {
                console.error(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
            });
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen().catch(err => {
                console.error(`Error attempting to exit full-screen mode: ${err.message} (${err.name})`);
            });
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
                <img src="img/9_intro_outro_screens/game_over/victory.gif" alt="victory-gif">
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
    const isMobile = window.innerWidth < 720 || window.innerHeight < 510;
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
