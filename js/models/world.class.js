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
    candy;
    bombs;

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
        this.character.world = this; // wird nur an den Character übergeben
        // nur Character muss nach rechts und links gesteuert werden
    }

    run() {
        setInterval(() => {
            this.checkCollisions();
            this.checkThrowObjects();
        }, 180)
    }

    checkThrowObjects() {
        if (this.keyboard.W) {
            let direction = this.character.otherDirection ? 'left' : 'right';
            let bomb = new ThrowableObject(this.character.x + 90, this.character.y + -70, direction);
            this.throwableObjects.push(bomb);
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

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x, 0); // Kamera wird nach links verschoben
        this.addObjectsToMap(this.level.backgroundObjects);
        this.addObjectsToMap(this.level.candy);
        this.addObjectsToMap(this.level.bombs);
    
        this.ctx.translate(-this.camera_x, 0); // backwards
        this.ctx.translate(this.camera_x, 0); //forwards
    
        this.addObjectsToMap(this.level.clouds);
        this.addToMap(this.character);
        this.addObjectsToMap(this.level.zombies);  // Zombies werden eingefügt
        this.addObjectsToMap(this.level.monsters); // Monster werden eingefügt
        this.addObjectsToMap(this.throwableObjects);
        this.addObjectsToMap(this.level.endboss);
    
        this.ctx.translate(-this.camera_x, 0); // Kamera wird zurückgesetzt
    
        // Zeichnen Sie jede Statusbar einzeln
        this.statusBar.forEach(statusbar => {
            this.addToMap(statusbar);
        });
        if (this.statusBarIcons) {
            this.statusBarIcons.forEach(icon => {
                this.addToMap(icon);
            });
        }
    
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
            this.level.zombies.forEach((zombie) => {
                if (bomb.isColliding(zombie)) {
                    zombie.enemyHitByBomb();
                    console.log('Zombie hit by bomb');
                }
            });

            this.level.monsters.forEach((monster) => {
                if (bomb.isColliding(monster)) {
                    monster.enemyHitByBomb();
                    console.log('Monster hit by bomb');
                }
            });

            this.level.endboss.forEach((endboss) => {
                if (bomb.isColliding(endboss)) {
                    endboss.enemyHitByBomb();
                    console.log('Endboss hit by bomb');
                }
            });
        });
    }

}


// canvas.requestFullscreen für die Fullscreen-Anzeige 