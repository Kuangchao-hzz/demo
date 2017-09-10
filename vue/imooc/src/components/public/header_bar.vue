<!--<template>-->
  <!--<div class="header-bar">-->
    <!--{{ headerLeftItemHandle(calcHeaderData) }}-->
    <!--<h1>{{ calcHeaderData.name }}</h1>-->
    <!--<i :class="headerRightItemHandle(calcHeaderData)"></i>-->
  <!--</div>-->
<!--</template>-->

<script>
  export default {
    data () {
      return {
        icon: {
          left: '',
          right: ''
        },
        headerBar_config: {
          title: '慕课网',
          _handler_icon1: this._search,
          _handler_icon2: this._goBack
        }
      }
    },
    render (createElement) {
      return createElement('div', {
        'class': 'header-bar'
      }, [
        createElement('i', {
          'class': this.calcHeaderData.leftIcon,
          on: {
            click: this.calcHeaderData.handlerLeftItem || this._log
          }
        }),
        createElement('h1', this.calcHeaderData.name),
        createElement('i', {
          'class': this.calcHeaderData.rightIcon,
          on: {
            click: this.calcHeaderData.handlerRightItem || this._log
          }
        })
      ])
    },
    props: ['headerBarConfig'],
    computed: {
      calcHeaderData () {
        let $data = this.$route
        let headObject = Object.assign({
          leftIcon: '',
          rightIcon: '',
          handlerLeftItem: null,
          handlerRightItem: null
        }, $data)
        // 标题搜索功能
        if ($data && $data.meta && $data.meta.leftItem === 'search') {
          headObject = Object.assign(headObject, {
            leftIcon: 'icon-search'
          })
        }
        // 标题消息通知功能
        if ($data && $data.meta && $data.meta.rightItem === 'envelope') {
          headObject = Object.assign(headObject, {
            rightIcon: 'icon-envelope-alt'
          })
        }
        // 标题返回功能
        if ($data && $data.meta && $data.meta.leftItem === 'back') {
          headObject = Object.assign(headObject, {
            leftIcon: 'icon-angle-left',
            handlerLeftItem: this._goBack
          })
        }
        return headObject
      }
    },
    methods: {
      _log () {

      },
      _goBack () {
        this.$router.go(-1)
      },
      _search () {

      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
  .header-bar{
    padding: 8px 15px;
    height: 24px;
    background: #5b164f;
    text-align: center;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1{
      color: #fff;
    }
    i{
      width:25px;
      color: #fff;
      &:nth-of-type(1){
        font-size: 18px;
        text-align: left;
        &.icon-angle-left{
          font-size: 24px;
        }
      }
      &:nth-of-type(2){
        font-size: 18px;
      }
    }
  }
</style>
