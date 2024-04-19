class Bombs extends MovableObject {
    y = 345;
    width = 50;
    height = 50;
    IMAGES_BOMBS = [
        'img2/6_bombs/bomb_01.png',
        'img2/6_bombs/bomb_02.png'
    ];

    /**
     * Constructs a new Bomb instance, initializes its images and sets a random x position.
     */
    constructor() {
        super().loadImage(this.IMAGES_BOMBS[0]);
        this.loadImages(this.IMAGES_BOMBS);
        this.x = 50 + Math.random() * 15000;
        this.animate();
    }

    /**
     * Starts an animation cycle for the bomb by cycling through images at a defined interval.
     */
    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_BOMBS); 
        }, 1000 / 2);
    }
}