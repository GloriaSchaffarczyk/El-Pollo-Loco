class Level {
    zombies;
    monsters;
    clouds;
    backgroundObjects;
    level_end_x = 2720;

    constructor(zombies, monsters, clouds, backgroundObjects) {
        this.zombies = zombies;
        this.monsters = monsters;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
    }
}