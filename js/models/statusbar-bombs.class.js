class StatusbarBombs extends DrawableObject {
    IMAGES_BOMBS = [
        'img2/7_statusbars/1_statusbar/3_statusbar_bombs/statusbar-bombs_01.png',
        'img2/7_statusbars/1_statusbar/3_statusbar_bombs/statusbar-bombs_02.png',
        'img2/7_statusbars/1_statusbar/3_statusbar_bombs/statusbar-bombs_03.png',
        'img2/7_statusbars/1_statusbar/3_statusbar_bombs/statusbar-bombs_04.png',
        'img2/7_statusbars/1_statusbar/3_statusbar_bombs/statusbar-bombs_05.png',
        'img2/7_statusbars/1_statusbar/3_statusbar_bombs/statusbar-bombs_06.png',
    ];
    percentage = 0;

    /**
     * Constructs the status bar for bombs, displaying the number of bombs available as an image based on a percentage.
     * 
     */
    constructor() {
        super().loadImage('img2/7_statusbars/1_statusbar/3_statusbar_bombs/statusbar-bombs_01.png');
        this.loadImages(this.IMAGES_BOMBS);
        this.x = 20;
        this.y = 60;
        this.width = 150;
        this.height = 35;
        this.setPercentage(0);
    }

    /**
     * Sets the percentage of bombs available and updates the status bar image accordingly.
     * @param {number} percentage - The current percentage of bombs available.
     */
    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES_BOMBS[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    /**
     * Determines the index of the image to display based on the current percentage of bombs available.
     * @returns {number} The index of the image in the IMAGES_BOMBS array.
     */
    resolveImageIndex() {
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