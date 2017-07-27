<template>
  <div class="backTracking-box">
    <el-dialog
      title="补录用户信息"
      :visible.sync="backTrackingIsShowIsShow"
      :before-close="handleClose"
      custom-class="back-tracking-dialog">
      <div class="back-tracking-box">
        <el-form ref="backTrackingForm" :model="formData">
          <div class="user-visa-group">
            <div class="visa-info-list" v-for="($visa, $index) in formData.visaList">
              <div class="group-title">
                <p>申请人{{$index + 1}}</p>
                <el-button  type="primary"
                            size="mini" @click="dialogEditVisa('216')">编辑护照</el-button>
              </div>
              <div class="group-body">
                <el-row :gutter="20"
                        type="flex"
                        justify="between"
                        align="middle">
                  <el-col :span="4">
                    <div class="avatar-pic">
                      <img src="../../../assets/img/header-bg.png" width="170" height="190">
                    </div>
                  </el-col>
                  <el-col :span="20">
                    <el-row :gutter="20">
                      <el-col :span="6">
                        <el-form-item
                          :prop="'visaList.' + $index  + '.consulateId[]'"
                          :rules="{ required: true, message: '请输入领馆ID', trigger: 'change'}">
                          <el-input
                            v-model="$visa['consulateId[]']">
                            <template slot="prepend">领馆ID</template>
                          </el-input>
                        </el-form-item>
                      </el-col>
                      <el-col :span="6">
                        <el-form-item>
                          <div class="el-input el-input-group normal-input">
                            <div class="el-input-group__prepend">姓名:</div>
                            <div class="el-input__inner">马静怡</div>
                          </div>
                        </el-form-item>
                      </el-col>
                      <el-col :span="6">
                        <el-form-item>
                          <div class="el-input el-input-group normal-input">
                            <div class="el-input-group__prepend">护照号:</div>
                            <div class="el-input__inner">E31331777</div>
                          </div>
                        </el-form-item>
                      </el-col>
                      <el-col :span="6">
                        <el-form-item
                        label="护照数"
                        class="select-input">
                          <el-input-number v-model="$visa['passportNum[]']" :min="1" :max="10" style="width: 100%"></el-input-number>
                        </el-form-item>
                      </el-col>
                    </el-row>
                    <el-row :gutter="20">
                      <el-col :span="6">
                        <el-form-item>
                          <div class="el-input el-input-group normal-input">
                            <div class="el-input-group__prepend">签证类型:</div>
                            <div class="el-input__inner">日本单次</div>
                          </div>
                        </el-form-item>
                      </el-col>
                      <el-col :span="6">
                        <el-form-item
                          :prop="'visaList.' + $index  + '.occupation[]'"
                          :rules="{ required: true, message: '请输入职业', trigger: 'change'}">
                          <el-input
                            :model="$visa['occupation[]']">
                            <template slot="prepend">职业</template>
                          </el-input>
                        </el-form-item>
                      </el-col>
                      <el-col :span="6">
                        <el-form-item>
                          <el-input
                            v-model="$visa['confirm[]']">
                            <template slot="prepend">身份确认</template>
                          </el-input>
                        </el-form-item>
                      </el-col>
                      <el-col :span="6">
                        <el-form-item
                          label="经济证明"
                          class="select-input">
                          <el-select v-model="$visa['economic_prove[]']" placeholder="请选择经济证明 ">
                            <el-option label="系统默认" value="0"></el-option>
                            <el-option label="自己" value="1"></el-option>
                            <el-option label="非自己" value="2"></el-option>
                          </el-select>
                        </el-form-item>
                      </el-col>
                    </el-row>
                    <el-row :gutter="20">
                      <el-col :span="2" style="padding: 0;text-align: center;line-height: 36px;">
                        经济能力
                        </el-form-item>
                      </el-col>
                      <el-col :span="22" style="padding-left: 0">
                        <el-row :gutter="10">
                          <el-col :span="4" v-for="($item, _$index) in 5" :key="$index">
                            <el-form-item>
                              <el-autocomplete
                                class="inline-input"
                                v-model="$visa['economic'+(_$index+1)+'_1[]']"
                                :fetch-suggestions="economic"
                                @select="handleSelect">
                                <template slot="prepend">&nbsp;{{_$index + 1}}&nbsp;</template>
                              </el-autocomplete>
                            </el-form-item>
                          </el-col>
                          <el-col :span="4">
                            <el-form-item>
                              <el-autocomplete
                                class="inline-input"
                                v-model="$visa['economicOther_1[]']"
                                :fetch-suggestions="economicOther"
                                @select="handleSelect">
                                <template slot="prepend">&nbsp;其它&nbsp;</template>
                              </el-autocomplete>
                            </el-form-item>
                          </el-col>
                        </el-row>
                      </el-col>
                    </el-row>
                    <el-row :gutter="10">
                      <el-col :span="4">
                        <el-form-item>
                          <el-input v-model="$visa['economic1_2[]']">
                            <template slot="prepend">年薪</template>
                            <template slot="append">万</template>
                          </el-input>
                        </el-form-item>
                      </el-col>
                      <el-col :span="4">
                        <el-form-item>
                          <el-input v-model="$visa['economic2_2[]']">
                            <template slot="prepend">月薪</template>
                            <template slot="append">万</template>
                          </el-input>
                        </el-form-item>
                      </el-col>
                      <el-col :span="4">
                        <el-form-item>
                          <el-input v-model="$visa['economic3_2[]']">
                            <template slot="prepend">年税</template>
                            <template slot="append">万</template>
                          </el-input>
                        </el-form-item>
                      </el-col>
                      <el-col :span="4">
                        <el-form-item>
                          <el-input v-model="$visa['economic4_2[]']">
                            <template slot="prepend">月税</template>
                            <template slot="append">万</template>
                          </el-input>
                        </el-form-item>
                      </el-col>
                      <el-col :span="4">
                        <el-form-item>
                          <el-input v-model="$visa['economic5_2[]']">
                            <template slot="prepend">存款</template>
                            <template slot="append">万</template>
                          </el-input>
                        </el-form-item>
                      </el-col>
                      <el-col :span="4">
                        <el-form-item>
                          <el-input v-model="$visa['economicOther_2[]']" placeholder="多项用;隔开"></el-input>
                        </el-form-item>
                      </el-col>
                    </el-row>
                    <el-row :gutter="20">
                      <el-col :span="6">
                        <el-form-item
                          :prop="'visaList.' + $index  + '.residence[]'"
                          :rules="{ required: true, message: '请输入常住地', trigger: 'change'}">
                          <el-input v-model="$visa['residence[]']">
                            <template slot="prepend">常住地</template>
                          </el-input>
                        </el-form-item>
                      </el-col>
                      <el-col :span="6">
                        <el-form-item
                          label="婚姻状况"
                          :prop="'visaList.' + $index  + '.maritalStatus[]'"
                          :rules="{ required: true, message: '请选择婚姻状况', trigger: 'change'}"
                          class="select-input">
                          <el-select v-model="$visa['maritalStatus[]']" placeholder="请选择婚姻状况">
                            <el-option label="请选择" value=""></el-option>
                            <el-option label="已婚" value="1"></el-option>
                            <el-option label="未婚" value="2"></el-option>
                            <el-option label="丧偶" value="3"></el-option>
                            <el-option label="离异" value="4"></el-option>
                          </el-select>
                        </el-form-item>
                      </el-col>
                      <el-col :span="6">
                        <el-form-item
                          label="出境记录"
                          class="select-input">
                          <el-select v-model="$visa['exitRecord[]']" placeholder="请选择婚姻状况">
                            <el-option label="无" value="1"></el-option>
                            <el-option label="良好" value="2"></el-option>
                            <el-option label="有拒签史" value="3"></el-option>
                            <el-option label="有终止记录" value="4"></el-option>
                            <el-option label="有取下记录" value="5"></el-option>
                            <el-option label="曾经不法滞留日本" value="6"></el-option>
                            <el-option label="有终止或取下记录" value="6"></el-option>
                          </el-select>
                        </el-form-item>
                      </el-col>
                      <el-col :span="6">
                        <el-form-item
                          label="旅行社意见"
                          class="select-input">
                          <el-select v-model="$visa['agencyAdvice[]']" placeholder="请选择婚姻状况">
                            <el-option label="推荐" value="1"></el-option>
                            <el-option label="有待考虑" value="2"></el-option>
                            <el-option label="慎重考虑" value="3"></el-option>
                            <el-option label="谨慎考虑" value="4"></el-option>
                            <el-option label="曾经不法滞留日本" value="5"></el-option>
                          </el-select>
                        </el-form-item>
                      </el-col>
                    </el-row>
                  </el-col>
                </el-row>
                <el-row :gutter="20">
                  <el-col :span="8">
                    <el-form-item
                      :prop="'visaList.' + $index  + '.cnXing[]'"
                      :rules="{ required: true, message: '请输入中文姓', trigger: 'change'}">
                      <el-input
                        v-model="$visa['cnXing[]']">
                        <template slot="prepend">中文姓</template>
                      </el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item
                      :prop="'visaList.' + $index  + '.cnMing[]'"
                      :rules="{ required: true, message: '请输入中文姓', trigger: 'change'}">
                      <el-input
                        v-model="$visa['cnMing[]']">
                        <template slot="prepend">中文名</template>
                      </el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-col :span="8">
                      <el-form-item>
                        <el-checkbox v-model="$visa['main[]']"
                                     true-label="1"
                                     false-label="2">是否主申请人</el-checkbox>
                      </el-form-item>
                    </el-col>
                    <el-col :span="8">
                      <el-form-item>
                        <el-checkbox v-model="formData['real']"
                                     true-label="1"
                                     false-label="2">实际主申请</el-checkbox>
                      </el-form-item>
                    </el-col>
                    <el-col :span="8">
                      <el-form-item>
                        <el-checkbox v-model="$visa['room_status[]']"
                                     true-label="1"
                                     false-label="2">房屋担保</el-checkbox>
                      </el-form-item>
                    </el-col>
                  </el-col>
                </el-row>
                <el-row :gutter="20" v-if="$visa['room_status[]'] === '1'">
                  <el-col :span="16">
                    <el-form-item>
                      <el-input
                        v-model="$visa['room_address[]']">
                        <template slot="prepend">房屋地址</template>
                      </el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="4">
                    <el-form-item>
                      <el-input
                        v-model="$visa['room_address[]']">
                        <template slot="prepend">房屋面积</template>
                        <template slot="append">㎡</template>
                      </el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="4">
                    <el-form-item>
                      <el-input
                        v-model="$visa['room_address[]']">
                        <template slot="prepend">房屋价值</template>
                        <template slot="append">万</template>
                      </el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
              </div>
            </div>
          </div>
          <div class="user-trip-group">
            <div class="group-title">
              <p>出行信息</p>
            </div>
            <div class="group-body">
              <el-row>
                <el-col :span="24">
                  <el-form-item>
                    <el-input
                      @focus="flightIsShow = true"
                      v-model="formData['entryInfo']" :readonly=true>
                      <template slot="prepend">入境航班信息</template>
                    </el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="24">
                  <el-form-item>
                    <el-input
                      @focus="flightIsShow = true"
                      v-model="formData['leaveInfo']" :readonly=true>
                      <template slot="prepend">出境航班信息</template>
                    </el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="24">
                  <el-row :gutter="20">
                    <el-col :span="12">
                      <el-form-item>
                        <el-input
                          v-model="formData['totalNum']" :readonly=true>
                          <template slot="prepend">出行人数</template>
                        </el-input>
                      </el-form-item>
                    </el-col>
                    <el-col :span="12">
                      <el-form-item
                        label="送签日期"
                        class="select-input">
                        <el-date-picker
                          v-model="formData['sendTime']"
                          type="date"
                          placeholder="选择送签日期" style="width: 100%;">
                        </el-date-picker>
                      </el-form-item>
                    </el-col>
                  </el-row>
                </el-col>
              </el-row>
            </div>
          </div>
          <div class="user-journey-group">
            <div class="group-title">
              <p>行程安排</p>
              <el-button  type="primary"
                          size="mini">导入模板</el-button>
              <el-button  type="primary"
                          size="mini">复制行程</el-button>
            </div>
            <div class="group-body">
              <el-row :gutter="10"
                      v-for="($journey, $index) in formData.journeyNum"
                      :key="$index"
                      type="flex"
                      justify="between"
                      align="middle">
                <el-col :span="5">
                  <el-form-item
                    label="日期"
                    width-label="80"
                    :prop="'journeyNum.' + $index  + '.visaTripTime[]'"
                    :rules="{ type: 'date', required: true, message: '请选择行程日期', trigger: 'change'}"
                    class="select-input">
                    <el-date-picker
                      v-model="$journey['visaTripTime[]']"
                      type="date"
                      placeholder="选择日期" style="width: 100%">
                    </el-date-picker>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item
                    label="行程"
                    width-label="80"
                    :prop="'journeyNum.' + $index  + '.visaTripContent[]'"
                    :rules="{ required: true, message: '请输入行程内容', trigger: 'change'}"
                    class="select-input">
                    <el-input
                      type="textarea"
                      :rows="1"
                      placeholder="请输入行程内容"
                      v-model="$journey['visaTripContent[]']"
                      style="width: 100%;">
                    </el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="7">
                  <el-form-item
                    label="入住酒店"
                    class="select-input">
                    <el-input v-model="$journey['visaTripHotel[]']"
                              placeholder="请输入入住酒店"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="3">
                  <el-form-item
                    label="房间"
                    class="select-input">
                    <el-input v-model="$journey['room[]']"
                              placeholder="请输入房间数"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="1" class="del-row" style="text-align: right;cursor: pointer;">
                  <i class="el-icon-close" @click.prevent="deleteJourney($journey)"></i>
                </el-col>
              </el-row>
            </div>
          </div>
        </el-form>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="addJourneyInfo">添加行程</el-button>
        <el-button type="primary">保 存</el-button>
        <el-button type="primary" @click="handleClose">取 消</el-button>
      </div>
    </el-dialog>
    <flight :flightIsShow.sync="flightIsShow"></flight>
    <editVisa></editVisa>
  </div>
</template>

<script>
  import flight from '@/common/popover/fight'
  import editVisa from '@/common/popover/backTracking/editVisa'
  export default {
    data () {
      return {
        backTrackingIsShowIsShow: false,
        flightIsShow: false,
        economicData: [
          { "value": "在职证明"},
          { "value": "工资流水"},
          { "value": "缴税证明"},
          { "value": "存款证明"}
        ],
        economicOtherData: [
          { "value": "学籍证明"},
          { "value": "毕业证书"},
          { "value": "银行流水"}
        ],
        formDataSyncJourneyField: {
          'visaTripTime[]': '',
          'visaTripContent[]': '',
          'visaTripHotel[]': '',
          'room[]': ''
        },
        formDataSyncField: {
          'consulateId[]': '',
          'passportNo[]': '',
          'passportNum[]': '1',
          'occupation[]': '',
          'confirm[]': '身份证;户口本',
          'economic_prove[]': '0',
          'cnXing[]': '',
          'cnMing[]': '',
          'main[]': '2',
          'room_address[]': '',
          'room_area[]': '',
          'room_price[]': '',
          'room_status[]': '2',
          'economic1_1[]': '',
          'economic2_1[]': '',
          'economic3_1[]': '',
          'economic4_1[]': '',
          'economic5_1[]': '',
          'economic1_2[]': '',
          'economic2_3[]': '',
          'economic3_4[]': '',
          'economic4_5[]': '',
          'economic5_6[]': '',
          'economicOther_1[]': '',
          'economicOther_2[]': '',
          'maritalStatus[]': '',
          'exitRecord[]': '2',
          'agencyAdvice[]': '1',
        },
        formData: {
          real: '2',
          entryInfo: '',
          leaveInfo: '',
          totalNum: '1',
          sendTime: '',
          visaList: [],
          journeyNum: []
        }
      }
    },
    computed: {
      backTrackingIsShow () {
        return this.$store.state.table.backTracking.type
      }
    },
    mounted () {
      this.formData.visaList.push(Object.assign({}, this.formDataSyncField))
    },
    methods: {
      // 关闭表单前的回调 清空表单内容 并重置动态表单内容
      handleClose () {
        this.$store.dispatch('handlerBackTracking', {
          type: false,
          id: ''
        })
      },
      economic ($item, $callback) {
        $callback(this.economicData);
      },
      economicOther ($item, $callback) {
        $callback(this.economicOtherData)
      },
      handleSelect(item) {
        console.log(item);
      },
      dialogEditVisa ($id) {
        this.$store.dispatch('handlerBackTrackingEditVisa', {
          type: true,
          id: $id
        })
      },
      // 删除行程信息
      addJourneyInfo () {
        this.formData.journeyNum.push(Object.assign({}, this.formDataSyncJourneyField))
        this.validateForm()
      },
      // 删除行程信息
      deleteJourney ($item) {
        let self = this
        let $index = this.formData.journeyNum.indexOf($item)
        if ($index !== -1) {
          swal({
            title: "你确定要删除该行程?",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            closeOnConfirm: false
          }).then( function () {
            self.formData.journeyNum.splice($index, 1)
            swal('删除成功！')
          }, function () {
            return false
          })
        }
      },
      // 验证所有表单字段
      validateForm () {
        this.$nextTick(function () {
          this.$refs['backTrackingForm'].validate()
        })
      },
    },
    watch: {
      backTrackingIsShow () {
        this.backTrackingIsShowIsShow = this.backTrackingIsShow
        if (this.backTrackingIsShowIsShow) {
          this.validateForm()
        }
      }
    },
    components: {
      flight,
      editVisa
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
  .backTracking-box{
    .back-tracking-dialog{
      width: 1200px;
      .back-tracking-box{
        >.el-form {
          >div{
            border: 1px #ddd solid;
            border-radius: 4px;
            margin-bottom: 20px;
            box-shadow: 0 3px 5px rgba(0,0,0,.35) ;
          }
        }
        .user-visa-group{
          .visa-info-list{

          }
        }
        .user-trip-group{

        }
        .user-journey-group{
          .group-body{
            >.el-row{
              margin-bottom: 15px;
              >.el-col{
                .el-form-item{
                  margin-bottom: 0;
                }
                textarea{
                  height: 36px;
                }
              }
            }
          }
        }

        .group-title{
          padding: 10px 15px;
          background: #eee;
          text-align: right;
          border-bottom: 1px #ddd solid;
          overflow: hidden;
          p{
            float: left;
            display: inline-block;
            line-height: 22px;
          }
          .el-button{
            display: inline-block;
          }
        }
        .group-body{
          padding: 15px 15px 7px 15px;
          .el-form-item{
            margin-bottom: 15px;
            .normal-input{
              .el-input-group__prepend{
                border: 0;
                background: transparent;
                color: #676a6c;
              }
              .el-input__inner{
                border: 0;
                color: #97a8be;
                padding: 3px 0;
                &:focus{
                  outline: 0;
                  border-color: transparent;
                }
              }
            }
            .el-form-item__error{
              padding-top: 2px;
            }
          }

        }
      }
      .el-dialog__body{
        padding-bottom: 0;
      }
      .dialog-footer{
        text-align: center;
        padding-bottom: 20px;
      }
    }
    .el-input-group__prepend{
      color: #676a6c;
    }
    .select-input{
      line-height: normal;
      display: inline-table;
      width: 100%;
      border-collapse: separate;
      .el-form-item__label{
        background-color: #fbfdff;
        color: #676a6c;
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
  }
</style>
