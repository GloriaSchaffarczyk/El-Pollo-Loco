class Cloud extends MovableObject {
    y = 20;
    height = 380;
    width = 780;

    constructor() {
        super().loadImage('../img2/5_background/layers/4_clouds/clouds_01.png');

        this.x = Math.random() * 500;
    }
}