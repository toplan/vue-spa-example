/*
 * Created by toplan on 16/3/3.
 */
var extend = require('extend')

function isFunction (value) {
  return typeof value === 'function'
}

function isObject (value) {
  if (!value) {
    return false
  }
  return Object.prototype.toString.call(value) === '[object Object]'
}

function isPlainObject (value) {
  return isObject(value) && Object.getPrototypeOf(value) === Object.prototype
}

module.exports.isFunction = isFunction

module.exports.isObject = isObject

module.exports.isPlainObject = isPlainObject

module.exports.isArray = Array.isArray

module.exports.extend = function (to, from) {
  return extend(to, from)
}

module.exports.doCallback = function (fn, content, args) {
  if (!isFunction(fn)) {
    return
  }
  if (arguments.length > 3) {
    args = Array.prototype.slice.call(arguments, 2)
  }
  if (arguments.length === 3 && !Array.isArray(args)) {
    args = [args]
  }
  return fn.apply(content || null, args || [])
}

module.exports.stringify = function (json) {
  return JSON.stringify(json)
}

module.exports.time = {
  now: function () {
    return Date.now()
  }
}

module.exports.history = {
  routerStack: [],
  backed: false,
  push: function (route) {
    if (this.backed) {
      this.backed = false
      return
    }
    this.routerStack.push(route)
  },
  pop: function () {
    this.backed = true
    return this.routerStack.pop()
  },
  has: function (value) {
    if (!value) {
      return this.routerStack.length
    }
    return this.routerStack.some(function (item) {
      return item === value
    })
  },
  canBack: function () {
    return this.routerStack.length >= 1
  },
  all: function () {
    return this.routerStack
  }
}

module.exports.getFromObj = function (obj, keyStr, defaultValue) {
  if (!isObject(obj)) {
    throw new Error('method [util.getFromObj]: first parameter must be object')
  }
  if (!keyStr || typeof keyStr !== 'string') {
    return obj
  }
  var value
  var keys = keyStr.split('.')
  var l = keys.length
  keys.forEach(function (key, index) {
    var v = obj[key]
    if (index === l - 1) {
      value = v
      return
    }
    if (isObject(v)) {
      obj = v
    } else {
      return
    }
  })
  return value || defaultValue
}

module.exports.setToObj = function (obj, keyStr, value) {
  if (!isObject(obj)) {
    throw new Error('method [util.setToObj]: first parameter must be object')
  }
  if (!keyStr || typeof keyStr !== 'string') {
    return false
  }
  var keys = keyStr.split('.')
  var l = keys.length
  keys.forEach(function (key, index) {
    if (index !== l - 1) {
      if (isObject(obj[key])) {
        obj = obj[key]
      } else {
        obj[key] = obj = {}
      }
      return
    }
    obj[key] = value
  })
}
