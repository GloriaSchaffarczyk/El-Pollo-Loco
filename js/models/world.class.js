class World {
    character = new Character();
    // wenn wir auf die Variablen aus dieser Klasse zugreifen wollen, brauchen wir "this"
    level = LEVEL1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.checkCollisions();
    }

    setWorld() {
        this.character.world = this; // wird nur an den Character übergeben
        // nur Character muss nach rechts und links gesteuert werden
    }

    checkCollisions() {
        setInterval(() => {
            // Überprüfung der Kollisionen mit Zombies
            this.level.zombies.forEach((zombie) => {
                if (this.character.isColliding(zombie)) {
                    console.log('is colliding with zombie', zombie);
                }
            });
    
            // Überprüfung der Kollisionen mit Monstern
            this.level.monsters.forEach((monster) => {
                if (this.character.isColliding(monster)) {
                    console.log('is colliding with monster', monster);
                }
            });
        }, 1000)
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x, 0); // Kamera wird nach links verschoben
        this.addObjectsToMap(this.level.backgroundObjects);
        this.addObjectsToMap(this.level.clouds);
        this.addToMap(this.character);
        this.addObjectsToMap(this.level.zombies);
        this.addObjectsToMap(this.level.monsters); // Monster werden eingefügt

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

}