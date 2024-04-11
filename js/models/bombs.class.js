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
        this.x = 50 + Math.random() * 15000;
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_BOMBS); 
        }, 1000 / 2);
    }

    removeFromMap() {
        this.x = -1000;
    }
}