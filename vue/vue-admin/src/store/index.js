import Vue from 'vue';
import Vuex from 'vuex';
import user from './user'
import router from './router'

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    user,
    router
  }
});

export default store
