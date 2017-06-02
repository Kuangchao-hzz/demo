<template>
  <div>
    <scroller>
      <div class="home-swipe">
        <swiper :options="swipeOption">
          <swiper-slide><img src="http://www.daoyoutalk.com/images/banner/1_new.png"></swiper-slide>
          <swiper-slide><img src="http://www.daoyoutalk.com/images/banner/2_new.png"></swiper-slide>
          <swiper-slide><img src="http://www.daoyoutalk.com/images/banner/3_new.png"></swiper-slide>
          <swiper-slide><img src="http://www.daoyoutalk.com/images/banner/4_new.png"></swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
      <banner-tabs :tabs-data="TabsData"></banner-tabs>
      <area-list :area-list-data="areaListData"></area-list>
      <router-view></router-view>
    </scroller>
  </div>
</template>

<script>
  /*
  * ===================================================
  *
  * swipeOption:    vue-awesome-swiper 参数配置
  * areaListData:   城市列表数据
  *
  * ===================================================
  * */
  import areaList from './area-list.vue'
  import bannerTabs from './banner-tabs.vue'
  export default{
    data () {
      return {
        IndexData: {},
        TabsData: {},
        areaListData: {},
        swipeOption: {
          pagination: '.swiper-pagination',
          paginationClickable: true
        }
      }
    },
    mounted () {
      this.getPlaceData()
      this.$axios.post('http://www.daoyoutalk.com/api.php/apiHome/getFocusFor34', {
        countryId: '1'
      })
        .then(function (response) {
          console.log(response)
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    methods: {
      getPlaceData: function () {
        this.$axios.get('./static/json/data.json').then((response) => {
          this.IndexData = response.data.focusList
          this.TabsData = response.data.buttonList
          this.areaListData = response.data.destinationList
        }, () => {
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
</style>

