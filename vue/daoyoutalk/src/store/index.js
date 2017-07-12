import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

const state = {
  test: 0,
  headToggle: true,
  footToggle: true,
  defaultBodySize: '667',
  defaultHeadSize: '40',
  defaultFootSize: '40',
  swipeContainerSize: '667px'
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
