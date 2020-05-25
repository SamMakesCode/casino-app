<template>
    <div id="game">
        <canvas id="gameframe"></canvas>
    </div>
</template>

<script>
    import constants from "../SamMakesCode/Casino/constants";

    export default {
        data () {
            return {
                canvas: null,
                context: null,
            }
        },
        mounted ()
        {
            this.canvas = document.getElementById('gameframe');
            this.canvas.width = 640;
            this.canvas.height = 480;
            this.context = this.canvas.getContext('2d');
            this.context.translate(
                (this.canvas.width / 2) - (constants.TILE_WIDTH / 2),
                (this.canvas.height / 2) - (constants.TILE_HEIGHT / 2),
            );

            this.game.renderer.setCanvas(this.canvas, this.context);

            this.game.run();
        },
        props: ['game'],
    };
</script>
