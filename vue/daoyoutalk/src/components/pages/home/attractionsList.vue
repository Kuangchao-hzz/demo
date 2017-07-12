<template>
  <div class="home-attractions">
    <HzzSelect>
      <HzzOption v-for="item in options.value" :label="item"></HzzOption>
    </HzzSelect>
    <scroller ref="containerSize" class="scroll-warp">
      <div class="attractions-list" ref="attractions-list">
        <p v-for="(item, index) in 20" :key="index">{{ item + ' _ ' + index }}</p>
      </div>
    </scroller>
  </div>

</template>

<script>

  export default{
    data () {
      return {
        defaultBodySize: this.$store.state.defaultBodySize,
        selectStyle: {
          'margin-top': '40px'
        },
        options: {
          value: ['日本', '富士山']
        }
      }
    },
    mounted () {

    },
    methods: {
      initContainer () {
        this.$refs['attractions-list'].style.height = this.$store.state.defaultBodySize - this.$store.state.defaultHeadSize + 'px'
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
  .home-attractions{
    width: 100%;
    height: 100%;
    background: #ddd;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
    .scroll-warp{
      background: #fff;
      .attractions-list{
        padding-top: 40px;
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
      }
    }

  }
</style>
