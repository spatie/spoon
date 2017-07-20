const mix = require('laravel-mix');
const sys = require('sys');
const { exec } = require('child_process');

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
    .js('resources/assets/js/app.js', 'public/js')
    .then(() => {
        exec('npm run css', (err, stdout, stderr) => sys.puts(stdout));
    });
