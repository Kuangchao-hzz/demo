import axios from 'axios'

// 更过axios参考配置 http://www.jianshu.com/p/df464b26ae58
const instance = axios.create({
  baseURL: './static/',
  timeout: 50000,
  headers: {'X-Custom-Header': 'foobar'}
})

export default {
  // test method
  test () {
    instance.get('test.json')
      .then(function (response) {
        console.log(response)
      })
  }
}

