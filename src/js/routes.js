import MainMenu from "./views/MainMenu";
import Loading from "./views/Loading";
import Game from "./views/Game";

export default [
    { component: MainMenu, name: 'MainMenu', path: '/main-menu' },
    { component: Loading, name: 'Loading', path: '/loading' },
    { component: Game, name: 'Game', path: '/game' },
];
