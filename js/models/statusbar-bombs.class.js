class StatusbarBombs extends DrawableObject {
    IMAGES_BOMBS = [
        'img2/7_statusbars/1_statusbar/3_statusbar_bombs/statusbar-bombs_01.png',
        'img2/7_statusbars/1_statusbar/3_statusbar_bombs/statusbar-bombs_02.png',
        'img2/7_statusbars/1_statusbar/3_statusbar_bombs/statusbar-bombs_03.png',
        'img2/7_statusbars/1_statusbar/3_statusbar_bombs/statusbar-bombs_04.png',
        'img2/7_statusbars/1_statusbar/3_statusbar_bombs/statusbar-bombs_05.png',
        'img2/7_statusbars/1_statusbar/3_statusbar_bombs/statusbar-bombs_06.png',
    ];

    percentage = 0; // 100% für Gesundheit etc.

    constructor() {
        super().loadImage('img2/7_statusbars/1_statusbar/3_statusbar_bombs/statusbar-bombs_01.png');
        console.log('StatusBar Candy constructor called');
        this.loadImages(this.IMAGES_BOMBS);
        this.x = 20; 
        this.y = 60;
        this.width = 150;
        this.height = 35;
        this.setPercentage(100); // müssen wir setzen
    }

    setPercentage(percentage) {
        console.log(`setPercentage called with value: ${percentage}`);
        this.percentage = percentage;
        let path = this.IMAGES_BOMBS[this.resolveImageIndex()];
        this.img = this.imageCache[path];
        console.log(`Image set to: ${path}`);
    }

    resolveImageIndex() {
        console.log(`resolveImageIndex called with percentage: ${this.percentage}`);
        if (this.percentage == 100) {
            return 0;
        } else if (this.percentage > 80) {
            return 1;
        } else if (this.percentage > 60) {
            return 2;
        } else if (this.percentage > 40) {
            return 3;
        } else if (this.percentage > 20) {
            return 4;
        } else {
            return 5;
        }
    }
}