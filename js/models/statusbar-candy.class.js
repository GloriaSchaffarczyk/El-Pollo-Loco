class StatusbarCandy extends DrawableObject {
    IMAGES_CANDY = [
        'img2/7_statusbars/1_statusbar/1_statusbar_candy/statusbar-candy_01.png',
        'img2/7_statusbars/1_statusbar/1_statusbar_candy/statusbar-candy_02.png',
        'img2/7_statusbars/1_statusbar/1_statusbar_candy/statusbar-candy_03.png',
        'img2/7_statusbars/1_statusbar/1_statusbar_candy/statusbar-candy_04.png',
        'img2/7_statusbars/1_statusbar/1_statusbar_candy/statusbar-candy_05.png',
        'img2/7_statusbars/1_statusbar/1_statusbar_candy/statusbar-candy_06.png',
    ];

    percentage = 0; 

    constructor() {
        super().loadImage('img2/7_statusbars/1_statusbar/1_statusbar_candy/statusbar-candy_01.png');
        console.log('StatusBar Candy constructor called');
        this.loadImages(this.IMAGES_CANDY);
        this.x = 20; 
        this.y = 35;
        this.width = 150;
        this.height = 35;
        this.setPercentage(0); // müssen wir setzen
    }

    setPercentage(percentage) {
        console.log(`setPercentage called with value: ${percentage}`);
        this.percentage = percentage;
        let path = this.IMAGES_CANDY[this.resolveImageIndex()];
        this.img = this.imageCache[path];
        console.log(`Image set to: ${path}`);
    }

    resolveImageIndex() {
        console.log(`resolveImageIndex called with percentage: ${this.percentage}`);
        if (this.percentage == 100) {
            return 5;
        } else if (this.percentage >= 80) {
            return 4;
        } else if (this.percentage >= 60) {
            return 3;
        } else if (this.percentage >= 40) {
            return 2;
        } else if (this.percentage >= 20) {
            return 1;
        } else {
            return 0;
        }
    }
}