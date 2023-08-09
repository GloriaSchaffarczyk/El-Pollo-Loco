class MovableObject {
    x = 40;
    y = 285;
    img;
    height = 100;
    width = 100;
    imageCache = {};

    loadImage(path) {
        this.img = new Image();// this.img = document.getElementById('image'); <img id="image" src="http://>
        this.img.src = path;
    }

    /**
     * 
     * @param {Array} arr - ['img/image1.png', 'img/image2.png', 'img/image3.png', ...] 
     */
    loadImages(arr) {
        // Gehe durch alle Bildpfade im Array 'arr'
        arr.forEach((path) => {
            // Erstelle ein neues Bild
            let img = new Image();
            // Lade das Bild von dem angegebenen Pfad
            img.src = path;
            // Speichere den Pfad in einer Liste namens 'imageCache', sowohl als Schlüssel als auch als Wert
            this.imageCache[path] = img; // hier muss image und nicht pfad reingeladen werden
        });
    }

    moveRight() {
        console.log('Moving right');
    };

    moveLeft() {

    }
}