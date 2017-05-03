<template>
<div class="teachers-recommend">
  <h5 class="title">慕课精英名师推荐</h5>
  <swiper class="teachers-swipers" :options="swiperOption">
    <swiper-slide v-for="item in 10">
      <div class="teacher-item">
        <div class="pic">
          <img src="../../../../static/img/test_avatar.png">
        </div>
        <p class="teacher-name">王福明</p>
        <p class="teacher-position">web前端工程师</p>
      </div>
    </swiper-slide>
  </swiper>
</div>
</template>

<script>
  export default {
    data () {
      return {
        swiperOption: {
          slidesPerView: 2.9,
          paginationClickable: true,
          spaceBetween: 15,
          slidesOffsetBefore: 15,
          slidesOffsetAfter: 15,
          freeMode: true
        }
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
  .teachers-recommend{
    padding: 10px 0;
    text-align: center;
    background: #ddd;
    .title{
      width: 100%;
      padding-top: 20px;
    }
    .teachers-swipers{
      padding: 20px 0;
      .swiper-wrapper{
        .swiper-slide{
          .teacher-item{
            text-align: center;
            border-radius: 5px;
            background: #fff;
            padding: 10px;
            overflow: hidden;
            box-shadow: 5px 5px 15px rgba(0,0,0,.3);
            .pic{
              width: 50px;
              height: 50px;
              display: inline-block;
              border-radius: 50%;
              overflow: hidden;
              img{
                width: 100%;
                height:100%;
              }
            }
            .teacher-name{
              font-size: 14px;
              color: #666;
              line-height: 24px;
            }
            .teacher-position{
              font-size: 12px;
              color: #999;
            }
          }
        }

      }
    }
  }
</style>
