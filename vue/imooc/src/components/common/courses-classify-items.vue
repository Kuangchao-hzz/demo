<template>
  <div class="imc-courses-items">
    <div class="title">
      <h5>职业路径</h5>
      <span>换一换</span>
    </div>
    <div class="content">
      <div class="occupation-item">
        <div class="body">
          <div class="pic">
            <img src="../../../static/img/courses_01.jpg">
          </div>
          <div class="description">
            <h5>HTML5与CSS3实现动态网页</h5>
            <p>带你通过系统学习，往常从“会做网页”到“做出好的动态网页”的蜕变。</p>
            <p>
              <span>24门课/1052人学习</span>
              <span>￥599.00</span>
            </p>
          </div>
        </div>
      </div>
      <div class="occupation-item">
        <div class="body">
          <div class="pic">
            <img src="../../../static/img/courses_01.jpg">
          </div>
          <div class="description">
            <h5>HTML5与CSS3实现动态网页</h5>
            <p>带你通过系统学习，往常从“会做网页”到“做出好的动态网页”的蜕变。</p>
            <p>
              <span>24门课/1052人学习</span>
              <span>￥599.00</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">

</script>

<style lang="scss" rel="stylesheet/scss">
  .imc-courses-items{
    padding: 10px 0;
    background: #fff;
    text-align: center;
    .title{
      padding: 10px 0;
      position: relative;
      text-align: center;
      h5{
        display: inline-block;
        color: #666;
      }
      span{
        font-size: 12px;
        color: #999;
        position: absolute;
        right: 10px;
        bottom: 10px;
      }
    }
    .content{
      overflow: hidden;
      padding: 0 15px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      .occupation-item{
        background: #fff;
        overflow: hidden;
        width: 100%;
        margin: 6px 0;
        .body{
          .pic{
            width: 85px;
            height:85px;
            float: left;
            img{
              width: 100%;
              height:100%;
            }
          }
          .description{
            margin-left: 100px;
            text-align: left;
            h5{
              font-size: 14px;
              line-height: 30px;
            }
            p{
              font-size: 12px;
              padding-bottom: 10px;
              &:nth-of-type(1){
                color: #666;
                line-height: 16px;
              }
              &:nth-of-type(2){
                color: #666;
                span{
                  float: left;
                  padding-right: 15px;
                }
              }
            }
          }
        }
      }
    }
  }
</style>
