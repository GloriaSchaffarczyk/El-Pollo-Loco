class Character extends MovableObject {
    speed = 100;
    IMAGES_IDLE = [
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
    ANIMATION_SPEED_IDLE = 250;   // 100ms per frame
    ANIMATION_SPEED_WALK = 30;    // 60ms per frame
    ANIMATION_SPEED_JUMP = 150;    // 75ms per frame
    ANIMATION_SPEED_HURT = 150;    // 75ms per frame
    ANIMATION_SPEED_DEAD = 250;    // 50ms per frame
    world;
    walking_sound = new Audio('audio/659370__matrixxx__retro-footsteps.wav');
    jumping_sound = new Audio('audio/678839__cartchaos__jump.wav');
    background_music = new Audio('audio/363164__adnova__spooker.wav');
    dying_sound = new Audio('audio/163442__under7dude__man-dying.wav');
    animationInterval = null;
    hasDied = false;

    constructor() {
        super().loadImage('img2/2_character/2_walk/biker_walk_01.png')
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_WALK);
        this.loadImages(this.IMAGES_JUMP);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);
        this.background_music.play();
        this.background_music.loop = true;
        this.animate();
        this.applyGravity();
    }

    animate() {

        setInterval(() => {
            if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
                this.moveRight();
                this.otherDirection = false;
                this.walking_sound.playbackRate = 9;
                this.walking_sound.play();
            }

            if (this.world.keyboard.LEFT && this.x > -650) {
                this.moveLeft();
                this.otherDirection = true;
                this.walking_sound.playbackRate = 9;
                this.walking_sound.play();
            }

            if (this.world.keyboard.SPACE && !this.isAboveGround()) {
                this.jump();
                this.jumping_sound.play();
            }

            this.world.camera_x = -this.x + 100;
        }, 5000 / 60);

        this.setAnimationInterval();
    }

    setAnimationInterval() {
        // Zunächst löschen wir das aktuelle Intervall, wenn es existiert.
        if (this.animationInterval) {
            clearInterval(this.animationInterval);
        }

        let animationSpeed = this.ANIMATION_SPEED_IDLE;  // Defaultwert

        if (this.isDead()) {
            if(!this.hasDied) {
                this.playAnimation(this.IMAGES_DEAD);
                animationSpeed = this.ANIMATION_SPEED_DEAD;
                this.dying_sound.play();
                this.hasDied = true;
            }
        } else if (this.isHurt()) {
            this.playAnimation(this.IMAGES_HURT);
        } else if (this.isAboveGround()) {
            this.playAnimation(this.IMAGES_JUMP);
            animationSpeed = this.ANIMATION_SPEED_JUMP;
        } else {
            if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                this.playAnimation(this.IMAGES_WALK);
                animationSpeed = this.ANIMATION_SPEED_WALK;
            } else {
                this.playAnimation(this.IMAGES_IDLE);
                animationSpeed = this.ANIMATION_SPEED_IDLE;
            }
        }

        this.animationInterval = setInterval(() => {
            this.setAnimationInterval();  // Bei jeder Ausführung wird das Intervall aktualisiert.
        }, animationSpeed);
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