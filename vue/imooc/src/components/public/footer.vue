<template>
  <div class="imc-footer">
    <ul>
      <router-link to="/home" tag="li"><i class="icon-home"></i><p>首页</p></router-link>
      <router-link to="/courses" tag="li"><i class="icon-book"></i><p>课程</p></router-link>
      <router-link to="/download" tag="li"><i class="icon-cloud-download"></i><p>下载</p></router-link>
      <router-link to="/my" tag="li"><i class=" icon-user"></i><p>我的</p></router-link>
    </ul>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss" rel="stylesheet/scss">
.imc-footer{
  ul{
    width: 100%;
    background: #fff;
    border-top: 1px #ddd solid;
    position: fixed;
    bottom: 0;
    left:0;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 5px rgba(0,0,0,.5);
    z-index: 9999;
    li{
      flex: 1;
      height:100%;
      text-align: center;
      padding: 5px 0;
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
