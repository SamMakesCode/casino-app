import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from "./routes";

Vue.use(VueRouter);

let router = new VueRouter({
    mode: 'history',
    routes: routes,
});

router.onReady(e => {
    if (e.path !== '/main-menu') {
        router.push({ name: 'MainMenu' });
    }
});

export default router;
