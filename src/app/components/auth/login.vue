<template>
    <div id="scroll-wrapper" class="full">
        <div id="scroller">
            <div class="logo-wrapper">
                <img v-bind:src="logoSrc">
            </div>
            <div class="cell">
                <input type="text" class="row-input" placeholder="输入用户名" v-model="username">
            </div>
            <div class="cell">
                <input type="password" class="row-input" placeholder="输入密码" v-model="password">
            </div>
            <div class="cell mt-30">
                <button v-on:click="login"
                 class="aq-btn aq-btn-default aq-btn-bg block-btn">登陆</button>
            </div>
            <div class="cell cell-center">
                <div class="contact-wrapper">
                    <img v-bind:src="phoneSrc">
                    咨询热线：028 - 83359259
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    var _ = require('../../util');

    module.exports = {
        data: function () {
            return {
                username: null,
                password: null,
                logoSrc: './public/images/login_logo.png',
                phoneSrc: './public/images/phone.png'
            }
        },
        ready: function () {
            _.refreshScroll({
                alias: 'login'
            });
        },
        methods: {
            login: function () {
                // login
                this.$user = {
                    name: 'toplan710',
                    email: 'toplan710@gmail.com'
                };
                // redirect
                if (this.$user) {
                    this.$router.go('/center/play');
                }
            }
        }
    }
</script>