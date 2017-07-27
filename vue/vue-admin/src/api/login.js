import instance from './index'
const qs = require('qs')

export default  {
  api_login ($params) {
    return instance.post('/submit.php/user/login', qs.stringify($params))
  },
  get_info () {
    /*
    * admin:     管理员
    * reception: 前台组
    * materials: 材料组
    * */
    return ['admin']
  }
}
