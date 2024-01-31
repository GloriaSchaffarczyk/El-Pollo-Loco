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
    ANIMATION_SPEED_EXPLOSION = 10; 

    constructor(x, y, direction) {
        super().loadImage('img2/6_bombs/bomb_rotation/bomb-rotation_01.png',);
        this.loadImages(this.IMAGES_BOMBROTATION);
        this.loadImages(this.IMAGES_BOMBEXPLOSION);
        this.x = x;
        this.y = y;
        this.direction = direction; // neu
        this.width = 50;
        this.height = 50;
        this.bombAnimation();
        this.animationInterval = null;
        this.exploding = false;
    }

    bombAnimation() {
        if (!this.animationInterval) {
            this.speedY = 30; // Anfangsgeschwindigkeit nach oben
            this.speedX = this.direction === 'right' ? 10 : -10;
            this.applyGravity();

            this.animationInterval = setInterval(() => {
                if (this.hitEnemy) {
                    this.handleExplosion();
                } else {
                    this.x += this.speedX; // Horizontale Bewegung
                    this.playAnimation(this.IMAGES_BOMBROTATION);
                }
            }, 25);
        }
    }

    handleExplosion() {
        if (!this.isExploding) {
            this.speedX = 0;
            this.speedY = 0;
            this.isExploding = true;
            this.playAnimation(this.IMAGES_BOMBEXPLOSION);

            setTimeout(() => {
                console.log("Explosion wird abgespielt");
                this.isExploded = true;
                clearInterval(this.animationInterval);
                this.animationInterval = null;
            }, this.IMAGES_BOMBEXPLOSION.length * this.ANIMATION_SPEED_EXPLOSION);
        }
    }
}
