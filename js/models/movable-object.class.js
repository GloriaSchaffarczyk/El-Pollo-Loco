class MovableObject {
    x = 30;
    y = 70;
    img;
    height = 390;
    width = 190;

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