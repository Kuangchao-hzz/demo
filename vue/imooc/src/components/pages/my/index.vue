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
        <ul>
          <li class="attention">
            <span>关注</span>
            <span>2</span>
          </li>
          <li class="fans">
            <span>粉丝</span>
            <span>2</span>
          </li>
          <li class="integral">
            <span>积分</span>
            <span>2</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="my-bar">
      <ul>
        <li>
          <i class="icon-tasks"></i>
          <p>我的课程</p>
        </li>
        <li>
          <i class="icon-desktop"></i>
          <p>我的实战</p>
        </li>
        <li>
          <i class="icon-question-sign"></i>
          <p>我的猿问</p>
        </li>
        <li>
          <i class="icon-tag"></i>
          <p>我的手机</p>
        </li>
      </ul>
    </div>
    <div class="my-body">
      <ul>
        <li>
          <i class="icon icon-eye-open"></i>
          <p>
            <span>历史记录</span>
            <i class="icon icon-angle-right"></i>
          </p>
        </li>
        <li>
          <i class="icon icon-book"></i>
          <p>
            <span>我的课表</span>
            <i class="icon icon-angle-right"></i>
          </p>
        </li>
        <li>
          <i class="icon icon-file-alt"></i>
          <p>
            <span>我的订单</span>
            <i class="icon icon-angle-right"></i>
          </p>
        </li>
        <li class="partition-end">
          <i class="icon icon-money"></i>
          <p>
            <span>优惠券</span>
            <i class="icon icon-angle-right"></i>
          </p>
        </li>
        <li>
          <i class="icon icon-lightbulb"></i>
          <p>
            <span>夜间模式</span>
            <i class="icon icon-angle-right"></i>
          </p>
        </li>
        <li>
          <i class="icon icon-cog"></i>
          <p>
            <span>设置</span>
            <i class="icon icon-angle-right"></i>
          </p>
        </li>
      </ul>
    </div>
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
  .partition-b{
    border-bottom: 5px #ddd solid;
  }

  .my-header{
    padding: 0 20px;
    overflow: hidden;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    background: #5b164f;
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
      padding: 30px 0;
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
    .bar{
      overflow: hidden;
      width: 100%;
      ul{
        display: flex;
        align-items: center;
        justify-content: space-between;
        li{
          flex: 1;
          font-size: 12px;
          text-align: center;
          padding: 15px 0;
          span{
            &:nth-of-type(1){
              color: #999;
            }
            &:nth-of-type(2){
              padding: 5px;
              color: #fff;
            }
          }
        }
      }
    }
  }
  .my-bar{
    @extend .partition-b;
    ul{
      overflow: hidden;
      display: flex;
      li{
        text-align: center;
        flex: 1 1 auto;
        padding: 20px 0;
        p{
          padding-top: 10px;
          font-size: 12px;
        }
      }
    }
  }
  .my-body{
    ul{
      overflow: hidden;
      li{
        display: flex;
        &:last-of-type{
          @extend .partition-b;
        }
        &.partition-end{
          @extend .partition-b;
        }
        >i{
          padding: 10px 20px;
        }
        p{
          flex: 1 1 auto;
          padding: 10px 0;
          border-bottom:1px #f1f1f1 solid;
          span{
            font-size: 14px;
            color: #666;
          }
          i{
            &:nth-of-type(1){
              float: right;
              padding-right: 20px;
              color: #999;
              font-size: 18px;
            }
          }
        }
      }
    }
  }
}
</style>
