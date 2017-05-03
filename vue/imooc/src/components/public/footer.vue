<template>
<ul class="imc-footer">
  <router-link to="/home" tag="li"><span>首页</span></router-link>
  <router-link to="/courses" tag="li"><span>课程</span></router-link>
  <router-link to="/download" tag="li"><span>下载</span></router-link>
  <router-link to="/my" tag="li"><span>我的</span></router-link>
</ul>
</template>

<script>
  export default {

  }
</script>

<style lang="scss" rel="stylesheet/scss">
.imc-footer{
  height:55px;
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
    span{
     line-height: 55px;
      font-size: 14px;
    }
    &.router-link-active{
      color: #f60;
    }
  }
}
</style>
