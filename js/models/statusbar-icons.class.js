class StatusbarIcons extends DrawableObject {
    icons;
    category;

    ICON_HEALTH = 'img2/7_statusbars/3_icons/health_02.png';
    ICON_CANDY = 'img2/7_statusbars/3_icons/candy_02.png';
    ICON_BOMBS = 'img2/7_statusbars/3_icons/bomb_02.png';
    ICON_ENDBOSS = 'img2/7_statusbars/3_icons/skull.png';

    constructor(x, y, icons) {
        super();
        this.x = x;
        this.y = y;
        this.width = 32;
        this.height = 32;
        this.setType(icons); // Setzt das entsprechende Icon basierend auf dem übergebenen Typ
    }

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
