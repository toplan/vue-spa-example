/**
 * Created by top on 15-11-9.
 */

/*
 * import dependencies
 */
var Vue = require('vue');
var VueRouter = require('vue-router');
var VueResource = require('vue-resource');
var init = require('./init.js');

/*
 * manual use vue plugins
 */
Vue.use(VueRouter);
Vue.use(VueResource);

/*
 * create router instance
 */
var router = new VueRouter({
    linkActiveClass  : 'active'
});

/*
 * app init
 */
init({
    vue: Vue,
    router: router
});

module.exports = {
    start : function (app, mountDom) {
        router.start(app, mountDom);
    }
};