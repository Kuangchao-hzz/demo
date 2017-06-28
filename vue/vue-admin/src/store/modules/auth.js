import { includeRouterMap, asyncRouterMap } from '../../router'

const auth = {
  state: {
      auth_router: []
  },
  mutations: {
    SET_ROUTERS: (state, authRouter) => {
      state.auth_router = includeRouterMap.concat(authRouter)
    }
  },
  actions: {
    GenerateRoutes ({ commit }, auth) {
      commit('SET_ROUTERS', asyncRouterMap)
    }
  }
}
export default auth;