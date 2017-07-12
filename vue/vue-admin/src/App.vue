<template>
  <div id="app">
    <router-view></router-view>
   </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      screenHeight: document.body.clientHeight
    }
  },
  mounted () {
    const that = this
    window.onresize = () => {
      return (() => {
        window.screenHeight = document.body.clientHeight
        that.screenHeight = window.screenHeight
      })()
    }
  },
  watch: {
    screenHeight () {
      if (!this.timer) {
        let that = this
        this.timer = true
        setTimeout(function () {
          that.$store.dispatch('captureBrowserSize')
          that.timer = false
        }, 300)
      }
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" type="text/scss">
  @import "../static/css/reset.css";
  @import "./assets/css/color.scss";
  @import "./assets/css/style.css";
  body{
    background: #5a5050;
    /* 修改swal z-index 层级 使它大于elementui的dialog组件遮罩z-index */
    .swal2-container{
      z-index: 3000;
    }
  }
  html, body, #app{
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
</style>
