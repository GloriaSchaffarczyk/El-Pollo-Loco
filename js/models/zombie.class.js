class Zombie extends MovableObject {
    y = 305;
    height = 80;
    width = 80;
    speed = 0.10;
    IMAGES_WALKING = [
        '../img2/3_enemies/zombie/1_walk/zombie_walk_01.png',
        '../img2/3_enemies/zombie/1_walk/zombie_walk_02.png',
        '../img2/3_enemies/zombie/1_walk/zombie_walk_03.png',
        '../img2/3_enemies/zombie/1_walk/zombie_walk_04.png',
        '../img2/3_enemies/zombie/1_walk/zombie_walk_05.png',
        '../img2/3_enemies/zombie/1_walk/zombie_walk_06.png',
    ];

    constructor() {
        
        super().loadImage('../img2/3_enemies/zombie/1_walk/zombie_walk_01.png');
        this.loadImages(this.IMAGES_WALKING);
        this.x = 270 + Math.random() * 500;
        this.animate();
    }

    animate() {
        setInterval(() => {
            let i = this.currentImage % this.IMAGES_WALKING.length;
            let path = this.IMAGES_WALKING[i];
            this.img = this.imageCache[path];
            this.currentImage++
        }, 500);
        this.moveLeft();
    }
}