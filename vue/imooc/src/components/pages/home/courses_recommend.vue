<template>
  <div class="imc-content">
    <courses-classify-cards :basis-course="basisCourse[0]"></courses-classify-cards>
    <courses-classify-items></courses-classify-items>
    <courses-classify-cards :basis-course="basisCourse[1]"></courses-classify-cards>
    <courses-classify-items></courses-classify-items>
    <teacher-recommend></teacher-recommend>
    <random-recommend></random-recommend>
  </div>

</template>

<script>
import coursesClassifyCards from '../../common/courses-classify-cards.vue'
import coursesClassifyItems from '../../common/courses-classify-items.vue'
import teacherRecommend from './teachers_recommend.vue'
import randomRecommend from './random_recommend.vue'
export default{
  data () {
    return {
      basisCourse: [
        {
          title: '课程推荐',
          change: true
        },
        {
          title: '实战推荐',
          change: true
        }
      ]
    }
  },
  components: {
    coursesClassifyCards,
    coursesClassifyItems,
    teacherRecommend,
    randomRecommend
  }
}
</script>

<style lang="scss" rel="stylesheet/scss">
  .imc-content{
    .title{
      color: #666;
    }
  }

</style>
