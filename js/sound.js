const startscreenSound = new Audio1({
    tracks: ['audio/475300__adnova__bell-cave.wav'],
    loop: false,
    singleMode: true,
    loadLimit: 1,
    volume: 0.2,
});

const endscreenSoundVictory = new Audio2({
    tracks: ['audio/364986__adnova__sweets.wav'],
    loop: false,
    singleMode: true,
    loadLimit: 1,
    volume: 0.2,
});

const endscreenSoundDefeat = new Audio3({
    tracks: ['audio/407471__loyalty_freak_music__victory.mp3'],
    loop: false,
    singleMode: true,
    loadLimit: 1,
    volume: 0.2,
});