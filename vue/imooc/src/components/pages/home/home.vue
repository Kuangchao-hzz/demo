<template>
  <div>
    <div class="imc-swiper">
      <swiper :options="swiperOption">
        <swiper-slide><img src="http://img.mukewang.com/590369df0001041812000460.jpg"></swiper-slide>
        <swiper-slide><img src="http://img.mukewang.com/5903688d000141fd12000460.jpg"></swiper-slide>
        <swiper-slide><img src="http://img.mukewang.com/59036a530001aa2912000460.jpg"></swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <div class="imc-tabs">
      <ul>
        <li><i></i><span>实战</span></li>
        <li><i></i><span>路径</span></li>
        <li><i></i><span>猿问</span></li>
        <li><i></i><span>手记</span></li>
        <li><i></i><span>发现</span></li>
      </ul>
    </div>
    <imc-courses></imc-courses>
    <imc-footer></imc-footer>
  </div>
</template>

<script>
import Courses from './courses_recommend.vue'
import Footer from './../../public/footer.vue'
export default {
  data () {
    return {
      swiperOption: {
        autoplay: 3000,
        pagination: '.swiper-pagination',
        autoplayDisableOnInteraction: false
      }
    }
  },
  components: {
    imcCourses: Courses,
    imcFooter: Footer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" rel="stylesheet/scss">
@import "../../../../static/css/reset.scss";
  .imc-swiper{
    height:140px;
    width: 100%;
    >div{
      height: 100%;
      width: 100%;
      .swiper-pagination{
        text-align: right;
      }
      .swiper-pagination-bullet-active{
        background: #fff;
      }
      img{
        width: 100%;
        height:100%;
      }
    }
  }
  .imc-tabs{
    padding: 10px 0;
    ul{
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      li{
        flex: 1;
        text-align: center;
        i{
          width: 50px;
          height:40px;
          display: inline-block;
        }
        &:nth-of-type(1) i{
          background: url("../../../../static/img/imc_tab_1.png") center center;
          background-size: cover;

        }
        &:nth-of-type(2) i{
          background: url("../../../../static/img/imc_tab_2.png") center center;
          background-size: cover;
        }
        span{
          display: block;
          font-size: 14px;
          padding-top: 5px;
        }
      }
    }
  }

</style>
