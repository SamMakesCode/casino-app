class Progression
{
    constructor()
    {
        this.counter = 0;
    }

    progress(game)
    {
        this.progressTime(game);

        this.counter++;
        if (this.counter >= 8) {
            this.counter = 0;
        }
    }

    progressTime(game)
    {
        if (this.counter === 7) {
            if (game.time.minutes >= 59) {
                game.time.minutes = 0;
                if (game.time.hours >= 23) {
                    game.time.hours = 0;
                    game.time.days++;
                } else {
                    game.time.hours++;
                }
            } else {
                game.time.minutes++;
            }
        }
    }
}

export default Progression;
