class Endboss extends MovableObject {
    offset = {
        top: 70,
        right: 80,
        bottom: 30,
        left: 55,
    }
    y = 200;
    height = 200;
    width = 200;
    ENDBOSS_IMAGES_WALKING = [
        'img/4_boss/1_walk/boss_walk_right_01.png',
        'img/4_boss/1_walk/boss_walk_right_02.png',
        'img/4_boss/1_walk/boss_walk_right_03.png',
        'img/4_boss/1_walk/boss_walk_right_04.png',
        'img/4_boss/2_alert/boss_alert_01.png',
        'img/4_boss/2_alert/boss_alert_02.png',
        'img/4_boss/2_alert/boss_alert_03.png',
        'img/4_boss/2_alert/boss_alert_04.png',
        'img/4_boss/2_alert/boss_alert_05.png',
        'img/4_boss/2_alert/boss_alert_05.png',
        'img/4_boss/2_alert/boss_alert_05.png',
        'img/4_boss/2_alert/boss_alert_05.png',
        'img/4_boss/2_alert/boss_alert_04.png',
        'img/4_boss/2_alert/boss_alert_03.png',
        'img/4_boss/2_alert/boss_alert_02.png',
        'img/4_boss/2_alert/boss_alert_01.png',
    ];
    ENDBOSS_DYING = [
        'img/4_boss/5_dead/boss_dead_01.png',
        'img/4_boss/5_dead/boss_dead_02.png',
        'img/4_boss/5_dead/boss_dead_03.png',
        'img/4_boss/5_dead/boss_dead_04.png',
        'img/4_boss/5_dead/boss_dead_05.png',
        'img/4_boss/5_dead/boss_dead_06.png',
    ];
    ENDBOSS_ATTACK = [
        'img/4_boss/3_attack/boss_attack_01.png',
        'img/4_boss/3_attack/boss_attack_02.png',
        'img/4_boss/3_attack/boss_attack_03.png',
        'img/4_boss/3_attack/boss_attack_04.png',
        'img/4_boss/3_attack/boss_attack_05.png',
        'img/4_boss/3_attack/boss_attack_06.png',
        'img/4_boss/3_attack/boss_attack_07.png',
        'img/4_boss/3_attack/boss_attack_08.png',
    ];
    energy = 100;

    /**
     * Constructs the end boss character in the game, managing its behavior, animations, and interactions.
     * @extends MovableObject
     */
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

    /**
     * Manages animation states for walking and attacking based on the proximity of the main character.
     */
    animate() {
        let i = 0;
        setInterval(() => {
            if (!this.hasDied) { 
                if (this.characterIsCloseToEndboss) { 
                    if (i < 17) { 
                        this.playAnimation(this.ENDBOSS_IMAGES_WALKING);
                        i++;
                    } else { 
                        this.playAnimation(this.ENDBOSS_ATTACK);
                        this.moveLeft();
                        this.speed = 18;
                    }
                } else { 
                    this.playAnimation(this.ENDBOSS_IMAGES_WALKING); 
                    i = 0; 
                }
            } else if (!this.dyingAnimationPlayed) { 
                this.handleDyingAnimation();
                this.dyingAnimationPlayed = true;
                this.hasDied = true;
                endGame(true);
            }
        }, 200);
    }

    /**
     * Handles the animation sequence for the dying animation of the end boss.
     */
    handleDyingAnimation() {
        let currentFrame = 0;
        let maxFrames = this.ENDBOSS_DYING.length;
        sounds.endbossDyingSound.play();

        this.dyingAnimationInterval = setInterval(() => {
            if (currentFrame < maxFrames) {
                this.img = this.imageCache[this.ENDBOSS_DYING[currentFrame++]];
            } else {
                clearInterval(this.dyingAnimationInterval); 
                this.readyToRemove = true;
            }
        }, 400);
    }
}