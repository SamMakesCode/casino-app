class Keyboard
{
    constructor()
    {
        this.keys = [];

        document.addEventListener('keydown', e => {
            if (!this.isKeyDown(e.key)) {
                this.keys.push(e.key);
            }
        });

        document.addEventListener('keyup', e => {
            this.keys.splice(this.keys.indexOf(e.key), 1);
        })
    }

    isKeyDown(key)
    {
        return this.keys.indexOf(key) > -1;
    }
}

export default Keyboard;
