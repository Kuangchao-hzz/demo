<template>
  <div class="sidebar">
    <el-menu theme="dark"
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
          routes: asyncRouterMap
        }
    },
    mounted () {

    },
    components: {
      sidebarItem
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" type="text/scss">
  .sidebar{
    display: block;
    position: absolute;
    overflow: hidden;
    width: 180px;
    left: 0;
    top: 70px;
    bottom:0;
    z-index: 1;
    background: #2E363F;
    >.el-menu{
      width: 197px;
      overflow-y: scroll;
      position: absolute;
      top: 0;
      right: -17px;
    }
  > ul {
      height:100%;
    }
  }
</style>
