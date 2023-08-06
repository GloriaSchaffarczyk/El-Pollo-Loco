class Cloud extends MovableObject {
    y = 20;
    height = 380;
    width = 480;

    constructor() {
        super().loadImage('../img/5_background/layers/4_clouds/1.png');

        this.x = Math.random() * 500;
    }
}