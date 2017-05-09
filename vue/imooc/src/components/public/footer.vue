<template>
  <div class="imc-footer" v-if="a">
    <ul>
      <router-link to="/home" tag="li"><i class="icon-home"></i><p>首页</p></router-link>
      <router-link to="/courses" tag="li"><i class="icon-book"></i><p>课程</p></router-link>
      <router-link to="/download" tag="li"><i class="icon-cloud-download"></i><p>下载</p></router-link>
      <router-link to="/my" tag="li"><i class=" icon-user"></i><p>我的</p></router-link>
    </ul>
  </div>
</template>

<script>
  import bus from '@/assets/eventBus.js'
  export default {
    data () {
      return {
        a: true
      }
    },
    mounted () {
      var self = this
      bus.$on('off_foot', function (msg) {
        self.a = msg
        console.log(msg)
      })
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
.imc-footer{
  width: 100%;
  position: fixed;
  bottom: 0;
  left:0;
  ul{
    background: #fff;
    border-top: 1px #ddd solid;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 5px rgba(0,0,0,.5);
    z-index: 9999;
    li{
      flex: 1;
      height:100%;
      text-align: center;
      padding: 6px 0;
      i{
        font-size: 24px;
      }
      p{
        font-size: 12px;
        padding-top: 5px;
      }
      &.router-link-active{
        color: #f60;
      }
    }
  }
}
</style>
