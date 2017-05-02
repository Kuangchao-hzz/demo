<template>
<div class="imc-courses">
  <div class="title">
    <h5>课程推荐</h5>
    <span>换一换</span>
  </div>
  <div class="content">
    <div class="courses-item">
      <div class="header">
        <span>Android</span>
      </div>
      <div class="body">
        <h5>自定义实现日历控件</h5>
        <div class="description">轻松掌握Android 自定义控件实现</div>
      </div>
    </div>
    <div class="courses-item">
      <div class="header">
        <span>Android</span>
      </div>
      <div class="body">
        <h5>自定义实现日历控件</h5>
        <div class="description">轻松掌握Android 自定义控件实现</div>
      </div>
    </div>
    <div class="courses-item">
      <div class="header">
        <span>Android</span>
      </div>
      <div class="body">
        <h5>自定义实现日历控件</h5>
        <div class="description">轻松掌握Android 自定义控件实现</div>
        <div class="people-num">
          <span>1369人学习</span>
        </div>
      </div>
    </div>
    <div class="courses-item">
      <div class="header">
        <span>Android</span>
      </div>
      <div class="body">
        <h5>自定义实现日历控件</h5>
        <div class="description">轻松掌握Android 自定义控件实现</div>
        <div class="people-num">
          <span>1369人学习</span>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default{

}
</script>

<style lang="scss" rel="stylesheet/scss">
.imc-courses{
  padding: 10px 0;
  background: #ddd;
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
    padding: 0 6px 10px 6px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    .courses-item{
      flex: 0 1 47%;
      background: #fff;
      border-radius: 5px;
      margin: 6px 0;
      box-shadow: 5px 5px 15px rgba(0,0,0,.3);
      overflow: hidden;
      .header{
        text-align: left;
        padding: 10px;
        font-size: 12px;
        background: url("../../../../static/img/courses_01.jpg") no-repeat center center;
        background-size: cover;
        color: #fff;
      }
      .body{
        text-align: left;
        padding: 10px 10px;
        h5{
          font-size: 14px;
          padding-bottom: 5px;
        }
        .description{
          font-size: 12px;
          color: #999;
          padding-bottom: 10px;
        }
        .people-num{
          overflow: hidden;
          span{
            float: left;
            color: #666;
            font-size: 12px;
          }
        }
      }
    }
  }
}
</style>
