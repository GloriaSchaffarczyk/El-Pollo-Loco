class Monster extends MovableObject {
    y = 326;
    height = 60;
    width = 60;
    offset = {
        top: 20,
        right: 0,
        bottom: 0,
        left: 10
    }
    MONSTER_WALKING = [
        'img2/3_enemies/monster/1_walk/monster_walk_06.png',
        'img2/3_enemies/monster/1_walk/monster_walk_05.png',
        'img2/3_enemies/monster/1_walk/monster_walk_04.png',
        'img2/3_enemies/monster/1_walk/monster_walk_03.png',
        'img2/3_enemies/monster/1_walk/monster_walk_02.png',
        'img2/3_enemies/monster/1_walk/monster_walk_01.png',
    ];
    MONSTER_DYING = [
        'img2/3_enemies/monster/2_dead/monster_dead_01.png',
        'img2/3_enemies/monster/2_dead/monster_dead_02.png',
        'img2/3_enemies/monster/2_dead/monster_dead_03.png',
        'img2/3_enemies/monster/2_dead/monster_dead_04.png',
        'img2/3_enemies/monster/2_dead/monster_dead_05.png',
        'img2/3_enemies/monster/2_dead/monster_dead_06.png',
    ];
    animationSpeed;
    ANIMATION_SPEED_MONSTER_DYING = 250;
    ANIMATION_SPEED_MONSTER_WALKING = 10;
    monster_dying_sound = new Audio('audio/445983__breviceps__zombie-gargles.wav');
    energy = 20;

    constructor() {
        super().loadImage('img2/3_enemies/monster/1_walk/monster_walk_01.png');
        this.loadImages(this.MONSTER_WALKING);
        this.loadImages(this.MONSTER_DYING);
        this.x = 570 + Math.random() * 500;
        this.speed = 0.25 + Math.random() * 0.25;
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60);

        setInterval(() => {
            if (!this.hasDied) {
                this.playAnimation(this.MONSTER_WALKING);
            } else {
                this.playAnimationOnce(this.MONSTER_DYING);
                this.monster_dying_sound.play();
            }
        }, 300);
    }
}