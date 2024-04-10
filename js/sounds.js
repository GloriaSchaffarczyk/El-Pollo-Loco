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
};
