class Endboss extends MovableObject {
    offset = {
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
    ENDBOSS_ATTACK = [
        'img2/4_boss/3_attack/boss_attack_01.png',
        'img2/4_boss/3_attack/boss_attack_02.png',
        'img2/4_boss/3_attack/boss_attack_03.png',
        'img2/4_boss/3_attack/boss_attack_04.png',
        'img2/4_boss/3_attack/boss_attack_05.png',
        'img2/4_boss/3_attack/boss_attack_06.png',
        'img2/4_boss/3_attack/boss_attack_07.png',
        'img2/4_boss/3_attack/boss_attack_08.png',
    ];
    energy = 100; // energy of endboss is higher
    endboss_dying_sound = new Audio('audio/607201__tomronaldmusic__defeated_ogre.wav');
    endboss_battle_music = new Audio('audio/573803__sami_hiltunen__boss-battle-music.wav');

    constructor() {
        super().loadImage(this.ENDBOSS_IMAGES_WALKING[0]);
        this.loadImages(this.ENDBOSS_IMAGES_WALKING);
        this.loadImages(this.ENDBOSS_DYING);
        this.loadImages(this.ENDBOSS_ATTACK);
        this.x = 5100;
        this.speed = 0.25;
        this.animate();
        this.dyingAnimationPlayed = false;
        this.characterIsCloseToEndboss = false;
    }

    animate() {
        setInterval(() => {
            if (!this.hasDied) {
                if (this.characterIsCloseToEndboss) {
                    this.moveLeft();
                    this.speed = 3;
                    this.playAnimation(this.ENDBOSS_ATTACK);
                } else {
                    this.playAnimation(this.ENDBOSS_IMAGES_WALKING);
                }
            } else if (!this.dyingAnimationPlayed) {
                this.handleDyingAnimation();
                this.dyingAnimationPlayed = true;
            }
        }, 200);
    }

    handleDyingAnimation() {
        let currentFrame = 0;
        let maxFrames = this.ENDBOSS_DYING.length;
        this.endboss_dying_sound.play();

        this.dyingAnimationInterval = setInterval(() => {
            if (currentFrame < maxFrames) {
                this.img = this.imageCache[this.ENDBOSS_DYING[currentFrame++]];
            } else {
                clearInterval(this.dyingAnimationInterval); // Beendet die Sterbeanimation
                this.readyToRemove = true; // Setze den Endboss als bereit zum Entfernen
            }
        }, 400);
    }
}