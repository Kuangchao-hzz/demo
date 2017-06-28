import instance from './index'
const qs = require('qs')

export default  {
  api_login ($params) {
    return instance.post('/submit.php/user/login', qs.stringify($params))
  }
}
