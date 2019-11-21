import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import mutations from './mutations';
import getters from './getters';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {},
  actions,
  mutations,
  getters,
  modules: {},

  // * NOTE: Detect inappropriate mutations, performance hit, NO PROD
  strict: process.env.NODE_ENV !== 'production',
});

export default store;
