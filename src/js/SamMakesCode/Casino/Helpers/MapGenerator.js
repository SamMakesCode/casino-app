import Map from "../Models/Map";

class MapGenerator
{
    static
    generate(width, height)
    {
        let endWidth = Math.floor(width / 2);
        let endHeight = Math.floor(height / 2);

        let startWidth = endWidth * -1;
        let startHeight = endHeight * -1;

        let map = new Map;

        for (let x = startWidth; x < endWidth; x++) {
            for (let y = startHeight; y < endHeight; y++) {
                map.tiles[x + ',' + y] = {};
            }
        }

        return map;
    }
}

export default MapGenerator;
