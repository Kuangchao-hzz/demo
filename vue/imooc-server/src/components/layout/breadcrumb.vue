<template>
  <Breadcrumb :separator="separator">
    <Breadcrumb-item href="/">Home</Breadcrumb-item>
    <Breadcrumb-item href="/">{{this.$route.name}}</Breadcrumb-item>
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
    border-radius: 5px;
    .ivu-breadcrumb-item-separator{
      color: #000;
      margin: 0;
    }
  }
</style>
