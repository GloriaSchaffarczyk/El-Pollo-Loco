class World {
    character = new Character(); 
    // wenn wir auf die Variablen aus dieser Klasse zugreifen wollen, brauchen wir "this"
    enemies = [
        new Chicken(),
        new Chicken(),
        new Chicken(),
    ];
    clouds =  [
        new Cloud()
    ];
    backgroundObjects = [
        new BackgroundObject('../img2/5_background/layers/cemetary_background_night.png', 0, 0),
        new BackgroundObject('../img2/5_background/layers/3_third_layer/cemetary_thirdlayer_night.png', 0, 0),
        new BackgroundObject('../img2/5_background/layers/2_second_layer/cemetary_secondlayer_night.png', 0, 0),
        new BackgroundObject('../img2/5_background/layers/1_first_layer/cemetary_firstlayer_night.png', 0, 0)
    ];
    canvas;
    ctx;

    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.draw();
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.addObjectsToMap(this.backgroundObjects);
        this.addObjectsToMap(this.clouds);
        this.addToMap(this.character); 
        this.addObjectsToMap(this.enemies);

        requestAnimationFrame(() => this.draw()); 
    }

    addObjectsToMap(objects) {
        objects.forEach(object => {
            this.addToMap(object);
        }); 
    }

    addToMap(movableObject) {
        this.ctx.drawImage(movableObject.img, movableObject.x, movableObject.y, movableObject.width, movableObject.height);
    }
}