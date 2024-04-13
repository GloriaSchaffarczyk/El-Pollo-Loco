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

    setWorld() {
        this.character.world = this;
    }

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

    checkThrowObjects() {
        if (this.keyboard.W && this.character.ownedBombs > 0) {
            this.character.throwBomb();
            let direction = this.character.otherDirection ? 'left' : 'right';
            let bomb = new ThrowableObject(this.character.x + 30, this.character.y + -70, direction);
            this.throwableObjects.push(bomb);
            this.keyboard.W = false;
            this.character.idleTime = 0;
        }
    }

    loadStatusbarIcons() {
        this.statusBarIcons = [
            new StatusbarIcons(15, 15, 'HEALTH'),
            new StatusbarIcons(15, 38, 'CANDY'),
            new StatusbarIcons(15, 62, 'BOMBS'),
        ];
    }

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

    addObjectsToMap(objects) {
        if (objects && Array.isArray(objects)) {
            objects.forEach(object => {
                this.addToMap(object);
            });
        }
    }

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

    flipImage(movableObject) {
        this.ctx.save();
        this.ctx.translate(movableObject.width, 0);
        this.ctx.scale(-1, 1);
        movableObject.x = movableObject.x * -1;
    }

    flipImageBack(movableObject) {
        movableObject.x = movableObject.x * -1;
        this.ctx.restore();
    }

    checkCollisions() {
        if (Array.isArray(this.level.zombies)) {
            this.level.zombies.forEach((zombie) => {
                if (this.character.isColliding(zombie) && !this.character.isAboveGround()) {
                    this.character.enemyHit();
                    this.statusBar[0].setPercentage(this.character.energy);
                }
            });
        }

        if (Array.isArray(this.level.monsters)) {
            this.level.monsters.forEach((monster) => {
                if (this.character.isColliding(monster) && !this.character.isAboveGround()) {
                    this.character.enemyHit();
                    this.statusBar[0].setPercentage(this.character.energy);
                }
            });
        }

        if (Array.isArray(this.level.endboss)) {
            this.level.endboss.forEach((endboss) => {
                if (this.character.isColliding(endboss)) {
                    this.character.endbossHit();
                    this.statusBar[0].setPercentage(this.character.energy);
                }
            });
        }

        this.throwableObjects.forEach((bomb) => {
            if (!bomb.hitEnemy) {
                this.level.zombies.forEach((zombie) => {
                    if (bomb.isColliding(zombie)) {
                        zombie.enemyHitByBomb();
                        bomb.hitEnemy = true;
                        sounds.zombieDyingSound.play();
                        sounds.bombExplosionSound.play();
                    }
                });

                this.level.monsters.forEach((monster) => {
                    if (bomb.isColliding(monster)) {
                        monster.enemyHitByBomb();
                        bomb.hitEnemy = true;
                        sounds.monsterDyingSound.play();
                        sounds.bombExplosionSound.play();
                    }
                });

                if (Array.isArray(this.level.endboss)) {
                    this.level.endboss.forEach((endboss) => {
                        if (bomb.isColliding(endboss)) {
                            endboss.endbossHitByBomb();
                            bomb.hitEnemy = true;
                            this.statusBar[3].setPercentage(endboss.energy);
                            sounds.bombExplosionSound.play();
                        }
                    });
                }
            }
        });
    }

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

    removeObjects() {
        this.level.zombies = this.level.zombies.filter(zombie => !zombie.readyToRemove);
        this.level.monsters = this.level.monsters.filter(monster => !monster.readyToRemove);
        this.throwableObjects = this.throwableObjects.filter(bomb => !bomb.isExploded);
        this.level.candy = this.level.candy.filter(candy => !candy.readyToRemove);
        this.level.bombs = this.level.bombs.filter(bomb => !bomb.readyToRemove);
    }

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

    triggerEnemyAttack() {
        this.level.endboss.forEach(endboss => {
            if (this.character.x > 4640 && !endboss.characterIsCloseToEndboss) {
                endboss.characterIsCloseToEndboss = true;
                this.statusBar.push(new StatusbarEndboss());
                this.statusBarIcons.push(new StatusbarIcons(480, 22, 'ENDBOSS'));
            }
        });
    }
}