<template>
  <div>
    <Row>
      <basic-top></basic-top>
    </Row>
    <Row class="main container">
      <Col span="4"><iv-menu></iv-menu></Col>
      <Col span="20" class="main-right">
      <Row><Breadcrumb></Breadcrumb></Row>
      <router-view></router-view>
      </Col>
    </Row>
  </div>
</template>

<script>
  import basicTop from '@/components/layout/header'
  import ivMenu from '@/components/layout/sidebar'
  import Breadcrumb from '@/components/layout/Breadcrumb'
  export default {
    name: 'app',
    components: {
      ivMenu,
      basicTop,
      Breadcrumb
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
  .container{
    padding: 0 200px;
  }
  .main{
    margin-top: 20px;
    .main-right{
      padding-left: 15px;
      >div{

      }

    }
  }
</style>
