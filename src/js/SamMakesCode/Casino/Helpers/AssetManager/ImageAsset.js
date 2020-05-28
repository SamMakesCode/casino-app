import Asset from "./Asset";
import constants from "../../constants";

class ImageAsset extends Asset
{
    constructor(name, src, width, height)
    {
        if (typeof width === 'undefined') {
            width = constants.TILE_WIDTH;
        }
        if (typeof height === 'undefined') {
            height = constants.TILE_HEIGHT;
        }

        super(name, src, width, height);
    }
}

export default ImageAsset;
