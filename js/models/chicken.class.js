class Chicken extends MovableObject {
    constructor() {
        super().loadImage('../img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');

        this.x = 270 + Math.random() * 500;
        this.y = 365;
        this.height = 78;
        this.width = 68;
    }
}