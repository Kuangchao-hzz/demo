import * as type from './types'
export default {
  controller_headToggle ({ commit }, para) {
    /*
    * ===================================
    * 根据地址栏显示header.vue显示隐藏
    * 满足pages是 ----> 显示
    * 不满足pages是 ----> 隐藏
    * ===================================
    * */
    let pages = ['attractions']
    // 如果para满足pages, 则为底部菜单栏tabs
    if (pages.some((n) => { return para === n })) {
      commit(type['storeController']['setHeadToggle'], true)
    } else {
      commit(type['storeController']['setHeadToggle'], false)
    }
  },
  controller_footToggle ({ commit }, para) {
    /*
     * ===================================
     * 根据地址栏显示footer.vue显示隐藏
     * 满足pages是 ----> 显示
     * 不满足pages是 ----> 隐藏
     * ===================================
     * */
    let pages = ['home', 'plan', 'more', 'my']
    // 如果para满足pages, 则为底部菜单栏tabs
    if (pages.some((n) => { return para === n })) {
      commit(type['storeController']['setFootToggle'], true)
    } else {
      commit(type['storeController']['setFootToggle'], false)
    }
  }
}
