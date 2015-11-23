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
 * app init
 */
init(Vue);

/*
 * create router instance
 */
var router = new VueRouter({
    linkActiveClass  : 'active'
});

/*
 * router init
 */
router.map(require('./routes/index.js'));
router.beforeEach(function (transition) {
    var user = router.app.$user;
    var auth = transition.to.auth;
    if (auth === false) {
        transition.next();
    } else {
        if (user) {
            transition.next();
        } else {
            router.go('/login');
        }
    }
});

module.exports = {
    start : function (app, mountDom) {
        router.start(app, mountDom);
    }
};