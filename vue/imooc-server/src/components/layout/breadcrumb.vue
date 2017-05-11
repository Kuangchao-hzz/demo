<template>
  <Breadcrumb :separator="separator">
    <Breadcrumb-item href="/">Home</Breadcrumb-item>
    <Breadcrumb-item href="/components/breadcrumb">Components</Breadcrumb-item>
    <Breadcrumb-item>Breadcrumb</Breadcrumb-item>
  </Breadcrumb>
</template>
<script>
  export default {
    data () {
      return {
        separator: '\\'
      }
    }
  }
</script>


<style lang="scss" rel="stylesheet/scss">
  .ivu-breadcrumb{
    padding: 5px 20px;
    background: #fff;
    box-shadow: 5px 5px 5px rgba(0,0,0,.2);
    .ivu-breadcrumb-item-separator{
      color: #ff5500;
      margin: 0;
    }
  }
</style>
