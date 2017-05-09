<template>
  <div id="app">
    <header-bar></header-bar>
    <router-view></router-view>
    <imc-footer></imc-footer>
  </div>
</template>

<script>
  import headerBar from '@/components/public/header_bar'
  import Footer from './components/public/footer.vue'
  export default {
    data () {
      return {

      }
    },
    components: {
      imcFooter: Footer,
      headerBar
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
  @import "../static/css/reset";
  @import "../static/css/global";
  @import "./assets/css/font-awesome.min.css";
</style>
