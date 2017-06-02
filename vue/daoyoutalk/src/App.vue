<template>
  <div id="app">
    <miHeader></miHeader>
    <router-view></router-view>
    <miFooter></miFooter>
  </div>
</template>

<script>
  import miHeader from '@/components/include/header'
  import miFooter from '@/components/include/footer'
  export default {
    data () {
      return {
        active: 'tab-container2'
      }
    },
    components: {
      miHeader,
      miFooter
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
  @import "../static/css/global.scss";
</style>
