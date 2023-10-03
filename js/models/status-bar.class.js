class StatusBar extends DrawableObject {
    IMAGES_HEALTH = [
        '../img2/7_statusbars/1_statusbar/2_statusbar_health/statusbar-health_01.png',
        '../img2/7_statusbars/1_statusbar/2_statusbar_health/statusbar-health_02.png',
        '../img2/7_statusbars/1_statusbar/2_statusbar_health/statusbar-health_03.png',
        '../img2/7_statusbars/1_statusbar/2_statusbar_health/statusbar-health_04.png',
        '../img2/7_statusbars/1_statusbar/2_statusbar_health/statusbar-health_05.png',
        '../img2/7_statusbars/1_statusbar/2_statusbar_health/statusbar-health_06.png',
    ];

    percentage = 100;

    constructor() {
        super();
        this.loadImages(this.IMAGES_HEALTH);
        this.x = 1; 
        this.y = 10;
        this.width = 150;
        this.height = 35;
        this.setPercentage(100); // müssen wir setzen
    }

    setPercentage(percentage) {
        this.percentage = percentage; // Zahl zwischen 0 und 5 ermitteln
        let path = this.IMAGES_HEALTH[this.resolveImageIndex()]; // Holt sich den Pfad also Index an der richtigen Stelle
        this.img = this.imageCache[path]; // holt sich das Bild an der jeweiligen Stelle
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