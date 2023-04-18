import Phaser from "phaser";
import GameScene from "./scenes/game-scene";
import TitleScreen from "./scenes/title-screen";
import Preload from "./scenes/preload";

const game = new Phaser.Game({
    type: Phaser.AUTO,
    width: 1440,
    height: 1024,
    physics: {
        default: "arcade",
        arcade: {
            debug: false,
        }
    },
    scene: [Preload, TitleScreen, GameScene],
});

export default game;