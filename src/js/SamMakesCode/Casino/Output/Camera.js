class Camera
{
    constructor()
    {
        this.x = 0;
        this.y = 0;
    }

    shiftLeft()
    {
        this.x -= 0.1;
    }

    shiftRight()
    {
        this.x += 0.1;
    }

    shiftUp()
    {
        this.y -= 0.1;
    }

    shiftDown()
    {
        this.y += 0.1;
    }

    convertToIsometric()
    {
        let tempX = (this.x - (this.y * -1)) * -1;
        let tempY = (this.y + (this.x * -1)) * -1;

        return {
            x: tempX,
            y: tempY,
        }
    }
}

export default Camera;
