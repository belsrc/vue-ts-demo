/* eslint-disable import/no-unresolved, no-undef */
import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import actions from './actions';
import mutations from './mutations';
import getters from './getters';
import user from './modules/user';

// eslint-disable-next-line fp-jxl/no-unused-expression
Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: { todoItems: []},
  actions,
  mutations,
  getters,
  modules: { user },
  strict: process.env.NODE_ENV !== 'production',
};

export default new Vuex.Store<RootState>(store);
