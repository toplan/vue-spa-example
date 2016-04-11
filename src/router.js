/**
 * Created by toplan on 16/4/11.
 */
var Vue = require('vue')
var Router = require('vue-router')
var config = require('./config')

// install router
Vue.use(Router)

// create router
var router = new Router({
  linkActiveClass: config.get('route.linkActiveClass', 'v-link-active')
})

module.exports = router
