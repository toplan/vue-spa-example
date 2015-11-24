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
                activeFooterBar : ''
            };
        },
        watch : {
            'activeFooterBar' : function (val, oldVal) {
                _.refreshScroll({
                    alias: 'person-center'
                });
                this.$broadcast('active', val);
            }
        },
        components: {
            footerBar : footerBarComponent
        }
    }
</script>