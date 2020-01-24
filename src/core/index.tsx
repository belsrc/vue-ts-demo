import './styles/base.scss';

import Vue from 'vue';

/* eslint-disable import/no-anonymous-default-export */
export default Vue.extend({
  render() {
    return (
      <div class='index'>
        <router-view />
      </div>
    );
  },
});
