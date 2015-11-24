/**
 * Created by top on 15-11-9.
 */
var Store = require('store');
var routes = require('./routes/index.js');
var _ = require('./util');
var ajax = _.ajax;

// user object
var user = null;
// document title
var title = '';
// Vue instances
var vms = [];
// router
var router = null;

function defineVmProperties(Vue) {
    Object.defineProperties(Vue.prototype, {
        $router: {
            get: function () {
                return router;
            },
            set: function (obj) {
                router = obj;
            }
        },
        $ajax : {
            get : function () {
                var obj = {};
                for (var key in ajax) {
                    obj[key] = ajax[key].bind(this);
                }
                return obj;
            }
        },
        $title : {
            get : function () {
                return title;
            },
            set : function (text) {
                title = text;
                _.setTitle(title);
            }
        },
        $user : {
            get : function () {
                vms.push(this);
                return user;
            },
            set : function (u) {
                if (u) {
                    user = user || {};
                    extend(user, u);
                } else {
                    user = null;
                }
            }
        }
    });
}

function extend (to, from) {
    for (var key in from) {
        if (!to[key]) {
            for (var vmKey in vms) {
                var vm = vms[vmKey];
                var userKey = getUserDataKeyInVm(vm);
                vm.$set(userKey + '.' + key, from[key]);
            }
        }
        to[key] = from[key];
    }
    return to;
}

function getUserDataKeyInVm(vm) {
    var name = 'user';
    if (!vm.$data) {
        return name;
    }
    for (var key in vm.$data) {
        var value = vm.$data[key];
        if (value != null && typeof value == 'object' && value === user) {
            return key;
        }
    }
    return name;
}

function routerInit() {
    router.map(routes);
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
    router.redirect({
        '*': '/center/play'
    })
}

module.exports = function (opts) {
    // step1
    // remove token from store.js
    if (Store.has('token')) {
        Store.remove('token');
    }

    // step2
    // define properties for every Vue instance
    var Vue = opts.vue;
    defineVmProperties(Vue);

    // step3
    // init router
    router = opts.router;
    routerInit();
};