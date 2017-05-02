<template>
<ul class="imc-footer">
  <li><span>首页</span></li>
  <li><span>课程</span></li>
  <li><span>下载</span></li>
  <li><span>我的</span></li>
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
  li{
    flex: 1;
    height:100%;
    text-align: center;
    span{
     line-height: 55px;
      font-size: 14px;
    }
  }
}
</style>
