import constants from "../constants";

class Mouse
{
    constructor(canvas)
    {
        this.canvas = canvas;
        this.x = 0;
        this.y = 0;
        this.isClicked = false;

        let self = this;

        this.canvas.addEventListener('mousemove', e => {
            self.x = e.offsetX;
            self.y = e.offsetY;
        });

        this.canvas.addEventListener('click', () => this.isClicked = true);
    }

    convertToScreenSpace(camera)
    {
        let tempX = this.x;
        let tempY = this.y;

        // Adjust for the camera's position
        tempX -= camera.x * constants.TILE_WIDTH;
        tempY -= camera.y * constants.TILE_HEIGHT;

        // Adjust position so it's relative to center of screen
        tempX -= this.canvas.width / 2;
        tempY -= this.canvas.height / 2;

        // Get half of tiles sizes
        let halfTileHeight = constants.TILE_HEIGHT / 2;
        let halfTileWidth = constants.TILE_WIDTH / 2;

        // Factor in the isometric view
        let x = Math.round((tempX / halfTileWidth + tempY / halfTileHeight) / 2);
        let y = Math.round((tempY / halfTileHeight - (tempX / halfTileWidth)) / 2);

        return {
            x: x,
            y: y,
        }
    }

    reset()
    {
        this.isClicked = false;
    }
}

export default Mouse;
