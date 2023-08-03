class World {
    character = new Character(); 
    // wenn wir auf die Variablen aus dieser Klasse zugreifen wollen, brauchen wir "this"
    enemies = [
        new Chicken(),
        new Chicken(),
        new Chicken(),
    ];
    ctx;

    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.draw();
    }

    draw() {
        this.ctx.drawImage(this.character.img, this.character.x, this.character.y, this.character.width, this.character.height); 
        // (image, x-Koordinate, y-Koordinate, Breite des Bildes, Höhe des Bildes, )
    }
}