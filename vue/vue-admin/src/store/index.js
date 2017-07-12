import Vue from 'vue';
import Vuex from 'vuex';
import user from './modules/user'
import auth from './modules/auth'
import table from './modules/table'
import include from './modules/include'
import getters from './getters'

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    user,
    table,
    include,
    auth
  },
  getters
});

export default store
