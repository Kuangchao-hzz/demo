<template>
  <div class="visa-user-model">
    <el-dialog
      title="日本-新增用户"
      :visible.sync="dialogIsShowChild"
      :before-close="handleClose">
      <el-form ref="FormVisaData" :model="FormVisaData">
        <el-row :gutter="10">
          <el-col :span="6">
            <el-form-item
              label="用户来源"
            class="select-input input-80">
              <el-select v-model="FormVisaData.sourceId" placeholder="请选择活动区域">
                <el-option label="巨龙淘宝" value="1"></el-option>
                <el-option label="众信淘宝" value="2"></el-option>
                <el-option label="悠哉淘宝" value="3"></el-option>
                <el-option label="穷游网" value="4"></el-option>
                <el-option label="穷游机票" value="5"></el-option>
                <el-option label="携程" value="6"></el-option>
                <el-option label="门店" value="7"></el-option>
                <el-option label="同行" value="8"></el-option>
                <el-option label="商旅" value="9"></el-option>
                <el-option label="微店" value="10"></el-option>
                <el-option label="美团大众" value="10"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item
              prop="nickName"
              :rules="{required: isValidateNicknameOrderIds, message: '用户昵称不能为空', trigger: 'blur'}"
            >
              <el-input
                v-model="FormVisaData.nickName">
                <template slot="prepend">用户昵称</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item
              prop="orderIds"
              :rules="{required: isValidateNicknameOrderIds, message: '订单号不能为空', trigger: 'blur'}">
              <el-input
                v-model="FormVisaData.orderIds">
                <template slot="prepend">订单号</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="10">
          <el-col :span="6">
            <el-form-item
              label="出行日期"
              width-label="80"
              prop="startDate"
              class="select-input input-80 ">
              <el-date-picker
                v-model="FormVisaData.startDate"
                type="date"
                placeholder="选择日期" style="width: 100%;">
              </el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item
              label="特殊资源"
              prop="tripType"
              label-width="70px">
              <el-radio-group v-model="FormVisaData.tripType">
                <el-radio label="1">代</el-radio>
                <el-radio label="2">真</el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item
              label="材料来源"
              prop="dataSource"
              label-width="70px">
              <el-radio-group v-model="FormVisaData.dataSource">
                <el-radio label="1">前台</el-radio>
                <el-radio label="2">快递</el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
          <el-col :span="6" v-if="FormVisaData.dataSource === '2'">
            <el-form-item
              prop="expressNo"
              :rules="{required: isExpressNo, message: '材料来源不能为空', trigger: 'blur'}">
              <el-input
                v-model="FormVisaData.expressNo">
                <template slot="prepend">快递单号</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="10">
          <el-col :span="12">
            <el-form-item
              prop="mobile"
              :rules="{required: true, message: '手机号码不能为空', trigger: 'blur'}">
              <el-input
                v-model="FormVisaData.mobile">
                <template slot="prepend">手机</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item>
              <el-input
                :model="FormVisaData.exMobile">
                <template slot="prepend">备用手机</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="10">
          <el-col :span="12">
            <el-form-item
              prop="emails"
              :rules="{required: true, message: '邮箱不能为空', trigger: 'blur'}">
              <el-input
                :model="FormVisaData.emails">
                <template slot="prepend">邮箱</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item>
              <el-input
                :model="FormVisaData.address">
                <template slot="prepend" style="width: 77px">地址</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="10">
          <el-col :span="24">
            <el-form-item>
              <el-input
                :model="FormVisaData.remake">
                <template slot="prepend">备注</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="10">
          <el-col :span="6">
            <el-form-item
              label="签证类型"
              class="select-input input-80">
              <el-select v-model="FormVisaData.visaType" placeholder="请选择活动区域">
                <el-option label="日本-日本单次" value="1"></el-option>
                <el-option label="日本-冲绳单次" value="2"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item
              label="加急"
              label-width="70px">
              <el-radio-group v-model="FormVisaData.urgent">
                <el-radio label="1">否</el-radio>
                <el-radio label="2">是</el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item>
              <el-button type="success" @click="addInvoiceInfo">添加发票(可多张)</el-button>
            </el-form-item>
          </el-col>
        </el-row>
        <hr v-if="isInvoiceNum">
        <el-row type="flex" justify="between"
                align="middle" :gutter="10"
                v-for="($item, $index) in FormVisaData.invoiceNum"
                :key="$index" class="invoice-row">
          <el-col :span="4">
            <el-form-item
              label="类型"
              width-label="50"
              class="select-input">
              <el-select v-model="$item['invoiceType[]']" placeholder="请选择">
                <el-option label="个人" value="1"></el-option>
                <el-option label="公司" value="2"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="5" v-if="$item['invoiceType[]'] === '2'">
            <el-form-item>
              <el-input
                v-model="$item['invoiceTax']">
                <template slot="prepend">税号</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="5" v-if="$item['invoiceType[]'] === '2'">
            <el-form-item
            :prop="'invoiceNum.' + $index  + '.invoiceTitle[]'"
            :rules="{required: true, message: '抬头不能为空', trigger: 'blur'}">
              <el-input
                v-model="$item['invoiceTitle[]']">
                <template slot="prepend">抬头</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="5">
            <el-form-item
              label="内容"
              width-label="50"
              class="select-input">
              <el-select v-model="$item['invoiceText[]']" placeholder="请选择">
                <el-option label="旅游服务费（签证费）" value="1"></el-option>
                <el-option label="旅游服务费" value="2"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item
              :prop="'invoiceNum.' + $index  + '.invoiceMoney[]'"
              :rules="{required: true, message: '金额不能为空', trigger: 'blur'}">
              <el-input
                v-model="$item['invoiceMoney[]']">
                <template slot="prepend">金额</template>
                <template slot="append">RMB</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="1" class="del-row">
            <i class="el-icon-close" @click="deleteInvoice"></i>
          </el-col>
        </el-row>
        <hr v-if="isInvoiceNum">
        <el-row class="visa-user-list"
                v-for="($item, $index) in FormVisaData.visaUserNum"
                :key="$index">
          <el-col :span="24">
            <el-row type="flex" juslify="space-between" class="user-title">
              <el-col :span="12">申请人{{$index + 1}}</el-col>
              <el-col :span="12">扫描</el-col>
            </el-row>
          </el-col>
          <el-col :span="24">
            <el-row :gutter="20" type="flex" align="middle">
              <el-col :span="5">
                <div class="avatar-pic">
                  <img src="../../assets/img/header-bg.png" alt="">
                </div>
              </el-col>
              <el-col :span="19">
                <el-row :gutter="10">
                  <el-col :span="13">
                    <el-form-item>
                      <el-radio-group v-model="$item['customType[]']">
                        <el-radio label="1">优质客户单次</el-radio>
                        <el-radio label="2">常规客户单次</el-radio>
                        <el-radio label="3">新常规客户单次</el-radio>
                      </el-radio-group>
                    </el-form-item>
                  </el-col>
                  <el-col :span="11">
                    <el-form-item
                      label="订单号"
                      class="select-input input-70">
                      <select v-model="$item['orderId[]']" class="default-select" autocomplete="off">
                        <option value="" v-if="ordersData.length>1" selected>请选择</option>
                        <option :value="$option" v-for="$option in ordersData" :key="$index">{{$option}}</option>
                      </select>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row :gutter="10">
                  <el-col :span="8">
                    <el-form-item
                    :prop="'visaUserNum.' + $index  + '.passportNo[]'"
                    :rules="{required: true, message: '护照号不能为空', trigger: 'blur'}">
                      <el-input
                        v-model="$item['passportNo[]']">
                        <template slot="prepend">护照号</template>
                      </el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item
                      :prop="'visaUserNum.' + $index  + '.name[]'"
                      :rules="{required: true, message: '姓名不能为空', trigger: 'blur'}">
                      <el-input
                        v-model="$item['name[]']">
                        <template slot="prepend">姓名</template>
                      </el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item
                      label="护照数"
                    class="select-input input-70">
                      <el-input-number v-model="$item['passportNum[]']" :min="1" :max="10" style="width: 100%">
                      </el-input-number>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row :gutter="10">
                  <el-col :span="8">
                    <el-form-item
                      :prop="'visaUserNum.' + $index  + '.familyName[]'"
                      :rules="{required: true, message: '英文姓不能为空', trigger: 'change'}">
                      <el-input
                        v-model="$item['familyName[]']">
                        <template slot="prepend">英文姓</template>
                      </el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item
                      :prop="'visaUserNum.' + $index  + '.firstName[]'"
                      :rules="{required: true, message: '英文名不能为空', trigger: 'change'}">
                      <el-input
                        v-model="$item['firstName[]']">
                        <template slot="prepend">英文名</template>
                      </el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item
                      label="性别"
                      width-label="50"
                      :prop="'visaUserNum.' + $index  + '.sex[]'"
                      :rules="{required: true, message: '请选择性别', trigger: 'change'}"
                      class="select-input">
                      <el-select v-model="$item['sex[]']" placeholder="请选择">
                        <el-option label="请选择" value=""></el-option>
                        <el-option label="男" value="1"></el-option>
                        <el-option label="女" value="2"></el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row :gutter="10">
                  <el-col :span="8">
                    <el-form-item
                      :prop="'visaUserNum.' + $index  + '.homePlace[]'"
                      :rules="{required: true, message: '出生地不能为空', trigger: 'change'}">
                      <el-input
                        v-model="$item['homePlace[]']">
                        <template slot="prepend">出生地</template>
                      </el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item
                      :prop="'visaUserNum.' + $index  + '.issuePlace[]'"
                      :rules="{required: true, message: '签发地不能为空', trigger: 'change'}">
                      <el-input
                        v-model="$item['issuePlace[]']">
                        <template slot="prepend">签发地</template>
                      </el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-col :span="10">
                      <el-form-item
                        label="主申请人">
                        <el-checkbox-group v-model="$item['main[]']">
                          <el-checkbox true-label="1" false-label="2"></el-checkbox>
                        </el-checkbox-group>
                      </el-form-item>
                    </el-col>
                    <el-col :span="14" v-show="$item['main[]'] === '2'">
                      <el-form-item
                        :prop="'visaUserNum.' + $index  + '.relationship[]'"
                        :rules="{required: $item['main[]'] === '2' ? true : false, message: '签发地不能为空', trigger: 'change'}">
                        <el-input
                          v-model="$item['relationship[]']">
                          <template slot="prepend">关系</template>
                        </el-input>
                      </el-form-item>
                    </el-col>
                  </el-col>
                </el-row>
                <el-row :gutter="10">
                  <el-col :span="8">
                    <el-form-item
                      label="出生日期"
                      width-label="80"
                      :prop="'visaUserNum.' + $index  + '.birthDay[]'"
                      :rules="{type: 'date', required: true, message: '请选择出生日期', trigger: 'change'}"
                      class="select-input input-80 ">
                      <el-date-picker
                        v-model="$item['birthDay[]']"
                        type="date"
                        placeholder="选择日期" style="width: 100%;">
                      </el-date-picker>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item
                      label="签发日期"
                      width-label="80"
                      :prop="'visaUserNum.' + $index  + '.issueDay[]'"
                      :rules="{type: 'date', required: true, message: '请选择有效期', trigger: 'change'}"
                      class="select-input input-80 ">
                      <el-date-picker
                        v-model="$item['issueDay[]']"
                        type="date"
                        placeholder="选择日期" style="width: 100%;">
                      </el-date-picker>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item
                      label="有效期"
                      width-label="70"
                      :prop="'visaUserNum.' + $index  + '.effectiveDate[]'"
                      :rules="{type: 'date', required: true, message: '请选择有效期', trigger: 'change'}"
                      class="select-input input-70 ">
                      <el-date-picker
                        v-model="$item['effectiveDate[]']"
                        type="date"
                        placeholder="选择日期" style="width: 100%;">
                      </el-date-picker>
                    </el-form-item>
                  </el-col>
                </el-row>
              </el-col>
            </el-row>
            <el-col :span="24">
              <el-row :gutter="20">
                <el-col :span="5">
                  <el-col :span="10">
                    <el-form-item>
                      <el-checkbox-group v-model="$item['insurance[]']">
                        <el-checkbox true-label="1" false-label="2" name="type">保险</el-checkbox>
                      </el-checkbox-group>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item>
                      <el-checkbox-group v-model="$item['outDistrict[]']">
                        <el-checkbox true-label="1" false-label="2" name="type">外领区</el-checkbox>
                      </el-checkbox-group>
                    </el-form-item>
                  </el-col>
                </el-col>
                <el-col :span="19">
                  <el-row :gutter="10">
                    <el-col :span="8">
                      <el-form-item
                        label="押金来源"
                        class="select-input input-80">
                        <el-select v-model="$item['deposit[]']" placeholder="请选择...">
                          <el-option label="请选择" value=""></el-option>
                          <el-option label="公账" value="1"></el-option>
                          <el-option label="宁波银行" value="2"></el-option>
                          <el-option label="东亚银行" value="3"></el-option>
                          <el-option label="渣打银行" value="4"></el-option>
                          <el-option label="广发银行" value="5"></el-option>
                        </el-select>
                      </el-form-item>
                    </el-col>
                    <el-col :span="8">
                      <el-form-item
                        label="押金方式"
                        class="select-input input-80">
                        <el-select v-model="$item['depositType[]']" placeholder="请选择...">
                          <el-option label="无" value=""></el-option>
                          <el-option label="线上" value="1"></el-option>
                          <el-option label="线下" value="2"></el-option>
                        </el-select>
                      </el-form-item>
                    </el-col>
                    <el-col :span="8">
                      <el-col :span="7">
                        <el-form-item>
                          <el-checkbox-group v-model="$item['receipt[]']">
                            <el-checkbox true-label="1" false-label="2">收据</el-checkbox>
                          </el-checkbox-group>
                        </el-form-item>
                      </el-col>
                      <el-col :span="17">
                        <el-form-item>
                          <el-input
                            v-model="$item['money[]']">
                            <template slot="prepend">金额</template>
                            <template slot="append">万</template>
                          </el-input>
                        </el-form-item>
                      </el-col>
                    </el-col>
                  </el-row>
                </el-col>
              </el-row>
            </el-col>
          </el-col>
        </el-row>
        <el-row :gutter="10">
          <el-col :span="24" style="text-align: center;padding-top: 20px">
            <el-button type="primary" @click="addVisaInfo">添加护照</el-button>
            <el-button type="primary" @click="onSubmit">保存</el-button>
            <el-button type="primary" @click="dialogIsShowChild = false">取消</el-button>
          </el-col>
        </el-row>
      </el-form>
    </el-dialog>
  </div>
</template>
<script>
  /* 'invoiceNum[' + $index + '][\'invoiceTitle[]\']'
  * ======================================
  * ISSUES 1
  * props 父组件的状态改变时子组件的状态也会相应改变。 反之则不能。所有有了.sync
  * .sync 双向绑定。 父子组件相互通信。
  * 父组件通过 :props.sync定义双向通信
  * 子组件通过 :this.$emit向父子组件通信状态
  * 通过watch监听props的变化
  *
  * ISSUES 2
  * 在添加发票的时候向invoiceNum.push(invoice) 会有一个数据类型的引用问题
  * 详情 [http://www.jianshu.com/p/996671d4dcc4]
  *
  * ======================================
  * */
  export default {
    data () {
      return {
        dialogIsShowChild: false,
        visaName: {
          "passportNo[]": '1'
        },
        ordersData: [],
        visaUserField: {
          "passportNo[]": '',
          "customType[]": '1',
          "passportNum[]": '1',
          "orderId[]": '',
          "sex[]": '',
          "main[]": '2',
          "birthDay[]": '',
          "issueDay[]": '',
          "effectiveDate[]": '',
          "relationship[]": '',
          "insurance[]": '',
          "outDistrict[]": '',
          "deposit[]": '',
          "depositType[]": '',
          "receipt[]": '',
          "money[]": '',
        },
        invoiceField: {
          "invoiceType[]": '2',
          "invoiceTax[]": '',
          "invoiceTitle[]": '',
          "invoiceMoney[]": '',
          "invoiceText[]": '1'
        },
        FormVisaData: {
          sourceId: '1',
          nickName: '',
          orderIds: '',
          startDate: new Date(new Date().getTime() + 5*(1000 * 60 * 60 * 24)),
          tripType: '1',
          dataSource: '1',
          urgent: '1',
          mobile: '',
          visaType: '1',
          invoiceNum: [],
          visaUserNum: []
        },
      }
    },
    props: ['dialogIsShow'],
    computed: {
      isInvoiceNum () {
        return this.FormVisaData.invoiceNum.length !== 0 ? true : false
      },
      isValidateNicknameOrderIds () {
        return this.FormVisaData.sourceId > 3 ? false : true
      },
      isExpressNo () {
        return this.FormVisaData.dataSource === '1' ? false : true
      }
    },
    mounted () {

    },
    methods: {
      onSubmit () {
        console.log(this.FormVisaData)
      },
      handleClose (done) {
        this.FormVisaData.visaUserNum = [];
        this.FormVisaData.invoiceNum = [];
        this.$refs['FormVisaData'].resetFields();
        done()
      },
      deleteInvoice () {
        this.swal('1111')
      },
      handleOrderSelect ($item) {
        if(this.FormVisaData.visaUserNum<1){
          return false
        }else {
          this.ordersData = this.FormVisaData.orderIds.split(';')
          if(this.ordersData.length==1){
            this.FormVisaData.visaUserNum[0]['orderId[]'] = this.ordersData[0]
          }else {
            for (let i = 0; i<this.FormVisaData.visaUserNum.length;i++) {
              this.FormVisaData.visaUserNum[i]['orderId[]'] = ''
            }
          }
        }
      },
      addInvoiceInfo () {
        this.FormVisaData.invoiceNum.push(Object.assign({}, this.invoiceField))
        this.validateForm()
      },
      addVisaInfo () {
        this.FormVisaData.visaUserNum.push(Object.assign({}, this.visaUserField))
        this.validateForm()
      },
      validateForm () {
        this.$nextTick(function () {
          this.$refs['FormVisaData'].validate()
        })
      }
    },
    watch: {
      // 监听父级组件dialog状态
      dialogIsShow ($val) {
        this.$emit('update:dialogIsShow', $val)
        this.dialogIsShowChild = $val
        // 当dialog的状态为true时，并且DOM更新完成后执行验证
        this.validateForm()

      },
      // 向父级组件发送dialog状态
      dialogIsShowChild () {
        this.$emit('update:dialogIsShow', this.dialogIsShowChild)
      },
      invoiceNum () {
        console.log(this.invoiceNum)
      },
      'FormVisaData.orderIds' () {
        this.handleOrderSelect()
      },
      'FormVisaData.sourceId' () {
        this.$nextTick(function () {
          this.$refs['FormVisaData'].validateField('nickName')
          this.$refs['FormVisaData'].validateField('orderIds')
        })
      },
      'FormVisaData.dataSource' () {
        this.$nextTick(function () {
          this.$refs['FormVisaData'].validateField('expressNo')
        })
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scope>
  .visa-user-model{
    .el-form-item__label, .el-radio__label, .el-checkbox__label, .el-input__inner, .el-input-group__prepend{
      color: #556991 !important;
    }
    .select-input{
      .el-form-item__label{
        text-align: center;
        width: 50px;
        border: 1px solid #bfcbd9;
        padding: 10px 0;
        border-radius: 4px;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        position: relative;
        z-index: 111;
        background: #fff;
        color: #97a8be;
      }
      .el-form-item__content{
        padding-left: 50px;
        position: relative;
        left: -4px;
        input{
          padding-left: 14px;
        }
      }
      &.input-80{
        .el-form-item__label{
          width: 80px;
        }
        .el-form-item__content{
          padding-left: 80px;
        }

      }
      &.input-70{
        .el-form-item__label{
          width: 70px;
        }
        .el-form-item__content{
          padding-left: 70px;
          left: -1px;
          select, input{
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
          }
        }

      }
    }
    .invoice-row{
      margin: 15px 0;
      .del-row{
        cursor: pointer;
      }
      .el-form-item{
        margin: 0;
      }
    }
    .el-form-item{
      margin-bottom: 15px;
    }
    .avatar-pic{
      width: 100%;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .visa-user-list{
      border: 1px #ddd solid;
      border-radius: 5px;
      margin-top: 15px;
      >.el-col{
        padding: 10px 15px 0 15px;
        &:first-of-type{
          padding-bottom: 15px;
          background: #ddd;
        }
      }
    }
    .user-title{
      >.el-col{
        &:first-of-type{
          text-align: left;
        }
        &:last-of-type{
          text-align: right;
        }
      }
    }
    .default-select{
      width: 100%;
      height: 36px;
      color: #556991 !important;
      border-radius: 4px;
      border: 1px solid #bfcbd9;
      outline: none;
      box-sizing: border-box;
      padding: 3px 35px 3px 10px;
      appearance:none;
      background: url("http://ourjs.github.io/static/2015/arrow.png") no-repeat scroll right 10px center transparent;
      option{
        text-align: center;
      }
      &:focus {
        border-color: #20a0ff;
      }
    }
    .el-form-item__error{
      padding-top: 1px;
    }
    .el-form-item__content{
      height: 36px;
    }
    select::-ms-expand { display: none; }
  }
</style>
