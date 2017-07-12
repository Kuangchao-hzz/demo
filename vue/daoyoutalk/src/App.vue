<template>
  <div id="app" ref="bodySize">
    <include-header></include-header>
    <router-view></router-view>
    <include-footer></include-footer>
  </div>
</template>

<script>
  export default {
    data () {
      return {

      }
    },
    mounted () {
      this.$store.state.defaultBodySize = this.$refs['bodySize'].getBoundingClientRect().height
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
  @import "../static/css/global.scss";
</style>
