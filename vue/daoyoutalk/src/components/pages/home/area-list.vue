<template>
  <div class="area-list">
    <div class="area-item" v-for="area in areaListData">
      <div class="area-title">{{ area.areaName }}</div>
      <div class="area-item-list" v-for="place in area.cityList" @click="addActive(place.id)" :class="{ 'active': place.id == active  }">
        <div class="area-pic"><img :src="place.image" width="100%" height="100%"></div>
        <div class="area-name">{{ place.name }}</div>
        <div class="area-tags">
          <span v-show="place.viewNums != 0">{{ place.viewNums }}个景点</span>
          <span v-show="place.viewNums != 0"> <i>·</i> {{ place.recordNums }}份解说</span>
          <span v-show="place.restaurantNums != 0"> <i>·</i> {{ place.restaurantNums }}家美食</span>
        </div>
        <div class="area-bg"></div>
        <div class="area-btn">
          <div class="btn-item animated bounceIn" v-if="place.button.slice(0,1) == 1">
            <img src="http://daoyoutalk.com/_test/daoyoutalk/img/icon/find_pot@2x.png">
          </div>
          <div class="btn-item animated bounceIn" v-if="place.button.slice(1,2) == 1">
            <img src="http://daoyoutalk.com/_test/daoyoutalk/img/icon/go_shopping@2x.png">
          </div>
          <div class="btn-item animated bounceIn" v-if="place.button.slice(2,3) == 1">
            <img src="http://daoyoutalk.com/_test/daoyoutalk/img/icon/lookingfor_food@2x.png">
          </div>
          <div class="btn-item animated bounceIn" v-if="place.button.slice(4,5) == 1">
            <img src="http://daoyoutalk.com/_test/daoyoutalk/img/icon/rent_kimono@2x.png">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    data: function () {
      return {
        active: null
      }
    },
    props: {
      areaListData: {}
    },
    methods: {
      addActive: function (index) {
        this.active = index
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
  $btnWidth:65px;$btnHeight:65px;
  .area-list{
    overflow: hidden;
    .area-item{
      .area-title{
        line-height: 34px;
        padding-left: 20px;
        position:relative;
        &:after{
          content: '';
          display: block;
          width: 6px;
          height:15px;
          background: #f60;
          position: absolute;
          left:10px;
          top:10px;
        }
      }
      .area-item-list{
        position: relative;
        margin-bottom: 10px;
        .area-pic{
          padding: 0 10px;
          overflow: hidden;
          transition: all 0.5s;
          img{
            border-radius: 5px;
          }
        }
        .area-name{
          color: #fff;
          font-size: 18px;
          padding:0 10px 10px 10px;
          position: absolute;
          left: 50%;
          top: 40%;
          z-index: 99;
          -webkit-transform: translate(-50%,-50%);
          -moz-transform: translate(-50%,-50%);
          -ms-transform: translate(-50%,-50%);
          -o-transform: translate(-50%,-50%);
          transform: translate(-50%,-50%);
          &:after{
            content: '';
            display: block;
            width: 100%;
            position: absolute;
            left:0;
            bottom: 0;
            border: 1px solid #fff;
            -webkit-transform: scaleY(.5);
            -moz-transform: scaleY(.5);
            -ms-transform: scaleY(.5);
            -o-transform: scaleY(.5);
            transform: scaleY(.5);
          }
        }
        .area-tags{
          color: #fff;
          width: 100%;
          text-align: center;
          position: absolute;
          left:50%;
          top:52%;
          z-index: 99;
          -webkit-transform: translate(-50%,-50%);
          -moz-transform: translate(-50%,-50%);
          -ms-transform: translate(-50%,-50%);
          -o-transform: translate(-50%,-50%);
          transform: translate(-50%,-50%);
          i{
            font-size: 34px;
            position: relative;
            top: 5px;
          }
        }
        .area-bg{
          width: 0;
          height: 0;
          display: block;
          transition: all 0.5s 0.2s;
          border-radius: 5px;
          position: absolute;
          left:50%;
          top:50%;
          z-index: 98;
          background: rgba(0,0,0,0);
          -webkit-transform: translate(-50%,-50%);
          -moz-transform: translate(-50%,-50%);
          -ms-transform: translate(-50%,-50%);
          -o-transform: translate(-50%,-50%);
          transform: translate(-50%,-50%);
        }
        .area-btn{
          width: 85%;
          height: $btnHeight;
          display: flex;
          flex-direction: row;
          justify-content: space-around;
          position: absolute;
          left:50%;
          top:50%;
          z-index: 9999;
          transform: translate(-50%,-50%);
          .btn-item{
            width: $btnWidth;
            height: $btnHeight;
            overflow: hidden;
            flex: auto 0 0;
            border-radius: 50%;
            display: none;
            img{
              width: 100%;
              height:100%;
            }
          }
        }
        &.active .area-btn{
          width: 85%;
          height: $btnHeight;
          display: flex;
          flex-direction: row;
          justify-content: space-around;
          position: absolute;
          left:50%;
          top:50%;
          z-index: 9999;
          transform: translate(-50%,-50%);
          .btn-item{
            width: $btnWidth;
            height: $btnHeight;
            overflow: hidden;
            display: block;
            flex: auto 0 0;
            border-radius: 50%;
            img{
              width: 100%;
              height:100%;
            }
          }
        }
        &.active .area-bg{
          width: 100%;
          height:98%;
          display: block;
          position: absolute;
          border-radius: 5px;
          left:50%;
          top:49%;
          z-index: 98;
          background: rgba(0,0,0,.5);
          -webkit-transform: translate(-50%,-50%);
          -moz-transform: translate(-50%,-50%);
          -ms-transform: translate(-50%,-50%);
          -o-transform: translate(-50%,-50%);
          transform: translate(-50%,-50%);
        }
        &.active .area-pic{
          padding: 0 0;
        }
        &:last-child{
          margin-bottom: 0;
        }
      }
    }
  }
</style>
