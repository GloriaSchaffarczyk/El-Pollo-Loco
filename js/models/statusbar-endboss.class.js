class StatusbarEndboss extends DrawableObject {
    IMAGES_STATUSBAR_ENDBOSS = [
        'img/7_statusbars/2_statusbar_endboss/statusbar-endboss_01.png',
        'img/7_statusbars/2_statusbar_endboss/statusbar-endboss_02.png',
        'img/7_statusbars/2_statusbar_endboss/statusbar-endboss_03.png',
        'img/7_statusbars/2_statusbar_endboss/statusbar-endboss_04.png',
        'img/7_statusbars/2_statusbar_endboss/statusbar-endboss_05.png',
        'img/7_statusbars/2_statusbar_endboss/statusbar-endboss_06.png',
    ];
    percentage = 100;

    /**
     * Constructs the status bar for the end boss, displaying the boss's health as an image based on a percentage.
     */
    constructor() {
        super().loadImage('img/7_statusbars/2_statusbar_endboss/statusbar-endboss_01.png');
        this.loadImages(this.IMAGES_STATUSBAR_ENDBOSS);
        this.x = 480;
        this.y = 20;
        this.width = 200;
        this.height = 40;
        this.setPercentage(100);
    }

    /**
     * Sets the percentage of the end boss's health and updates the status bar image accordingly.
     * @param {number} percentage - The current percentage of the end boss's health.
     */
    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES_STATUSBAR_ENDBOSS[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    /**
     * Determines the index of the image to display based on the current percentage of the end boss's health.
     * @returns {number} The index of the image in the IMAGES_STATUSBAR_ENDBOSS array.
     */
    resolveImageIndex() {
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