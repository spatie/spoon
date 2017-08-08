const mix = require('laravel-mix');

mix.config.uglify.compress.drop_console = false;

mix.config.postCss = [
    require('postcss-easy-import')(),
    require('postcss-cssnext')({
        features: {
            // Mix takes care of this.
            autoprefixer: false,
        },
    }),
];

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
    .version()
    .js('resources/assets/js/app.js', 'public/js')
    .postCss('resources/assets/css/app.css', 'public/css');
