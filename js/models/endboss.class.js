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
    ENDBOSS_DYING = [
        'img2/4_boss/5_dead/boss_dead_01.png',
        'img2/4_boss/5_dead/boss_dead_02.png',
        'img2/4_boss/5_dead/boss_dead_03.png',
        'img2/4_boss/5_dead/boss_dead_04.png',
        'img2/4_boss/5_dead/boss_dead_05.png',
        'img2/4_boss/5_dead/boss_dead_06.png',
    ];
    energy = 100; // energy of endboss is higher

    constructor() {
        super().loadImage(this.ENDBOSS_IMAGES_WALKING[0]);
        this.loadImages(this.ENDBOSS_IMAGES_WALKING);
        this.loadImages(this.ENDBOSS_DYING);
        this.x = 2500;
        this.speed = 0.25;
        this.animate();
    } 

    animate() {
        setInterval(() => {
            if (!this.hasDied) {
                this.playAnimation(this.ENDBOSS_IMAGES_WALKING);
            } else if (!this.readyToRemove) {
                this.playAnimationOnce(this.ENDBOSS_DYING);
            }
        }, 200);
    }
}