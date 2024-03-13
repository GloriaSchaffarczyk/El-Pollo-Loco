class Character extends MovableObject {
    speed = 100;
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
    ANIMATION_SPEED_WALK = 25;
    ANIMATION_SPEED_JUMP = 150;
    ANIMATION_SPEED_HURT = 50;
    ANIMATION_SPEED_DEAD = 250;
    ANIMATION_SPEED_THROWINGBOMBS = 45;
    world;                       
    walking_sound = new Audio('audio/659370__matrixxx__retro-footsteps.wav');
    jumping_sound = new Audio('audio/678839__cartchaos__jump.wav');
    background_music = new Audio('audio/363164__adnova__spooker.wav');
    dying_sound = new Audio('audio/163442__under7dude__man-dying.wav');
    hurt_sound = new Audio('audio/486943__matrixxx__human-aah.wav')
    animationInterval = null;
    hasDied = false;
    isThrowingBomb = false;
    idleTime = 0;
    ownedBombs = 0;
    canDoubleJump = false;

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
        this.background_music.play();
        this.background_music.loop = true;
        this.animate();
        this.applyGravity();
        this.lastAnimationState = null;
    }

    animate() {
        setInterval(() => {
            if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
                this.moveRight();
                this.otherDirection = false;
                this.walking_sound.playbackRate = 9;
                this.walking_sound.play();
                this.idleTime = 0;
            }

            if (this.world.keyboard.LEFT && this.x > -650) {
                this.moveLeft();
                this.otherDirection = true;
                this.walking_sound.playbackRate = 9;
                this.walking_sound.play();
                this.idleTime = 0;
            }

            if (this.world.keyboard.SPACE && !this.isAboveGround()) {
                this.jump();
                this.jumping_sound.play();
                this.idleTime = 0;
            }

            if (!(this.world.keyboard.RIGHT || this.world.keyboard.LEFT || this.world.keyboard.SPACE)) {
                this.idleTime += 2000 / 60;
            }

            this.world.camera_x = -this.x + 100;
        }, 5000 / 60);

        this.setAnimationInterval();
    }

    setAnimationInterval() {
        if (this.animationInterval) {
            clearInterval(this.animationInterval);
        }

        let animationSpeed = this.ANIMATION_SPEED_IDLE;  // Defaultwert

        if (this.isDead()) {
            if (!this.hasDied) {
                this.playAnimation(this.IMAGES_DEAD);
                animationSpeed = this.ANIMATION_SPEED_DEAD;
                this.dying_sound.play();
                this.hasDied = true;
                endGame(false);
            }
        } else if (this.isThrowingBomb) {
            animationSpeed = this.ANIMATION_SPEED_THROWINGBOMBS;
        } else if (this.isHurt()) {
            this.playAnimation(this.IMAGES_HURT);
            this.hurt_sound.play();
        } else if (this.isAboveGround() && this.canDoubleJump) {
            this.playAnimation(this.IMAGES_DOUBLE_JUMP);
            animationSpeed = this.ANIMATION_SPEED_JUMP;
        } else if (this.isAboveGround()) {
            this.playAnimation(this.IMAGES_JUMP);
            animationSpeed = this.ANIMATION_SPEED_JUMP;
        } else {
            if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                this.playAnimation(this.IMAGES_WALK);
                animationSpeed = this.ANIMATION_SPEED_WALK;
            } else {
                if (this.idleTime > 5000) {
                    this.playAnimation(this.IMAGES_LONG_IDLE);
                    animationSpeed = this.ANIMATION_SPEED_LONG_IDLE;
                } else {
                    this.playAnimation(this.IMAGES_IDLE);
                    animationSpeed = this.ANIMATION_SPEED_IDLE;
                }
            }
        }

        this.animationInterval = setInterval(() => {
            this.setAnimationInterval();  // Bei jeder Ausführung wird das Intervall aktualisiert.
        }, animationSpeed);
    }

    throwBomb() {
        this.currentImage = 0;
        this.isThrowingBomb = true;
        const animationInterval = setInterval(() => {
            this.playAnimation(this.IMAGES_THROWINGBOMBS);
            if (this.currentImage >= this.IMAGES_THROWINGBOMBS.length) {
                clearInterval(animationInterval);
                this.isThrowingBomb = false;
                this.currentImage = 0; // Zurücksetzen für nächste Animation
                this.reducingBombs(); // Aufruf hier, Statusleiste wird in reducingBombs aktualisiert
            }
        }, this.ANIMATION_SPEED_THROWINGBOMBS);
    }

    initBackgroundMusic() {
        document.addEventListener('click', () => {
            this.playBackgroundMusic();
        });
    }

    playBackgroundMusic() {
        if (this.background_music.paused) {
            this.background_music.play()
                .then(() => {
                    this.background_music.loop = true;
                })
                .catch((error) => {
                    console.log('Playback failed:', error);
                });
        }
    }
}