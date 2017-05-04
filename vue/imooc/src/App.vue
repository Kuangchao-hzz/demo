<template>
  <div id="app">
    <router-view></router-view>
    <imc-footer></imc-footer>
  </div>
</template>

<script>
import Footer from './components/public/footer.vue'
export default {
  components: {
    imcFooter: Footer
  }
}
</script>

<style lang="scss" rel="stylesheet/scss">
  @import "../static/css/reset";
  @import "../static/css/global";
  @import "./assets/css/font-awesome.min.css";
</style>
