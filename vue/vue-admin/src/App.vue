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
  created () {
    this.$store.dispatch('currentDomain')
  },
  mounted () {
    const that = this
    window.onresize = () => {
      return (() => {
        window.screenHeight = document.body.clientHeight
        that.screenHeight = window.screenHeight
      })()
    }
    //时间格式化函数
    Date.prototype.format = function (format) {
      var o = {
        "M+": this.getMonth() + 1,
        "d+": this.getDate(),
        "h+": this.getHours(),
        "m+": this.getMinutes(),
        "s+": this.getSeconds(),
        "q+": Math.floor((this.getMonth() + 3) / 3),
        "S": this.getMilliseconds()
      }
      if (/(y+)/.test(format)) format = format.replace(RegExp.$1,(this.getFullYear() + "").substr(4 - RegExp.$1.length));
      for (var k in o) if (new RegExp("(" + k + ")").test(format))format = format.replace(RegExp.$1,RegExp.$1.length == 1 ? o[k] :("00" + o[k]).substr(("" + o[k]).length));
      return format;
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
  @import "./assets/css/public.scss";
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
    .pagination-block{
      margin-top: 20px;
      text-align: right;
      .el-pagination{
        padding-top: 6px;
      }
    }
  }
</style>
