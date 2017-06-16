
import Cookies from 'js-cookie';

const user = {
  state: {
    token: Cookies.get('Admin-Token')
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token;
    },
  },
  actions: {
    LoginByUser({commit}, userInfo) {
      const user = userInfo.auth.trim();
      Cookies.set('Admin-Token', user);
      commit('SET_TOKEN', 'admin');
    }
  }
}

export default user;

