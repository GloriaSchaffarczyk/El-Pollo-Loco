class StatusbarIcons extends DrawableObject {
    icons;
    category;
    ICON_HEALTH = 'img/7_statusbars/3_icons/health_02.png';
    ICON_CANDY = 'img/7_statusbars/3_icons/candy_02.png';
    ICON_BOMBS = 'img/7_statusbars/3_icons/bomb_02.png';
    ICON_ENDBOSS = 'img/7_statusbars/3_icons/skull.png';

    /**
     * Creates an instance of an icon for the status bar.
     * @param {number} x - The x-coordinate where the icon will be positioned on the canvas.
     * @param {number} y - The y-coordinate where the icon will be positioned on the canvas.
     * @param {string} icons - The category of the icon which determines the image used. Valid values are 'HEALTH', 'CANDY', 'BOMBS', 'ENDBOSS'.
     */
    constructor(x, y, icons) {
        super();
        this.x = x;
        this.y = y;
        this.width = 32;
        this.height = 32;
        this.setType(icons);
    }

    /**
     * Sets the type of icon by loading the corresponding image based on the category.
     * @param {string} icons - The category to set the icon type. This determines which image to load.
     */
    setType(icons) {
        if (icons == 'HEALTH') {
            this.loadImage(this.ICON_HEALTH);
        } else if (icons == 'CANDY') {
            this.loadImage(this.ICON_CANDY);
        } else if (icons == 'BOMBS') {
            this.loadImage(this.ICON_BOMBS);
        } else if (icons == 'ENDBOSS') {
            this.loadImage(this.ICON_ENDBOSS);
        }
    }
}
