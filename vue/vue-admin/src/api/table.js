import instance from './index'

export default {

  // ============================================= 前台组 =================================================================== //

  get_HomeListData (para) {
    return instance.get('https://www.easy-mock.com/mock/59423ea78ac26d795f0d9631/Kuangchao/shVisa/getPerson', qs.stringify(para))
  },
  // 前台组->签证管理->个人操作列表
  data_visaTablePerson ($params) {
    return instance.post('/submit.php/shVisa/getPerson', $params)
  },
  // 前台组->签证管理->待初审签证
  data_visaTableWait ($params) {
    return instance.post('/submit.php/shVisa/getWait', $params)
  },
  // 前台组->签证管理->进行中签证
  data_visaTableDoing ($params) {
    return instance.post('/submit.php/shVisa/getDoing', $params)
  },
  // 前台组->签证管理->历史签证
  data_visaTableFinish ($params) {
    return instance.post('/submit.php/shVisa/getFinish', $params)
  },
  // 前台组->签证管理->查询结果
  data_visaTableSearch ($params) {
    return instance.post('/submit.php/shVisa/getSearchList', $params)
  },
  // 前台组-> 快递管理 -> 个人操作列表
  data_expressTablePerson ($params) {
    return instance.post('/submit.php/shVisa/getUserExpress', $params)
  },
  // 前台组-> 快递管理 -> 全部列表
  data_expressTableAll ($params) {
    return instance.post('/submit.php/shVisa/getExpress', $params)
  },
  // 前台组-> 快递管理 -> 搜索结果
  data_expressTableSearch ($params) {
    return instance.post('/submit.php/shVisa/getSearchExpress', $params)
  },
  // 前台组-> 快递管理 -> 搜索结果
  data_daizhuangCountTableSearch ($params) {
    return instance.post('/submit.php/shMaterial/countZhuangdai', $params)
  },
  // 前台组-> 业绩管理 -> 搜索结果
  data_visaCountSearch ($params) {
    return instance.post('/submit.php/shVisa/count', $params)
  },
  // ============================================= 材料组 =================================================================== //

  // 材料组-> 日本 -> 业绩管理 -> 搜索结果
  data_materialCountSearch ($params) {
    return instance.post('/submit.php/shMaterial/count', $params)
  },
  // 材料组-> 日本 -> 酒店管理 -> 启动中
  data_materialHotelOpen ($params) {
    return instance.post('/submit.php/shTemplate/getOpenHotelList', $params)
  },
  // 材料组-> 日本 -> 酒店管理 -> 禁用中
  data_materialHotelClose ($params) {
    return instance.post('/submit.php/shTemplate/getCloseHotelList', $params)
  },
  // 材料组-> 日本 -> 酒店管理 -> 搜索结果
  data_materialHotelSearch ($params) {
    return instance.post('/submit.php/shTemplate/getSearchHotelList', $params)
  },
  // 材料组-> 日本 -> 行程管理 -> 启动中
  data_materialTripOpen ($params) {
    return instance.post('/submit.php/shTemplate/getOpenTripList', $params)
  },
  // 材料组-> 日本 -> 行程管理 -> 禁用中
  data_materialTripClose ($params) {
    return instance.post('/submit.php/shTemplate/getCloseTripList', $params)
  },
  // 材料组-> 日本 -> 行程管理 -> 搜索结果
  data_materialTripSearch ($params) {
    return instance.post('/submit.php/shTemplate/getSearchTripList', $params)
  },
  // 材料组-> 日本 -> 航班管理 -> 启动中
  data_materialFightOpen ($params) {
    return instance.post('/submit.php/shTemplate/getOpenFlightList', $params)
  },
  // 材料组-> 日本 -> 航班管理 -> 禁用中
  data_materialFightClose ($params) {
    return instance.post('/submit.php/shTemplate/getCloseFlightList', $params)
  },
  // 材料组-> 日本 -> 航班管理 -> 搜索结果
  data_materialFightSearch ($params) {
    return instance.post('/submit.php/shTemplate/getSearchFlightList', $params)
  },
  // 材料组-> 泰国 -> 签证管理 -> 签证列表
  data_materialThailandVisa ($params) {
    return instance.post('/submit.php/thailandMaterial/getList', $params)
  },
  // 材料组-> 泰国 -> 签证管理 -> 搜索结果
  data_materialThailandVisaSearch ($params) {
    return instance.post('/submit.php/thailandMaterial/getSearchList', $params)
  },
  // 材料组 -> 日本组 -> 签证管理 -> 个人操作列表
  data_materialTablePerson ($params) {
    return instance.post('/submit.php/shMaterial/getPerson', $params)
  },
  // 材料组 -> 日本组 -> 签证管理 -> 待补录签证
  data_materialTableBackTracking ($params) {
    return instance.post('/submit.php/shMaterial/getRecheck', $params)
  },
  // 材料组 -> 日本组 -> 签证管理 -> 待日审签证
  data_materialTableAudit ($params) {
    return instance.post('/submit.php/shMaterial/getDayCheck', $params)
  },
  // 材料组 -> 日本组 -> 补录 -> 编辑护照
  data_materialGetPassportByVisaId ($params) {
    return instance.post('/submit.php/shMaterial/getPassportByVisaId', $params)
  },

  // ============================================= 送签组 =================================================================== //

  // 送签组 -> 日本组 -> 签证管理 -> 待送签签证
  data_sendTableVisa ($params) {
    return instance.post('/submit.php/shSend/getSong', $params)
  },
  // 送签组 -> 日本组 -> 签证管理 -> 搜索结果
  data_sendTableSearch ($params) {
    return instance.post('/submit.php/shSend/getSearchList', $params)
  },
  // 送签组 -> 泰国组 -> 签证管理 -> 待送签签证
  data_sendTableThailandVisa ($params) {
    return instance.post('/submit.php/thailandSend/getSong', $params)
  },
  // 送签组 -> 泰国组 -> 签证管理 -> 搜索结果
  data_sendTableThailandSearch ($params) {
    return instance.post('/submit.php/thailandSend/getSearchList', $params)
  },
  // 送签组 -> 其它组 -> 签证管理 -> 待送签签证
  data_sendTableOtherVisa ($params) {
    return instance.post('/submit.php/otherSend/getSong', $params)
  },
  // 送签组 -> 其它组 -> 签证管理 -> 搜索结果
  data_sendTableOtherSearch ($params) {
    return instance.post('/submit.php/otherSend/getSearchList', $params)
  },

  // ============================================= 售后组 =================================================================== //

  // 售后组 -> 日本组 -> 签证管理 -> 待处理签证
  data_afterTableVisa ($params) {
    return instance.post('/submit.php/shAfter/getAfter', $params)
  },
  // 售后组 -> 日本组 -> 签证管理 -> 搜索结果
  data_afterTableSearch ($params) {
    return instance.post('/submit.php/shAfter/getSearchList', $params)
  },
  // 售后组 -> 日本组 -> 业绩管理 -> 搜索结果
  data_afterTableCountSearch ($params) {
    return instance.post('/submit.php/shAfter/count', $params)
  },
  // 售后组 -> 泰国组 -> 签证管理 -> 待处理签证
  data_afterTableThailandVisa ($params) {
    return instance.post('/submit.php/thailandAfter/getAfter', $params)
  },
  // 售后组 -> 泰国组 -> 签证管理 -> 搜索结果
  data_afterTableThailandSearch ($params) {
    return instance.post('/submit.php/thailandAfter/getSearchList', $params)
  },
  // 售后组 -> 泰国组 -> 业绩管理 -> 搜索结果
  data_afterTableThailandCountSearch ($params) {
    return instance.post('/submit.php/thailandAfter/getAfter', $params)
  },
  // 售后组 -> 其它组 -> 签证管理 -> 待处理签证
  data_afterTableOtherVisa ($params) {
    return instance.post('/submit.php/otherAfter/getAfter', $params)
  },
  // 售后组 -> 其它组 -> 签证管理 -> 搜索结果
  data_afterTableOtherSearch ($params) {
    return instance.post('/submit.php/otherAfter/getSearchList', $params)
  },
  // 售后组 -> 其它组 -> 业绩管理 -> 搜索结果
  data_afterTableOtherCountSearch ($params) {
    return instance.post('/submit.php/thailandAfter/getAfter', $params)
  },

  // ============================================= 其它 =================================================================== //

  // 航班信息
  data_fightData ($params) {
    return instance.post('/submit.php/shMaterial/searchFlight', $params)
  },
  // 淘宝昵称查询
  data_taoBaoName ($params) {
    return instance.post('/submit.php/shVisa/searchNickTaobao', $params)
  },
  // 淘宝订单查询
  data_taoBaoOrder ($params) {
    return instance.post('/submit.php/shVisa/searchTidTaobao', $params)
  },
  // 淘宝昵称详情
  data_taoBaoNameDetails ($params) {
    return instance.post('/submit.php/shVisa/getOrdersByNick', $params)
  },
  // 淘宝订单详情
  data_taoBaoTidDetails ($params) {
    return instance.post('/submit.php/shVisa/getOrdersByTid', $params)
  },
  // 淘宝订单匹配详情
  data_taoBaoMatchDetails ($params) {
    return instance.post('/submit.php/shVisa/getDetailByTid', $params)
  },
  // 淘宝订单用户信息详情
  data_taoBaoUserInfoDetails ($params) {
    return instance.post('/submit.php/shVisa/getOrderMobileAndAddress', $params)
  },
  // 护照信息详情
  data_passportInfoDetails ($params) {
    return instance.post('/submit.php/shVisa/getPassportPreview', $params)
  },
  // 护照信息详情
  data_serialNumberDetails ($params) {
    return instance.post('/submit.php/shVisa/getPreview', $params)
  },
  // 不及格select选项
  data_unqualifiedData ($params) {
    return instance.post('/submit.php/shVisa/getVisaPassportListForDisagree', $params)
  },
  // 初审操作人
  data_staffData ($params) {
    return instance.post('/submit.php/shVisa/getStaff', $params)
  }
}