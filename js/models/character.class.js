class Character extends MovableObject {

    constructor() {
        super().loadImage('../img2/2_character/1_idle/idle/biker_idle_01.png')
        this.loadImages([
            '../img2/2_character/1_idle/idle/biker_idle_01.png',
            '../img2/2_character/1_idle/idle/biker_idle_02.png',
            '../img2/2_character/1_idle/idle/biker_idle_03.png',
            '../img2/2_character/1_idle/idle/biker_idle_04.png',
        ]); // Bilder werden reingegeben
    }

    jump() {
    }
}