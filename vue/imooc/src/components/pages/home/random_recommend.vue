<template>
  <div class="random-recommend">
    <div class="imc-courses-cards">
      <div class="title">
        <h5>猜你喜欢{{data}}</h5>
      </div>
      <div class="content">
        <div class="courses-item" v-for="item in data">
          <div class="header">
            <span>Android</span>
          </div>
          <div class="body">
            <h5>自定义实现日历控件</h5>
            <div class="description">轻松掌握Android 自定义控件实现</div>
          </div>
        </div>

      </div>
    </div>
  </div>

</template>

<script>

export default{
  data () {
    return {
      data: this.moreRandomRecommend
    }
  },
  props: ['moreRandomRecommend']
}
</script>

<style lang="scss" rel="stylesheet/scss">

</style>
