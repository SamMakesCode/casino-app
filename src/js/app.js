import Vue from 'vue';

import App from './views/App'
import router from "./router";

new Vue({
    components: {
        App,
    },
    el: 'App',
    router: router
});
