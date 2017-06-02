<template>
  <div class="banner-tabs">
    <ul>
      <li class="tab-item" v-for="tab in tabsData">
        <img :src="tab.image" width="30" height="30">
        <span>{{ tab.name }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default{
    props: {
      tabsData: {}
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
  .banner-tabs{
    overflow: hidden;
    padding: 5px 10px;
    ul{
      width: 100%;
      padding-top: 10px;
      display: flex;
      justify-content: space-between;
      li{
        text-align: center;
        img{
          display: inline-block;
        }
        span{
          display: block;
          font-size:14px;
          padding-top: 5px;
        }
      }
    }
  }
</style>
