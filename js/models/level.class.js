class Level {
    zombies = [];
    monsters = [];
    endboss;
    clouds = [];
    backgroundObjects = [];
    candy = [];
    bombs = [];
    level_end_x = 5720;

    /**
     * Constructs a new Level instance, initializing all elements and actions needed for the level. 
     * This includes setting up the environment, spawning initial game objects like candy, bombs, enemies, and clouds,
     * and scheduling periodic tasks to maintain level dynamics.
     */
    constructor() {
        this.generateCandy();
        this.generateBombs();
        this.generateBackground();
        this.generateInitialEnemies();
        this.generateInitialClouds();
        this.spawnEnemiesIfNeeded();
        this.spawnCloudsPeriodically();
        this.endboss = [new Endboss()];
    }

    /**
     * Generates continous background.
     */
    generateBackground() {
        const layers = [
            { imagePath: 'img2/5_background/layers/cemetary_background_night_02.png', depth: 0 },
            { imagePath: 'img2/5_background/layers/3_third_layer/cemetary_thirdlayer_night_02.png', depth: 0 },
            { imagePath: 'img2/5_background/layers/2_second_layer/cemetary_secondlayer_night_02.png', depth: 0 },
            { imagePath: 'img2/5_background/layers/1_first_layer/cemetary_firstlayer_night_02.png', depth: 0 }
        ];
        const backgroundImageWidth = 854;
        for (let x = -backgroundImageWidth; x < this.level_end_x + backgroundImageWidth; x += backgroundImageWidth) {
            layers.forEach(layer => {
                this.backgroundObjects.push(new BackgroundObject(layer.imagePath, x, layer.depth));
            });
        }
    }

    generateCandy() {
        for (let i = 0; i < 40; i++) {
            this.candy.push(new Candy());
        }
    }

    generateBombs() {
        for (let i = 0; i < 40; i++) {
            this.bombs.push(new Bombs());
        }
    }

    generateInitialEnemies() {
        this.generateZombies(7);
        this.generateMonsters(7);
    }

    generateInitialClouds() {
        this.spawnClouds(2);
    }

    spawnEnemiesIfNeeded() {
        setInterval(() => {
            if (this.zombies.length < 7) {
                this.generateZombies(2 - this.zombies.length);
            }

            if (this.monsters.length < 7) {
                this.generateMonsters(2 - this.monsters.length);
            }
        }, 10000);
    }

    spawnCloudsPeriodically() {
        setInterval(() => {
            this.clouds.push(new Cloud());
        }, 10000);
    }

    generateZombies(count) {
        for (let i = 0; i < count; i++) {
            let zombie = new Zombie();
            this.zombies.push(zombie);
        }
    }

    generateMonsters(count) {
        for (let i = 0; i < count; i++) {
            let monster = new Monster();
            this.monsters.push(monster);
        }
    }

    spawnClouds(count) {
        for (let i = 0; i < count; i++) {
            this.clouds.push(new Cloud());
        }
    }
}
