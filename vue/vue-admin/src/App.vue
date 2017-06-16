<template>
  <div id="app">
    <router-view></router-view>
   </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss" rel="stylesheet/scss" type="text/scss">
  @import "../static/css/reset.css";
  @import "./assets/color.scss";
  html,body,#app{
    width: 100%;
    height: 100%;
    color: #48576a;
  }
</style>
