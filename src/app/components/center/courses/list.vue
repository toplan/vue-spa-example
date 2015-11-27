<template>
    <div class="row class-list" v-for="item in list">
        <p class="item-header">
            安全培训一班
        </p>
        <div class="item-info">
            <p>
                <span class="title">班级详情：</span>
                <span>2课时</span>
                <span>共7分23秒</span>
                <span>1人学习</span>
                <span>1人考试</span>
            </p>
            <p>
                <span class="title">到期时间：</span>
                <span>2015年12月15日</span>
            </p>
            <div class="mb-10">
                <span class="title">我的进度：</span>
                <div class="aq-progress-wrapper">
                    <div class="aq-progress"></div>
                </div>
            </div>
        </div>
        <div class="item-course">
            <p class="item-course-header">
                课程
                <button v-link="{path:'/center/class-courses'}" class="more-tag" >更多></button>
            </p>
            <div class="info">
                <div class="info-left">
                    <img src="http://7xkg31.com2.z0.glb.qiniucdn.com/201506/b/a/3/b84bef7c21bed7aa282cba181f31c953.png">
                </div>
                <div class="info-right">
                    <p>《安全生产法》之安全生产十大定律</p>
                    <p>
                        共7分23秒
                        <span class="label label-default pull-right">已学完</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    var footerBarName = 'course';

    module.exports = {
        data: function () {
            return {
                list: [1,2,3,4,5,6]
            }
        },
        ready: function () {
            this.$dispatch('updateActiveFooterBar', footerBarName);
            this.$dispatch('refreshScroll');
        }
    }
</script>