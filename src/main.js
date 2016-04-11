var Vue = require('vue')
var router = require('./router.js')
var Resource = require('vue-resource')
var VueTouch = require('vue-touch')
var App = require('./App.vue')
var util = require('./util')
var config = require('./config')

Vue.config.debug = config.get('app.debug', false)

// install vue touch
Vue.use(VueTouch)

// install resource
;(function () {
  Vue.use(Resource)
  var root = config.get('resource.root')
  if (root) {
    Vue.http.options.root = root
  }
  util.extend(Vue.http.headers.common, config.get('resource.headers', {}))
})()

// start application
router.start(App, 'app')
