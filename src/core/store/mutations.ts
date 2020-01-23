/* eslint-disable import/no-unresolved, no-undef, fp-jxl/no-nil, fp-jxl/no-mutation */
import { MutationTree } from 'vuex';
import { SET_TODOS } from './store-types';

/*
export interface MutationTree<S> {
  [key: string]: Mutation<S>;
}
*/
const mutations: MutationTree<RootState> = {
  [SET_TODOS](state, val: TodoItem[]) {
    state.todoItems = val;
  },
};

export default mutations;
