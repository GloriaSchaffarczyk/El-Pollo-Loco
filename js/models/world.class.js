class World {
    character = new Character(); 
    // wenn wir auf die Variablen aus dieser Klasse zugreifen wollen, brauchen wir "this"
    zombies = LEVEL1.zombies;
    monsters = LEVEL1.monsters;
    clouds = LEVEL1.clouds;
    backgroundObjects = LEVEL1.backgroundObjects;
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
    }

    setWorld() {
        this.character.world = this; // wird nur an den Character übergeben
        // nur Character muss nach rechts und links gesteuert werden
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x, 0); // Kamera wird nach links verschoben
        this.addObjectsToMap(this.backgroundObjects);
        this.addObjectsToMap(this.clouds);
        this.addToMap(this.character); 
        this.addObjectsToMap(this.zombies);
        this.addObjectsToMap(this.monsters); // Monster werden eingefügt

        this.ctx.translate(-this.camera_x, 0); // Kamera wird zurückgesetzt

        requestAnimationFrame(() => this.draw()); 
    }

    addObjectsToMap(objects) {
        objects.forEach(object => {
            this.addToMap(object);
        }); 
    }

    addToMap(movableObject) {
        if(movableObject.otherDirection) { 
            this.ctx.save();
            this.ctx.translate(movableObject.width, 0); 
            this.ctx.scale(-1, 1); 
            movableObject.x = movableObject.x * -1;
        }
        this.ctx.drawImage(movableObject.img, movableObject.x, movableObject.y, movableObject.width, movableObject.height); 
        if(movableObject.otherDirection) { 
            movableObject.x = movableObject.x * -1;
            this.ctx.restore();
        }
    }
    
}