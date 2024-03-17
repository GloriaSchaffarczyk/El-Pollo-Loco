class DrawableObject {
    x = 40;
    y = 188;
    height = 100;
    width = 100;
    img;
    imageCache = {};
    currentImage = 0;
    imageLoaded = false;


    loadImage(path) {
        this.img = new Image();
        this.img.addEventListener('load', () => {
            this.imageLoaded = true; // Setzen auf true, wenn das Bild geladen ist
        });
        this.img.src = path;
    }

    draw(ctx) {
        if (this.imageLoaded) { // Zeichnen nur, wenn das Bild geladen ist
            ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        } else {   
            console.log('Image not loaded yet, cannot draw.');
        }
    }

    drawFrame(ctx) {
        if (this instanceof Character || this instanceof Zombie || this instanceof Monster || this instanceof Endboss || this instanceof Candy || this instanceof Bombs) {
            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = 'red';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }

    drawFrameBlue(ctx) {
        if (this instanceof Character || this instanceof Zombie || this instanceof Monster || this instanceof Endboss || this instanceof Candy || this instanceof Bombs) {
            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = 'blue'; // Setze die Farbe des Rahmens auf Blau
            // Berechne die Position und Größe des Rahmens basierend auf den Objekteigenschaften und deren Offset
            ctx.rect(
                this.x + (this.offset ? this.offset.left : 0),
                this.y + (this.offset ? this.offset.top : 0),
                this.width - (this.offset ? this.offset.left + this.offset.right : 0),
                this.height - (this.offset ? this.offset.top + this.offset.bottom : 0)
            );
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
            img.addEventListener('load', () => {
                this.imageCache[path].imageLoaded = true;
            });
            img.src = path;
            this.imageCache[path] = img;
        });
    }

}