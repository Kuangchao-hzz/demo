<template>
  <div class="header container">
    <Row class="layout-ceiling">
      <Col span="4">
      <div class="layout-logo">vue-iView后台系统</div>
      </Col>
      <Col span="20">
        <div class="layout-ceiling-main">
          <a href="#">注册登录</a> |
          <a href="#">帮助中心</a> |
          <a href="#">安全中心</a> |
          <a href="#">服务大厅</a>
        </div>
      </Col>
    </Row>
  </div>
</template>

<script>
export default {

}
</script>
<style lang="scss" rel="stylesheet/scss">
  .header{
    border-bottom:1px #fff solid;
    .layout-ceiling{
      padding: 10px 0;
      overflow: hidden;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .layout-logo{
        width: 100%;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        line-height: 30px;
        color: #fff;
        text-align: center;
        font-size: 18px;
      }
      .layout-ceiling-main{
        text-align: right;
        a{
          color: #9ba7b5;
        }
      }
    }
  }

</style>
