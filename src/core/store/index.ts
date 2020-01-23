/* eslint-disable import/no-unresolved, no-undef */
import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import actions from './actions';
import mutations from './mutations';
import getters from './getters';

// eslint-disable-next-line fp-jxl/no-unused-expression
Vue.use(Vuex);

// https://github.com/vuejs/vuex/blob/dev/types/index.d.ts

const store: StoreOptions<RootState> = {
  state: { todoItems: []},
  actions,
  mutations,
  getters,
  modules: {},
  strict: process.env.NODE_ENV !== 'production',
};

export default new Vuex.Store<RootState>(store);
