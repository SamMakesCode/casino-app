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

    calcDistance(x1, y1, x2, y2)
    {
        let tempX = x1 - x2;
        let tempY = y1 - y2;

        return Math.sqrt(tempX * tempX + tempY * tempY);
    }

    draw(assetManager, map, camera)
    {
        this.clear();
        this.drawTiles(assetManager, map, camera);
        this.drawCursor(assetManager, map, camera);
        this.drawObjects(assetManager, map, camera);
    }

    clear()
    {
        this.context.clearRect(
            this.canvas.width / 2 * -1 + constants.TILE_WIDTH / 2,
            this.canvas.height / 2 * -1 + constants.TILE_HEIGHT / 2,
            this.canvas.width,
            this.canvas.height,
        );
    }

    drawTiles(assetManager, map, camera)
    {
        for (let tileIndex in map.tiles) {
            let tile = map.tiles[tileIndex];

            let x = tile.x;
            let y = tile.y;

            let cameraIsoPos = camera.convertToIsometric();

            if (this.calcDistance(x, y, cameraIsoPos.x, cameraIsoPos.y) > 10) {
                continue;
            }

            this.context.beginPath();

            let screenX = (
                x * constants.TILE_WIDTH / 2
                - y * constants.TILE_WIDTH / 2
            );
            let screenY = (
                y * constants.TILE_HEIGHT / 2
                + x * constants.TILE_HEIGHT / 2
            );

            screenX += camera.x * constants.TILE_WIDTH;
            screenY += camera.y * constants.TILE_HEIGHT;

            this.context.drawImage(
                assetManager.getAsset(tile.floor).asset,
                screenX,
                screenY,
                constants.TILE_WIDTH,
                constants.TILE_HEIGHT,
            );

            if (tile.decoration !== null) {
                this.context.drawImage(
                    assetManager.getAsset(tile.decoration.assetName).asset,
                    screenX,
                    screenY,
                    constants.TILE_WIDTH,
                    constants.TILE_HEIGHT,
                );
            }

            this.context.stroke();
        }
    }

    drawCursor(assetManager, map, camera)
    {
        let x = map.cursor.x;
        let y = map.cursor.y;

        this.context.beginPath();

        let screenX = (
            x * constants.TILE_WIDTH / 2
            - y * constants.TILE_WIDTH / 2
        );
        let screenY = (
            y * constants.TILE_HEIGHT / 2
            + x * constants.TILE_HEIGHT / 2
        );

        screenX += camera.x * constants.TILE_WIDTH;
        screenY += camera.y * constants.TILE_HEIGHT;

        // screenX += Math.floor(camera.x * constants.TILE_WIDTH) - camera.x * constants.TILE_WIDTH;
        // screenY += Math.floor(camera.y * constants.TILE_HEIGHT) - camera.y * constants.TILE_HEIGHT;

        this.context.drawImage(
            assetManager.getAsset('Cursor').asset,
            screenX,
            screenY,
            constants.TILE_WIDTH,
            constants.TILE_HEIGHT,
        );

        this.context.stroke();
    }

    drawObjects(assetManager, map, camera)
    {
        for (let objIndex in map.objects) {
            let object = map.objects[objIndex];

            let cameraIsoPos = camera.convertToIsometric();

            if (this.calcDistance(object.x, object.y, cameraIsoPos.x, cameraIsoPos.y) > 10) {
                continue;
            }

            this.context.beginPath();

            let screenX = (
                object.x * constants.TILE_WIDTH / 2
                - object.y * constants.TILE_WIDTH / 2
            );
            let screenY = (
                object.y * constants.TILE_HEIGHT / 2
                + object.x * constants.TILE_HEIGHT / 2
            );

            screenX += camera.x * constants.TILE_WIDTH;
            screenY += camera.y * constants.TILE_HEIGHT;

            let asset = assetManager.getAsset(object.assetName);
            this.context.drawImage(
                asset.asset,
                screenX,
                screenY - (asset.height - constants.TILE_HEIGHT),
                asset.width,
                asset.height,
            );
        }
    }
}

export default Renderer;
