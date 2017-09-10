<template>
  <div class="home-main">
    <scroller
    :on-refresh="refresh"
    :on-infinite="infinite">
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
          <router-link to="/home/_example" tag="li"><i></i><span>实战</span></router-link>
          <router-link to="/home/_path" tag="li"><i></i><span>路径</span></router-link>
          <router-link to="/home/_question" tag="li"><i></i><span>猿问</span></router-link>
          <router-link to="/home/_note" tag="li"><i></i><span>手记</span></router-link>
          <router-link to="/home/_more" tag="li"><i></i><span>发现</span></router-link>
        </ul>
      </div>
      <courses-recommend :random-recommend-data="randomRecommend"></courses-recommend>
    </scroller>
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import coursesRecommend from '@/components/pages/home/courses_recommend.vue'
import axios from '@/axios/index'
export default {
  data () {
    return {
      swiperOption: {
        autoplay: 3000,
        pagination: '.swiper-pagination',
        loop: true,
        autoplayDisableOnInteraction: false
      },
      randomRecommend: 1
    }
  },
  mounted () {
    axios.test()
  },
  methods: {
    refresh: function (done) {
      done(true)
    },
    infinite: function (done) {
      if (this.randomRecommend > 10) {
        done(true)
        return
      }
      setTimeout(() => {
        this.randomRecommend += 4
        done()
      }, 1500)
    }
  },
  components: {
    coursesRecommend
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" rel="stylesheet/scss" type="text/scss">
.home-main{
  width: 100%;
  height: 100%;
  position: relative;
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
        &:nth-of-type(3) i{
          background: url("../../../../static/img/imc_tab_1.png") center center;
          background-size: cover;

        }
        &:nth-of-type(4) i{
          background: url("../../../../static/img/imc_tab_2.png") center center;
          background-size: cover;
        }
        &:nth-of-type(5) i{
          background: url("../../../../static/img/imc_tab_1.png") center center;
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

  .pull-to-refresh-layer{
    height: 55px !important;
    margin-top: -55px !important;
  }
  .loading-layer{
    height: 40px !important;
  }
  .fade-enter-active {
    transition: all .3s ease;
  }
  .fade-leave-active {
    transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .fade-enter, .fade-leave-active {
    transform: translateX(10px);
    opacity: 0;
  }
}


</style>
