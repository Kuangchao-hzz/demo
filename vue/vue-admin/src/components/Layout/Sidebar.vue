<template>
  <div class="sidebar">
    <el-menu theme="dark"
             mode="vertical"
             :unique-opened="true"
             :default-active="this.$route.path"
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
          routes: this.$store.getters.addRouters
        }
    },
    computed: {

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
    overflow: hidden;
    width: 180px;
    height: 100%;
    z-index: 9999;
    position: absolute;
    left:0;
    top: 0;
    background: #2E363F;
    >.el-menu{
      width: 197px;
      overflow-y: scroll;
      position: absolute;
      top: 0;
      left: 0;
    }
  > ul {
      height:100%;
    }
  }
</style>
