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
                    this.speedX = 0;
                    this.speedY = 0;
                } else {
                    this.x += this.speedX; // Horizontale Bewegung
                    this.playAnimation(this.IMAGES_BOMBROTATION);
                }
            }, 25);
        }
    }

    handleExplosion() {
        if (!this.isExploding) {
            this.isExploding = true;
            let currentFrame = 0;
            let maxFrames = this.IMAGES_BOMBEXPLOSION.length;
    
            // Setze das Intervall zur Anzeige jedes Explosionsbildes
            this.explosionInterval = setInterval(() => {
                if (currentFrame < maxFrames) {
                    this.img = this.imageCache[this.IMAGES_BOMBEXPLOSION[currentFrame++]];
                } else {
                    clearInterval(this.explosionInterval); // Beendet die Explosionsanimation
                }
            }, this.ANIMATION_SPEED_EXPLOSION);
    
            // Setze ein Timeout, um die Bombe als explodiert zu markieren und die Hauptanimation zu beenden
            setTimeout(() => {
                console.log("Explosion wird abgespielt");
                this.isExploded = true;
                clearInterval(this.animationInterval);
                this.animationInterval = null;
            }, maxFrames * this.ANIMATION_SPEED_EXPLOSION);
        }
    }
    
}
