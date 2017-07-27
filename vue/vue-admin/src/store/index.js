import Vue from 'vue';
import Vuex from 'vuex';
import user from './modules/user'
import options from './modules/options'
import permission from './modules/permission'
import table from './modules/table'
import include from './modules/include'
import getters from './getters'

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    user,
    options,
    table,
    include,
    permission
  },
  getters
});

export default store
