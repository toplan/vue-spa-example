<template>
    <div id="center-wrapper">
        <div id="scroller">
        <router-view></router-view>
        </div>
    </div>
    <footer-bar></footer-bar>
</template>
<script>
    var footerBarComponent = require('../blocks/footerBar.vue');

    module.exports = {
        data : function () {
            return {
                activeFooterBar : ''
            };
        },
        ready : function () {
            // load iscroll
            this.loadIscroll();
            //
        },
        watch : {
            'activeFooterBar' : function (val, oldVal) {
                if (window.centerScroll) {
                    window.centerScroll.refresh();
                }
                this.$broadcast('active', val);
            }
        },
        methods : {
            loadIscroll : function () {
                window.centerScroll = new IScroll('#center-wrapper', {
                    scrollbars: true,
                    mouseWheel: true,
                    interactiveScrollbars: true,
                    shrinkScrollbars: 'scale',
                    fadeScrollbars: true
                });
                //if you want to refresh personal center scroll bar,
                //please use window.centerScroll.refresh().
            }
        },
        components: {
            footerBar : footerBarComponent
        }
    }
</script>