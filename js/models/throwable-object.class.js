class ThrowableObject extends MovableObject {
    accelerationY = 3.5;

    constructor() {
        super().loadImage('../img2/2_character/1 Biker/Throw/1 Bombs/4.png');
        this.x = 100;
        this.y = 100;
        this.width = 50;
        this.height = 50;
        this.throw(100, 150);
    }

    throw(x, y) {
        this.x = x;
        this.y = y;
        this.speedY = 30;
        this.speedX = 20;
        this.applyGravity();
        setInterval(() => {
            this.x += 10;
        }, 25);
    }
}
