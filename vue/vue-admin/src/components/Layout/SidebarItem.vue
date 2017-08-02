<template>
  <div>
    <template v-for="item in routes">
      <el-menu-item v-if="!item.children" :index="item.path"><i :class="item.icon" class="menu-icon"></i>{{item.name}}</el-menu-item>
      <el-submenu v-else :index="item.path">
        <template slot="title">
          <i :class="item.icon" class="menu-icon">
            <i class="path1"></i>
            <i class="path2"></i>
            <i class="path3"></i>
            <i class="path4"></i>
            <i class="path5"></i>
          </i>
        <span slot="title">{{item.name}}</span></template>
        <template v-for="child in item.children">
          <sidebar-item v-if="child.children" :routes="[child]"></sidebar-item>
          <el-menu-item v-else :index="item.path + '/' + child.path"><i :class="child.icon" class="menu-icon small"></i>{{child.name}}</el-menu-item>
        </template>
      </el-submenu>
    </template>
  </div>
</template>

<script>
  /*
  * ========================================================
  *  由于无法预知侧边栏到底是多少级的， 所有将该功能构造等递归组件
  *  递归组件的核心，重复调用该组件
  *  侧边栏2中状况
  *  1、有children子级
  *  2、没有children子级
  *  当没有子级的时候直接执行对应操作， 直到遇到有子级的情况后就开始递归
  *  即重新调用改组件，重新判断该数据有没有children子级
  * */
  export default {
    name: 'sidebar-item',
    props: {
      routes: {
        type: Array
      }
    },
    mounted () {

    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" type="text/scss">
  .side-bar-warps{
    .menu-icon{
      margin-right: 10px;
      font-size: 18px;
      position: relative;
      top: 2px;
      &.icon-japan{
        margin: 0;
      }
      &.icon-thailand, &.icon-philippines{
        margin-right: 5px;
      }
      &.icon--early-warning{
        margin: 0;
        position: relative;
        left: -5px;
      }
      &.icon-associated{
        margin: 0;
        position: relative;
        left: -8px;
      }
      &.icon-accounts{
        font-size: 22px;
        position: relative;
        left: -2px;
        margin-right: 4px;
      }
      &.icon-earth-other{
        font-size: 26px;
        margin: 0;
        position: relative;
        top: 4px;
      }
      small{
        font-size: 14px;
      }
    }
    &.el-menu--collapse>.el-menu-item span, &.el-menu--collapse>div>.el-submenu>.el-submenu__title span{
      height: 0;
      width: 0;
      overflow: hidden;
      visibility: hidden;
      display: inline-block;
    }
    &.el-menu--collapse>.el-menu-item>div.el-submenu__icon-arrow, &.el-menu--collapse>div>.el-submenu>.el-submenu__title .el-submenu__icon-arrow {
      display: none;
    }
    &.el-menu--collapse>.el-menu-item>div.menu-icon, &.el-menu--collapse>div>.el-submenu>.el-submenu__title .menu-icon {
      margin: 0;
      vertical-align: middle;
    }
    i{
      font-style: normal;
    }
  }

</style>
