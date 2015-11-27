<template>
    <div id="scroll-wrapper">
        <div id="scroller">
        <router-view></router-view>
        </div>
    </div>
    <footer-bar></footer-bar>
</template>
<script>
    var footerBarComponent = require('../blocks/footerBar.vue');
    var _ = require('../../util');

    module.exports = {
        data : function () {
            return {
            };
        },
        events: {
            'updateActiveFooterBar': function (barName) {
                this.$broadcast('active', barName);
                return false;
            },
            'refreshScroll': function () {
                 _.refreshScroll({
                    alias: 'person-center',
                    top: 0
                });
                return false;
            }
        },
        components: {
            footerBar : footerBarComponent
        }
    }
</script>