class Endboss extends MovableObject {
    offset={
        top: 30,
        right: 60,
        bottom: 30,
        left: 10,  
    }
    y = 200;
    height = 200;
    width = 200;
    ENDBOSS_IMAGES_WALKING = [
        'img2/4_boss/1_walk/boss_walk_right_01.png',
        'img2/4_boss/1_walk/boss_walk_right_02.png',
        'img2/4_boss/1_walk/boss_walk_right_03.png',
        'img2/4_boss/1_walk/boss_walk_right_04.png',
        'img2/4_boss/2_alert/boss_alert_01.png',
        'img2/4_boss/2_alert/boss_alert_02.png',
        'img2/4_boss/2_alert/boss_alert_03.png',
        'img2/4_boss/2_alert/boss_alert_04.png',
        'img2/4_boss/2_alert/boss_alert_05.png',
        'img2/4_boss/2_alert/boss_alert_05.png',
        'img2/4_boss/2_alert/boss_alert_05.png',
        'img2/4_boss/2_alert/boss_alert_05.png',
        'img2/4_boss/2_alert/boss_alert_04.png',
        'img2/4_boss/2_alert/boss_alert_03.png',
        'img2/4_boss/2_alert/boss_alert_02.png',
        'img2/4_boss/2_alert/boss_alert_01.png',

    ];

    constructor() {
        super().loadImage(this.ENDBOSS_IMAGES_WALKING[0]);
        this.loadImages(this.ENDBOSS_IMAGES_WALKING);
        this.x = 1500;
        this.speed = 0.25;
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.ENDBOSS_IMAGES_WALKING);
        }, 200);
    }
}