const mix = require('laravel-mix');

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
mix.webpackConfig(webpack => {
    return {
        plugins: [
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery', 
                'window.jQuery': 'jquery',
            })
        ]
    };
});

mix.js('resources/app.js', 'public/js')
	.sass('resources/sass/app.scss', 'public/css')
    .styles([
        'public/assets/css/alertify.min.css',
        'public/assets/css/default.min.css',
        'public/assets/css/custom.min.css'
    ], 'public/css/all.css');

// mix.browserSync('http://127.0.0.1:8000')