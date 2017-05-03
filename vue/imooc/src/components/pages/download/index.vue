<template>
  <courses-classify-cards :basis-course="basisCourse"></courses-classify-cards>
</template>

<script>
  import coursesClassifyCards from '../../common/courses-classify-cards.vue'
  export default{
    data () {
      return {
        basisCourse: {
          title: '课程推荐',
          change: false
        }
      }
    },

    components: {
      coursesClassifyCards
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">

</style>
