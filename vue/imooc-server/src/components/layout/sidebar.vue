<template>
  <div class="sidebar">
    <div class="sidebar">
      <Menu :theme="theme"
            :width="width"
            :open-names="openMenu.open"
            :active-name="openMenu.active"
            @on-select="_handlerRouter"
      >
        <Submenu name="home">
          <template slot="title">
            <Icon type="ios-paper"></Icon>
            主页(HOME)
          </template>
          <Menu-item name="/home">主页1</Menu-item>
          <Menu-item name="/home/_home">主页2</Menu-item>
          <Menu-item name="/home/_home_">主页3</Menu-item>
        </Submenu>
        <Submenu name="2">
          <template slot="title">
            <Icon type="ios-people"></Icon>
            用户管理
          </template>
          <Menu-item name="2-1">新增用户</Menu-item>
          <Menu-item name="2-2">活跃用户</Menu-item>
        </Submenu>
        <Submenu name="3">
          <template slot="title">
            <Icon type="stats-bars"></Icon>
            统计分析
          </template>
          <Menu-group title="使用">
            <Menu-item name="3-1">新增和启动</Menu-item>
            <Menu-item name="3-2">活跃分析</Menu-item>
            <Menu-item name="3-3">时段分析</Menu-item>
          </Menu-group>
          <Menu-group title="留存">
            <Menu-item name="3-4">用户留存</Menu-item>
            <Menu-item name="3-5">流失用户</Menu-item>
          </Menu-group>
        </Submenu>
      </Menu>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        theme: 'light',
        width: '100%',
        openMenu: {
          open: ['home'],
          active: '/home'
        }
      }
    },
    methods: {
      _handlerRouter (name) {
        this.$router.push(name)
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
.sidebar{
  background: #fff;
  box-shadow: 5px 5px 5px rgba(0,0,0,.2);
}
</style>
