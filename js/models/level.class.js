class Level {
    zombies;
    monsters;
    endboss;
    clouds;
    backgroundObjects;
    level_end_x = 5720;


    constructor(zombies, monsters, endboss, clouds, backgroundObjects) {
        this.zombies = zombies;
        this.monsters = monsters;
        this.endboss = endboss;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
        this.updateLevel();
    }

    updateLevel() {
        setInterval(() => {
            this.keepGenerateBackground();
        }, 1000 / 25);
    }

    /**
     * This function checks if there needs to be a new background depending on the distance the character travelled to the right in relation to the already renderd background
     * 
     */
    keepGenerateBackground() {
        if (world && this.floor[this.floor.length - 1].x - world.character.x < 800) {
            this.expandFloor(true);
        }
        if (world && this.backgroundStartX < world.character.x || world.character.x + 720 > this.backgroundStartX) {
            this.expandBackground();
        }
    }
}