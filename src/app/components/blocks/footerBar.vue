<template>
    <div id="footer" class="footer-bar">
        <ul>
            <li class="course {{isActive('course')}}">
                <a v-link="{path: '/center/courses'}">课程</a>
            </li>
            <li class="exam {{isActive('exam')}}">
                <a v-link="{path: '/center/exams'}">考试</a>
            </li>
            <li class="play {{isActive('play')}}">
                <a v-link="{path: '/center/play'}">播放</a>
            </li>
            <li class="cert {{isActive('cert')}}">
                <a v-link="{path: '/center/cert'}">证书</a>
            </li>
            <li class="me {{isActive('me')}}">
                <a v-link="{path: '/center/me'}">我</a>
            </li>
        </ul>
    </div>
</template>
<script>
    module.exports = {
        data: function () {
            return {
                activeBar : ''
            }
        },
        methods: {
            isActive: function (bar) {
                if (this.activeBar == bar) {
                    return 'active';
                }
                return '';
            }
        },
        events: {
            'active': function (msg) {
                this.activeBar = msg;
            }
        }
    }
</script>