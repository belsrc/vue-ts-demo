/* eslint-disable fp-jxl/no-unused-expression, fp-jxl/no-mutation */
import 'core-js/stable';
import 'regenerator-runtime/runtime';

import Vue from 'vue';
import { sync } from 'vuex-router-sync';
import lang from 'element-ui/lib/locale/lang/en';
import locale from 'element-ui/lib/locale';
import App from './core';
import store from './core/store';
import router from './core/router';

const IS_PRODUCTION = process.env.NODE_ENV === 'production';

// Turn off various Vue console stuff in production
if(IS_PRODUCTION) {
  Vue.config.devtools = false;
  Vue.config.productionTip = false;
  Vue.config.silent = true;
}

// Set ElementUI's locale
locale.use(lang);

// Add router sync
sync(store, router);

const app = new Vue({
  store,
  router,
  render: h => h(App),
});

app.$mount('#app');
