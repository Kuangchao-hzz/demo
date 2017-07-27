
import Cookies from 'js-cookie';
import api from '../../api/login'

const user = {
  state: {
    baseData: {
      SESSIONUID: Cookies.get('SESSIONUID'),
      TOKEN: Cookies.get('TOKEN')
    },
    USER: Cookies.get('USER'),
    roles: []
  },
  mutations: {
    SET_USER: (state, user) => {
      state.USER = user;
    },
    SET_TOKEN: (state, token) => {
      state.baseData.TOKEN = token;
    },
    SET_SESSIONUID: (state, sessionuid) => {
      state.baseData.SESSIONUID = sessionuid;
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    }
  },
  actions: {
    LoginByUser({commit}, userInfo) {
      return new Promise(resolve => {
        const user = userInfo.account.trim();
        Cookies.set('USER', user);
        commit('SET_USER', user);
        commit('SET_TOKEN', Cookies.get('TOKEN'));
        commit('SET_SESSIONUID', Cookies.get('SESSIONUID'));
        resolve()
      })
    },
    getInfoData ({ commit }) {
      return new Promise(resolve => {
        commit('SET_ROLES', api.get_info())
        resolve(api.get_info())
      })
    }
  }
};

export default user;

