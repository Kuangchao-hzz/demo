<template>
  <div class="courses-category">
    <div class="course-type">
      <h5>前端开发</h5>
      <div class="course-content">
        <div class="course-item" v-for="item in 10">
          <i class="icon-laptop"></i>
          <p>HTML/CSS</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style lang="scss" rel="stylesheet/scss">
.courses-category{
  .course-type{
    border-bottom: 8px #ddd solid;
    h5{
      font-size: 15px;
      color: #999;
      padding: 20px 0 10px 20px;
    }
    .course-content{
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      padding: 10px 0;
      .course-item{
        width: 33%;
        text-align: center;
        i{
          font-size: 36px;
          color: cornflowerblue;
        }
        p{
          font-size: 12px;
          font-weight: 600;
          padding: 5px 0 15px 0;
        }
      }
    }

  }
}
</style>
