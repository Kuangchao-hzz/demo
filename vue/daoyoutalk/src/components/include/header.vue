<template>
  <mt-header v-if="storeToggle" fixed :title="getHeadTitle" ref="headSize">
    <router-link to="/" slot="left">
      <mt-button icon="back">返回</mt-button>
    </router-link>
  </mt-header>
</template>

<script>
export default{
  name: 'include-header',
  data () {
    return {

    }
  },
  computed: {
    storeToggle () {
      return this.$store.state.headToggle
    },
    getHeadTitle () {
      return this.$route.name
    }
  },
  mounted () {
    if (this.storeToggle) {
      this.$store.state.defaultHeadSize = this.$refs['headSize'].$el.getBoundingClientRect().height
    }
  },
  methods: {

  },
  beforeRouteEnter () {
    console.log(111)
  }
}
</script>

<style lang="scss" rel="stylesheet/scss">
  .mint-header.is-fixed{
    z-index: 9999;
  }
</style>
