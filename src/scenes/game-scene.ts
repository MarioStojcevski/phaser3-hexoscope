import { Scene } from "phaser";

import HexagonTile from "./../utils/hexagon";

export default class GameScene extends Scene {
    constructor() {
        super({ key: 'GameScene' });
    }

    create() {
        const { width, height } = this.scale;
        this.add.image(width/2, height/2, 'wallpaper');

        const hexagonGroup = this.physics.add.group();

        hexagonGroup.addMultiple([
            new HexagonTile(this, 200, 200, 'data', 'hexagon1'),
            new HexagonTile(this, 280, 200, 'data', 'hexagon1'),
            
            new HexagonTile(this, 600, 200, 'data', 'hexagon1'),
            new HexagonTile(this, 680, 200, 'data', 'hexagon1'),
            new HexagonTile(this, 760, 200, 'data', 'hexagon1'),
            new HexagonTile(this, 840, 200, 'data', 'hexagon1'),
            new HexagonTile(this, 920, 200, 'data', 'hexagon1'),
            
            new HexagonTile(this, 1080, 200, 'data', 'hexagon1'),
            new HexagonTile(this, 1160, 200, 'data', 'hexagon1'),

            new HexagonTile(this, 240, 270, 'data', 'hexagon1'),
            new HexagonTile(this, 320, 270, 'data', 'hexagon1'),
            new HexagonTile(this, 400, 270, 'data', 'hexagon1'),
            new HexagonTile(this, 480, 270, 'data', 'hexagon1'),
            new HexagonTile(this, 560, 270, 'data', 'hexagon1'),
            new HexagonTile(this, 640, 270, 'data', 'hexagon1'),
            new HexagonTile(this, 720, 270, 'data', 'hexagon1'),
            
            new HexagonTile(this, 960, 270, 'data', 'hexagon1'),
            new HexagonTile(this, 1040, 270, 'data', 'hexagon1'),
            new HexagonTile(this, 1120, 270, 'data', 'hexagon1'),

            new HexagonTile(this, 200, 340, 'data', 'hexagon1'),
            new HexagonTile(this, 280, 340, 'data', 'hexagon1'),
            new HexagonTile(this, 360, 340, 'data', 'hexagon1'),
            new HexagonTile(this, 440, 340, 'data', 'hexagon1'),
            new HexagonTile(this, 520, 340, 'data', 'hexagon1'),
            new HexagonTile(this, 600, 340, 'data', 'hexagon1'),
            
            new HexagonTile(this, 1080, 340, 'data', 'hexagon1'),
            new HexagonTile(this, 1160, 340, 'data', 'hexagon1'),

            new HexagonTile(this, 240, 410, 'data', 'hexagon1'),
            new HexagonTile(this, 320, 410, 'data', 'hexagon1'),
            new HexagonTile(this, 400, 410, 'data', 'hexagon1'),
            new HexagonTile(this, 480, 410, 'data', 'hexagon1'),
            new HexagonTile(this, 560, 410, 'data', 'hexagon1'),
            new HexagonTile(this, 640, 410, 'data', 'hexagon1'),
            new HexagonTile(this, 720, 410, 'data', 'hexagon1'),
            new HexagonTile(this, 800, 410, 'data', 'hexagon1'),
            new HexagonTile(this, 880, 410, 'data', 'hexagon1'),
            new HexagonTile(this, 960, 410, 'data', 'hexagon1'),
            new HexagonTile(this, 1040, 410, 'data', 'hexagon1'),
            new HexagonTile(this, 1120, 410, 'data', 'hexagon1'),

            new HexagonTile(this, 200, 480, 'data', 'hexagon1'),
            new HexagonTile(this, 280, 480, 'data', 'hexagon1'),
            new HexagonTile(this, 360, 480, 'data', 'hexagon1'),
            
            new HexagonTile(this, 680, 480, 'data', 'hexagon1'),
            new HexagonTile(this, 760, 480, 'data', 'hexagon1'),
            new HexagonTile(this, 840, 480, 'data', 'hexagon1'),
            new HexagonTile(this, 920, 480, 'data', 'hexagon1'),
            new HexagonTile(this, 1000, 480, 'data', 'hexagon1'),
            new HexagonTile(this, 1080, 480, 'data', 'hexagon1'),
            new HexagonTile(this, 1160, 480, 'data', 'hexagon1'),

            new HexagonTile(this, 240, 550, 'data', 'hexagon1'),
            new HexagonTile(this, 320, 550, 'data', 'hexagon1'),
            new HexagonTile(this, 400, 550, 'data', 'hexagon1'),
            new HexagonTile(this, 480, 550, 'data', 'hexagon1'),
            new HexagonTile(this, 560, 550, 'data', 'hexagon1'),
            new HexagonTile(this, 640, 550, 'data', 'hexagon1'),
            new HexagonTile(this, 720, 550, 'data', 'hexagon1'),
            new HexagonTile(this, 800, 550, 'data', 'hexagon1'),
            new HexagonTile(this, 880, 550, 'data', 'hexagon1'),
            new HexagonTile(this, 960, 550, 'data', 'hexagon1'),

            new HexagonTile(this, 280, 620, 'data', 'hexagon1'),
            new HexagonTile(this, 360, 620, 'data', 'hexagon1'),
            new HexagonTile(this, 440, 620, 'data', 'hexagon1'),
            new HexagonTile(this, 520, 620, 'data', 'hexagon1'),
            new HexagonTile(this, 600, 620, 'data', 'hexagon1'),

            new HexagonTile(this, 320, 690, 'data', 'hexagon1'),
            new HexagonTile(this, 400, 690, 'data', 'hexagon1'),
            new HexagonTile(this, 480, 690, 'data', 'hexagon1'),
            new HexagonTile(this, 560, 690, 'data', 'hexagon1').play('randomanim'),


        ], true);
    }


    update(time: number, delta: number): void {
        console.log("waddaw");
    }
}