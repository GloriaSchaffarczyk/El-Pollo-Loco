class Candy extends MovableObject {
    y = 160;
    width = 50;
    height = 50;
    IMAGES_CANDY = [
        'img/8_candy/candy_01.png',
        'img/8_candy/candy_02.png'
    ];

    /**
     * Constructs a new Candy instance, initializes its images, and sets a random x position.
     */
    constructor() {
        super().loadImage(this.IMAGES_CANDY[0]);
        this.loadImages(this.IMAGES_CANDY);
        this.x = 50 + Math.random() * 30000;
        this.animate();
    }

    /**
     * Starts an animation cycle for the candy by cycling through images at a defined interval.
     */
    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_CANDY);
        }, 1050 / 2);
    }
}