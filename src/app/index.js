/**
 * index
 * Created by top on 15-11-6.
 */

/*
 * define mount dom for root component
 */
var mountDom = "#app";


/*
 * import root component
 */
var rootComponent = require('./components/root.vue');


/*
 * load app object
 */
var app = require('./app.js');


/*
 * start app
 */
app.start(rootComponent, mountDom);
