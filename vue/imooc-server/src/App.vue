<template>
  <div id="app">
    <Row>
      <basic-top></basic-top>
    </Row>
    <Row class="main container">
      <Col span="4"><iv-menu></iv-menu></Col>
      <Col span="20" class="main-right">
      <Row><Breadcrumb></Breadcrumb></Row>
      <router-view></router-view>
      <router-view name="_home"></router-view>
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
  html,body{
    width: 100%;
    height: 100%;
    background-color: #333 !important;
    #app {
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
    }
  }

</style>
