class MovableObject {
    x = 60;
    y = 160;
    img;
    height = 300;
    width = 150;

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