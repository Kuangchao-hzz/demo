const include = {
  state: {
    tableWidth: '',
    tableHeight: '',
    containerHeight: '',
    searchHeight: '',
    domain: ''
  },
  mutations: {
    SET_CONTAINERHEIGHT ($state, $height) {
      $state.containerHeight = $height
    },
    SET_SEARCHHEIGHT ($state, $height) {
      $state.searchHeight = $height
    },
    SET_DOMAIN ($state, $domain) {
      $state.domain = $domain
    }
  },
  actions: {
    captureBrowserSize ({ commit }) {
      return new Promise(resolve => {
        let $clientHeight = window.document.documentElement.clientHeight
        // 除头部外内容高度
        commit('SET_CONTAINERHEIGHT', $clientHeight - 80)
        commit('SET_SEARCHHEIGHT', 180)
        resolve()
      })
    },
    currentDomain ({ commit }) {
      let $domain = document.domain
      commit('SET_DOMAIN', 'julong')
    }
  }
}
export default include;