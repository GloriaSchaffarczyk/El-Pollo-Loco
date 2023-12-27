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
            console.log(`Image loaded from path: ${path}`);
            this.imageLoaded = true; // Setzen auf true, wenn das Bild geladen ist
        });
        this.img.src = path;
    }

    draw(ctx) {
        console.log(`draw called for image with path: ${this.img.src}`);
        if (this.imageLoaded) { // Zeichnen nur, wenn das Bild geladen ist
            ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        } else {
            console.log('Image not loaded yet, cannot draw.');
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
            img.addEventListener('load', () => {
                console.log(`Image loaded from path: ${path}`);
                this.imageCache[path].imageLoaded = true;
            });
            img.src = path;
            this.imageCache[path] = img;
        });
    }

}