/* eslint-disable import/no-unresolved, no-undef */
import { Module } from 'vuex';
import getters from './getters';
import actions from './actions';
import mutations from './mutations';

const user: Module<UserState, RootState> = {
  state: { users: []},
  getters,
  actions,
  mutations,
};

export default user;
