// Beispiel für sounds.js
const sounds = {
    startscreenSound: {
        sound: new Audio('audio/475300__adnova__bell-cave.wav'),
        play: function() {
            this.sound.loop = true;
            this.sound.volume = 1;
            this.sound.play();
        },
        pause: function() {
            this.sound.pause();
            this.sound.currentTime = 0;
        }
    },
    backgroundMusic: {
        sound: new Audio('audio/363164__adnova__spooker.wav'),
        play: function() {
            this.sound.loop = true;
            this.sound.volume = 0.5;
            this.sound.play();
        },
        pause: function() {
            this.sound.pause();
            this.sound.currentTime = 0;
        }
    },
    collectingBombsSound: {
        sound: new Audio('audio/651515__1bob__grab-item.wav'),
        play: function() {
            this.sound.volume = 0.5;
            this.sound.play();
        },
        pause: function() {
            this.sound.pause();
            this.sound.currentTime = 0;
        }
    },
    collectingCandySound: {
        sound: new Audio('audio/644306__reincarnatedechoes__heart-collecthealing-retro.wav'),
        play: function() {
            this.sound.volume = 0.5;
            this.sound.play();
        },
        pause: function() {
            this.sound.pause();
            this.sound.currentTime = 0;
        }
    },
    walkingSound: {
        sound: new Audio('audio/659370__matrixxx__retro-footsteps.wav'),
        play: function() {
            this.sound.volume = 0.5;
            this.sound.play();
        },
        pause: function() {
            this.sound.pause();
            this.sound.currentTime = 0;
        }
    },
    jumpingSound: {
        sound: new Audio('audio/678839__cartchaos__jump.wav'),
        play: function() {
            this.sound.volume = 0.5;
            this.sound.play();
        },
        pause: function() {
            this.sound.pause();
            this.sound.currentTime = 0;
        }
    },
    dyingSound: {
        sound: new Audio('audio/163442__under7dude__man-dying.wav'),
        play: function() {
            this.sound.volume = 0.5;
            this.sound.play();
        },
        pause: function() {
            this.sound.pause();
            this.sound.currentTime = 0;
        }
    },
    hurtSound: {
        sound: new Audio('audio/486943__matrixxx__human-aah.wav'),
        play: function() {
            this.sound.volume = 0.5;
            this.sound.play();
        },
        pause: function() {
            this.sound.pause();
            this.sound.currentTime = 0;
        }
    },
    bombExplosionSound: {
        sound: new Audio('audio/404742__owlstorm__retro-video-game-sfx-explode-5.wav'),
        play: function() {
            this.sound.volume = 0.5;
            this.sound.play();
        },
        pause: function() {
            this.sound.pause();
            this.sound.currentTime = 0;
        }
    },
    endbossDyingSound: {
        sound: new Audio('audio/607201__tomronaldmusic__defeated_ogre.wav'),
        play: function() {
            this.sound.volume = 0.5;
            this.sound.play();
        },
        pause: function() {
            this.sound.pause();
            this.sound.currentTime = 0;
        }
    },
    endbossBattleMusic: {
        sound: new Audio('audio/573803__sami_hiltunen__boss-battle-music.wav'),
        play: function() {
            this.sound.loop = true;
            this.sound.volume = 0.5;
            this.sound.play();
        },
        pause: function() {
            this.sound.pause();
            this.sound.currentTime = 0;
        }
    },
    monsterDyingSound: {
        sound: new Audio('audio/410524__meijstroaudio__monster-screeching.wav'),
        play: function() {
            this.sound.volume = 0.5;
            this.sound.play();
        },
        pause: function() {
            this.sound.pause();
            this.sound.currentTime = 0;
        }
    },
    zombieDyingSound: {
        sound: new Audio('audio/445983__breviceps__zombie-gargles.wav'),
        play: function() {
            this.sound.volume = 0.5;
            this.sound.play();
        },
        pause: function() {
            this.sound.pause();
            this.sound.currentTime = 0;
        }
    },
};
