<template>
    <div id="app" class="fullscreen">
        <router-view
            @newGame="newGame"
            :game="game"
        ></router-view>
    </div>
</template>

<script>
    import Game from "../SamMakesCode/Casino/Game";

    export default {
        data () {
            return {
                game: null,
            };
        },
        methods: {
            newGame (onComplete) {
                let game = new Game;
                this.game = game;
                onComplete();
            },
        },
    };
</script>
