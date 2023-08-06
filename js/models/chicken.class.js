class Chicken extends MovableObject {
    constructor() {
        super().loadImage('../img2/3_enemies/zombie/1_walk/zombie_walk_01.png');

        this.x = 270 + Math.random() * 500;
        this.y = 305;
        this.height = 80;
        this.width = 80;
    }
}