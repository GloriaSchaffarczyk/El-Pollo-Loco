class Cloud extends MovableObject {
    y = 20;
    height = 380;
    width = 780;

    constructor() {
        super().loadImage('../img2/5_background/layers/4_clouds/clouds_01.png');

        this.x = Math.random() * (this.width - 280);
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.x -= 0.15; //Pixel werden abgezogen
        }, 1000 / 60); // 60 fps
    }
}