import { Scene } from "phaser";
import WebFont from "webfontloader";

export default class Preload extends Scene {
    constructor() {
        super({ key: 'Preload' });
    }

    preload() {
        WebFont.load({
            google: {
                families: ["Press Start 2P"]
            }
        });

        this.load.image('wallpaper', './assets/wallpaper.png');
        this.load.image('wallpaper-new', './assets/wallpaper-new.png');
        this.load.spritesheet("hexagons", "./assets/spritesheet.png", {
            frameWidth: 272,
            frameHeight: 298,
        });

    }

    create() {
        this.scene.start('TitleScreen');

        this.anims.create({
            key: "hexagon1",
            frames: [{ key: "hexagons", frame: 4 }],
        });

        this.anims.create({
            key: "randomanim",
            frames: this.anims.generateFrameNumbers("hexagons", {
                start: 0,
                end: 7,
            }),
            repeat: -1
        });
    }
}