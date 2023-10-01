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
        this.img.src = path;
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
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