import instance from './index'

export default {
  get_HomeListData (para) {
    return instance.get('https://www.easy-mock.com/mock/59423ea78ac26d795f0d9631/Kuangchao/shVisa/getPerson', qs.stringify(para))
  },
  // 个人操作列表
  data_visaTablePerson ($params) {
    return instance.post('/submit.php/shVisa/getPerson', $params)
  },
  // 历史签证
  data_visaTableWait ($params) {
    return instance.post('/submit.php/shVisa/getWait', $params)
  },
  // 进行中签证
  data_visaTableDoing ($params) {
    return instance.post('/submit.php/shVisa/getDoing', $params)
  },
  // 历史签证
  data_visaTableFinish ($params) {
    return instance.post('/submit.php/shVisa/getFinish', $params)
  },
  // 查询结果
  data_visaTableSearch ($params) {
    return instance.post('/submit.php/shVisa/getSearchList', $params)
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
  }
}