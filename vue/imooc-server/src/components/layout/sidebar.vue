<template>
  <div class="sidebar">
    <div class="sidebar">
      <Menu :theme="theme"
            :width="width"
            :open-names="openMenu.open"
            :active-name="openMenu.active"
            :accordion="accordion"
            @on-select="_handlerRouter"
      >
        <Submenu name="home">
          <template slot="title">
            <Icon type="ios-paper"></Icon>
            首页管理
          </template>
          <Menu-item name="/home/_example">实战</Menu-item>
          <Menu-item name="/home/_path">路径</Menu-item>
          <Menu-item name="/home/_question">猿问</Menu-item>
          <Menu-item name="/home/_note">手记</Menu-item>
          <Menu-item name="/home/_more">发现</Menu-item>
        </Submenu>
        <Submenu name="courses">
          <template slot="title">
            <Icon type="ios-people"></Icon>
            课程管理
          </template>
          <Menu-item name="/courses/_example">前端开发</Menu-item>
          <Menu-item name="/courses/_example">后端开发</Menu-item>
          <Menu-item name="/courses/_example">移动开发</Menu-item>
          <Menu-item name="/courses/_example">数据库</Menu-item>
          <Menu-item name="/courses/_example">云计算&大数据</Menu-item>
          <Menu-item name="/courses/_example">运维&测试</Menu-item>
          <Menu-item name="/courses/_example">UI设计</Menu-item>
        </Submenu>
        <Submenu name="download">
          <template slot="title">
            <Icon type="stats-bars"></Icon>
            下载管理
          </template>
        </Submenu>
        <Submenu name="my">
          <template slot="title">
            <Icon type="stats-bars"></Icon>
            我的
          </template>
          <Menu-item name="2-1">我的课程</Menu-item>
          <Menu-item name="2-2">我的实战</Menu-item>
          <Menu-item name="2-2">我的猿问</Menu-item>
          <Menu-item name="2-2">我的手记</Menu-item>
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
        accordion: true,
        openMenu: {
          open: [this.$route.path.split('/')[1]],
          active: this.$route.path
        }
      }
    },
    methods: {
      _handlerRouter (name) {
        console.log(name)
        this.$router.push({
          path: name.split(',')[0]
        })
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
