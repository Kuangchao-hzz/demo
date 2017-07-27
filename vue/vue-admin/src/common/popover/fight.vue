<template>
  <div class="fight-box">
    <el-dialog title="请输入航班信息"
               :visible.sync="flightIsShowChild"
               :before-close="handleClose"
               custom-class="fight-dialog">
      <el-form>
        <el-row>
          <el-col :span="24">
            <el-form-item>
              <el-autocomplete
                v-model="airNum"
                :fetch-suggestions="querySearch"
                value="small"
                :props="props"
                @select="handleSelect" style="width: 100%;">
                <template slot="prepend">航班号</template>
              </el-autocomplete>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item
              label="起飞日期"
              class="select-input">
              <el-date-picker
                v-model="entryTime"
                type="date"
                placeholder="请选择起飞日期" style="width: 100%;">
              </el-date-picker>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="handleClose">取 消</el-button>
        <el-button type="primary">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import api_table from '@/api/table'
  export default {
    data () {
      return {
        restaurants: [],
        flightIsShowChild: false,
        airNum: '',
        entryTime: '2017-02-22',
        props: {
          value: 'small',
          label: 'small',
        }
      }
    },
    props: ['flightIsShow'],
    methods: {
      handleClose () {
        this.flightIsShowChild = false
      },
      querySearch(queryString, cb) {
        this.queryFightData().then(() => {
          cb(this.restaurants);
        })
      },
      queryFightData () {
        return new Promise(resolve => {
          api_table.data_fightData({
            content: this.airNum || '',
            time: this.entryTime || '',
            tap: '1',
          }).then((responst) => {
            if (responst.data.status === 1) {
              this.restaurants = responst.data.show
            } else {
              this.restaurants = []
            }
            resolve()
          })
        })
      },
      handleSelect(item) {
        console.log(item);
      }
    },
    watch: {
      flightIsShow ($val) {
        this.$emit('update:flightIsShow', $val)
        this.flightIsShowChild = $val
      },
      flightIsShowChild () {
        this.$emit('update:flightIsShow', this.flightIsShowChild)
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
  .fight-dialog{
    width: 600px;
    .select-input{
      line-height: normal;
      display: inline-table;
      width: 100%;
      border-collapse: separate;
      .el-form-item__label{
        background-color: #fbfdff;
        color: #97a8be;
        vertical-align: middle;
        display: table-cell;
        position: relative;
        border: 1px solid #bfcbd9;
        border-radius: 4px;
        padding: 0 10px;
        width: 1px;
        white-space: nowrap;
        float: none;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }
      .el-form-item__content{
        position: relative;
        input{
          padding-left: 14px;
          border-bottom-left-radius: 0;
          border-top-left-radius: 0;
          border-left: 1px transparent solid;
        }
      }
    }
    .el-dialog__title{
      font-size: 14px;
    }
    .el-dialog__body{
      padding-bottom: 0;
    }
    .dialog-footer{
      text-align: center;
      padding-bottom: 15px;
    }
  }
</style>
