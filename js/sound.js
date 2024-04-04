const startscreenSound = new Audio1({
    tracks: ['audio/475300__adnova__bell-cave.wav'],
    loop: false,
    singleMode: true,
    loadLimit: 1,
    volume: 0.2,
});

const endscreenSoundWin = new Audio2({
    tracks: ['audio/475300__adnova__bell-cave.wav'],
    loop: false,
    singleMode: true,
    loadLimit: 1,
    volume: 0.2,
});

const endscreenSoundDefeat = new Audio3({
    tracks: ['audio/342895__kickhat__day-of-defeat.mp3'],
    loop: false,
    singleMode: true,
    loadLimit: 1,
    volume: 0.2,
});