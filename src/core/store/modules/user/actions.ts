/* eslint-disable import/no-unresolved, no-undef */
import { ActionTree } from 'vuex';
import axios from 'axios';
import { GET_USERS, SET_USERS } from './store-types';

/*
export interface ActionTree<S, R> {
  [key: string]: Action<S, R>;
}
*/
const actions: ActionTree<UserState, RootState> = {
  async [GET_USERS]({ commit }) {
    const res = await axios.get<Array<TodoItem>>('https://jsonplaceholder.typicode.com/users');

    return commit(SET_USERS, res);
  },
};

export default actions;
