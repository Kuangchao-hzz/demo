import axios from 'axios'
const qs = require('qs')

// 更过axios参考配置 http://www.jianshu.com/p/df464b26ae58
const instance = axios.create({
  baseURL: 'https://www.easy-mock.com/mock/59423ea78ac26d795f0d9631/Kuangchao/',
  headers: {'X-Custom-Header': 'foobar'}
})

export default {
  get_HomeListData (para) {
    return instance.get('shVisa/getPerson', qs.stringify(para))
  },
  get_routerAuthority () {
    return new Promise((resolve, reject) => {
      resolve({"auth": "admin"})
    })
  }
}