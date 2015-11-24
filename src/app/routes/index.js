/**
 * Created by top on 15-11-6.
 */

// routes file collection
var routeFiles = [];

// routes storage
var routes = {};

// start to import routes file
// please add your routes file here:
//------------------------------

routeFiles.push(require('./default.js'));

routeFiles.push(require('./../components/center/route.js'));

routeFiles.push(require('./../components/auth/route.js'));
//------------------------------

// parse routes file, and add route info to routes array
//
for (var fileKey in routeFiles) {
    var routeInfo = routeFiles[fileKey];
    for (var path in routeInfo) {
        if (routeInfo[path]) {
            routes[path] = routeInfo[path];
        }
    }
}

module.exports = routes;
