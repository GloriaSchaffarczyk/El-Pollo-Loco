class Level {
    zombies;
    monsters;
    endboss;
    clouds;
    backgroundObjects;
    level_end_x = 2720;


    constructor(zombies, monsters, endboss, clouds, backgroundObjects) {
        this.zombies = zombies;
        this.monsters = monsters;
        this.endboss = endboss;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
    }
}