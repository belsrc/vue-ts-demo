/* eslint-disable import/no-unresolved, no-undef, fp-jxl/no-nil, fp-jxl/no-mutation */
import { MutationTree } from 'vuex';
import { SET_USERS } from './store-types';

/*
export interface MutationTree<S> {
  [key: string]: Mutation<S>;
}
*/
const mutations: MutationTree<UserState> = {
  [SET_USERS](state, val: User[]) {
    state.users = val;
  },
};

export default mutations;
