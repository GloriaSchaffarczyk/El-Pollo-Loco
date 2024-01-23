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
    speedX = 0;

    constructor(x, y, direction) {
        super().loadImage('img2/6_bombs/bomb_rotation/bomb-rotation_01.png',);
        this.loadImages(this.IMAGES_BOMBROTATION);
        this.x = x;
        this.y = y;
        this.direction = direction; // neu
        this.width = 50;
        this.height = 50;
        this.throw();
    }

    // wenn sich der Character umdreht, muss die Flasche in die entgegengesetze Richtung fliegen, als muss += 10 angepasst werden
    throw() {
        this.speedY = 30; // Anfangsgeschwindigkeit nach oben
        this.speedX = this.direction === 'right' ? 10 : -10; 
        
        setInterval(() => {
            if (this.hitEnemy) {
                this.playAnimation(this.IMAGES_BOMBEXPLOSION);
            } else {
                this.x += 10;
                this.y = y;
                this.speedY = 30;
                this.x += this.speedX; // Horizontale Bewegung
                this.applyGravity();
                this.playAnimation(this.IMAGES_BOMBROTATION);
            }
        }, 25);
    }       
}
