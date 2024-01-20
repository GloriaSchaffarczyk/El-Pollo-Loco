class Zombie extends MovableObject {
    y = 305;
    height = 80;
    width = 80;
    ZOMBIE_WALKING = [
        'img2/3_enemies/zombie/1_walk/zombie_walk_01.png',
        'img2/3_enemies/zombie/1_walk/zombie_walk_02.png',
        'img2/3_enemies/zombie/1_walk/zombie_walk_03.png',
        'img2/3_enemies/zombie/1_walk/zombie_walk_04.png',
        'img2/3_enemies/zombie/1_walk/zombie_walk_05.png',
        'img2/3_enemies/zombie/1_walk/zombie_walk_06.png',
    ];
    ZOMBIE_DYING = [
        'img2/3_enemies/zombie/2_dead/zombie_dead_01.png',
        'img2/3_enemies/zombie/2_dead/zombie_dead_02.png',
        'img2/3_enemies/zombie/2_dead/zombie_dead_03.png',
        'img2/3_enemies/zombie/2_dead/zombie_dead_04.png',
        'img2/3_enemies/zombie/2_dead/zombie_dead_05.png',
        'img2/3_enemies/zombie/2_dead/zombie_dead_06.png',
    ];


    constructor() {
        super().loadImage('img2/3_enemies/zombie/1_walk/zombie_walk_01.png');
        this.loadImages(this.ZOMBIE_WALKING);
        this.loadImages(this.ZOMBIE_DYING);
        this.x = 270 + Math.random() * 500;
        this.speed = 0.07 + Math.random() * 0.25;
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60);

        setInterval(() => {
            this.playAnimation(this.ZOMBIE_WALKING);
        }, 500);
    }
}