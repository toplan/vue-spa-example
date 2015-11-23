/**
 * Created by top on 15-11-12.
 */
var _ = require('./index.js');
var Store = require('store');
var base = '/v1';

var ajax = {
    open : function (method, url, data, callback) {
        method = method.toLowerCase();
        if (_.indexOf(['get', 'post', 'put', 'patch', 'delete', 'jsonp'], method) === -1) {
            throw new Error('ajax method ' + method + ' is not supported!');
        }
        var vm = this;
        url = base + url;
        if (method == 'post' && typeof data == 'object') {
            data['_token'] = Store.get('token');
        }
        vm.$http.get(url, data, function (res, status, request) {
            if (method == 'get' && res.title) {
                vm.$title = res.title;
            }
            if (res.user) {
                vm.$user = res.user;
            }
            if (!res.isLoggedIn) {
                vm.$user = null;
            }
            callback.call(vm, res, status, request);
        }, {
            method : method
        });
    }
};

['get', 'post', 'put', 'patch', 'delete', 'jsonp'].forEach(function (method) {
    ajax[method] = _.currying(ajax.open, method);
});

module.exports.ajax = ajax;


