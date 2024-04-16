class DrawableObject {
    x = 40;
    y = 188;
    height = 100;
    width = 100;
    img;
    imageCache = {};
    currentImage = 0;
    imageLoaded = false;

    /**
 * Loads an image from a given path and sets it up for rendering.
 * @param {string} path - The path to the image file.
 */
    loadImage(path) {
        this.img = new Image();
        this.img.addEventListener('load', () => {
            this.imageLoaded = true;
        });
        this.img.src = path;
    }

    /**
 * Draws the image on the given canvas context if the image has been loaded.
 * @param {CanvasRenderingContext2D} ctx - The canvas rendering context where the image will be drawn.
 */
    draw(ctx) {
        if (this.imageLoaded) {
            ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        } else {
            // console.log('Image not loaded yet, cannot draw.');
        }
    }

    /**
 * Draws a red frame around the object if it's an instance of certain game entities.
 * @param {CanvasRenderingContext2D} ctx - The canvas rendering context to draw the frame on.
 */
    drawFrame(ctx) {
        if (this instanceof Character || this instanceof Zombie || this instanceof Monster || this instanceof Endboss || this instanceof Candy || this instanceof Bombs) {
            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = 'red';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }

    /**
 * Draws a blue frame around the object, accounting for offsets if they exist, for specific game entities.
 * @param {CanvasRenderingContext2D} ctx - The canvas rendering context to draw the frame on.
 */
    drawFrameBlue(ctx) {
        if (this instanceof Character || this instanceof Zombie || this instanceof Monster || this instanceof Endboss || this instanceof Candy || this instanceof Bombs) {
            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = 'blue';
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