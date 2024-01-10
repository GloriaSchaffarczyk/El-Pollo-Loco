class Bombs extends MovableObject {

    y = 345;
    width = 50;
    height = 50;
    IMAGES_BOMBS = [
        'img2/6_bombs/bomb_01.png',
        'img2/6_bombs/bomb_02.png'
    ];

    constructor() {
        super().loadImage(this.IMAGES_BOMBS[0]);
        this.loadImages(this.IMAGES_BOMBS);

        this.x = 200 + Math.random() * 10000; // hier wird die variable x, also die Position im Graphen auf der x-achse neu zugeteilt, und mit einem random wert erstellt
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