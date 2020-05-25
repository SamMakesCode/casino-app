const mix = require('laravel-mix');

mix.js('src/js/app.js', 'dist/js')
    .sass('src/css/app.scss', 'dist/css')
    .setPublicPath('dist');