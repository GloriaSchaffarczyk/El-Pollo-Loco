class Level {
    zombies = [];
    monsters = [];
    endboss;
    clouds = [];
    backgroundObjects = [];
    candy = [];
    bombs = [];
    level_end_x = 5720;

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
            let zombiesToAdd = 7 - this.zombies.length;
            if (zombiesToAdd > 0) {
                this.generateZombies(zombiesToAdd);
            }
    
            let monstersToAdd = 7 - this.monsters.length;
            if (monstersToAdd > 0) {
                this.generateMonsters(monstersToAdd);
            }
        }, 10000);
    }    

    spawnCloudsPeriodically() {
        setInterval(() => {
            this.clouds.push(new Cloud());
        }, 100000);
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
