import Map from "../Models/Map";
import Tile from "../Models/Tile";
import Decoration from "../Models/Decoration";
import Tree1 from "../Models/Objects/Tree1";

class MapGenerator
{
    constructor(width, height)
    {
        this.width = width;
        this.height = height;
        this.map = new Map();

        this.endWidth = Math.floor(this.width / 2);
        this.endHeight = Math.floor(this.height / 2);
        this.startWidth = this.endWidth * -1;
        this.startHeight = this.endHeight * -1;
    }

    generate()
    {
        this.generateTiles();
        this.generateDecorations();
        this.generateObjects();

        return this.map;
    }

    generateTiles()
    {
        for (let x = this.startWidth; x <= this.endWidth; x++) {
            for (let y = this.startHeight; y <= this.endHeight; y++) {
                this.map.tiles[x + ',' + y] = new Tile(
                    x,
                    y,
                    'Sand',
                );
            }
        }
    }

    generateDecorations()
    {
        for (let x = this.startWidth; x <= this.endWidth; x++) {
            for (let y = this.startHeight; y <= this.endHeight; y++) {
                let diceRoll = Math.floor(Math.random() * (20 - 1 + 1) + 1);
                if (diceRoll <= 1) {
                    this.map.tiles[x + ',' + y].decoration = new Decoration(x, y, 'Rock1');
                }
            }
        }
    }

    generateObjects()
    {
        for (let x = this.startWidth; x <= this.endWidth; x++) {
            for (let y = this.startHeight; y <= this.endHeight; y++) {
                let diceRoll = Math.floor(Math.random() * (20 - 1 + 1) + 1);
                if (diceRoll <= 1) {
                    this.map.objects[x + ',' + y] = new Tree1(x, y);
                }
            }
        }
    }
}

export default MapGenerator;
