import constants from "../constants";

class Renderer
{
    constructor()
    {
        this.canvas = null;
        this.context = null;
    }

    setCanvas(canvas, context)
    {
        this.canvas = canvas;
        this.context = context;
    }

    draw(assetManager, map)
    {
        for (let tileIndex in map.tiles) {
            let tileIndexParts = tileIndex.split(',');

            let x = tileIndexParts[0];
            let y = tileIndexParts[1];

            this.context.beginPath();

            let screenX = (
                x * constants.TILE_WIDTH / 2
                - y * constants.TILE_WIDTH / 2
            );
            let screenY = (
                y * constants.TILE_HEIGHT / 2
                + x * constants.TILE_HEIGHT / 2
            );

            this.context.drawImage(
                assetManager.getAsset('Wood Light').asset,
                screenX,
                screenY,
                constants.TILE_WIDTH,
                constants.TILE_HEIGHT,
            );

            this.context.stroke();
        }
    }
}

export default Renderer;
