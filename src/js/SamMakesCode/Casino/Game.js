import AssetManager from "./Helpers/AssetManager";
import assets from "../../assets";
import Renderer from "./Output/Renderer";
import MapGenerator from "./Helpers/MapGenerator";
import Mouse from "./Input/Mouse";
import Keyboard from "./Input/Keyboard";
import Camera from "./Output/Camera";
import Progression from "./Progression";
class Game
{
    constructor()
    {
        this.assetManager = new AssetManager(assets);
        this.camera = new Camera;
        this.canvas = null;
        this.inputLoop = null;
        this.isPaused = true;
        this.keyboard = null;
        this.map = null;
        this.mouse = null;
        this.progression = new Progression;
        this.renderer = new Renderer;
        this.speed = 8; // 8, 16, 32
        this.time = {
            days: 1,
            hours: 7,
            minutes: 0,
        };
        this.updateLoop = null;
    }

    handleInput()
    {
        let mousePosition = this.mouse.convertToScreenSpace(this.camera);
        this.map.cursor.x = mousePosition.x;
        this.map.cursor.y = mousePosition.y;

        if (this.mouse.isClicked) {
            console.log(mousePosition.x + ',' + mousePosition.y);
        }

        this.mouse.reset();

        // No more mouse capturing beyond this point

        if (this.keyboard.isKeyDown('w')) {
            this.camera.shiftDown();
        }

        if (this.keyboard.isKeyDown('a')) {
            this.camera.shiftRight();
        }

        if (this.keyboard.isKeyDown('s')) {
            this.camera.shiftUp();
        }

        if (this.keyboard.isKeyDown('d')) {
            this.camera.shiftLeft();
        }

        if (this.keyboard.isKeyDown('1')) {
            this.setSpeed(8);
        }

        if (this.keyboard.isKeyDown('2')) {
            this.setSpeed(16);
        }

        if (this.keyboard.isKeyDown('3')) {
            this.setSpeed(32);
        }

        if (this.keyboard.isKeyDown('Escape')) {
            if (!this.isPaused) {
                // this.unpause();
            // } else {
                this.pause();
            }
        }
    }

    pause()
    {
        this.isPaused = true;
        clearInterval(this.updateLoop);
        this.updateLoop = null;
        clearInterval(this.progressionLoop);
        this.progressionLoop = null;
    }

    run()
    {
        let mapGenerator = new MapGenerator(64, 64);
        this.map = mapGenerator.generate();

        this.keyboard = new Keyboard;
        this.mouse = new Mouse(this.canvas);

        this.unpause();

        let self = this;
        this.inputLoop = setInterval(() => {
            self.handleInput();
        }, 1000 / 60);
    }

    setCanvas(canvas, context)
    {
        this.canvas = canvas;
        this.renderer.setCanvas(this.canvas, context);
    }

    setSpeed(speed)
    {
        this.speed = speed;
        this.pause();
        this.unpause();
    }

    unpause()
    {
        this.isPaused = false;

        let self = this;

        this.progressionLoop = setInterval(() => {
            self.progression.progress(self);
        }, 1000 / this.speed);

        this.updateLoop = setInterval(() => {
            self.renderer.draw(self.assetManager, self.map, self.camera)
        }, 1000 / 60);
    }
}

export default Game;
