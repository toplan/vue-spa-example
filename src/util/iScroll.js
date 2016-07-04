/*
 * Created by toplan on 16/3/3.
 */
var IScroll = require('IScroll')

var instances = {}

function refreshByKey (key, top) {
  if (!key) {
    return
  }
  var instance = instances[key]
  if (!instance) {
    return
  }
  setTimeout(function () {
    instance.refresh()
    if (top === undefined) {
      return
    }
    top = parseFloat(top || 0)
    if (!isNaN(top)) {
      // 初始化滑块:scrollTo(x, y, time, easing)
      instance.scrollTo(0, top, 200, IScroll.utils.ease.quadratic)
    }
  }, 100)
}

function destroyByKey (key) {
  if (!key) {
    return
  }
  var instance = instances[key]
  if (!instance) {
    return
  }
  instance.destroy()
  instance._events = {}
  instance = null
  instances[key] = null
}

module.exports.iScroll = {
  create: function (selector) {
    if (!selector) {
      return
    }
    var scroll = new IScroll(selector, {
      scrollbars: true,
      mouseWheel: true,
      interactiveScrollbars: true,
      shrinkScrollbars: 'scale',
      fadeScrollbars: true
    })
    if (scroll) {
      instances[selector] = scroll
    }
  },
  refresh: function (selector, top) {
    if (!selector) {
      var keys = Object.keys(instances)
      keys.forEach(function (key) {
        refreshByKey(key, top)
      })
      return
    }
    refreshByKey(selector, top)
  },
  refreshAll: function (top) {
    this.refresh(null, top)
  },
  destroy: function (selector) {
    if (!selector) {
      var keys = Object.keys(instances)
      keys.forEach(function (key) {
        destroyByKey(key)
      })
      return
    }
    destroyByKey(selector)
  },
  destroyAll: function () {
    this.destroy(null)
  }
}
