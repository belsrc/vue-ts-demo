/* eslint-disable import/no-unresolved, no-undef */
import { GetterTree } from 'vuex';

/*
export interface GetterTree<S, R> {
  [key: string]: Getter<S, R>;
}
*/
const getters: GetterTree<RootState, RootState> = {};

export default getters;
