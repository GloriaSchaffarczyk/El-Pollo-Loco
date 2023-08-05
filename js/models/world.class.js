class World {
    character = new Character(); 
    // wenn wir auf die Variablen aus dieser Klasse zugreifen wollen, brauchen wir "this"
    enemies = [
        new Chicken(),
        new Chicken(),
        new Chicken(),
    ];
    clouds = new Cloud();
    canvas;
    ctx;

    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.draw();
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.drawImage(this.character.img, this.character.x, this.character.y, this.character.width, this.character.height); 
        this.enemies.forEach(enemy => {
            this.ctx.drawImage(enemy.img, enemy.x, enemy.y, enemy.width, enemy.height);
        }); 
        this.ctx.drawImage(this.clouds.img, this.clouds.x, this.clouds.y, this.clouds.width, this.clouds.height); 
        // (image, x-Koordinate, y-Koordinate, Breite des Bildes, Höhe des Bildes, )

        requestAnimationFrame(() => this.draw()); 
    }
}