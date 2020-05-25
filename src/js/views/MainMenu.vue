<template>
    <div id="main-menu" class="fullscreen">
        <div id="menu">
            <div class="menu-item" @click="handleItemClick('New Game')">New Game</div>
            <div class="menu-item" @click="handleItemClick('Load Game')">Load Game</div>
            <div class="menu-item" @click="handleItemClick('Settings')">Settings</div>
            <div class="menu-item" @click="handleItemClick('Quit')">Quit</div>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            handleItemClick (actionType)
            {
                switch (actionType) {
                    case 'New Game':
                        let self = this;
                        this.$emit('newGame', () => {
                            self.$router.push({ name: 'Loading' });
                        });
                        break;
                    default:
                        alert('Unhandled action "' + actionType + '".');
                        break;
                }
            }
        },
    };
</script>
