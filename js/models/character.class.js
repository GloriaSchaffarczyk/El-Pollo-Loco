class Character extends MovableObject {
    speed = 100;
    IMAGES_IDLE = [
        '../img2/2_character/1_idle/idle/biker_idle_01.png',
        '../img2/2_character/1_idle/idle/biker_idle_02.png',
        '../img2/2_character/1_idle/idle/biker_idle_03.png',
        '../img2/2_character/1_idle/idle/biker_idle_04.png',
    ]
    IMAGES_WALK = [
        '../img2/2_character/2_walk/biker_walk_01.png',
        '../img2/2_character/2_walk/biker_walk_01.png',
        '../img2/2_character/2_walk/biker_walk_02.png',
        '../img2/2_character/2_walk/biker_walk_02.png',
        '../img2/2_character/2_walk/biker_walk_03.png',
        '../img2/2_character/2_walk/biker_walk_03.png',
        '../img2/2_character/2_walk/biker_walk_04.png',
        '../img2/2_character/2_walk/biker_walk_04.png',
        '../img2/2_character/2_walk/biker_walk_05.png',
        '../img2/2_character/2_walk/biker_walk_05.png',
        '../img2/2_character/2_walk/biker_walk_06.png',
        '../img2/2_character/2_walk/biker_walk_06.png',
    ]
    world;
    walking_sound = new Audio('audio/659370__matrixxx__retro-footsteps.wav')

    constructor() {
        super().loadImage('../img2/2_character/2_walk/biker_walk_01.png')
        this.loadImages(this.IMAGES_WALK);
        this.animate();
    }

    animate() {

        setInterval(() => {
            if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
                this.x += this.speed;
                this.otherDirection = false;
                this.walking_sound.playbackRate = 3; // hier ändern
                this.walking_sound.play();
            }

            if (this.world.keyboard.LEFT && this.x > -650) { 
                this.x -= this.speed;
                this.otherDirection = true;
                this.walking_sound.playbackRate = 3; // hier ändern
                this.walking_sound.play();
            }
            this.world.camera_x = -this.x + 100;
        }, 5000 / 60);

        setInterval(() => {
            if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                let i = this.currentImage % this.IMAGES_WALK.length; // Index wird nie so groß wie die Anzahl der Bilder im Array, also Array.Länge -1
                // let i = this.currentImage % this.IMAGES_IDLE.length; // Index wird nie so groß wie die Anzahl der Bilder im Array, also Array.Länge -1
                // durch Modulo steht hier i = 0, 1, 2, 3, 0, 1, 2, 3, 0,...
                let path = this.IMAGES_WALK[i];
                this.img = this.imageCache[path];
                this.currentImage++
            }
        }, 45);
    }

    jump() {
    }
}