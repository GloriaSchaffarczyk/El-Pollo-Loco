class Cloud extends MovableObject {
    constructor() {
        super().loadImage('../img/5_background/layers/4_clouds/1.png');

        this.x = Math.random() * 500;
        this.y = 0;
        this.height = 680;
        this.width = 680;
    }
}