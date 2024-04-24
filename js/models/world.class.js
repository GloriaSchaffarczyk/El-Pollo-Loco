class World {
    character = new Character();
    level = LEVEL1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    statusBar = [
        new StatusbarHealth(),
        new StatusbarBombs(),
        new StatusbarCandy(),
    ];
    throwableObjects = [];
    statusBarIcons;

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run()
        this.loadStatusbarIcons();
    }

    /**
     * Sets up the initial state and associations needed for the game world.
     */
    setWorld() {
        this.character.world = this;
    }

    /**
     * Starts the game loop, managing continuous game updates.
     */
    run() {
        setInterval(() => {
            this.checkCollisions();
            this.checkCollisionsCharacterCandy();
            this.checkCollisionsCharacterBombs();
            this.checkThrowObjects();
            this.checkJumpOnMonster();
            this.checkJumpOnZombie();
            this.triggerEnemyAttack();
        }, 50)
    }

    /**
     * Handles the logic for throwing objects in the game.
     */
    checkThrowObjects() {
        const now = Date.now();
        if (this.keyboard.W && this.character.ownedBombs > 0 && !this.character.hasDied && !this.character.isThrowingBomb && now - this.character.lastThrown > this.character.throwCooldown) {
            this.character.throwBomb();
            let direction = this.character.otherDirection ? 'left' : 'right';
            let bomb = new ThrowableObject(this.character.x + 30, this.character.y + -70, direction);
            this.throwableObjects.push(bomb);
            this.keyboard.W = false; 
            this.character.lastThrown = now;
            this.character.idleTime = 0;
        }
    }

    /**
     * Loads icons for various statuses like health, candy, and bombs.
     */
    loadStatusbarIcons() {
        this.statusBarIcons = [
            new StatusbarIcons(15, 15, 'HEALTH'),
            new StatusbarIcons(15, 38, 'CANDY'),
            new StatusbarIcons(15, 62, 'BOMBS'),
        ];
    }

    /**
     * Main drawing loop for the game, updating the canvas continuously.
     */
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.backgroundObjects);
        this.ctx.translate(-this.camera_x, 0);
        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.clouds);
        this.addToMap(this.character);
        this.addObjectsToMap(this.level.zombies);
        this.addObjectsToMap(this.level.monsters);
        this.addObjectsToMap(this.level.endboss);
        this.addObjectsToMap(this.throwableObjects);
        this.addObjectsToMap(this.level.candy);
        this.addObjectsToMap(this.level.bombs);
        this.ctx.translate(-this.camera_x, 0);
        this.statusBar.forEach(statusbar => {
            this.addToMap(statusbar);
        });
        if (this.statusBarIcons) {
            this.statusBarIcons.forEach(icon => {
                this.addToMap(icon);
            });
        }

        this.removeObjects();
        requestAnimationFrame(() => this.draw());
    }

    /**
     * Adds game objects to the canvas.
     * @param {Array} objects - Game objects to be added to the canvas.
     */
    addObjectsToMap(objects) {
        if (objects && Array.isArray(objects)) {
            objects.forEach(object => {
                this.addToMap(object);
            });
        }
    }

    /**
     * Adds a movable object to the game canvas, handling direction for proper rendering.
     * @param {MovableObject} movableObject - The object to be drawn on the canvas.
     */
    addToMap(movableObject) {
        if (movableObject.otherDirection) {
            this.flipImage(movableObject);
        }

        movableObject.draw(this.ctx);
        // movableObject.drawFrame(this.ctx);
        // movableObject.drawFrameBlue(this.ctx);

        if (movableObject.otherDirection) {
            this.flipImageBack(movableObject);
        }
    }

    /**
     * Flips the image of a movable object horizontally on the canvas.
     * @param {MovableObject} movableObject - The object whose image is to be flipped.
     */
    flipImage(movableObject) {
        this.ctx.save();
        this.ctx.translate(movableObject.width, 0);
        this.ctx.scale(-1, 1);
        movableObject.x = movableObject.x * -1;
    }

    /**
     * Restores the original orientation of a flipped image of a movable object on the canvas.
     * @param {MovableObject} movableObject - The object whose image was flipped and needs to be restored.
     */
    flipImageBack(movableObject) {
        movableObject.x = movableObject.x * -1;
        this.ctx.restore();
    }

    /**
     * Handles object collisions to update game state or interactions.
     */
    checkCollisions() {
        this.checkCollisionsWithZombies();
        this.checkCollisionsWithMonsters();
        this.checkCollisionsWithEndboss();
        this.checkCollisionsWithBombs();
    }

    /**
     * Checks and handles collisions between the character and zombies.
     */
    checkCollisionsWithZombies() {
        this.level.zombies.forEach(zombie => {
            if (this.character.isColliding(zombie) && !this.character.isAboveGround()) {
                this.character.enemyHit();
                this.updateHealthStatusBar();
                sounds.hurtSound.play();
            }
        });
    }

    /**
     * Checks and handles collisions between the character and monsters.
     */
    checkCollisionsWithMonsters() {
        this.level.monsters.forEach(monster => {
            if (this.character.isColliding(monster) && !this.character.isAboveGround()) {
                this.character.enemyHit();
                this.updateHealthStatusBar();
                sounds.hurtSound.play();
            }
        });
    }

    /**
     * Checks and handles collisions between the character and the endboss.
     */
    checkCollisionsWithEndboss() {
        this.level.endboss.forEach(endboss => {
            if (this.character.isColliding(endboss)) {
                this.character.endbossHit();
                this.updateHealthStatusBar();
                sounds.hurtSound.play();
            }
        });
    }

    /**
     * Checks and handles collisions involving throwable bombs.
     */
    checkCollisionsWithBombs() {
        this.throwableObjects.forEach(bomb => {
            this.level.zombies.concat(this.level.monsters, this.level.endboss).forEach(enemy => {
                if (bomb.isColliding(enemy)) {
                    this.handleBombCollision(bomb, enemy);
                }
            });
        });
    }

    /**
     * Handles the effects of a bomb colliding with an enemy.
     * @param {ThrowableObject} bomb - The bomb involved in the collision.
     * @param {MovableObject} enemy - The enemy hit by the bomb.
     */
    handleBombCollision(bomb, enemy) {
        if (!bomb.isExploded) {
            bomb.hitEnemy = true;
            bomb.isExploded = true;
            enemy.enemyHitByBomb();
            this.playExplosionSounds();
            this.updateEndbossStatusBarIfNeeded(enemy);
        }
    }

    /**
     * Plays sounds associated with a bomb explosion.
     */
    playExplosionSounds() {
        sounds.zombieDyingSound.play();
        sounds.bombExplosionSound.play();
    }

    /**
     * Updates the health status bar.
     */
    updateHealthStatusBar() {
        this.statusBar[0].setPercentage(this.character.energy);
    }

    /**
     * Updates the endboss status bar if the enemy is an endboss.
     * @param {MovableObject} enemy - The enemy to check if it's an endboss.
     */
    updateEndbossStatusBarIfNeeded(enemy) {
        if (enemy instanceof Endboss) {
            this.statusBar[3].setPercentage(enemy.energy);
        }
    }

    /**
     * Specific collision checks for character interactions with candy.
     */
    checkCollisionsCharacterCandy() {
        this.level.candy.forEach((candy) => {
            if (this.character.isColliding(candy) && this.character.candy < 100) {
                candy.readyToRemove = true;
                this.character.collectingCandy();
                this.statusBar[2].setPercentage(this.character.candy);
                sounds.collectingCandySound.play();
            }
        });
    }

    /**
     * Specific collision checks for character interactions with bombs.
     */
    checkCollisionsCharacterBombs() {
        this.level.bombs.forEach((bomb) => {
            if (this.character.isColliding(bomb) && this.character.ownedBombs < 100) {
                bomb.readyToRemove = true;
                this.character.collectingBombs();
                this.statusBar[1].setPercentage(this.character.ownedBombs);
                sounds.collectingBombsSound.play();
            }
        });
    }

    /**
     * Cleans up objects that are no longer active in the game world.
     */
    removeObjects() {
        this.level.zombies = this.level.zombies.filter(zombie => !zombie.readyToRemove);
        this.level.monsters = this.level.monsters.filter(monster => !monster.readyToRemove);
        this.throwableObjects = this.throwableObjects.filter(bomb => !bomb.isExploded);
        this.level.candy = this.level.candy.filter(candy => !candy.readyToRemove);
        this.level.bombs = this.level.bombs.filter(bomb => !bomb.readyToRemove);
    }

    /**
     * Checks for special conditions like a character jumping on a zombie.
     */
    checkJumpOnZombie() {
        this.level.zombies.forEach(zombie => {
            if (this.character.isColliding(zombie) && this.character.speedY < 0 && this.character.isAboveGround()) {
                this.character.canDoubleJump = true;
                this.character.doubleJump();
                zombie.enemyHitByBomb();
                sounds.zombieDyingSound.play();
            }
        });
    }

    /**
     * Checks for special conditions like a character jumping on a monster.
     */
    checkJumpOnMonster() {
        this.level.monsters.forEach(monster => {
            if (this.character.isColliding(monster) && this.character.speedY < 0 && this.character.isAboveGround()) {
                this.character.canDoubleJump = true;
                this.character.doubleJump();
                monster.enemyHitByBomb();
                sounds.monsterDyingSound.play();
            }
        });
    }

    /**
     * Triggers enemy attacks based on the proximity of the character.
     */
    triggerEnemyAttack() {
        this.level.endboss.forEach(endboss => {
            if (this.character.x > 4640 && !endboss.characterIsCloseToEndboss) {
                endboss.characterIsCloseToEndboss = true;
                this.statusBar.push(new StatusbarEndboss());
                this.statusBarIcons.push(new StatusbarIcons(480, 22, 'ENDBOSS'));
                sounds.endbossBattleMusic.play();
                sounds.backgroundMusic.pause();
            }
        });
    }
}