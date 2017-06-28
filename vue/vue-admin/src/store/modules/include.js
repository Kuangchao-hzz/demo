const include = {
  state: {
    tableWidth: '',
    tableHeight: ''
  },
  mutations: {
    SET_INNERWIDTH ($state, $width) {
      $state.tableWidth = $width
    },
    SET_INNERHEIGHT ($state, $height) {
      $state.tableHeight = $height
    },
  },
  actions: {
    captureBrowserSize ({ commit }) {
      return new Promise(resolve => {
        if(window.innerHeight <= '800'){
          commit('SET_INNERHEIGHT', 500)
        } else {
          commit('SET_INNERHEIGHT', 650)
        }
        commit('SET_INNERWIDTH', window.innerWidth)
        resolve()
      })
    }
  }
}
export default include;