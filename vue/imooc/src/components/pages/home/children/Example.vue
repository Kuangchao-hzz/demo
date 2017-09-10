<template>
    <div class="tab-example">
      <scroller
        :on-refresh="refresh">
        <div class="imc-swiper">
          <swiper :options="swiperOption">
            <swiper-slide><img src="http://img.mukewang.com/590c5e220001a6b112000460.jpg"></swiper-slide>
            <swiper-slide><img src="http://img.mukewang.com/59112417000111f012000460.jpg"></swiper-slide>
            <swiper-slide><img src="http://img.mukewang.com/59036a530001aa2912000460.jpg"></swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
        </div>
        <div class="IT-classification">
          <div class="classify-item"
               v-for="(item, index) in tabs"
               @click="isActive(index)" :class="{ active: index == active }"
          >
            {{ item.classify }}
          </div>
        </div>
        <div class="example-list-warp">
          <div class="example-item" v-for="(item, index) in 20">
            <div class="pic">

            </div>
            <div class="description">
              <h5>webApp书城整站开发{{index}}</h5>
              <p>HTML5、 Vue.js、 zepto、 koa框架综合运用</p>
              <p>
                <span>￥ 128.00</span>
                <span>2440人学习</span>
              </p>
            </div>
          </div>
        </div>
      </scroller>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        swiperOption: {
          autoplay: 3000,
          pagination: '.swiper-pagination',
          autoplayDisableOnInteraction: false
        },
        active: 0,
        tabs: [
          {
            id: 0,
            classify: '全部'
          },
          {
            id: 1,
            classify: '前端开发'
          },
          {
            id: 2,
            classify: '后端语言'
          },
          {
            id: 3,
            classify: '移动开发'
          },
          {
            id: 4,
            classify: '数据库'
          },
          {
            id: 5,
            classify: '运维&测试'
          }
        ]
      }
    },
    mounted () {

    },
    methods: {
      refresh: function (done) {
        setTimeout(() => {
          done()
        }, 1500)
      },
      _$off_footer: function () {

      },
      isActive: function (id) {
        this.active = id
      }
    },
    components: {

    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
.tab-example{
  background: #fff;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left:0;
  .IT-classification{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: space-between;
    background: #fff;
    padding: 10px 15px;
    height: 58px;
    .classify-item{
      width:25%;
      border: 1px #999 solid;
      text-align: center;
      padding: 5px 0;
      font-size: 12px;
      border-radius: 12px;
      &.active{
        color: #fff;
        background: #5b390e;
      }
    }
  }
  $picWidth: 130px;
  .example-list-warp{
    overflow: hidden;
    padding: 0 15px;
    .example-item{
      padding: 15px 0;
      border-bottom: 1px #ddd solid;
      .pic{
        width: $picWidth;
        height: $picWidth * 0.6;
        float: left;
        background: #ddd;
        img{
          width: 100%;
          height: 100%;
        }
      }
      .description{
        padding-left: $picWidth + 15;
        text-align: left;
        line-height: 16px;
        h5{
          color: #333;
          font-size: 14px;
          margin-top: 5px;
        }
        p{
          font-size: 12px;
          color: #666;
          &:nth-of-type(1){
            padding: 5px 0;
          }
          &:nth-of-type(2){
            span{
              &:nth-of-type(1){
                color: red;
                padding-right: 25px;
              }
            }
          }
        }
      }
    }
  }
}

</style>
