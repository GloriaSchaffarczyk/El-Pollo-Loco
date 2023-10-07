class Monster extends MovableObject {
    y = 326;
    height = 60;
    width = 60;
    IMAGES_WALKING = [
        'img2/3_enemies/monster/1_walk/monster_walk_06.png',
        'img2/3_enemies/monster/1_walk/monster_walk_05.png',
        'img2/3_enemies/monster/1_walk/monster_walk_04.png',
        'img2/3_enemies/monster/1_walk/monster_walk_03.png',
        'img2/3_enemies/monster/1_walk/monster_walk_02.png',
        'img2/3_enemies/monster/1_walk/monster_walk_01.png',
    ];

    constructor() {
        super().loadImage('img2/3_enemies/monster/1_walk/monster_walk_01.png');
        this.loadImages(this.IMAGES_WALKING);
        this.x = 270 + Math.random() * 500;
        this.speed = 0.25 + Math.random() * 0.25;
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60);

        setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);
        }, 300);
    }
}