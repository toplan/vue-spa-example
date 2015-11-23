<style type="text/css">
</style>
<template>
    <div id="body">
        <router-view></router-view>
    </div>
</template>
<script>
   var _ = require('./../util/helper.js');
   var Store = require('store');

   module.exports = {
       data : function () {
           return {
               title : '安全培训网',
               user : {}
           }
       },
       ready : function () {
           //init title
           this.$title = this.title;
           //init user data
           this.$user = _.getUser();
           this.user = this.$user;
           //store token value
           Store.set('token', _.getToken());
       }
   }
</script>