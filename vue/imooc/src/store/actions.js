import * as type from './types'
export default {
  controller_foot_tabbar: ({ commit }, para) => {
    let pages = ['home', 'courses', 'download', 'my']
    // 如果para满足pages, 则为底部菜单栏tabs
    if (pages.some((n) => { return para === n })) {
      commit(type['tabbar']['isShow'], true)
    } else {
      commit(type['tabbar']['isShow'], false)
    }
  }
}
