class Character extends MovableObject {
    speed = 55;
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
        'img2/2_character/2_walk/biker_walk_01.png',
        'img2/2_character/2_walk/biker_walk_02.png',
        'img2/2_character/2_walk/biker_walk_02.png',
        'img2/2_character/2_walk/biker_walk_03.png',
        'img2/2_character/2_walk/biker_walk_03.png',
        'img2/2_character/2_walk/biker_walk_04.png',
        'img2/2_character/2_walk/biker_walk_04.png',
        'img2/2_character/2_walk/biker_walk_05.png',
        'img2/2_character/2_walk/biker_walk_05.png',
        'img2/2_character/2_walk/biker_walk_06.png',
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
    ANIMATION_SPEED_IDLE = 400;
    ANIMATION_SPEED_LONG_IDLE = 400;
    ANIMATION_SPEED_WALK = 40;
    ANIMATION_SPEED_JUMP = 150;
    ANIMATION_SPEED_HURT = 500;
    ANIMATION_SPEED_DEAD = 500;
    ANIMATION_SPEED_THROWINGBOMBS = 45;
    world;
    animationInterval = null;
    hasDied = false;
    isThrowingBomb = false;
    idleTime = 0;
    ownedBombs = 0;
    canDoubleJump = false;
    dyingAnimationPlayed = false;

    /**
 * Loading necessary images and initializing animation and physics.
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
        this.animate();
        this.applyGravity();
    }

    /**
 * Initiates and manages the animation loop and game state updates based on user input.
 */
    animate() {
        setInterval(() => {
            if (this.hasDied && !this.dyingAnimationPlayed) {
                this.handleDyingAnimation();
            }

            if (this.hasDied) return;

            if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
                this.moveRight();
                this.otherDirection = false;
                sounds.walkingSound.play(5.5);
                this.idleTime = 0;
            }

            if (this.world.keyboard.LEFT && this.x > -650) {
                this.moveLeft();
                this.otherDirection = true;
                sounds.walkingSound.play(5.5);
                this.idleTime = 0;
            }

            if (this.world.keyboard.SPACE && !this.isAboveGround()) {
                this.jump();
                sounds.jumpingSound.play();
                this.idleTime = 0;
            }

            if (!(this.world.keyboard.RIGHT || this.world.keyboard.LEFT || this.world.keyboard.SPACE)) {
                this.idleTime += 1000 / 60;
            }

            this.world.camera_x = -this.x + 100;
        }, 7000 / 60);

        this.setAnimationInterval();
    }

    /**
 * Configures and manages animation intervals based on the character's current state.
 */
    setAnimationInterval() {
        clearInterval(this.animationInterval);

        let animationSpeed = this.determineAnimationSpeed();
        this.playAppropriateAnimation();

        this.animationInterval = setInterval(() => {
            this.setAnimationInterval();
        }, animationSpeed);
    }

    /**
 * Determines the appropriate animation speed based on the current state of the character.
 * @returns {number} The milliseconds duration for the current animation frame rate.
 */
    determineAnimationSpeed() {
        if (this.isDead() && !this.hasDied) return this.ANIMATION_SPEED_DEAD;
        if (this.isThrowingBomb) return this.ANIMATION_SPEED_THROWINGBOMBS;
        if (this.isHurt()) return this.ANIMATION_SPEED_HURT;
        if (this.isAboveGround()) return this.ANIMATION_SPEED_JUMP;
        if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) return this.ANIMATION_SPEED_WALK;
        if (this.idleTime > 5000) return this.ANIMATION_SPEED_LONG_IDLE;
        return this.ANIMATION_SPEED_IDLE;
    }

    /**
 * Plays the appropriate animation based on the character's current state.
 */
    playAppropriateAnimation() {
        if (this.isDead() && !this.hasDied) {
            this.handleDeath();      
        } else if (this.isThrowingBomb) {
            this.playAnimation(this.IMAGES_THROWINGBOMBS);
        } else if (this.isHurt()) {
            this.playAnimation(this.IMAGES_HURT);
        } else if (this.isAboveGround()) {
            this.playJumpAnimation();
        } else if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
            this.playAnimation(this.IMAGES_WALK);
        } else if (this.idleTime > 5000) {
            this.playAnimation(this.IMAGES_LONG_IDLE);
        } else {
            this.playAnimation(this.IMAGES_IDLE);
        }
    }

handleDyingAnimation() {
    if (this.dyingAnimationPlayed) return;  // Verhindert, dass die Animation mehrfach startet

    let currentFrame = 0;
    const maxFrames = this.IMAGES_DEAD.length;
    const intervalTime = 400; // Geschwindigkeit der Animation anpassen

    this.dyingAnimationPlayed = true;
    this.animationInterval = setInterval(() => {
        if (currentFrame < maxFrames) {
            this.img = this.imageCache[this.IMAGES_DEAD[currentFrame++]];
        } else {
            clearInterval(this.animationInterval);
            this.animationInterval = null; // Beendet das Intervall
        }
    }, intervalTime);
}

    /**
 * Handles character death, plays death animation, and ends the game.
 */
    handleDeath() {
        if (this.hasDied) return;
        this.hasDied = true;
        sounds.dyingSound.play();
        this.handleDyingAnimation(); // Startet die Todesanimation
    }

    /**
 * Chooses between jumping and double jumping animations based on the ability to double jump.
 */
    playJumpAnimation() {
        if (this.canDoubleJump) {
            this.playAnimation(this.IMAGES_DOUBLE_JUMP);
        } else {
            this.playAnimation(this.IMAGES_JUMP);
        }
    }

    /**
 * Initiates the bomb throwing animation and manages bomb inventory.
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
        }, this.ANIMATION_SPEED_THROWINGBOMBS);
    }
}