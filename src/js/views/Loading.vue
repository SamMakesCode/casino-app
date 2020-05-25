<template>
    <div id="loading" class="fullscreen">
        <div id="loading-tips">
            Did you know? Javascript is not really for making games :P
        </div>

        <div id="loading-wrapper">
            <div id="loading-message">
                Loading...
            </div>
            <div id="loading-bar">
                <div id="loading-progress" :style="{ width: percent + '%' }"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        created()
        {
            let self = this;
            this.game.assetManager.load(percent => this.percent = percent, () => {
                self.$router.push({ name: 'Game' })
            });
        },
        data () {
            return {
                percent: 0,
            }
        },
        props: ['game'],
    }
</script>
