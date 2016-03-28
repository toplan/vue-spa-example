var Vue = require('vue')
var Router = require('vue-router')
var Resource = require('vue-resource')
var VueTouch = require('vue-touch')
var App = require('./App.vue')
var util = require('./util')
var config = require('./config')
var routes = require('./routes')

// install router
Vue.use(Router)
var router = new Router({
  linkActiveClass: config.get('route.linkActiveClass', 'v-link-active')
})

// install resource
Vue.use(Resource)

// install vue touch
Vue.use(VueTouch)

// init router
;(function () {
  router.map(routes)

  router.beforeEach(function (transition) {
    util.doCallback(config.get('route.hooks.beforeEach'), null, transition)
  })

  router.afterEach(function (transition) {
    util.doCallback(config.get('route.hooks.afterEach'), null, transition)
  })

  router.redirect(config.get('route.redirect', {}))
})()

// init resource
;(function () {
  var root = config.get('resource.root')
  if (root) {
    Vue.http.options.root = root
  }

  var headers = config.get('resource.headers', {})
  util.extend(Vue.http.headers.common, headers)
})()

// start application
router.start(App, 'app')
