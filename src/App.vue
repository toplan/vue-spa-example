<template>
  <router-view></router-view>
</template>

<script>
var Style = require('./components/Style.vue')

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
