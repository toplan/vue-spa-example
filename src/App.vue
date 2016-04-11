<template>
  <router-view></router-view>
</template>

<script>
var Style = require('./components/style.vue')

module.exports = {
  data: function () {
    return {
    }
  },
  ready: function () {
  },
  components: {
    'app-style': Style
  }
}
</script>
