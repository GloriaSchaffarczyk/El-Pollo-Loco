class MovableObject extends DrawableObject {
    offset = {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    }
    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    accelerationY = 3.5;
    energy = 100;
    lastHit = 0;
    readyToRemove = false;
    bombs = 0;
    candy = 0;
    speedX = 0;

    applyGravity() {
        let groundLevel = 290;
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.accelerationY;
            } else {
                this.y = groundLevel;
                this.canDoubleJump = false;
            }
        }, 1000 / 25);
    }

    isAboveGround() {
        if (this instanceof ThrowableObject) { // throwable objects fall
            return true;
        } else {
            return this.y < 290;
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

    isColliding(mo) {
        return (
            this.x + this.width - this.offset.right >= mo.x + mo.offset.left &&
            this.y + this.height - this.offset.bottom >= mo.y + mo.offset.top &&
            this.x + this.offset.left <= mo.x + mo.width - mo.offset.right &&
            this.y + this.offset.top <= mo.y + mo.height - mo.offset.bottom
        );
    }

    /* isColliding(obj) {
        return this.x + this.width >= obj.x &&
            this.x <= obj.x + obj.width &&
            this.y + this.height >= obj.y &&
            this.y <= obj.y + obj.height;
    } */

    // Bessere Formel zur Kollisionsberechnung (Genauer)
    /* isColliding(obj) {
        return (this.x + this.width) >= obj.x && this.x <= (obj.x + obj.width) &&
            (this.y + this.offsetX + this.height) >= obj.y &&
            (this.y + this.offsetY) <= (obj.y + obj.height) &&
            obj.onCollisionCourse; 
    } */
    // Optional: hiermit könnten wir schauen, ob ein Objekt sich in die richtige Richtung bewegt. Nur dann kollidieren wir. Nützlich bei Gegenständen, auf denen man stehen kann.

    enemyHitByBomb() {
        this.energy -= 20;
        if (this.energy <= 0) {
            this.hasDied = true;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    endbossHitByBomb() {
        this.energy -= 20;
        if (this.energy <= 0) {
            this.hasDied = true;
        } else {
            this.lastHit = new Date().getTime();
            console.log('Hit endboss!', this.energy);
        }
    }

    collectingCandy() {
        this.candy += 20;
        if (this.candy > 100) {
            this.candy = 100;
        }
    }

    collectingBombs() {
        this.ownedBombs += 20;
        if (this.ownedBombs > 100) {
            this.ownedBombs = 100;
        }
    }
    reducingBombs() {
        this.ownedBombs -= 20; // Reduziere um eine Bombe
        if (this.ownedBombs < 0) {
            this.ownedBombs = 0; // Verhindere negative Werte
        }
        this.world.statusBar[1].setPercentage(this.ownedBombs);
    }

    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    playAnimationOnce(images) {
        let animationIndex = 0;
        let animationLength = images.length;

        // Sicherstellen, dass die Animation nur einmal gestartet wird
        if (this.animationInterval) return;

        this.animationInterval = setInterval(() => {
            if (animationIndex < animationLength) {
                this.img = this.imageCache[images[animationIndex++]];
            } else {
                clearInterval(this.animationInterval);
                this.animationInterval = null;
                this.readyToRemove = true; // Setze das Objekt als bereit zum Entfernen
            }
        }, 100);
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

    doubleJump() {
        this.speedY = 30;
        this.speedX = this.otherDirection ? -5 : 5; 

        if (this.horizontalMoveInterval) {
            clearInterval(this.horizontalMoveInterval);
        }

        this.horizontalMoveInterval = setInterval(() => {
            if (this.isAboveGround()) {
                this.x += this.speedX;
            } else {
                clearInterval(this.horizontalMoveInterval);
            }
        }, 5000 / 60);
    }

}

// Aufgaben
// Startscreen
// Musik und Sounds
// Coins einsammeln
// Flaschen einsammeln
// Flaschen nur werfen, wenn sie vorhanden sind
// Kollision mit Gegnern
// Endgegner besiegen
// Game-Over-Screen
// Fullscreen
// Boss attackiert, wenn Charakter sich nähert
// andere Musik
// Character springt auf Gegner und sie sterben...?