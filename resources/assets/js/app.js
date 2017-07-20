/**
 * Bootstrap the application. This includes all setup that doesn't really *do*
 * anything.
 */

require('./bootstrap');

/**
 * Finally, we'll mount our Vue application.
 */

const Vue = require('vue');

Vue.component('example', require('./components/Example.vue'));

const app = new Vue({
    el: '#app'
});
