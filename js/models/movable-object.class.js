class MovableObject extends DrawableObject {
    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    accelerationY = 3.5;
    energy = 100;
    lastHit = 0;

    applyGravity() {
        let groundLevel = 290;
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.accelerationY;
            } else {
                this.y = 0;
                this.y = groundLevel;
            }
        }, 1000 / 25);
    }

    isAboveGround() {
        return this.y < 290;
    }

    drawFrame(ctx) {

        if (this instanceof Character || this instanceof Zombie || this instanceof Monster || this instanceof Endboss) {
            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = 'red';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }

    enemyHit() {
        this.energy -= 5;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    endbossHit() {
        this.energy -= 15;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    isHurt() {
        let timePassed = new Date().getTime() - this.lastHit; 
        timePassed = timePassed / 1000; 
        return timePassed < 1;
    }

    isDead() {
        return this.energy == 0;
    }

    isColliding(obj) {
        return this.x + this.width >= obj.x &&
            this.x <= obj.x + obj.width &&
            this.y + this.height >= obj.y &&
            this.y <= obj.y + obj.height;
    }

    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++
    }

    moveRight() {
        this.x += this.speed;
    };

    moveLeft() {
        this.x -= this.speed;
    }

    jump() {
        this.speedY = 30;
    }
}

