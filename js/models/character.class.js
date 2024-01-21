class Character extends MovableObject {
    speed = 100;
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
    IMAGES_THROWINGBOMBS = [
        'img2/2_character/6_throw/biker_throw_01.png',
        'img2/2_character/6_throw/biker_throw_02.png',
        'img2/2_character/6_throw/biker_throw_03.png',
        'img2/2_character/6_throw/biker_throw_04.png',
        'img2/2_character/6_throw/biker_throw_05.png',
        'img2/2_character/6_throw/biker_throw_06.png',
    ];
    ANIMATION_SPEED_IDLE = 500;   // 100ms per frame
    ANIMATION_SPEED_LONG_IDLE = 700;   // 100ms per frame
    ANIMATION_SPEED_WALK = 50;    // 60ms per frame
    ANIMATION_SPEED_JUMP = 150;    // 75ms per frame
    ANIMATION_SPEED_HURT = 150;    // 75ms per frame
    ANIMATION_SPEED_DEAD = 200;    // 50ms per frame
    ANIMATION_SPEED_THROWINGBOMBS = 100;
    world;
    walking_sound = new Audio('audio/659370__matrixxx__retro-footsteps.wav');
    jumping_sound = new Audio('audio/678839__cartchaos__jump.wav');
    background_music = new Audio('audio/363164__adnova__spooker.wav');
    dying_sound = new Audio('audio/163442__under7dude__man-dying.wav');
    animationInterval = null;
    hasDied = false;
    idleTime = 0; // Variable für die Inaktivitätszeit

    constructor() {
        super().loadImage('img2/2_character/2_walk/biker_walk_01.png')
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_LONG_IDLE);
        this.loadImages(this.IMAGES_WALK);
        this.loadImages(this.IMAGES_JUMP);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_THROWINGBOMBS);
        this.background_music.play();
        this.background_music.loop = true;
        this.animate();
        this.applyGravity();
        setInterval(() => {
            this.idleTime += 100; // Zählt die Idle-Zeit hoch
            this.setAnimationInterval();
        }, 100); // Überprüft alle 100 Millisekunden
    }

    animate() {

        setInterval(() => {
            if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
                this.moveRight();
                this.otherDirection = false;
                this.walking_sound.playbackRate = 9;
                this.walking_sound.play();
                this.idleTime = 0; // Zurücksetzen der Idle-Zeit
            }

            if (this.world.keyboard.LEFT && this.x > -650) {
                this.moveLeft();
                this.otherDirection = true;
                this.walking_sound.playbackRate = 9;
                this.walking_sound.play();
                this.idleTime = 0; // Zurücksetzen der Idle-Zeit
            }

            if (this.world.keyboard.SPACE && !this.isAboveGround()) {
                this.jump();
                this.jumping_sound.play();
                this.idleTime = 0; // Zurücksetzen der Idle-Zeit
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

        let animationSpeed;

        if (this.isDead()) {
            if (!this.hasDied) {
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
                if (this.idleTime > 5000) { // Wechsel zu Long_Idle nach 5 Sekunden
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