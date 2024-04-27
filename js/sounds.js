const sounds = {
    startscreenSound: {
        sound: new Audio('audio/475300__adnova__bell-cave.wav'),
        category: 'music',
        volume: 0.4,
        play: function () {
            if (isMusicOn) {
                this.sound.loop = true;
                this.sound.volume = this.volume;
                this.sound.play();
            }
        },
        pause: function () {
            this.sound.pause();
            this.sound.currentTime = 0;
        }
    },
    backgroundMusic: {
        sound: new Audio('audio/363164__adnova__spooker.wav'),
        category: 'music',
        volume: 0.4,
        play: function () {
            if (isMusicOn) {
            this.sound.loop = true;
            this.sound.volume = this.volume;
            this.sound.play();
            }
        },
        pause: function () {
            this.sound.pause();
            this.sound.currentTime = 0;
        }
    },
    defeatMusic: {
        sound: new Audio('audio/407471__loyalty_freak_music__victory.mp3'),
        category: 'music',
        volume: 0.1,
        play: function () {
            if (isMusicOn) {
            this.sound.loop = true;
            this.sound.volume = this.volume;
            this.sound.play();
            }
        },
        pause: function () {
            this.sound.pause();
            this.sound.currentTime = 0;
        }
    },
    victoryMusic: {
        sound: new Audio('audio/364986__adnova__sweets.wav'),
        category: 'music',
        volume: 0.2,
        play: function () {
            if (isMusicOn) {
            this.sound.loop = true;
            this.sound.volume = this.volume;
            this.sound.play();
            }
        },
        pause: function () {
            this.sound.pause();
            this.sound.currentTime = 0;
        }
    },
    endbossBattleMusic: {
        sound: new Audio('audio/573803__sami_hiltunen__boss-battle-music.wav'),
        category: 'music',
        volume: 0.2,
        play: function () {
            if (isMusicOn) {
            this.sound.loop = true;
            this.sound.volume = this.volume;
            this.sound.play();
            }
        },
        pause: function () {
            this.sound.pause();
            this.sound.currentTime = 0;
        }
    },
    collectingBombsSound: {
        sound: new Audio('audio/651515__1bob__grab-item.wav'),
        category: 'sound',
        volume: 0.5,
        play: function () {
            if (isSoundOn) {
            this.sound.volume = this.volume;
            this.sound.play();
            }
        },
        pause: function () {
            this.sound.pause();
            this.sound.currentTime = 0;
        }
    },
    collectingCandySound: {
        sound: new Audio('audio/644306__reincarnatedechoes__heart-collecthealing-retro.wav'),
        category: 'sound',
        volume: 0.2,
        play: function () {
            if (isSoundOn) {
            this.sound.volume = this.volume;
            this.sound.play();
            }
        },
        pause: function () {
            this.sound.pause();
            this.sound.currentTime = 0;
        }
    },
    walkingSound: {
        sound: new Audio('audio/659370__matrixxx__retro-footsteps.wav'),
        category: 'sound',
        volume: 0.1,
        play: function (rate = 1) {
            if (isSoundOn) {
            this.sound.volume = this.volume;
            this.sound.playbackRate = rate;
            this.sound.play();
            }
        },
        pause: function () {
            this.sound.pause();
            this.sound.currentTime = 0;
        }
    },
    jumpingSound: {
        sound: new Audio('audio/678839__cartchaos__jump.wav'),
        category: 'sound',
        volume: 0.5,
        play: function () {
            if (isSoundOn) {
                this.sound.volume = this.volume;
                this.sound.play();
            }
        },
        pause: function () {
            this.sound.pause();
            this.sound.currentTime = 0;
        }
    },
    hurtSound: {
        sound: new Audio('audio/649543__ajanhallinta__ouch.wav'),
        category: 'sound',
        volume: 0.2,
        lastPlayed: 0,
        cooldown: 2000,
        play: function () {
            if (isSoundOn) {
            const now = Date.now();
            if (now - this.lastPlayed > this.cooldown) {
                this.sound.volume = this.volume;
                this.sound.loop = false;
                this.sound.play();
                this.lastPlayed = now;
            }
        }
        },
        pause: function () {
            this.sound.pause();
            this.sound.currentTime = 0;
        }
    },
    dyingSound: {
        sound: new Audio('audio/163442__under7dude__man-dying.wav'),
        category: 'sound',
        volume: 0.5,
        play: function () {
            if (isSoundOn) {
                this.sound.loop = false;
            this.sound.volume = this.volume;
            this.sound.play();
            }
        },
        pause: function () {
            this.sound.pause();
            this.sound.currentTime = 0;
        }
    },
    bombExplosionSound: {
        sound: new Audio('audio/404742__owlstorm__retro-video-game-sfx-explode-5.wav'),
        category: 'sound',
        volume: 0.4,
        play: function () {
            if (isSoundOn) {
            this.sound.volume = this.volume;
            this.sound.play();
            }
        },
        pause: function () {
            this.sound.pause();
            this.sound.currentTime = 0;
        }
    },
    endbossDyingSound: {
        sound: new Audio('audio/607201__tomronaldmusic__defeated_ogre.wav'),
        category: 'sound',
        volume: 0.5,
        play: function () {
            if (isSoundOn) {
            this.sound.volume = this.volume;
            this.sound.play();
            }
        },
        pause: function () {
            this.sound.pause();
            this.sound.currentTime = 0;
        }
    },
    monsterDyingSound: {
        sound: new Audio('audio/410524__meijstroaudio__monster-screeching.wav'),
        category: 'sound',
        volume: 0.5,
        play: function () {
            if (isSoundOn) {
            this.sound.volume = this.volume;
            this.sound.play();
            }
        },
        pause: function () {
            this.sound.pause();
            this.sound.currentTime = 0;
        }
    },
    zombieDyingSound: {
        sound: new Audio('audio/445983__breviceps__zombie-gargles.wav'),
        category: 'sound',
        volume: 0.5,
        play: function () {
            if (isSoundOn) {
            this.sound.volume = this.volume;
            this.sound.play();
            }
        },
        pause: function () {
            this.sound.pause();
            this.sound.currentTime = 0;
        }
    },
};