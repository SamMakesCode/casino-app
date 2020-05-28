<template>
    <div id="game">
        <canvas id="gameframe"></canvas>
        <div id="hud">
            Day {{ this.game.time.days }}, {{ this.game.time.hours }}:{{ this.game.time.minutes }}
            &nbsp;
            &nbsp;
            &nbsp;
            &nbsp;
            <span @click="game.setSpeed(8)" :style="{ 'color': (game.speed === 8 ? 'red' : 'white') }">
                >
            </span>
            <span @click="game.setSpeed(16)" :style="{ 'color': (game.speed === 16 ? 'red' : 'white') }">
                >>
            </span>
            <span @click="game.setSpeed(32)" :style="{ 'color': (game.speed === 32 ? 'red' : 'white') }">
                >>>
            </span>
        </div>
        <div id="pause" class="fullscreen" v-if="game.isPaused">
            <div id="menu">
                <div class="menu-item" @click="handleItemClick('Continue')">Continue</div>
                <div class="menu-item" @click="handleItemClick('Quit')">Quit</div>
            </div>
        </div>
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
        methods: {
            handleItemClick(handle)
            {
                switch (handle) {
                    case 'Continue':
                        this.game.unpause();
                        break;
                    default:
                        alert('Unhandled event "' + handle + '".');
                        break;
                }
            }
        },
        mounted ()
        {
            this.canvas = document.getElementById('gameframe');
            this.canvas.width = window.innerWidth;
            this.canvas.height = window.innerHeight;
            this.context = this.canvas.getContext('2d');
            this.context.translate(
                (this.canvas.width / 2) - (constants.TILE_WIDTH / 2),
                (this.canvas.height / 2) - (constants.TILE_HEIGHT / 2),
            );

            this.game.setCanvas(this.canvas, this.context);

            this.game.run();
        },
        props: ['game'],
    };
</script>
