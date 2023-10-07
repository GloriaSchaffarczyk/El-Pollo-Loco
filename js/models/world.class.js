class World {
    character = new Character();
    // wenn wir auf die Variablen aus dieser Klasse zugreifen wollen, brauchen wir "this"
    level = LEVEL1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    statusBar = new StatusBar();
    throwableObjects = [];

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run()
    }

    setWorld() {
        this.character.world = this; // wird nur an den Character übergeben
        // nur Character muss nach rechts und links gesteuert werden
    }

    run() {
        setInterval(() => {
            this.checkCollisions();
            this.checkThrowObjects();
        }, 500)
    }

    checkThrowObjects() {
        if (this.keyboard.W) {
            let bomb = new ThrowableObject(this.character.x + 90, this.character.y + -70);
            this.throwableObjects.push(bomb);
        }
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x, 0); // Kamera wird nach links verschoben
        this.addObjectsToMap(this.level.backgroundObjects);

        this.ctx.translate(-this.camera_x, 0); // backwards
        this.addToMap(this.statusBar);
        this.ctx.translate(this.camera_x, 0); //forwards

        this.addObjectsToMap(this.level.clouds);
        this.addToMap(this.character);
        this.addObjectsToMap(this.level.zombies);
        this.addObjectsToMap(this.level.monsters); // Monster werden eingefügt
        this.addObjectsToMap(this.throwableObjects);
        this.addObjectsToMap(this.level.endboss);



        this.ctx.translate(-this.camera_x, 0); // Kamera wird zurückgesetzt

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
        // check collisions
        this.level.zombies.forEach((zombie) => {
            if (this.character.isColliding(zombie)) {
                this.character.enemyHit();
                this.statusBar.setPercentage(this.character.energy)
                console.log('is colliding and loosing energy', this.character.energy);
            }
        });

        this.level.monsters.forEach((monster) => {
            if (this.character.isColliding(monster)) {
                this.character.enemyHit();
                this.statusBar.setPercentage(this.character.energy)
                console.log('is colliding and loosing energy', this.character.energy);
            }
        });

        this.level.endboss.forEach((endboss) => {
            if (this.character.isColliding(endboss)) {
                console.log('Checking collision with endboss');
                this.character.endbossHit();
                this.statusBar.setPercentage(this.character.energy)
                console.log('is colliding with endboss', this.character.energy);
            }
        });
    }

}


// canvas.requestFullscreen für die Fullscreen-Anzeige 