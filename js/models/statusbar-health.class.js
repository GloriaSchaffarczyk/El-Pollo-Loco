class StatusbarHealth extends DrawableObject {
    IMAGES_HEALTH = [
        'img2/7_statusbars/1_statusbar/2_statusbar_health/statusbar-health_01.png',
        'img2/7_statusbars/1_statusbar/2_statusbar_health/statusbar-health_02.png',
        'img2/7_statusbars/1_statusbar/2_statusbar_health/statusbar-health_03.png',
        'img2/7_statusbars/1_statusbar/2_statusbar_health/statusbar-health_04.png',
        'img2/7_statusbars/1_statusbar/2_statusbar_health/statusbar-health_05.png',
        'img2/7_statusbars/1_statusbar/2_statusbar_health/statusbar-health_06.png',
    ];
    percentage = 100;

    constructor() {
        super().loadImage('img2/7_statusbars/1_statusbar/2_statusbar_health/statusbar-health_01.png');
        this.loadImages(this.IMAGES_HEALTH);
        this.x = 20;
        this.y = 10;
        this.width = 150;
        this.height = 35;
        this.setPercentage(100);
    }

    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES_HEALTH[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    resolveImageIndex() {
        if (this.percentage == 100) {
            return 5;
        } else if (this.percentage > 80) {
            return 4;
        } else if (this.percentage > 60) {
            return 3;
        } else if (this.percentage > 40) {
            return 2;
        } else if (this.percentage > 20) {
            return 1;
        } else {
            return 0;
        }
    }
}