<template>
    <div v-for="item in list" class="row course-row big">
        <div class="left">
           <img src="http://7xkg31.com2.z0.glb.qiniucdn.com/201506/b/a/3/b84bef7c21bed7aa282cba181f31c953.png">
        </div>
        <div class="right">
            <p>《安全生产法》之安全生产十大定律</p>
            <p><span class="label label-default">公共安全</span></p>
            <p>2课时&nbsp;&nbsp;共7分23秒</p>
            <p>到期时间：&nbsp;2015年12月15日</p>
        </div>
    </div>
</template>
<script>
    var footerBarName = 'course';
    module.exports = {
        data: function () {
            return {
                list : [1, 2, 3, 4, 5, 6,7]
            }
        },
        ready: function () {
            this.$parent.$data.activeFooterBar = footerBarName
        }
    }
</script>