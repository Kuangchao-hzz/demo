import axios from 'axios'
import store from '../store/index'
const qs = require('qs')

// 更过axios参考配置 http://www.jianshu.com/p/df464b26ae58
axios.defaults.withCredentials = true
const instance = axios.create({
  baseURL: '/api',
  withCredentials:true,
  transformRequest: [function (data) {
    let $baseData = Object.assign({}, qs.parse(data), {
      token: store.state.user.baseData.TOKEN,
      session: store.state.user.baseData.SESSIONUID
    })
    return qs.stringify($baseData)
  }]
})

export default instance