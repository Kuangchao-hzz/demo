<template>
  <div class="wrapper">
    <v-head></v-head>
    <div class="content-group">
      <v-sidebar></v-sidebar>
      <div class="container" :style="dynamicStyle">
        <transition name="move" mode="out-in">
          <router-view></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
  import vHead from './Header.vue'
  import vSidebar from './Sidebar.vue'
  export default {
    data () {
      return {
        containerHeight: this.$store.getters.containerHeight
      }
    },
    computed: {
      dynamicStyle () {
        return {
          height: this.$store.getters.containerHeight + 'px'
        }
      }
    },
    mounted () {

    },
    components: {
      vHead,
      vSidebar
    }
  }
</script>

<style lang="scss" type="text/scss" rel="stylesheet/scss">
  // 设置比例
  .wrapper{
    width: 100%;
    height: 100%;
    background: #5a5050;
    .content-group{
      width: 100%;
      position: relative;
      top: -2px;
      overflow: hidden;
      .container{
        overflow: hidden;
        box-sizing: content-box;
        border-left: 200px solid transparent;
        border-top: 20px solid transparent;
        border-bottom: 20px solid transparent;
        border-right: 20px solid transparent;
        transition: all .5s;
        >div{
          height: 100%;
          .tabs-box{
            height: 100%;
            overflow: hidden;
            .el-tabs{
              height: 100%;
              overflow: hidden;
              .el-tabs__content{
                height: 100%;
                overflow: hidden;
              }
            }
          }
        }
      }
    }
  }
</style>
