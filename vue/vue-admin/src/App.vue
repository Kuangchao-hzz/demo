<template>
  <div id="app">
    <router-view></router-view>
   </div>
</template>

<script>
export default {
  name: 'app',
  mounted () {

  }
}
</script>

<style lang="scss" rel="stylesheet/scss" type="text/scss">
  @import "../static/css/reset.css";
  @import "./assets/color.scss";
  body{
    background: #5a5050;
  }
</style>
