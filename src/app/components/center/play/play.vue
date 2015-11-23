<template>
    <!--<h2>Play!</h2>-->
    <video id="videoJs" class="video-js vjs-default-skin vjs-big-play-centered" controls preload="none" width="100%" height="270"
        data-setup="{}">
        您的浏览器不支持 video 标签。
    </video>
    <ul class="horizontal-nav horizontal-nav-3">
        <li class="active">课程介绍</li>
        <li>相关课件</li>
        <li>课后测验</li>
    </ul>
    <div class="course-info-box">
        <div class="description">
            <p>
                <span class="desc-title">行业：</span>
                <span class="desc-content">建筑施工</span>
            </p>
            <p>
                <span class="desc-title">时长：</span>
                <span class="desc-content">2课时&nbsp;&nbsp;共7分23秒</span>
            </p>
            <p>
                <span class="desc-title">简介：</span>
                <span class="desc-content">
                    实例模板。模板默认替换挂载元素。如果 replace 选项为 false，模板将插入挂载元素内。两种情况下，挂载元素的内容都将被忽略，除非模板有内容分发 slot。
                    如果值以 # 开始，则它用作选项符，将使用匹配元素的 innerHTML 作为模板。常用的技巧是用包含模板。
                </span>
            </p>
        </div>
    </div>
    <div class="row mb-5">
        <span class="font-size-16">剩余课程</span>
    </div>
    <div class="row course-row">
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
    var footerBarName = 'play';
    module.exports = {
        ready: function () {
            this.$parent.$data.activeFooterBar = footerBarName
        }
    }
</script>