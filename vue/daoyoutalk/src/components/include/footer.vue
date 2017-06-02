<template>
  <mt-tabbar v-model="selected" :fixed="true">
    <mt-tab-item id="目的地">
      <router-link to="/home" tag="div">目的地</router-link>
    </mt-tab-item>
    <mt-tab-item id="旅游圈">
      <router-link to="/friendCircle" tag="div">旅游圈</router-link>
    </mt-tab-item>
    <mt-tab-item id="锦囊">
      <router-link to="/plan" tag="div">锦囊</router-link>
    </mt-tab-item>
    <mt-tab-item id="百宝箱">
      <router-link to="/more" tag="div">百宝箱</router-link>
    </mt-tab-item>
    <mt-tab-item id="我的">
      <router-link to="/my" tag="div">我的</router-link>
    </mt-tab-item>
  </mt-tabbar>
</template>

<script>
  /*
   * ===================================================
   *
   * fixed:           固定在页面底部（false）
   * defaultIndex:    初始显示的轮播图的索引
   * stopPropagation: 是否在 touchstart 事件触发时阻止冒泡
   * continuous:      是否可以循环播放
   *
   * ===================================================
   * */
  export default {
    data () {
      return {
        selected: '目的地'
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">

</style>
