import { Scene, GameObjects, Geom} from 'phaser';

class HexagonTile extends GameObjects.Sprite {
    private hexagonData: string | null = null;

    constructor(scene: Scene, x: number, y: number, data: string, animationKey: string) {
        super(scene, x, y, 'hexagons', 3);
        this.hexagonData = data;

        this.setScale(0.3);
    }

    public getHexagonData(): string {
        return typeof this.hexagonData == 'string' ? this.hexagonData : '';
    }
}

export default HexagonTile;