class Character extends MovableObject {
    speed = 50;
    offset = {
        top: 10,
        right: 40,
        bottom: 0,
        left: 0
    }
    IMAGES_IDLE = [
        'img2/2_character/1_idle/idle/biker_idle_01.png',
        'img2/2_character/1_idle/idle/biker_idle_02.png',
        'img2/2_character/1_idle/idle/biker_idle_03.png',
        'img2/2_character/1_idle/idle/biker_idle_04.png',
    ];
    IMAGES_LONG_IDLE = [
        'img2/2_character/1_idle/long_idle/biker_long_idle_01.png',
        'img2/2_character/1_idle/long_idle/biker_long_idle_02.png',
        'img2/2_character/1_idle/long_idle/biker_long_idle_03.png',
        'img2/2_character/1_idle/long_idle/biker_long_idle_04.png',
        'img2/2_character/1_idle/long_idle/biker_long_idle_05.png',
        'img2/2_character/1_idle/long_idle/biker_long_idle_06.png',
        'img2/2_character/1_idle/idle/biker_idle_01.png',
        'img2/2_character/1_idle/idle/biker_idle_02.png',
        'img2/2_character/1_idle/idle/biker_idle_03.png',
        'img2/2_character/1_idle/idle/biker_idle_04.png',
        'img2/2_character/1_idle/idle/biker_idle_01.png',
        'img2/2_character/1_idle/idle/biker_idle_02.png',
        'img2/2_character/1_idle/idle/biker_idle_03.png',
        'img2/2_character/1_idle/idle/biker_idle_04.png',
        'img2/2_character/1_idle/long_idle/biker_long_idle_angry_01.png',
        'img2/2_character/1_idle/long_idle/biker_long_idle_angry_02.png',
        'img2/2_character/1_idle/long_idle/biker_long_idle_angry_03.png',
        'img2/2_character/1_idle/long_idle/biker_long_idle_angry_04.png',
        'img2/2_character/1_idle/long_idle/biker_long_idle_angry_05.png',
        'img2/2_character/1_idle/long_idle/biker_long_idle_angry_06.png',
        'img2/2_character/1_idle/idle/biker_idle_01.png',
        'img2/2_character/1_idle/idle/biker_idle_02.png',
        'img2/2_character/1_idle/idle/biker_idle_03.png',
        'img2/2_character/1_idle/idle/biker_idle_04.png',
        'img2/2_character/1_idle/idle/biker_idle_01.png',
        'img2/2_character/1_idle/idle/biker_idle_02.png',
        'img2/2_character/1_idle/idle/biker_idle_03.png',
        'img2/2_character/1_idle/idle/biker_idle_04.png',
        'img2/2_character/1_idle/long_idle/biker_long_idle_sit_01.png',
        'img2/2_character/1_idle/long_idle/biker_long_idle_sit_02.png',
        'img2/2_character/1_idle/long_idle/biker_long_idle_sit_03.png',
        'img2/2_character/1_idle/long_idle/biker_long_idle_sit_03.png',
        'img2/2_character/1_idle/long_idle/biker_long_idle_sit_03.png',
        'img2/2_character/1_idle/long_idle/biker_long_idle_sit_04.png',
        'img2/2_character/1_idle/idle/biker_idle_01.png',
        'img2/2_character/1_idle/idle/biker_idle_02.png',
        'img2/2_character/1_idle/idle/biker_idle_03.png',
        'img2/2_character/1_idle/idle/biker_idle_04.png',
    ];
    IMAGES_WALK = [
        'img2/2_character/2_walk/biker_walk_01.png',
        'img2/2_character/2_walk/biker_walk_02.png',
        'img2/2_character/2_walk/biker_walk_03.png',
        'img2/2_character/2_walk/biker_walk_04.png',
        'img2/2_character/2_walk/biker_walk_05.png',
        'img2/2_character/2_walk/biker_walk_06.png',
    ];
    IMAGES_JUMP = [
        'img2/2_character/3_jump/biker_jump_01.png',
        'img2/2_character/3_jump/biker_jump_02.png',
        'img2/2_character/3_jump/biker_jump_03.png',
        'img2/2_character/3_jump/biker_jump_04.png',
    ];
    IMAGES_DOUBLE_JUMP = [
        'img2/2_character/3_jump/biker_doublejump_01.png',
        'img2/2_character/3_jump/biker_doublejump_02.png',
        'img2/2_character/3_jump/biker_doublejump_03.png',
        'img2/2_character/3_jump/biker_doublejump_04.png',
        'img2/2_character/3_jump/biker_doublejump_05.png',
        'img2/2_character/3_jump/biker_doublejump_06.png',
    ];
    IMAGES_HURT = [
        'img2/2_character/4_hurt/biker_hurt_01.png',
        'img2/2_character/4_hurt/biker_hurt_02.png',
    ];
    IMAGES_DEAD = [
        'img2/2_character/5_dead/biker_death_01.png',
        'img2/2_character/5_dead/biker_death_02.png',
        'img2/2_character/5_dead/biker_death_03.png',
        'img2/2_character/5_dead/biker_death_04.png',
        'img2/2_character/5_dead/biker_death_05.png',
        'img2/2_character/5_dead/biker_death_06.png',
    ];
    IMAGES_THROWINGBOMBS = [
        'img2/2_character/6_throw/biker_throw_01.png',
        'img2/2_character/6_throw/biker_throw_02.png',
        'img2/2_character/6_throw/biker_throw_03.png',
        'img2/2_character/6_throw/biker_throw_04.png',
        'img2/2_character/6_throw/biker_throw_05.png',
        'img2/2_character/6_throw/biker_throw_06.png',
    ];
    ANIMATION_SPEED_IDLE = 250;
    ANIMATION_SPEED_LONG_IDLE = 80;
    ANIMATION_SPEED_WALK = 85;
    ANIMATION_SPEED_JUMP = 120;
    ANIMATION_SPEED_HURT = 250;
    ANIMATION_SPEED_DEAD = 200;
    ANIMATION_SPEED_THROWINGBOMBS = 50;
    world;
    animationInterval = null;
    hasDied = false;
    isThrowingBomb = false;
    idleTime = 0;
    ownedBombs = 0;
    canDoubleJump = false;

    /**
     * Constructs a playable character in the game, extending the capabilities of a MovableObject.
     * Manages all character-related animations, movements, and interactions within the game world.
     */
    constructor() {
        super().loadImage('img2/2_character/2_walk/biker_walk_01.png')
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_LONG_IDLE);
        this.loadImages(this.IMAGES_WALK);
        this.loadImages(this.IMAGES_JUMP);
        this.loadImages(this.IMAGES_DOUBLE_JUMP)
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_THROWINGBOMBS);
        this.currentAnimationSpeed = this.ANIMATION_SPEED_IDLE;
        this.lastThrown = 0;
        this.throwCooldown = 500; 
        this.animate();
        this.applyGravity();
    }

    /**
     * Initiates and controls the main animation loop of the character.
     * This method sets an interval for character actions and animation updates based on user inputs.
     */
    animate() {
        this.animationInterval = setInterval(() => {
            this.updateState();
            this.updateAnimation();
        }, this.currentAnimationSpeed); // Verwende die aktuelle Animationsgeschwindigkeit
    }

    /**
     * Updates the state of the character based on user input and character conditions.
     * This method handles keyboard inputs for moving left, right, jumping, and sets idle time.
     * It also adjusts the camera's x-position based on the character's position.
     */
    updateState() {
        if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
            this.moveRight();
            this.otherDirection = false;
            sounds.walkingSound.play(5);
            this.idleTime = 0;
        } if (this.world.keyboard.LEFT && this.x > -650) {
            this.moveLeft();
            this.otherDirection = true;
            sounds.walkingSound.play(5);
            this.idleTime = 0;
        } if (this.world.keyboard.SPACE && !this.isAboveGround()) {
            this.jump();
            sounds.jumpingSound.play();
            this.idleTime = 0;
        } if (!(this.world.keyboard.RIGHT || this.world.keyboard.LEFT || this.world.keyboard.SPACE)) {
            this.idleTime += 1000 / 60;
        }
        this.world.camera_x = -this.x + 100;
    }

    /**
    * Updates the animation of the character based on the current state and active conditions.
    * This method selects the appropriate animation based on character actions like walking, jumping, or taking damage.
    */
    updateAnimation() {
        if (this.isDead()) {
            if (!this.hasDied) {
                this.handleDyingAnimation();
                this.hasDied = true;
                endGame(false);
            }
        } else if (this.isThrowingBomb) {
            this.playAnimation(this.IMAGES_THROWINGBOMBS);
        } else if (this.isHurt()) {
            this.playAnimation(this.IMAGES_HURT);
            this.updateIntervalSpeed(this.ANIMATION_SPEED_HURT);
        } else if (this.isAboveGround() && this.canDoubleJump) {
            this.playAnimation(this.IMAGES_DOUBLE_JUMP);
            this.updateIntervalSpeed(this.ANIMATION_SPEED_JUMP);
        } else if (this.isAboveGround()) {
            this.playAnimation(this.IMAGES_JUMP);
            this.updateIntervalSpeed(this.ANIMATION_SPEED_JUMP);
        } else if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
            this.playAnimation(this.IMAGES_WALK);
            this.updateIntervalSpeed(this.ANIMATION_SPEED_WALK);
        } else if (this.idleTime > 5000) {
            this.playAnimation(this.IMAGES_LONG_IDLE);
            this.updateIntervalSpeed(this.ANIMATION_SPEED_LONG_IDLE);
        } else {
            this.playAnimation(this.IMAGES_IDLE);
            this.updateIntervalSpeed(this.ANIMATION_SPEED_IDLE);
        }
    }

    /**
     * Adjusts the speed of the animation interval.
     * This method updates the interval timing based on the new speed required for the current animation state.
     * @param {number} newSpeed - The new speed for the animation interval in milliseconds.
     */
    updateIntervalSpeed(newSpeed) {
        if (this.currentAnimationSpeed !== newSpeed) {
            this.currentAnimationSpeed = newSpeed;
            clearInterval(this.animationInterval);
            this.animationInterval = setInterval(() => {
                this.updateState();
                this.updateAnimation();
            }, this.currentAnimationSpeed);
        }
    }

    /**
     * Handles the bomb throwing mechanism for the character, managing the animation and gameplay effects.
     */
    throwBomb() {
        this.currentImage = 0;
        this.isThrowingBomb = true;
        const animationInterval = setInterval(() => {
            this.playAnimation(this.IMAGES_THROWINGBOMBS);
            if (this.currentImage >= this.IMAGES_THROWINGBOMBS.length) {
                clearInterval(animationInterval);
                this.isThrowingBomb = false;
                this.currentImage = 0;
                this.reducingBombs();
            }
        }, 100);
    }

    /**
     * Handles the animation sequence for the dying animation of the character.
     */
    handleDyingAnimation() {
        let currentFrame = 0;
        let maxFrames = this.IMAGES_DEAD.length;
        sounds.hurtSound.pause();
        sounds.dyingSound.play();

        this.dyingAnimationInterval = setInterval(() => {
            if (currentFrame < maxFrames)
                this.img = this.imageCache[this.IMAGES_DEAD[currentFrame++]];
        }, 100);
    }
}