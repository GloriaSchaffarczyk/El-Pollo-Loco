class StatusbarEndboss extends DrawableObject {
    IMAGES_STATUSBAR_ENDBOSS = [
        'img2/7_statusbars/2_statusbar_endboss/statusbar-endboss_01.png',
        'img2/7_statusbars/2_statusbar_endboss/statusbar-endboss_02.png',
        'img2/7_statusbars/2_statusbar_endboss/statusbar-endboss_03.png',
        'img2/7_statusbars/2_statusbar_endboss/statusbar-endboss_04.png',
        'img2/7_statusbars/2_statusbar_endboss/statusbar-endboss_05.png',
        'img2/7_statusbars/2_statusbar_endboss/statusbar-endboss_06.png',
    ];

    percentage = 100;

    constructor() {
        super().loadImage('img2/7_statusbars/2_statusbar_endboss/statusbar-endboss_01.png');
        console.log('StatusBar Endboss constructor called');
        this.loadImages(this.IMAGES_STATUSBAR_ENDBOSS);
        this.x = 480; 
        this.y = 20;
        this.width = 200;
        this.height = 40;
        this.setPercentage(100); // müssen wir setzen
    }

    setPercentage(percentage) {
        console.log(`setPercentage called with value: ${percentage}`);
        this.percentage = percentage;
        let path = this.IMAGES_STATUSBAR_ENDBOSS[this.resolveImageIndex()];
        this.img = this.imageCache[path];
        console.log(`Image set to: ${path}`);
    }

    resolveImageIndex() {
        console.log(`resolveImageIndex called with percentage: ${this.percentage}`);
        if (this.percentage == 100) {
            return 0;
        } else if (this.percentage >= 80) {
            return 1;
        } else if (this.percentage >= 60) {
            return 2;
        } else if (this.percentage >= 40) {
            return 3;
        } else if (this.percentage >= 20) {
            return 4;
        } else {
            return 5;
        }
    }
}