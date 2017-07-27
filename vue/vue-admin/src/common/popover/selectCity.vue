<template>
  <div class="select-city-box">
    <el-dialog
      title="新增签证"
      :visible.sync="selectCityIsShowChild"
      :before-close="handleClose">
      <el-row style="font-size: 16px; margin-bottom: 20px;">
        请选择地区
      </el-row>
      <el-row :gutter="20">
        <el-col :span="6">
          <el-button size="large"
                     type="primary"
                     @click="handleArea('japan')"
                     class="color-green">日本</el-button>
        </el-col>
        <el-col :span="6">
          <el-button size="large"
                     type="primary"
                     @click="handleArea('thailand')"
                     class="color-green">泰国</el-button>
        </el-col>
        <el-col :span="6">
          <el-button size="large"
                     type="primary"
                     @click="handleArea('philippines')"
                     class="color-green">菲律宾</el-button>
        </el-col>
        <el-col :span="6">
          <el-button size="large"
                     type="primary"
                     @click="handleArea('other')"
                     class="color-green">其他</el-button>
        </el-col>
      </el-row>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        selectCityIsShowChild: false
      }
    },
    props: {
      selectCityIsShow: {
        type: Boolean,
        default: false
      }
    },
    computed: {

    },
    methods: {
      // 关闭该弹窗回调
      handleClose () {
        this.selectCityIsShowChild = false
      },
      // 选择城市后设置添加护照信息显示的状态
      handleArea ($city) {
        this.$store.dispatch('handlerSelectCity', {
          type: true,
          city: $city
        })
        this.handleClose()
      }
    },
    watch: {
      selectCityIsShow ($val) {
        this.$emit('update:selectCityIsShow', $val)
        this.selectCityIsShowChild = $val
      },
      selectCityIsShowChild () {
        this.$emit('update:selectCityIsShow', this.selectCityIsShowChild)
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
  .select-city-box{
    .el-dialog{
      width: 600px;
      .el-dialog__header{
        text-align: center;
        .el-dialog__title{
          font-size: 12px;
        }
      }
      .el-button{
        width: 100%;
      }
    }
  }
</style>
