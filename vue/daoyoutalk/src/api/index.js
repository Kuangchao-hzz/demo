import axios from 'axios'
const qs = require('qs')

// 更过axios参考配置 http://www.jianshu.com/p/df464b26ae58
const instance = axios.create({
  baseURL: 'http://www.daoyoutalk.com/api.php/',
  headers: {'Content-Type': 'application/x-www-form-urlencoded'},
  method: 'POST'
})

export default {
  // test method
  test () {
    instance.get('test.json')
      .then(function (response) {
        console.log(response)
      })
  },
  // HOME页日本城市列表数据
  get_HomeListData (para) {
    return instance.post('apiHome/getFocusFor34?', qs.stringify(para))
  }
}
