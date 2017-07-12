<template>
  <div>
    <template v-for="item in routes">
      <el-menu-item v-if="!item.children" :index="item.path"><i :class="item.icon" class="menu-icon"></i>{{item.name}}</el-menu-item>
      <el-submenu v-else :index="item.path">
        <template slot="title"><i :class="item.icon" class="menu-icon"></i>{{item.name}}</template>
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

<style lang="scss" rel="stylesheet/scss" type="text/scss" scope>
  .menu-icon{
    margin-right: 10px;
    font-size: 18px;
    position: relative;
    top: 2px;
    small{
      font-size: 14px;
    }
  }
</style>
