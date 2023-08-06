class MovableObject {
    x = 40;
    y = 285;
    img;
    height = 100;
    width = 100;

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