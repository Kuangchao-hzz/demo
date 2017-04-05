<template>
  <div id="app">
    <img src="./assets/logo.png">
    <hello :start='start' @countDown ='start=false' @click.native='sendCode'></hello>
  </div>
</template>

<script>
  import Hello from './components/Hello.vue'
export default {
  components: {
    Hello
  },
  data () {
    return {
      start : false
    }
  },
  methods : {
    sendCode (value) {
      //前面发送ajax请求成功之后调用this.start = true开始短信倒计时
      this.start = true
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
