<template>
  <div class="sidebar">
    <el-radio-group class="sidebar-switch" v-model="isCollapse" style="margin-bottom: 20px;">
      <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group>
    <el-menu theme="dark"
             :unique-opened="true"
             :default-active="realTime_currentPath"
             :default-openeds="[]"
             :collapse="isCollapse"
             class="side-bar-warps"
             router>
      <sidebarItem :routes="routes"></sidebarItem>
    </el-menu>
  </div>

</template>

<script>
  import sidebarItem from './SidebarItem'
  import {asyncRouterMap} from '../../router/index'
  export default {
    data () {
        return {
          routes: this.$store.getters.addRouters,
          currentPath: this.$route.path,
          isCollapse: false
        }
    },
    computed: {
      realTime_currentPath () {
        console.log(this.currentPath)
        return this.currentPath
      }
    },
    mounted () {

    },
    watch: {
      isCollapse () {
        if (this.isCollapse) {
          this.currentPath = '/aaa'
          console.log()
        } else {
          this.currentPath = this.$route.path
        }
      }
    },
    components: {
      sidebarItem
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" type="text/scss">
  .sidebar{
    background-color: #324157;
    .el-menu{
      width: 200px;
      min-width: 200px;
      &.el-menu--collapse{
        width: 64px;
        min-width: 64px;
      }
    }
    .sidebar-switch{
      width: 120px;
      position: absolute;
      bottom: 0;
      left: -116px;
      z-index: 8999;
      opacity: 1;
      transition: all .5s;
      &:hover{
        left: 0;
        opacity: 1;
      }
    }
  }
</style>
