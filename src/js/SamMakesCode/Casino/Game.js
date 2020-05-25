import AssetManager from "./Helpers/AssetManager";
import assets from "../../assets";
import Renderer from "./Output/Renderer";
import Map from "./Models/Map";
import MapGenerator from "./Helpers/MapGenerator";

class Game
{
    constructor()
    {
        this.assetManager = new AssetManager(assets);
        this.renderer = new Renderer;

        this.map = MapGenerator.generate(10, 10);

        this.updateLoop = null;
    }

    pause()
    {
        clearInterval(this.updateLoop);
        this.updateLoop = null;
    }

    run()
    {
        this.unpause();
    }

    unpause()
    {
        let self = this;
        this.updateLoop = setInterval(() => {
            self.renderer.draw(self.assetManager, self.map)
        }, 1000 / 60);
    }
}

export default Game;
