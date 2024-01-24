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
        this.x = x;
        this.y = y;
        this.direction = direction; // neu
        this.width = 50;
        this.height = 50;
        this.throw();
    }


    throw() {
        this.speedY = 30; // Anfangsgeschwindigkeit nach oben
        this.speedX = this.direction === 'right' ? 10 : -10; // Setzen der horizontalen Geschwindigkeit basierend auf der Richtung

        this.applyGravity();
        setInterval(() => {

            if (this.hitEnemy) {
                this.speedX = 0; // Stoppt die horizontale Bewegung
                this.speedY = 0; // Stoppt die vertikale Bewegung
                this.playAnimation(this.IMAGES_BOMBEXPLOSION);
                // clearInterval(intervalId);
            } else {
                this.x += this.speedX; // Horizontale Bewegung aktualisieren
                this.playAnimation(this.IMAGES_BOMBROTATION); // Rotation der Bombe animieren
            }
        }, 25);
    }
}
