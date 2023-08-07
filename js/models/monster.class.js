class Monster extends MovableObject {
    constructor() {
        super().loadImage('../img2/3_enemies/monster/1_walk/monster_walk_01.png');

        this.x = 270 + Math.random() * 500;
        this.y = 327;
        this.height = 60;
        this.width = 60;
    }
}