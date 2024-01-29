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
        this.speedY = 30; // Anfangsgeschwindigkeit nach oben
        this.speedX = this.direction === 'right' ? 10 : -10;

        this.applyGravity();

        // Starten Sie das Intervall nur, wenn es noch nicht läuft
        if (!this.animationInterval) {
            this.animationInterval = setInterval(() => {
                if (this.hitEnemy) {
                    this.exploding = true;
                    this.speedX = 0;
                    this.speedY = 0;
                    setTimeout(() => {
                        this.playAnimation(this.IMAGES_BOMBEXPLOSION);
                        console.log("Explosion wird abgespielt");
                        clearInterval(this.animationInterval);
                        this.animationInterval = null; // Zurücksetzen der Intervall-ID
                    }, 2000)
        
                } else if (!this.hitEnemy) {
                    this.x += this.speedX; // Horizontale Bewegung
                    this.playAnimation(this.IMAGES_BOMBROTATION);
                    console.log("Rotation");
                }
            }, 25);
        }
    }
}
