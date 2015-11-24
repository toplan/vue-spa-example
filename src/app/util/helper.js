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

function getProperty(key, obj) {
    if (typeof obj != 'object') {
        obj = {};
    }
    try {
        if (key in obj) {
            return obj[key];
        }
    } catch(e) {}
    return null;
}

module.exports.getProperty = function (key, obj) {
    return getProperty(key, obj);
};

var appScroll = {};
module.exports.refreshScroll = function (opts) {
    var wrapper = getProperty('wrapper', opts);
    var alias = getProperty('alias', opts);
    if (!wrapper) {
        wrapper = '#scroll-wrapper';
    }
    if (document.querySelector(wrapper)) {
        var scroll = null;
        var name = alias || wrapper;
        if (name in appScroll) {
            scroll = appScroll[name];
        }
        if (!scroll) {
            //if you want to refresh personal center scroll bar,
            //please use method refresh().
            appScroll[name] = new IScroll(wrapper, {
                scrollbars: true,
                mouseWheel: true,
                interactiveScrollbars: true,
                shrinkScrollbars: 'scale',
                fadeScrollbars: true
            });
        } else {
            scroll.refresh();
        }
    }
};