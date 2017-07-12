<template>
  <div class="visa-user-model">
    <OBJECT style="float:right;display: none" classid="clsid:10EC554B-357B-4188-9E5E-AC5039454D8B" id="objIDCard" width="300" height="200"></OBJECT>
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
              :rules="{required: isValidateNicknameOrderIds, message: '用户昵称不能为空', trigger: 'change'}">
              <el-input
                @focus="popoverTaobao = isValidateNicknameOrderIds"
                v-model="FormVisaData.nickName">
                <template slot="prepend">用户昵称</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item
              prop="orderIds"
              :rules="[{required: isValidateNicknameOrderIds, message: '订单号不能为空', trigger: 'change'},
              {required: isValidateNicknameOrderIds, pattern: /^[A-Za-z0-9;；]+$/, message: '订单号只能由 数字、 26个英文字母、 ；、 ; 组成！', trigger: 'change'}]">
              <el-input
                @blur="importOrderInfo"
                @focus="popoverTaobao = isValidateNicknameOrderIds"
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
              :rules="{ type: 'date', required: true, message: '请选择出行日期', trigger: 'change'}"
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
              :rules="{required: isExpressNo, message: '材料来源不能为空', trigger: 'change'}">
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
              :rules="[{required: true, message: '手机号码不能为空', trigger: 'change'},
              { pattern: /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/, message: '手机号码格式不正确', trigger: 'blur'}]">
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
              :rules="[{ required: true, message: '邮箱不能为空', trigger: 'change'},
              {type: 'email', message: '邮箱格式不正确', trigger: 'blur'}]">
              <el-input
                v-model="FormVisaData.emails">
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
              <el-button type="success" class="color-green" @click="addInvoiceInfo">添加发票(可多张)</el-button>
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
              class="select-input"
              :prop="'invoiceNum.' + $index  + '.invoiceType[]'"
              :rules="{required: true, message: '请选择发票类型', trigger: 'change'}">
              <el-select v-model="$item['invoiceType[]']" placeholder="请选择">
                <el-option label="个人" value="1"></el-option>
                <el-option label="公司" value="2"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="5" v-if="$item['invoiceType[]'] === '2'">
            <el-form-item
              :prop="'invoiceNum.' + $index  + '.invoiceTax[]'"
              :rules="{required: false, message: '金额不能为空', trigger: 'change'}">
              <el-input
                v-model="$item['invoiceTax']">
                <template slot="prepend">税号</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="5" v-if="$item['invoiceType[]'] === '2'">
            <el-form-item
            :prop="'invoiceNum.' + $index  + '.invoiceTitle[]'"
            :rules="{required: true, message: '抬头不能为空', trigger: 'change'}">
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
              class="select-input"
              :prop="'invoiceNum.' + $index  + '.invoiceText[]'"
              :rules="{required: true, message: '请选择内容', trigger: 'change'}">
              <el-select v-model="$item['invoiceText[]']" placeholder="请选择">
                <el-option label="旅游服务费（签证费）" value="1"></el-option>
                <el-option label="旅游服务费" value="2"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item
              :prop="'invoiceNum.' + $index  + '.invoiceMoney[]'"
              :rules="{required: true, message: '金额不能为空', trigger: 'change'}">
              <el-input
                v-model="$item['invoiceMoney[]']">
                <template slot="prepend">金额</template>
                <template slot="append">RMB</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="1" class="del-row">
            <i class="el-icon-close" @click.prevent="deleteInvoice($item)"></i>
          </el-col>
        </el-row>
        <hr v-if="isInvoiceNum">
        <!-- 护照信息 -->
        <el-row class="visa-user-list"
                v-for="($item, $index) in FormVisaData.visaUserNum"
                :key="$index">
          <el-col :span="24">
            <el-row type="flex"
                    juslify="space-between"
                    align="middle"
                    class="user-title">
              <el-col :span="12">申请人{{$index + 1}}</el-col>
              <el-col :span="12">
                <i class="icon icon-eye" @click="LoadRecogKenal"></i>
                <i class="el-icon-close"
                   @click.prevent="deleteVisaInfo($item)"
                   style="font-size: 14px;position: relative;top: -4px;"></i>
              </el-col>
            </el-row>
          </el-col>
          <el-col :span="24">
            <el-row :gutter="10">
              <el-col :span="12">
                <el-form-item
                  :prop="'visaUserNum.' + $index  + '.customType[]'"
                  :rules="{required: true, message: '必填', trigger: 'change'}">
                  <el-radio-group v-model="$item['customType[]']">
                    <el-radio label="1">优质客户单次</el-radio>
                    <el-radio label="2">常规客户单次</el-radio>
                    <el-radio label="3">新常规客户单次</el-radio>
                  </el-radio-group>
                </el-form-item>
              </el-col>
              <el-col :span="12" v-show="isVisaOrder">
                <el-form-item
                  label="订单号"
                  :prop="'visaUserNum.' + $index  + '.orderId[]'"
                  :rules="{ required: isVisaOrder, message: '订单号不能为空', trigger: 'change'}"
                  class="select-input input-70">
                  <el-select v-model="$item['orderId[]']"
                             placeholder="请选择" style="width: 100%;" @input="handMatchOrder($item['orderId[]'])">
                    <el-option label="请选择" value="" v-if="matchOrderData.length>1" selected></el-option>
                    <el-option v-for="($option, $o_index) in matchOrderData"
                               :label="$option.match"
                               :value="$option.tid"
                               :key="$index"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="20" type="flex" align="middle">
              <el-col :span="5">
                <div class="avatar-pic">
                  <img src="../../assets/img/header-bg.png" alt="">
                </div>
              </el-col>
              <el-col :span="19">
                <el-row :gutter="10">
                  <el-col :span="8" style="padding-right: 7px;">
                    <el-form-item
                      :prop="'visaUserNum.' + $index  + '.passportNo[]'"
                      :rules="{required: true, message: '护照号不能为空', trigger: 'change'}">
                      <el-input
                        v-model="$item['passportNo[]']">
                        <template slot="prepend">护照号</template>
                      </el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item
                      :prop="'visaUserNum.' + $index  + '.name[]'"
                      :rules="{required: true, message: '姓名不能为空', trigger: 'change'}">
                      <el-input
                        v-model="$item['name[]']">
                        <template slot="prepend">姓名</template>
                      </el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item
                      label="护照数"
                      :prop="'visaUserNum.' + $index  + '.passportNum[]'"
                      :rules="{type: 'number', required: true, message: '护照数不能小于1', trigger: 'blur'}"
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
                      :rules="{  required: true, message: '请选择性别', trigger: 'change'}"
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
                  <el-col :span="8" style="padding-right: 0px">
                    <el-col :span="10">
                      <el-form-item
                        :prop="'visaUserNum.' + $index  + '.main[]'"
                        :rules="{required: false, message: '请选择申请人', trigger: 'change'}"
                        label="主申请人">
                        <el-checkbox-group v-model="$item['main[]']">
                          <el-checkbox true-label="1" false-label="2"></el-checkbox>
                        </el-checkbox-group>
                      </el-form-item>
                    </el-col>
                    <el-col :span="14" v-show="$item['main[]'] === '2'">
                      <el-form-item
                        :prop="'visaUserNum.' + $index  + '.relationship[]'"
                        :rules="{required: $item['main[]'] === '2' ? true : false, message: '关系不能为空', trigger: 'change'}">
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
                      :rules="{ type: 'date', required: true, message: '请选择出生日期', trigger: 'change'}"
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
                      :rules="{ type: 'date', required: true, message: '请选择日期', trigger: 'change'}"
                      class="select-input input-80 ">
                      <el-date-picker
                        v-model="$item['issueDay[]']"
                        type="date"
                        placeholder="选择日期" style="width: 100%;">
                      </el-date-picker>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8" style="padding-right: 5px">
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
            <el-row :gutter="10">
              <el-col :span="24">
                <el-col :span="5">
                  <el-col :span="10">
                    <el-form-item
                      :prop="'visaUserNum.' + $index  + '.insurance[]'"
                      :rules="{required: false, message: '保险', trigger: 'change'}">
                      <el-checkbox-group v-model="$item['insurance[]']">
                        <el-checkbox true-label="1" false-label="2" name="type">保险</el-checkbox>
                      </el-checkbox-group>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item
                      :prop="'visaUserNum.' + $index  + '.outDistrict[]'"
                      :rules="{required: false, message: '外领区', trigger: 'change'}">
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
                        :prop="'visaUserNum.' + $index  + '.deposit[]'"
                        :rules="{required: false, message: '请选择押金来源', trigger: 'change'}"
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
                        :prop="'visaUserNum.' + $index  + '.depositType[]'"
                        :rules="{required: false, message: '收据不能为空', trigger: 'change'}"
                        class="select-input input-80">
                        <el-select v-model="$item['depositType[]']" placeholder="请选择...">
                          <el-option label="无" value=""></el-option>
                          <el-option label="线上" value="1"></el-option>
                          <el-option label="线下" value="2"></el-option>
                        </el-select>
                      </el-form-item>
                    </el-col>
                    <el-col :span="8" style="padding-right: 0px">
                      <el-col :span="7">
                        <el-form-item
                          :prop="'visaUserNum.' + $index  + '.receipt[]'"
                          :rules="{required: false, message: '收据不能为空', trigger: 'change'}">
                          <el-checkbox-group v-model="$item['receipt[]']">
                            <el-checkbox true-label="1" false-label="2">收据</el-checkbox>
                          </el-checkbox-group>
                        </el-form-item>
                      </el-col>
                      <el-col :span="17" style="padding: 0">
                        <el-form-item
                          :prop="'visaUserNum.' + $index  + '.money[]'"
                          :rules="{required: false, message: '金额不能为空', trigger: 'change'}">
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
              </el-col>
            </el-row>
          </el-col>
        </el-row>
        <!-- 假人护照信息 -->
        <el-row class="visa-dummy-list"
                v-for="($item, $index) in FormVisaData.visaDummyNum"
                :key="$index">
          <el-col :span="24">
            <el-row type="flex"
                    juslify="space-between"
                    align="middle"
                    class="user-title">
              <el-col :span="12">我是假人{{$index + 1}}（假人仅针对淘宝回写有效）</el-col>
              <el-col :span="12">
                <i class="el-icon-close"
                   @click.prevent="deleteDummyVisaInfo($item)"
                   style="font-size: 14px;"></i>
              </el-col>
            </el-row>
          </el-col>
          <el-col :span="24">
            <el-row :gutter="10">
              <el-col :span="12">
                <el-button :key="$index" style="margin-bottom: 15px">随机复制外部材料</el-button>
                <el-button :key="$index">随机复制内部材料</el-button>
              </el-col>
              <el-col :span="12" v-show="isVisaOrder">
                <el-form-item
                  label="订单号"
                  :prop="'visaDummyNum.' + $index  + '.jia_orderId[]'"
                  :rules="{ required: isVisaOrder, message: '订单号不能为空', trigger: 'change'}"
                  class="select-input input-70">
                  <el-select v-model="$item['jia_orderId[]']" placeholder="请选择" style="width: 100%;">
                    <el-option label="请选择" value="" v-if="matchOrderData.length>1" selected></el-option>
                    <el-option v-for="($option, $o_index) in matchOrderData"
                               :label="$option.match"
                               :value="$option.tid"
                               :key="$index"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="10">
              <el-col :span="6" style="padding-right: 7px;">
                <el-form-item
                  :prop="'visaDummyNum.' + $index  + '.jia_passportNo[]'"
                  :rules="{required: true, message: '护照号不能为空', trigger: 'change'}">
                  <el-input
                    v-model="$item['jia_passportNo[]']">
                    <template slot="prepend">护照号</template>
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="6" style="padding-right: 7px;">
                <el-form-item
                  :prop="'visaDummyNum.' + $index  + '.jia_name[]'"
                  :rules="{required: true, message: '姓名不能为空', trigger: 'change'}">
                  <el-input
                    v-model="$item['jia_name[]']">
                    <template slot="prepend">姓名</template>
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="6" style="padding-right: 7px;">
                <el-form-item
                  :prop="'visaDummyNum.' + $index  + '.jia_familyName[]'"
                  :rules="{required: true, message: '英文姓不能为空', trigger: 'change'}">
                  <el-input
                    v-model="$item['jia_familyName[]']">
                    <template slot="prepend">英文姓</template>
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="6" style="padding-right: 7px;">
                <el-form-item
                  :prop="'visaDummyNum.' + $index  + '.jia_firstName[]'"
                  :rules="{required: true, message: '英文名不能为空', trigger: 'change'}">
                  <el-input
                    v-model="$item['jia_firstName[]']">
                    <template slot="prepend">英文名</template>
                  </el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
        <el-row :gutter="10">
          <el-col :span="24" style="text-align: center;padding-top: 20px">
            <el-button type="primary" @click="addVisaInfo">
              <i class="icon icon-user-plus el-icon--left" style="position: relative;top: 1px"></i>添加护照</el-button>
            <el-button type="primary" @click="addDummyVisaInfo">
              <i class="icon icon-user-plus el-icon--left" style="position: relative;top: 1px"></i>添加假人</el-button>
            <el-button type="primary" @click="onSubmit">保存</el-button>
            <el-button type="primary" @click="handleClose">取消</el-button>
          </el-col>
        </el-row>
      </el-form>
      <popover-taobao
        :popoverTaobao.sync="popoverTaobao"
        v-on:exportOrderInfo="importOrderInfo"></popover-taobao>
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
  * dialogIsShowChild: {Boolean} 该组件的显示状态
  * popoverTaobao:     {Boolean} 淘宝弹出层显示状态
  * orderMatchDetails: {Array}   订单匹配字段
  * visaUserField:     {object}  动态护照信息字段
  * invoiceField:      {object}  动态发票信息字段
  * visaDummyField:    {object}  动态假人信息字段
  * FormVisaData:      {object}  表单所有字段
  *
  * ======================================
  * */
  import popoverTaobao from '@/common/popover/popover-taobao'
  import api_table from '@/api/table'
  export default {
    data () {
      return {
        dialogIsShowChild: false,
        popoverTaobao: false,
        ordersData: [],
        orderMatchDetails:[],
        exOrderMatchDetails:[],
        handleMatchDetails:[],
        visaUserField: {
          "customType[]": '1',
          "orderId[]": '',
          "passportNo[]": '',
          "passportNum[]": '1',
          "name[]": '',
          "sex[]": '',
          "main[]": '2',
          "birthDay[]": '',
          "issueDay[]": '',
          "familyName[]": '',
          "firstName[]": '',
          "homePlace[]": '',
          "issuePlace[]": '',
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
        visaDummyField: {
          'jia_orderId[]': '',
          'jia_passportNo[]': '',
          'jia_name[]': '',
          'jia_familyName[]': '',
          'jia_firstName[]': ''
        },
        FormVisaData: {
          sourceId: '1',
          nickName: '',
          orderIds: '',
          emails: '',
          startDate: new Date(new Date().getTime() + 5*(1000 * 60 * 60 * 24)),
          tripType: '1',
          dataSource: '1',
          urgent: '1',
          mobile: '',
          visaType: '1',
          invoiceNum: [],
          visaUserNum: [],
          visaDummyNum: []
        },
      }
    },
    props: ['dialogIsShow'],
    computed: {
      isInvoiceNum () {
        return this.FormVisaData.invoiceNum.length !== 0 ? true : false
      },
      // 根据用户来源验证用户昵称和订单号是否必填
      isValidateNicknameOrderIds () {
        return this.FormVisaData.sourceId > 3 ? false : true
      },
      // 根据材料来源验证快递单号是否必填
      isExpressNo () {
        return this.FormVisaData.dataSource === '1' ? false : true
      },
      // 根据订单号是否为空显示签证信息订单号
      isVisaOrder () {
        if (this.orderMatchDetails.length > 0 && this.orderMatchDetails[0] !== '') {
          return true
        }else {
          return false
        }
      },
      // 返回计算后的订单匹配数据
      matchOrderData () {
        let self = this
        let JSONStr = JSON.stringify(self.orderMatchDetails)
        self.handleMatchDetails = []
        self.exOrderMatchDetails = JSON.parse(JSONStr)
        console.log(self.exOrderMatchDetails)
        this.exOrderMatchDetails.forEach(function ($item, $index, $arr) {
          self.handleMatchDetails.push({
            match: $item.tid + ' | 购买' + $item.buyNum + '份 | ' + '已匹配' + $item.personNum + '个真 ' + $item.dummyNum + '个假',
            tid: $item.tid
          })
        })
        return self.handleMatchDetails
      }
    },
    mounted () {

    },
    methods: {
      // 提交表单
      onSubmit () {
        this.$refs['FormVisaData'].validate((valid) => {
          if (valid) {
            alert('success!');
          } else {
            alert('error');
            return false;
          }
        })
        console.log(this.FormVisaData)
        console.log(this.orderMatchDetails)
      },
      // 关闭表单前的回调 清空表单内容 并重置动态表单内容
      handleClose () {
        this.$refs['FormVisaData'].resetFields()
        this.dialogIsShowChild = false
        this.popoverTaobao = false
        this.FormVisaData.visaUserNum = []
        this.FormVisaData.invoiceNum = []
        this.FormVisaData.visaDummyNum = []
        this.orderMatchDetails = []
        this.handleMatchDetails = []
      },
      // 删除发票信息
      deleteInvoice ($item) {
        let self = this
        let $index = this.FormVisaData.invoiceNum.indexOf($item)
        if ($index !== -1) {
          swal({
            title: "你确定要删除该发票?",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            closeOnConfirm: false
          }).then( function () {
            self.FormVisaData.invoiceNum.splice($index, 1)
            swal('删除成功！')
          }, function () {
            return false
          })
        }
      },
      // 删除用户护照信息
      deleteVisaInfo ($item) {
        let self = this
        let $index = this.FormVisaData.visaUserNum.indexOf($item)
        if ($index !== -1) {
          swal({
            title: "你确定要删除该用户护照?",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            closeOnConfirm: false
          }).then( function () {
            self.FormVisaData.visaUserNum.splice($index, 1)
            swal('删除成功！')
          }, function () {
            return false
          })
        }
      },
      // 删除假人护照信息
      deleteDummyVisaInfo ($item) {
        let self = this
        let $index = this.FormVisaData.visaDummyNum.indexOf($item)
        if ($index !== -1) {
          swal({
            title: "你确定要删除该用户护照?",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            closeOnConfirm: false
          }).then( function () {
            self.FormVisaData.visaDummyNum.splice($index, 1)
            swal('删除成功！')
          }, function () {
            return false
          })
        }
      },
      // 添加发票信息
      addInvoiceInfo () {
        this.FormVisaData.invoiceNum.push(Object.assign({}, this.invoiceField))
        Object.keys(this.invoiceField).forEach(($item, $index) => {
          this.validateFieldForm($item, 'invoiceNum')
        })
      },
      // 添加护照信息
      addVisaInfo () {
        if (this.FormVisaData.visaUserNum.length < 10) {
          this.FormVisaData.visaUserNum.push(Object.assign({}, this.visaUserField))
          Object.keys(this.visaUserField).forEach(($item, $index) => {
            this.validateFieldForm($item, 'visaUserNum')
          });
          /*
          * ================================== BUG处理 ==================================
          *
          * description:  若先单击添加假人后在点击添加护照， 假人信息的验证将被重置为成功。
          * handleMethod: 判断当前假人信息对象的是否为一个，若是则显示的为它执行当前字段验证。
          *
          * =========================================================================
          * */
          if (this.FormVisaData.visaDummyNum.length === 1) {
            Object.keys(this.visaDummyField).forEach(($item, $index) => {
              this.validateFieldForm($item, 'visaDummyNum')
            })
          }
        }else {
          swal('护照信息最多10份！')
        }
      },
      // 添加假人护照信息
      addDummyVisaInfo () {
        if (this.FormVisaData.visaDummyNum.length < 30) {
          this.FormVisaData.visaDummyNum.push(Object.assign({}, this.visaDummyField))
          Object.keys(this.visaDummyField).forEach(($item, $index) => {
            this.validateFieldForm($item, 'visaDummyNum')
          })
        }else {
          swal('护照信息最30份！')
        }
      },
      // 验证所有表单字段
      validateForm () {
        this.$nextTick(function () {
          this.$refs['FormVisaData'].validate()
        })
      },
      // 验证指定表单字段
      validateFieldForm ($field, $fieldObj) {
        let self = this
        this.$nextTick(function () {
          if ($fieldObj === 'visaUserNum') {
            let $indexVisa = self.FormVisaData.visaUserNum.length - 1
            this.$refs['FormVisaData'].validateField($fieldObj + '.'+$indexVisa +'.' + $field)
          } else if($fieldObj === 'visaDummyNum') {
            let $indexDummy = self.FormVisaData.visaDummyNum.length - 1
            this.$refs['FormVisaData'].validateField($fieldObj + '.'+$indexDummy +'.' + $field)
          } else if($fieldObj === 'invoiceNum') {
            let $indexInvoice = self.FormVisaData.invoiceNum.length - 1
            this.$refs['FormVisaData'].validateField($fieldObj + '.'+$indexInvoice +'.' + $field)
          }
        })
      },
      // 处理动态护照订单 当淘宝订单为1个的时候 默认选中该订单。当为多个的时候默认为'请选择'
      handleOrderSelect ($item) {
        this.$nextTick(function () {
          let self = this
          // 处理订单的两种情况 第一种 表单中已添加有护照信息。第二种 表单中还未添加护照信息
          if (self.FormVisaData.visaUserNum.length > 0) {
            this.FormVisaData.visaUserNum.forEach(function ($item, $index, $arr) {
              // 当订单号只有1个时 所有的护照订单都为该值
              if (self.orderMatchDetails.length == 1) {
                console.log(self.handleMatchDetails)
                $item['orderId[]'] = self.handleMatchDetails[0]?self.handleMatchDetails[0].tid : ''
                // 新增的时候将动态护照字段：orderId[] 的默认值设置为当前订单号
                self.visaUserField['orderId[]'] = self.handleMatchDetails[0]?self.handleMatchDetails[0].tid : ''
              } else {
                $item['orderId[]'] = ''
                // 新增的时候将动态护照字段：orderId[] 的默认值重置为''
                self.visaUserField['orderId[]'] = ''
              }
            })
          } else {
            if (self.orderMatchDetails.length == 1) {
              self.visaUserField['orderId[]'] = self.handleMatchDetails[0]?self.handleMatchDetails[0].tid : ''
            } else {
              self.visaUserField['orderId[]'] = ''
            }
          }
          // 处理假人订单的两种情况 第一种 表单中已添加有护照信息。第二种 表单中还未添加护照信息
          if (self.FormVisaData.visaDummyNum.length > 0) {
            // 当订单号只有1个时 所有的护照订单都为该值
            this.FormVisaData.visaDummyNum.forEach(function ($item, $index) {
              if (self.orderMatchDetails.length == 1) {
                $item['jia_orderId[]'] = self.handleMatchDetails[0]?self.handleMatchDetails[0].tid : ''
                // 新增的时候将动态护照字段：orderId[] 的默认值设置为当前订单号
                self.visaDummyField['jia_orderId[]'] = self.handleMatchDetails[0]?self.handleMatchDetails[0].tid : ''
              } else {
                $item['jia_orderId[]'] = ''
                // 新增的时候将动态护照字段：orderId[] 的默认值重置为''
                self.visaDummyField['jia_orderId[]'] = ''
              }
            })
          } else {
            if (self.orderMatchDetails.length == 1) {
              self.visaDummyField['jia_orderId[]'] = self.handleMatchDetails[0]?self.handleMatchDetails[0].tid : ''
            } else {
              self.visaDummyField['jia_orderId[]'] = ''
            }
          }
        })
      },
      /*
      * =================== 处理订单匹配关系 ====================
      * 1、表单上有多少个真实订单，就在已匹配的多少个订单上增加该量的订单数
      * */
      handMatchOrder ($orderId) {
        let self = this
        let realOrderNum = self.FormVisaData.visaUserNum.length
        let JSONStr = JSON.stringify(self.orderMatchDetails)
        self.exOrderMatchDetails = JSON.parse(JSONStr)
        self.exOrderMatchDetails.forEach(function ($item, $index) {
          $item.personNum += realOrderNum
        })
      },
      /*
      * 接收prorover-taobao返回的淘宝数据
      * @param  {string}  $nickName  淘宝昵称
      * @param  {string}  $orderNo   淘宝订单号
      * */
      importOrderInfo ($nickName, $orderNo) {
        let self = this
        let $nickNameArr = this.FormVisaData.nickName.split(',')
        let $orderIdsArr = this.FormVisaData.orderIds.split(';')

        // 如果获取的用户昵称重复，则不添加
        if (!$nickNameArr.some(($item) => $item === $nickName)) {
          if (typeof $nickName !== 'object') {
            $nickNameArr.push($nickName)
          }
        }
        // 如果获取的用户订单号重复，则不添加
        if (!$orderIdsArr.some(($item) => $item === $orderNo)) {
          $orderIdsArr.push($orderNo)
        }

        let $nickNameStr = $nickNameArr.filter(($item) => $item !== '' && $item !== undefined && $item !== null).join(',')
        let $orderIdsStr = $orderIdsArr.filter(($item) => $item !== '' && $item !== undefined && $item !== null).join(';')
        let matchOderStr = this.orderMatchDetails.map(($item) => $item.tid).join(';')
        // 判断失去焦点时 输入框的值是否 是否和已经请求过的匹配订单相等
        // 如果当前订单等于请求过的订单 则我们就不需要再次请求该订单号的匹配情况
        if (!($orderIdsStr === matchOderStr)) {
          this.matchOrderInfo($nickNameStr, $orderIdsStr)
        }
        /*
         * ================================== BUG处理 ==================================
         *
         * description:  当首次进入表单页面新增动态表单信息后再推出表单， 之后再次进入后获
         *               淘宝用户昵称、淘宝订单号至input框内后，该输入框的验证错误提示任然
         *               在， 没有触发该input的change验证
         * handleMethod: 当淘宝信息导入到input框后， 显示的验证nickName、orderIds这两个字段
         *
         * =========================================================================
         * */
        this.$nextTick(function () {
          this.$refs['FormVisaData'].validateField('nickName')
          this.$refs['FormVisaData'].validateField('orderIds')
        })
      },
      // 当订单号失去焦点时，请求所有订单号的匹配信息
      matchOrderInfo ($nickNameStr, $orderIdsStr) {
        if ($orderIdsStr) {
          api_table.data_taoBaoMatchDetails({
            tid: $orderIdsStr.replace(/;/g, ',')
          }).then((reponse)=>{
            this.FormVisaData.nickName = $nickNameStr
            this.FormVisaData.orderIds = $orderIdsStr
            this.orderMatchDetails = reponse.data.list
            this.handleOrderSelect()
          })
        }
      },
      // 扫描护照信息
      LoadRecogKenal:function (){
        var UserIDValue = '48006677242304659718',
          CardMainIDValue = '13',
          ImgSizeTypeValue= '3',
          ImgPathValue='c:\\wwwroot\\images\\test.jpg',
          HeadPathValue='c:\\wwwroot\\images\\test_head.jpg',
          strResult=''
        if(!objIDCard.IsLoaded()){
          // 初始化
          var nRet = objIDCard.InitIDCard(UserIDValue,1)
          if(nRet != 0){
            // 提示用户加载失败
            alert('ERROR1: 识别核心加载失败。')
            return
          }

          //采集图像
          var nResult = objIDCard.AcquireImage(ImgSizeTypeValue)
          if(nResult!=0)
          {
            // 提示采集图像失败
            alert('采集图像失败。')
            return
          }
          //调用识别接口识别
          objIDCard.SetIDCardType(CardMainIDValue,0)
          //识别
          objIDCard.ProcessImage(2)
          nResult = objIDCard.RecogIDCard()
          if(nResult<=0){
            alert("识别失败")
            return
          }
          var nFieldNum = objIDCard.GetRecogFieldNum()
          if(nFieldNum>0){
            for(var i=1;i<=nFieldNum;++i) {
              // key
              var key = objIDCard.GetFieldName(i)
              var value = +objIDCard.GetRecogResult(i)
              if(key == 'MRZ1' || key == 'MRZ2' || key == 'OCR MRZ'){
                continue
              }
              strResult += "\""+objIDCard.GetFieldName(i)+"\""
              strResult += ":"
              // value
              strResult += "\""+objIDCard.GetRecogResult(i)+"\""
              //alert(objIDCard.GetRecogResult(i))
              strResult += ","
            }
          }

          //保存图像
          objIDCard.SaveImage(ImgPathValue)
          //保存头像
          objIDCard.SaveHeadImage(HeadPathValue)
          // 释放内存
          objIDCard.FreeIdcard()

        }else{
          alert('识别核心未加载，请先成功加载识别核心')
          return
        }
        alert(strResult)
      }
    },
    components: {
      popoverTaobao
    },
    watch: {
      // 监听父级组件dialog状态
      dialogIsShow ($val) {
        this.$emit('update:dialogIsShow', $val)
        this.dialogIsShowChild = $val
        // 当dialog的状态为true时，执行验证
        this.validateForm()
      },
      // 监听表单的显示状态，向父级组件发送显示状态
      dialogIsShowChild () {
        this.$emit('update:dialogIsShow', this.dialogIsShowChild)
      },
      // 监听订单号的变化， 将它转换数组
      'FormVisaData.orderIds' () {
        this.FormVisaData.orderIds = this.FormVisaData.orderIds.replace(/；/g, ';')
        // this.ordersData = this.FormVisaData.orderIds.split(';').filter(($item) => $item && $item !=='')
      },
      // 监听用户来源
      'FormVisaData.sourceId' () {
        this.$nextTick(function () {
          this.$refs['FormVisaData'].validateField('nickName')
          this.$refs['FormVisaData'].validateField('orderIds')
        })
      },
      // 监听快递单号是否必填
      'FormVisaData.dataSource' () {
        this.$nextTick(function () {
          this.$refs['FormVisaData'].validateField('expressNo')
        })
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
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
        input{
          padding-left: 14px;
          border-bottom-left-radius: 0;
          border-top-left-radius: 0;
          border-left: 1px transparent solid;
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
      &.is-required{
        .el-form-item__label:before{
          content: '' !important;
          display: inline-block;
          color: #ff4949;
          margin-right: 4px;
        }
      }
      &.is-error{
        .el-input__inner, .el-textarea__inner{
          border-color: #ff4949;
          background: #ffeee5;
        }
      }
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
      margin-bottom: 15px;
      >.el-col{
        padding: 10px 15px;
        &:first-of-type{
          background: #ddd;
        }
      }
      .user-title{
        >.el-col{
          &:first-of-type{
            text-align: left;
            font-size: 16px;
          }
          &:last-of-type{
            text-align: right;
            i {
              margin-left: 15px;
              font-size: 20px;
              cursor: pointer;
            }
          }
        }
      }
    }
    .visa-dummy-list{
      border: 1px #ddd solid;
      border-radius: 5px;
      margin-bottom: 15px;
      >.el-col{
        padding: 10px 15px;
        &:first-of-type{
          background: #3a97e2;
          color: #fff;
        }
        .user-title{
          >.el-col{
            &:first-of-type{
              text-align: left;
              font-size: 16px;
            }
            &:last-of-type{
              text-align: right;
              i {
                margin-left: 15px;
                font-size: 20px;
                cursor: pointer;
              }
            }
          }
        }
        .el-button{
          background: #66cc99;
          color: #fff;
          outline: none;
          border: none;
          &:hover{
            background: #18a689;
          }
        }
      }

    }
    .el-form-item__error{
      padding-top: 1px;
    }
    .el-form-item__content{
      height: 36px;
    }
    .el-dialog__header{
      text-align: center;
    }
  }

</style>
