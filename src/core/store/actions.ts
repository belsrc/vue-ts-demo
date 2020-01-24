/* eslint-disable import/no-unresolved, no-undef */
import { ActionTree, ActionContext } from 'vuex';
import axios from 'axios';
import { GET_TODOS, SET_TODOS } from './store-types';

/*
export interface ActionTree<S, R> {
  [key: string]: Action<S, R>;
}
*/
const actions: ActionTree<RootState, RootState> = {
  // async [GET_TODOS]({ commit }: ActionContext<RootState, RootState>): Promise<void> {
  async [GET_TODOS]({ commit }) {
    const res = await axios.get<Array<TodoItem>>('https://jsonplaceholder.typicode.com/todos');

    return commit(SET_TODOS, res);
  },
};

export default actions;
