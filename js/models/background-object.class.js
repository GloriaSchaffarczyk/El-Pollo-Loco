class BackgroundObject extends MovableObject {
    height = 480;
    width = 854;

    /**
     * Constructs a new BackgroundObject instance.
     * 
     * @param {string} imagePath - The path to the image file for the background object.
     * @param {number} x - The x-coordinate for the background object's initial position.
     * @param {number} y - The y-coordinate for the background object's initial position.
     */
    constructor(imagePath, x, y) {
        super().loadImage(imagePath);
        this.x = x;
        this.y = y;
    }
}