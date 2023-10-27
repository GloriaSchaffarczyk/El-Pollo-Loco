class DrawableObject {
    x = 40;
    y = 188;
    height = 100;
    width = 100;
    img;
    imageCache = {};
    currentImage = 0;


    loadImage(path) {
        this.img = new Image();
        this.img.addEventListener('load', () => {
            // Bild ist geladen, jetzt sicher zu zeichnen
            this.imageLoaded = true;
        });
        this.img.src = path;
    }
    
    draw(ctx) {
        if (this.imageLoaded) { // Überprüfe den neuen Flag
            ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        }
    }
    
    
    drawFrame(ctx) {

        if (this instanceof Character || this instanceof Zombie || this instanceof Monster || this instanceof Endboss) {
            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = 'red';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }

 /**
 * 
 * @param {Array} arr - ['img/image1.png', 'img/image2.png', 'img/image3.png', ...] 
 */
    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

}