<template>
  <div class="my-main">
    <div class="my-header">
      <div class="pic">
        <img src="../../../../static/img/test_avatar.png">
      </div>
      <div class="basis">
        <p class="nickname">nothing_hzz</p>
        <p class="description">
          <span>学习时长</span>
          <span>173小时</span>
          <i class="segmentation"></i>
          <span>经验</span>
          <span>3802</span>
        </p>
      </div>
      <div class="bar">
      </div>
    </div>
    <div class="my-bar"></div>
    <div class="my-body"></div>
  </div>
</template>

<script>
  export default{
    data () {
      return {

      }
    },
    components: {

    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
.my-main{
  background: #5b164f;
  .my-header{
    padding: 0 20px;
    overflow: hidden;
    display: flex;
    align-items: center;
    .pic{
      width: 60px;
      height:60px;
      overflow: hidden;
      border-radius: 50%;
      img{
        width:100%;
        height: 100%;
      }
    }
    .basis{
      margin-left: 15px;
      padding: 20px 0;
      .nickname{
        line-height: 20px;
        font-size: 14px;
        color: #fff;
      }
      .description{
        line-height: 20px;
        .segmentation{
          width: 1px;
          height:9px;
          transform: scaleX(0.5);
          background: #fff;
          display: inline-block;
          margin:0 10px;
        }
        span{
          font-size: 12px;
          color: #999;
          &:nth-of-type(odd){
            padding-right: 10px;
          }
        }
      }
    }

  }
  .my-bar{}
  .my-body{}
}
</style>
