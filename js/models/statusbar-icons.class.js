class StatusbarIcons extends DrawableObject {
    icons;
    category;

    ICON_HEALTH = 'img2/7_statusbars/3_icons/health.png';
    ICON_CANDY = 'img2/7_statusbars/3_icons/candy.png';
    ICON_BOMBS = 'img2/7_statusbars/3_icons/bomb.png';

    constructor(x, y, icons) {
        super();
        this.x = x;
        this.y = y;
        this.width = 16;
        this.height = 16;
        this.setType(icons); // Setzt das entsprechende Icon basierend auf dem übergebenen Typ
    }

    setType(icons) {
        if (icons == 'HEALTH') {
            this.loadImage(this.ICON_HEALTH);
        } else if (icons == 'CANDY') {
            this.loadImage(this.ICON_CANDY);
        } else if (icons == 'BOMBS') {
            this.loadImage(this.ICON_BOMBS);
        }
    }
}
