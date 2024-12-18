class MovableObject extends DrawableObject {
    offset = {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
    }
    speed = 1;
    otherDirection = false;
    speedY = 0;
    accelerationY = 3.5;
    energy = 100;
    lastHit = 0;
    readyToRemove = false;
    bombs = 0;
    candy = 0;
    speedX = 0;

    /**
     * Applies gravitational effects to the object if it's above the ground level.
     */
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

    /**
     * Determines if the object is above the ground.
     * @returns {boolean} True if the object is above ground level.
     */
    isAboveGround() {
        if (this instanceof ThrowableObject) {
            return true;
        } else {
            return this.y < 290;
        }
    }

    /**
     * Simulates the effect of the character being hit by an enemy.
     */
    enemyHit() {
        if (this.isHurt())
            return;
        this.energy -= 5;
        if (this.energy < 0) {
            this.energy = 0;
            endGame(false);
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    /**
     * Simulates the effect of the character being hit by the endboss.
     */
    endbossHit() {
        if (this.isHurt()) return;
        this.energy -= 15;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    /**
     * Calculates if the object is currently hurt based on the last time it was hit.
     * @returns {boolean} True if the object is currently in a hurt state.
     */
    isHurt() {
        let timePassed = new Date().getTime() - this.lastHit;
        timePassed = timePassed / 1000;
        return timePassed < 1;
    }

    /**
     * Checks if the object has no energy left and is considered dead.
     * @returns {boolean} True if the object is dead.
     */
    isDead() {
        return this.energy == 0;
    }

    /**
     * Determines if this object is colliding with another movable object.
     * @param {MovableObject} mo The other movable object.
     * @returns {boolean} True if this object collides with the given object.
     */
    isColliding(mo) {
        return (this.x + this.width - this.offset.right) >= (mo.x + mo.offset.left) &&
               (this.x + this.offset.left) <= (mo.x + mo.width - mo.offset.right) &&
               (this.y + this.height - this.offset.bottom) >= (mo.y + mo.offset.top) &&
               (this.y + this.offset.top) <= (mo.y + mo.height - mo.offset.bottom);
    }  

    /**
     * Handles enemies being hit by a bomb.
     */
    enemyHitByBomb() {
        this.energy -= 20;
        if (this.energy <= 0) {
            this.energy = 0;
            this.hasDied = true;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    /**
     * Handles the endboss being hit by a bomb.
     */
    endbossHitByBomb() {
        this.energy -= 20;
        if (this.energy <= 0) {
            this.energy = 0;
            this.hasDied = true;
            endGame(true);
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    /**
     * Collects candy, increasing the candy count, capped at 100.
     */
    collectingCandy() {
        this.candy += 20;
        if (this.candy > 100) {
            this.candy = 100;
        }
    }

    /**
     * Collects bombs, increasing the number of owned bombs, capped at 100.
     */
    collectingBombs() {
        this.ownedBombs += 20;
        if (this.ownedBombs > 100) {
            this.ownedBombs = 100;
        }
    }

    /**
     * Uses up bombs, decreasing the number of owned bombs.
     */
    reducingBombs() {
        this.ownedBombs -= 20;
        if (this.ownedBombs < 0) {
            this.ownedBombs = 0;
        }
        this.world.statusBar[1].setPercentage(this.ownedBombs);
    }

    /**
     * Cycles through an array of images to animate the object.
     * @param {string[]} images Array of image paths.
     */
    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    /**
     * Plays an animation sequence once from an array of images.
     * @param {string[]} images Array of image paths.
     */
    playAnimationOnce(images) {
        let animationIndex = 0;
        let animationLength = images.length;

        if (this.animationInterval) return;

        this.animationInterval = setInterval(() => {
            if (animationIndex < animationLength) {
                this.img = this.imageCache[images[animationIndex++]];
            } else {
                clearInterval(this.animationInterval);
                this.animationInterval = null;
                this.readyToRemove = true;
            }
        }, 100);
    }

    /**
     * Moves the object to the right by incrementing its x-coordinate based on its speed.
     */
    moveRight() {
        this.x += this.speed;
    };

    /**
     * Moves the object to the left by decrementing its x-coordinate based on its speed.
     */
    moveLeft() {
        this.x -= this.speed;
    }

    /**
     * Initiates a jump by setting the vertical speed of the object.
     */
    jump() {
        this.speedY = 30;
    }

    /**
     * Initiates a double jump, allowing the object to jump again while in the air.
     */
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