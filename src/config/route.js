/*
 * Created by toplan on 16/3/2.
 */
var util = require('../util')
var loginPath = '/login'

module.exports = {
  linkActiveClass: 'active',
  redirect: {
    '*': loginPath,
    '/': loginPath
  },
  hooks: {
    beforeEach: function (transition) {
      var auth = transition.to.auth
      if (auth === false) {
        transition.next()
      } else {
        if (true) {
          transition.next()
        } else {
          transition.to.router.go(loginPath)
        }
      }
    },
    afterEach: function (transition) {
      if (transition.from.router) {
        util.history.push(transition.from)
      }
      if (transition.from.fullPath !== transition.to.fullPath) {
        util.iScroll.destroyAll()
      }
    }
  }
}
