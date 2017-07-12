<template>
  <div class="popover-taobao" v-show="popoverTaobao">
    <el-row>
      <el-col :span="6" class="taobao-search">
        <el-input
          @input="data_getTaoBaoNameData"
          v-model="nickName">
          <template slot="prepend">昵称</template>
        </el-input>
        <el-input
          @input="data_getTaoBaoTidData"
          v-model="nickOrder">
          <template slot="prepend">订单</template>
        </el-input>
        <div class="search-list-group">
          <p
            v-for="($item, $index) in searchTaobaoList.list"
             @click="data_getTaoBaoDetails($item.original, searchTaobaoList.searchType)"
             :key="$index" v-html="$item.show">
          </p>
        </div>
      </el-col>
      <el-col :span="18" class="taobao-content">
        <div class="close">
          <span @click="handleClose">关闭</span>
        </div>
        <div class="order-list-group">
          <div class="order-item">
            <div class="taobao-info-item"
                 v-for="($item, $index) in searchTaobaoDetails.list"
                 @click="exportOrderInfo($item.buyerNick, $item.tid)"
                 :key="$index"
                 :class="{status: $item.status === '买家已付款'? false : true}"
                 style="border-bottom: 1px #666 solid;padding: 5px 0">
            <el-row>
              <el-col :span="2" style="line-height: 24px; padding-left: 5px;">
                <i class="icon icon-checkmark"></i>
              </el-col>
              <el-col :span="22" style="line-height: 24px;">
                <el-row>
                  <span><strong>订单号</strong>: </span>
                  <span style="padding-right: 10px">{{$item.tid}}</span>
                  <span><strong>买家</strong>: </span>
                  <span style="padding-right: 10px">{{$item.buyerNick}}</span>
                  <span><strong>时间</strong>: </span>
                  <span style="padding-right: 10px">{{$item.pay_time}}</span>
                  <span><strong>付款</strong>: </span>
                  <span class="strong-text">{{$item.payment}}</span>
                </el-row>
                <el-row>
                  <el-col :span="24">
                    {{$item.sku}}
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="24">
                    <span class="strong-text">
                      {{$item.title}}
                    </span>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="24">
                    <span style="padding-right: 20px;">
                      <strong>数量</strong>: {{$item.buyNum}}
                    </span>
                    <span class="strong-text">
                      <strong>状态</strong>: {{$item.status}}
                    </span>
                  </el-col>
                </el-row>
              </el-col>
            </el-row>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import api_table from '@/api/table'
  export default {
    /*
    * ====================================================================
    *
    * nickName:                 昵称查询字符
    * nickOrder:                订单查询字符
    * searchTaobaoList          查询结果列表
    * searchTaobaoDetails       订单详情列表
    * popoverTaobaoChild        淘宝弹窗状态 true => show, false => hide
    *
    * ====================================================================
    * */
    data () {
      return {
        nickName: '',
        nickOrder: '',
        searchTaobaoList: [],
        searchTaobaoDetails: [],
        popoverTaobaoChild: false,
      }
    },
    props: {
      popoverTaobao: Boolean,
      popoverOrderIds: [Object, Array, Function]
    },
    methods: {
      handleClose () {
        this.popoverTaobaoChild = false
      },
      // 根据昵称查询淘宝订单列表
      data_getTaoBaoNameData () {
        if (this.nickName.length < 4) {
          return false
        } else {
          api_table.data_taoBaoName({
            nick:this.nickName,
            sourceId: 1
          }).then((response) => {
            this.searchTaobaoList = Object.assign({}, {searchType: 'niceName'}, response.data)
          }).catch(() => {
            this.swal('服务器错误！')
          })
        }
      },
      // 根据订单查询淘宝订单列表
      data_getTaoBaoTidData () {
        if (this.nickOrder.length < 4) {
          return false
        } else {
          api_table.data_taoBaoOrder({
            order: this.nickOrder,
            sourceId: 1
          }).then((response) => {
            this.searchTaobaoList = Object.assign({}, {searchType: 'tid'}, response.data)
          }).catch(() => {
            this.swal('服务器错误！')
          })
        }
      },
      // 根据订单查询订单详情
      data_getTaoBaoDetails ($params, $type) {
        if($type === 'niceName'){
          api_table.data_taoBaoNameDetails({
            nick: $params
          }).then((response) => {
            this.searchTaobaoDetails = response.data
          }).catch(() => {
            this.swal('服务器错误！')
          })
        }else {
          api_table.data_taoBaoTidDetails({
            tid: $params
          }).then((response) => {
            this.searchTaobaoDetails = response.data
          }).catch(() => {
            this.swal('服务器错误！')
          })
        }
      },
      // 发布事件 父组件接收搜索的用户昵称和订单号
      exportOrderInfo ($nickName, $orderNo) {
        this.$emit('exportOrderInfo', $nickName, $orderNo)
      }
    },
    watch: {
      popoverTaobao ($val) {
        this.$emit('update:popoverTaobao', $val)
        this.popoverTaobaoChild = $val
      },
      // 向父级组件发送dialog状态
      popoverTaobaoChild () {
        // 当淘宝弹出框为false时，重置搜索列表
        if(!this.popoverTaobaoChild){
            this.nickName = ''
            this.nickOrder = ''
            this.searchTaobaoList = []
            this.searchTaobaoDetails = []
        }
        this.$emit('update:popoverTaobao', this.popoverTaobaoChild)
      },
      popoverOrderIds () {
        console.log(this.popoverOrderIds)
        this.exportOrderInfo(this.popoverOrderIds.join(','))
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  .popover-taobao{
    border: 1px #666 solid;
    border-radius: 4px;
    width: 960px;
    height: 500px;
    background: #fff;
    box-shadow: 0 5px 20px rgba(0,0,0,.9);
    position: absolute;
    left: 50%;
    top: 118px;
    z-index: 999;
    transform: translateX(-50%);
    .el-row{
      height: 100%;
      >.el-col{
        height: 100%;
        &.taobao-search{
          &.el-col-6{
            border-right: 1px #666 solid;
            padding: 20px;
            .el-input{
              margin-bottom: 10px;
            }
            .search-list-group{
              margin-top: 20px;
              height: 368px;
              overflow-y: auto;

              p{
                line-height: 28px;
                border-top: 1px #ddd solid;
                text-align: center;
                cursor: pointer;
                font-size: 13px;
                &:hover{
                  background: #ddd;
                }
                &:last-child{
                  border-bottom: 1px #ddd solid;
                }
              }
            }
          }
        }
        &.taobao-content{
          &.el-col-18{
            .close{
              padding: 10px;
              text-align: right;
              border-bottom: 1px #666 solid;
              span{
                cursor: pointer;
                color: #556991;
              }
            }
            .order-list-group{
              height: 463px;
              overflow-y: scroll;
              .order-item{
                cursor: pointer;
                .strong-text{
                  color: red;
                }
                .status {
                  color: #ddd !important;
                  .strong-text{
                    color: #ddd;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
</style>
