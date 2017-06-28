import axios from 'axios'
const qs = require('qs')

// 更过axios参考配置 http://www.jianshu.com/p/df464b26ae58
const instance = axios.create({
  baseURL: '/api',
  headers: {'X-Custom-Header': 'foobar'}
})

export default instance
