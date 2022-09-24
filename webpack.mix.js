const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .js('resources/js/vue/main.js', 'public/js')
    .vue()
    .copy('node_modules/semantic-ui-css/semantic.min.css','resources/css/semantic.min.css')
    .copy('node_modules/semantic-ui-css/semantic.min.js','resources/js/semantic.min.js')
    .postCss('resources/css/app.css', 'public/css', [
        //
    ]);
