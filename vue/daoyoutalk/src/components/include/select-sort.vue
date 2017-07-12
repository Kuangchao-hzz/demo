<template>
<div class="select-sort" :style="selectStyle">
  <div class="w_select" ref="w_select">{{activeText}}</div>
  <div class="w_options" v-if="$slots.options">
    <slot name="options" @click="selectValue"></slot>
  </div>
</div>
</template>

<script>
export default {
  name: 'select-sort',
  data () {
    return {
      activeText: '111'
    }
  },
  props: {
    selectStyle: Object
  },
  mounted () {
    this.initSize()
  },
  methods: {
    // 设置option的定位
    initSize () {
      let h = this.$refs['w_select'].getBoundingClientRect().height
      this.$refs['w_select'].nextElementSibling.style.top = h + 'px'
    },
    selectValue () {
      console.log(111)
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss">
  .select-sort{
    background: #ddd;
    border-bottom: 1px #666 solid;
    box-sizing: content-box;
    position: relative;
    z-index: 1;
    .w_select{
      position: relative;
      padding: 5px;
      width: 100%;
      height: 100%;
    }
    .w_options{
      width: 100%;
      overflow: hidden;
      position: absolute;
      left: 0;
      top: 30px;
      background: #fff;
      span{
        display: block;
        width: 100%;
        padding: 5px 10px;
        border-bottom: 1px #ddd solid;
        &:hover{
          background: #ddd;
        }
      }
    }

  }
</style>
