<template>
  <div class="header-bar">
    <i :class="{
    'icon-angle-left': headerBar_config.icon.back ,
    'icon-search': headerBar_config.icon.search
    }" @click='headerBar_config._handler_icon1'
    ></i>
    <h1>{{headerBar_config.title}}</h1>
    <i :class="{
    'icon-envelope-alt': headerBar_config.icon.email
    }"></i>
  </div>
</template>

<script>
  import bus from '@/assets/eventBus.js'
  export default {
    data () {
      return {
        headerBar_config: {
          title: '慕课网',
          icon: {
            back: false,
            search: true,
            email: true
          },
          _handler_icon1: this._search,
          _handler_icon2: this._goBack
        }
      }
    },
    props: ['headerBarConfig'],
    watch: {
      '$route': 'header_bar'
    },
    created () {
      this.header_bar()
    },
    methods: {
      header_bar () {
        // icon: 'back', 'search', 'email'
        for (var i in this.headerBar_config.icon) {
          this.headerBar_config.icon[i] = false
        }
        switch (this.$route.name) {
          case 'home':
            this.headerBar_config.title = '慕课网'
            this.headerBar_config.icon.search = true
            this.headerBar_config.icon.email = true
            this.headerBar_config._handler_icon1 = this._search
            bus.$emit('off_foot', true)
            break
          case '_example':
            this.headerBar_config.title = '实战'
            this.headerBar_config.icon.back = true
            this.headerBar_config._handler_icon1 = this._goBack
            bus.$emit('off_foot', false)
            break
        }
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
