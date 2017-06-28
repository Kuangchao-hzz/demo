import instance from './index'

export default {
  get_HomeListData (para) {
    return instance.get('https://www.easy-mock.com/mock/59423ea78ac26d795f0d9631/Kuangchao/shVisa/getPerson', qs.stringify(para))
  },
  // 个人操作列表
  data_visaTablePerson($params) {
    return instance.post('/submit.php/shVisa/getPerson', $params)
  },
  // 历史签证
  data_visaTableWait($params) {
    return instance.post('/submit.php/shVisa/getWait', $params)
  },
  // 进行中签证
  data_visaTableDoing($params) {
    return instance.post('/submit.php/shVisa/getDoing', $params)
  },
  // 历史签证
  data_visaTableFinish($params) {
    return instance.post('/submit.php/shVisa/getFinish', $params)
  },
}