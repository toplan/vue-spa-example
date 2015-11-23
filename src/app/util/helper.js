/**
 * Created by top on 15-11-10.
 */

module.exports.extend = function (to, from) {
    for (var key in from) {
        to[key] = from[key];
    }
    return to;
};

module.exports.indexOf = function (array, obj) {
    var i = array.length;
    while (i--) {
        if (array[i] === obj) {
            return i;
        }
    }
    return -1;
};

module.exports.currying = function (fn) {
    var slice = Array.prototype.slice;
    var args = slice.call(arguments, 1);
    return function () {
        var innerArgs = slice.call(arguments);
        var realArgs = args.concat(innerArgs);
        return fn.apply(this, realArgs);
    }
};

module.exports.getToken = function () {
    try {
        return window.document.querySelector('meta#token').getAttribute('value');
    } catch (e) {
        throw new Error('please set csrf token value to `meta#token` element');
    }
};

module.exports.getUser = function () {
    try {
        var userString = window.document.querySelector('meta#user').getAttribute('value');
        if (userString) {
            return JSON.parse(userString);
        }
        return null;
    } catch (e) {
        throw new Error('please set user json string value to `meta#user` element');
    }
};

module.exports.setTitle = function (title) {
    window.document.title = title;
};