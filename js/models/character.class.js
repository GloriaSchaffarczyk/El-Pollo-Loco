class Character extends MovableObject {
    IMAGES_IDLE = [
        '../img2/2_character/1_idle/idle/biker_idle_01.png',
        '../img2/2_character/1_idle/idle/biker_idle_02.png',
        '../img2/2_character/1_idle/idle/biker_idle_03.png',
        '../img2/2_character/1_idle/idle/biker_idle_04.png',
    ]
    world;

    constructor() {
        super().loadImage('../img2/2_character/1_idle/idle/biker_idle_01.png')
        this.loadImages(this.IMAGES_IDLE);
        this.animate();
    }

    animate() {
        setInterval(() => {
            let i = this.currentImage % this.IMAGES_IDLE.length; // Index wird nie so groß wie die Anzahl der Bilder im Array, also Array.Länge -1
            // durch Modulo steht hier i = 0, 1, 2, 3, 0, 1, 2, 3, 0,...
            let path = this.IMAGES_IDLE[i];
            this.img = this.imageCache[path];
            this.currentImage++
        }, 430);
    }

    jump() {
    }
}