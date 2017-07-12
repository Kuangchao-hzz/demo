<template>
  <div class="home">
    <div class="home-index" :style="{height: swipeContainerSize}">
      <scroller ref="containerSize">
        <div class="home-swipe">
          <swiper :options="swipeOption">
            <swiper-slide v-for="item in data.focusList" :key="item.id">
              <img :src="item.url">
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
        </div>
        <banner-tabs :tabs-data="data.buttonList"></banner-tabs>
        <area-list :area-list-data="data.destinationList"></area-list>
      </scroller>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
  /*
  * ===================================================
  * swipeOption:    vue-awesome-swiper 参数配置
  * ===================================================
  * */
  import areaList from './area-list.vue'
  import bannerTabs from './banner-tabs.vue'
  import API from '@/api/index'
  export default{
    data () {
      return {
        data: {},
        swipeOption: {
          pagination: '.swiper-pagination',
          paginationClickable: true
        }
      }
    },
    mounted () {
      this.get_HomeListData()
    },
    computed: {
      swipeContainerSize () {
        return this.$store.state.swipeContainerSize
      }
    },
    methods: {
      get_HomeListData () {
        let self = this
        API.get_HomeListData({
          countryId: 1
        }).then(function (response) {
          self.data = response.data
        }, function () {
          alert('服务器错误!')
        })
      }
    },
    components: {
      areaList,
      bannerTabs
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss">
  .home{
    width: 100%;
    height: 100%;
    .home-swipe{
      height: 180px;
      .swiper-container{
        height: 100%;
      }
      img{
        width:100%;
        height:100%;
      }
    }
  }
</style>

