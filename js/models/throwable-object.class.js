class ThrowableObject extends MovableObject {
    accelerationY = 3.5;
    IMAGES_BIKER_THROWING_BOMB = [
        'img2/6_bombs/bomb_rotation/bomb_01.png',
        'img2/6_bombs/bomb_rotation/bomb_02.png',
        'img2/6_bombs/bomb_rotation/bomb_03.png',
        'img2/6_bombs/bomb_rotation/bomb_04.png',
    ];

    constructor(x, y) {
        super().loadImage('img2/6_bombs/bomb_rotation/bomb_01.png',);
        this.loadImages(this.IMAGES_BIKER_THROWING_BOMB);
        this.x = x;
        this.y = y;
        this.width = 50;
        this.height = 50;
        this.throw();
    }

    // wenn sich der Character umdreht, muss die Flasche in die entgegengesetze Richtung fliegen, als muss += 10 angepasst werden
    throw() {
        this.speedY = 30;
        this.speedX = 20;
        this.applyGravity();
        setInterval(() => {
            this.x += 10;
            this.playAnimation(this.IMAGES_BIKER_THROWING_BOMBER);
        }, 25);
    }

}
