class World {
    character = new Character(); 
    // wenn wir auf die Variablen aus dieser Klasse zugreifen wollen, brauchen wir "this"
    zombies = [
        new Zombie(),
        new Zombie(),
        new Zombie(),
    ];
    monsters = [
        new Monster(),
        new Monster(),
        new Monster(),
    ]
    clouds =  [
        new Cloud()
    ];
    backgroundObjects = [
        new BackgroundObject('../img2/5_background/layers/cemetary_background_night_02.png', -853, 0),
        new BackgroundObject('../img2/5_background/layers/3_third_layer/cemetary_thirdlayer_night_02.png', -853, 0),
        new BackgroundObject('../img2/5_background/layers/2_second_layer/cemetary_secondlayer_night_02.png', -853, 0),
        new BackgroundObject('../img2/5_background/layers/1_first_layer/cemetary_firstlayer_night_02.png', -853, 0),
        new BackgroundObject('../img2/5_background/layers/cemetary_background_night.png', 0, 0),
        new BackgroundObject('../img2/5_background/layers/3_third_layer/cemetary_thirdlayer_night.png', 0, 0),
        new BackgroundObject('../img2/5_background/layers/2_second_layer/cemetary_secondlayer_night.png', 0, 0),
        new BackgroundObject('../img2/5_background/layers/1_first_layer/cemetary_firstlayer_night.png', 0, 0),
        new BackgroundObject('../img2/5_background/layers/cemetary_background_night_02.png', 853, 0),
        new BackgroundObject('../img2/5_background/layers/3_third_layer/cemetary_thirdlayer_night_02.png', 853, 0),
        new BackgroundObject('../img2/5_background/layers/2_second_layer/cemetary_secondlayer_night_02.png', 853, 0),
        new BackgroundObject('../img2/5_background/layers/1_first_layer/cemetary_firstlayer_night_02.png', 853, 0),
        new BackgroundObject('../img2/5_background/layers/cemetary_background_night.png', 0, 0),
        new BackgroundObject('../img2/5_background/layers/3_third_layer/cemetary_thirdlayer_night.png', 0, 0),
        new BackgroundObject('../img2/5_background/layers/2_second_layer/cemetary_secondlayer_night.png', 0, 0),
        new BackgroundObject('../img2/5_background/layers/1_first_layer/cemetary_firstlayer_night.png', 0, 0),
        new BackgroundObject('../img2/5_background/layers/cemetary_background_night_02.png', 853, 0),
        new BackgroundObject('../img2/5_background/layers/3_third_layer/cemetary_thirdlayer_night_02.png', 853, 0),
        new BackgroundObject('../img2/5_background/layers/2_second_layer/cemetary_secondlayer_night_02.png', 853, 0),
        new BackgroundObject('../img2/5_background/layers/1_first_layer/cemetary_firstlayer_night_02.png', 853, 0),
    ];
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
        this.addObjectsToMap(this.monsters);

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