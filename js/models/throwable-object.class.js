class ThrowableObject extends MovableObject {
    accelerationY = 3.5;
    IMAGES_BOMBROTATION = [
        'img2/6_bombs/bomb_rotation/bomb-rotation_01.png',
        'img2/6_bombs/bomb_rotation/bomb-rotation_02.png',
        'img2/6_bombs/bomb_rotation/bomb-rotation_03.png',
        'img2/6_bombs/bomb_rotation/bomb-rotation_04.png',
    ];
    IMAGES_BOMBEXPLOSION = [
        'img2/6_bombs/bomb_explosion/bomb-explosion_01.png',
        'img2/6_bombs/bomb_explosion/bomb-explosion_02.png',
        'img2/6_bombs/bomb_explosion/bomb-explosion_03.png',
        'img2/6_bombs/bomb_explosion/bomb-explosion_04.png',
        'img2/6_bombs/bomb_explosion/bomb-explosion_05.png',
        'img2/6_bombs/bomb_explosion/bomb-explosion_06.png',
        'img2/6_bombs/bomb_explosion/bomb-explosion_07.png',
        'img2/6_bombs/bomb_explosion/bomb-explosion_08.png',
    ];
    hitEnemy = false;
    isExploded = false;
    ANIMATION_SPEED_EXPLOSION = 100;

    /**
     * Constructs a throwable object in the game, such as a bomb, with capabilities for animations of rotation and explosion.
     */
    constructor(x, y, direction) {
        super().loadImage('img2/6_bombs/bomb_rotation/bomb-rotation_01.png',);
        this.loadImages(this.IMAGES_BOMBROTATION);
        this.loadImages(this.IMAGES_BOMBEXPLOSION);
        this.x = x;
        this.y = y;
        this.direction = direction;
        this.width = 50;
        this.height = 50;
        this.bombAnimation();
        this.animationInterval = null;
        this.exploding = false;
    }

    /**
     * Manages the animation of the bomb's movement and triggers the explosion sequence upon collision.
     */
    bombAnimation() {
        if (!this.animationInterval) {
            this.speedY = 30;
            this.speedX = this.direction === 'right' ? 10 : -10;
            this.applyGravity();

            this.animationInterval = setInterval(() => {
                if (this.hitEnemy) {
                    this.handleExplosion();
                    this.speedX = 1;
                    this.speedY = 1;
                } else {
                    this.x += this.speedX;
                    this.playAnimation(this.IMAGES_BOMBROTATION);
                }
            }, 25);
        }
    }

    /**
     * Handles the explosion animation of the bomb when it hits an enemy.
     */
    handleExplosion() {
        if (!this.isExploding) {
            this.isExploding = true;
            let currentFrame = 0;
            let maxFrames = this.IMAGES_BOMBEXPLOSION.length;

            this.explosionInterval = setInterval(() => {
                if (currentFrame < maxFrames) {
                    this.img = this.imageCache[this.IMAGES_BOMBEXPLOSION[currentFrame++]];
                } else {
                    clearInterval(this.explosionInterval);
                }
            }, this.ANIMATION_SPEED_EXPLOSION);

            setTimeout(() => {
                this.isExploded = true;
                clearInterval(this.animationInterval);
                this.animationInterval = null;
            }, maxFrames * this.ANIMATION_SPEED_EXPLOSION);
        }
    }
}
