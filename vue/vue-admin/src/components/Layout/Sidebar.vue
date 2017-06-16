<template>
  <div class="sidebar">
    <el-menu :default-active="this.$route.path"
             theme="dark"
             class="el-menu-vertical-demo" unique-opened router>
      <template v-for="item in items">
        <template v-if="item.subs">
          <el-submenu :index="item.index">
            <template slot="title"><i :class="item.icon"></i>{{ item.title }}</template>
            <el-menu-item v-for="(subItem,i) in item.subs" :key="i" :index="subItem.index">{{ subItem.title }}
            </el-menu-item>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item :index="item.index">
            <i :class="item.icon"></i>{{ item.title }}
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script>
  import sidebarItem from './SidebarItem'
  export default {
    data () {
        return {
          items: [
            {
              icon: 'el-icon-menu',
              index: '1',
              title: '前台组',
              subs: [
                {
                  index: '/visa/index',
                  title: '签证管理'
                },
                {
                  index: '/visa/express',
                  title: '快递管理'
                }
              ]
            }
          ]
        }
    },
    mounted () {
      console.log(this.$route.path)
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
