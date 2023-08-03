class MovableObject {
    x = 120;
    y = 100;
    img;
    height = 300;
    width = 200;

    loadImage(path) {
        this.img = new Image();// this.img = document.getElementById('image'); <img id="image" src="http://>
        this.img.src = path;
    }

    moveRight() {
        console.log('Moving right');
    };

    moveLeft() {

    }
}