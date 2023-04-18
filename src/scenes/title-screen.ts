import { Scene } from "phaser";

export default class TitleScreen extends Scene {
    constructor() {
        super({ key: 'TitleScreen' });
    }

    create() {
        const { width, height } = this.scale;
        this.add.image(width/2, height/2, 'wallpaper-new');

        const playButton = this.add.text(width/2, height/2, 'Click here to Start', {
            fontSize: 35,
            fontFamily: '"Press Start 2P"',
            color: '#fff',
            align: 'center',
        });

        playButton.setOrigin(0.5, 0.5);

        playButton.setInteractive();

        playButton.on('pointerdown', () => {
            this.scene.start('GameScene');
        });
    }
}