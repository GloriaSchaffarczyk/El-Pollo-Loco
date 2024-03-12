class Candy extends MovableObject {
    y = 160;
    width = 50;
    height = 50;
    IMAGES_CANDY = [
        'img2/8_candy/candy_01.png',
        'img2/8_candy/candy_02.png'
    ];
    collecting_candy_sound = new Audio('audio/644306__reincarnatedechoes__heart-collecthealing-retro.wav');

    constructor() {
        super().loadImage(this.IMAGES_CANDY[0]);
        this.loadImages(this.IMAGES_CANDY);

        this.x = 50 + Math.random() * 30000; // hier wird die variable x, also die Position im Graphen auf der x-achse neu zugeteilt, und mit einem random wert erstellt
        // damit jedes Huhn, von den dreien die generiert werden, anders positioniert werden.
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_CANDY); // Calls the method from the superclass
        }, 1050 / 2);
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