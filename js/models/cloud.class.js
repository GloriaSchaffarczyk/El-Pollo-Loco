class Cloud extends MovableObject {
    y = 20;
    height = 380;
    width = 780;

    /**
     * Constructs a Cloud object, initializing its image and starting its animation.
     * The cloud is given a random x-coordinate to vary its starting position across the game screen.
     */
    constructor() {
        super().loadImage('img2/5_background/layers/4_clouds/clouds_01.png');

        this.x = Math.random() * 6000;
        this.animate();
    }

    /**
     * Initiates the cloud's movement across the screen. This method sets an interval that continually
     * moves the cloud to the left, simulating a floating effect in the game's background.
     */
    animate() {
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60);
    }
}