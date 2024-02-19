class World {
    character = new Character();
    // wenn wir auf die Variablen aus dieser Klasse zugreifen wollen, brauchen wir "this"
    level = LEVEL1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    statusBar = [
        new StatusbarHealth(),
        new StatusbarBombs(),
        new StatusbarCandy()
    ];
    throwableObjects = [];
    statusBarIcons;
    candies = [];
    bombs = [];

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.createCandies();
        this.createBombs();
        this.draw();
        this.setWorld();
        this.run()
        this.loadStatusbarIcons();
    }

    setWorld() {
        this.character.world = this; // wird nur an den Character übergeben
        // nur Character muss nach rechts und links gesteuert werden
    }

    run() {
        setInterval(() => {
            this.checkCollisions();
            this.checkCollisionsCharacterCandy();
            this.checkCollisionsCharacterBombs();
            this.checkThrowObjects();
        }, 180)
    }

    checkThrowObjects() {
        if (this.keyboard.W) {
            this.character.throwBomb(); // Ruft die Bombenwurf-Animation auf
            let direction = this.character.otherDirection ? 'left' : 'right';
            let bomb = new ThrowableObject(this.character.x + 30, this.character.y + -70, direction);
            this.throwableObjects.push(bomb);
            this.keyboard.W = false; // Verhindert, dass die Aktion im nächsten Frame erneut ausgelöst wird
            this.character.idleTime = 0;
        }
    }

    loadStatusbarIcons() {
        this.statusBarIcons = [
            new StatusbarIcons(15, 15, 'HEALTH'),
            new StatusbarIcons(15, 38, 'CANDY'),
            new StatusbarIcons(15, 62, 'BOMBS')
        ];
        console.log("Statusbar Icons loaded:", this.statusBarIcons);
    }

    createCandies() {
        for (let i = 0; i < 20; i++) { // Erstellen von 20 Candies
            this.candies.push(new Candy());
        }
    }

    createBombs() {
        for (let i = 0; i < 20; i++) { // Erstellen von 20 Bombs
            this.bombs.push(new Bombs());
        }
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x, 0); // Kamera wird nach links verschoben
        this.addObjectsToMap(this.level.backgroundObjects);

        this.ctx.translate(-this.camera_x, 0); // backwards
        this.ctx.translate(this.camera_x, 0); //forwards

        this.addObjectsToMap(this.level.clouds);
        this.addToMap(this.character);
        this.addObjectsToMap(this.level.zombies);  
        this.addObjectsToMap(this.level.monsters); 
        this.addObjectsToMap(this.level.endboss);
        this.addObjectsToMap(this.throwableObjects);
        this.candies.forEach(candy => {
            this.addToMap(candy);
        });
        this.bombs.forEach(bomb => {
            this.addToMap(bomb);
        });

        this.ctx.translate(-this.camera_x, 0); // Kamera wird zurückgesetzt

        // for each Statusbar
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
        objects.forEach(object => {
            this.addToMap(object);
        });
    }

    addToMap(movableObject) {
        if (movableObject.otherDirection) {
            this.flipImage(movableObject);
        }

        movableObject.draw(this.ctx);
        movableObject.drawFrame(this.ctx);
        movableObject.drawFrameBlue(this.ctx);

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
        this.level.zombies.forEach((zombie) => {
            if (this.character.isColliding(zombie)) {
                this.character.enemyHit();
                this.statusBar[0].setPercentage(this.character.energy)
                console.log('is colliding and loosing energy', this.character.energy); 
            }
        });

        this.level.monsters.forEach((monster) => {
            if (this.character.isColliding(monster)) {
                this.character.enemyHit();
                this.statusBar[0].setPercentage(this.character.energy)
                console.log('is colliding and loosing energy', this.character.energy);
            }
        });

        this.level.endboss.forEach((endboss) => {
            if (this.character.isColliding(endboss)) {
                console.log('Checking collision with endboss');
                this.character.endbossHit();
                this.statusBar[0].setPercentage(this.character.energy)
                console.log('is colliding with endboss', this.character.energy);
            }
        });

        this.throwableObjects.forEach((bomb) => {
            if (!bomb.hitEnemy) {
                this.level.zombies.forEach((zombie) => {
                    if (bomb.isColliding(zombie)) {
                        zombie.enemyHitByBomb();
                        bomb.hitEnemy = true; 
                        zombie.isDead();
                        console.log('Zombie hit by bomb');
                    }
                });

                this.level.monsters.forEach((monster) => {
                    if (bomb.isColliding(monster)) {
                        monster.enemyHitByBomb();
                        bomb.hitEnemy = true;
                        console.log('Monster hit by bomb');
                    }
                });

                this.level.endboss.forEach((endboss) => {
                    if (bomb.isColliding(endboss)) {
                        endboss.endbossHitByBomb();
                        bomb.hitEnemy = true;
                        console.log('Endboss hit by bomb');
                    }
                });
            }
        });
    }

    checkCollisionsCharacterCandy() {
        this.candies.forEach((candy) => {
            if (this.character.isColliding(candy)) {
                console.log(`Character kollidiert mit Candy`);
                candy.readyToRemove = true;
            }
        });
    }

    checkCollisionsCharacterBombs() {
        this.bombs.forEach((bomb) => {
            if (this.character.isColliding(bomb)) {
                console.log(`Character kollidiert mit Bombe`);
                bomb.readyToRemove = true;
            }
        });
    }
    
    removeObjects() {
        this.level.zombies = this.level.zombies.filter(zombie => !zombie.readyToRemove);
        this.level.monsters = this.level.monsters.filter(monster => !monster.readyToRemove);
        this.level.endboss = this.level.endboss.filter(boss => !boss.readyToRemove);
        this.throwableObjects = this.throwableObjects.filter(bomb => !bomb.isExploded);
        this.candies = this.candies.filter(candy => !candy.readyToRemove);
        this.bombs = this.bombs.filter(bomb => !bomb.readyToRemove);
    }    
}


// canvas.requestFullscreen für die Fullscreen-Anzeige 