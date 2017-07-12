<template>
  <mt-tabbar v-if="storeToggle" v-model="selected" :fixed="true" ref="footSize">
    <mt-tab-item id="home">
      <img  slot="icon" src="http://www.daoyoutalk.com/_test/daoyoutalk/img/icon/tab_homepage_s@2x.png">
      目的地
    </mt-tab-item>
    <mt-tab-item id="friendCircle">
      <img  slot="icon" src="http://www.daoyoutalk.com/_test/daoyoutalk/img/icon/tab_homepage_s@2x.png">
      旅游圈
    </mt-tab-item>
    <mt-tab-item id="plan">
      <img  slot="icon" src="http://www.daoyoutalk.com/_test/daoyoutalk/img/icon/tab_homepage_s@2x.png">
      锦囊
    </mt-tab-item>
    <mt-tab-item id="more">
      <img  slot="icon" src="http://www.daoyoutalk.com/_test/daoyoutalk/img/icon/tab_homepage_s@2x.png">
      百宝箱
    </mt-tab-item>
    <mt-tab-item id="my">
      <img  slot="icon" src="http://www.daoyoutalk.com/_test/daoyoutalk/img/icon/tab_homepage_s@2x.png">
      我的
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
    name: 'include-footer',
    data () {
      return {
        selected: this.getCurPath()
      }
    },
    computed: {
      storeToggle () {
        return this.$store.state.footToggle
      }
    },
    mounted () {
      if (this.storeToggle) {
        this.$store.state.defaultFootSize = this.$refs['footSize'].$el.getBoundingClientRect().height
      }
    },
    methods: {
      getCurPath () {
        var curPath = this.$route.path
        return curPath.slice(curPath.lastIndexOf('/') + 1, curPath.length)
      }
    },
    watch: {
      'selected' () {
        this.$router.push(this.selected)
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
  .mint-tabbar{
    box-shadow: 0 0 10px rgba(0,0,0,.5);
  }
</style>
