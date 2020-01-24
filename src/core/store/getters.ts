/* eslint-disable import/no-unresolved, no-undef */
import { GetterTree } from 'vuex';
import { TODO_COUNT } from './store-types';

/*
export interface GetterTree<S, R> {
  [key: string]: Getter<S, R>;
}
*/
const getters: GetterTree<RootState, RootState> = {
  [TODO_COUNT](state) {
    return state.todoItems.length;
  },
};

export default getters;
