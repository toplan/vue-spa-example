/**
 * Created by toplan on 16/3/2.
 */
var util = require('../util')

module.exports.route = require('./route.js')
module.exports.resource = require('./resource.js')
module.exports.app = require('./app.js')

module.exports.get = function (keyStr, defaultValue) {
  return util.getFromObj(module.exports, keyStr, defaultValue)
}
