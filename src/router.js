/**
 * Created by toplan on 16/4/11.
 */
var Vue = require('vue')
var Router = require('vue-router')
var routes = require('./routes')
var config = require('./config')
var util = require('./util')

// install router
Vue.use(Router)

// create router
var router = new Router({
  linkActiveClass: config.get('route.linkActiveClass', 'v-link-active')
})

router.map(routes)

router.redirect(config.get('route.redirect', {}))

router.beforeEach(function (transition) {
  var auth = transition.to.auth
  if (auth === false) {
    transition.next()
  } else {
    if (true) {
      transition.next()
    } else {
      transition.to.router.go('/login')
    }
  }
})

router.afterEach(function (transition) {
  if (transition.from.router && transition.to.history !== false && transition.from.history !== false) {
    util.history.push(transition.from)
  }
  if (transition.from.fullPath !== transition.to.fullPath) {
    util.iScroll.destroyAll()
  }
})

module.exports = router
