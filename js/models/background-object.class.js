class BackgroundObject extends MovableObject {
    height = 480;
    width = 854;

    constructor(imagePath, x, y) {
        super().loadImage(imagePath);
        this.x = x;
        this.y = y;
    }
}