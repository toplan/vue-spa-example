/**
 * Created by top on 15-11-19.
 */

module.exports = {
    '/center' : {
        component : require('../layouts/default.vue'),
        subRoutes : {
            '/play' : {
                component : require('./play/play.vue')
            },
            '/courses' : {
                component : require('./courses/list.vue')
            }
        }
    }
};
