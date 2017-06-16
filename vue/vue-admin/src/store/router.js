import { includeRouterMap, asyncRouterMap } from '../router'

const router = {
  state: {
    include: includeRouterMap,
    async: [],
    todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false }
    ]
  },
  mutations: {
    SET_ROUTERS: (state, routers) => {
      state.async = routers
    }
  },
  actions: {
    GenerateRoutes ({ commit }, auth) {
      commit('SET_ROUTERS', asyncRouterMap)
    }
  },
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    }
  }
}

export default router;