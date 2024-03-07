class Bombs extends MovableObject {
    y = 345;
    width = 50;
    height = 50;
    offset={
        top:0,
        right: 0,
        bottom: 0,
        left: 0
    };
    IMAGES_BOMBS = [
        'img2/6_bombs/bomb_01.png',
        'img2/6_bombs/bomb_02.png'
    ];
    collecting_bombs_sound = new Audio('audio/651515__1bob__grab-item.wav');
    bomb_explosion_sound = new Audio('audio/404742__owlstorm__retro-video-game-sfx-explode-5.wav')

    constructor() {
        super().loadImage(this.IMAGES_BOMBS[0]);
        this.loadImages(this.IMAGES_BOMBS);

        this.x = 50 + Math.random() * 15000; // hier wird die variable x, also die Position im Graphen auf der x-achse neu zugeteilt, und mit einem random wert erstellt
        // damit jedes Huhn, von den dreien die generiert werden, anders positioniert werden.
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_BOMBS); // Calls the method from the superclass
        }, 1000 / 2);
    }

    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    removeFromMap() {
        this.x = -1000;
    }
}