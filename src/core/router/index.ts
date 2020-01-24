import Router from 'vue-router';
import Vue from 'vue';
import { DEFAULT } from './route-names';

const appName = 'Template';
const pageTitle = (path?: string|string[]) => [ ...Array.isArray(path) ? path : [path], appName ].join(' | ');

const Home = () => import('components/pages/home');

Vue.use(Router);

// https://github.com/vuejs/vue-router/blob/dev/types/router.d.ts

const router = new Router({
  mode: 'history',
  routes: [
    {
      name: DEFAULT,
      path: '/',
      meta: { title: () => pageTitle() },
      component: Home,
    },

    // eslint-disable-next-line array-element-newline
    // Fallback route
    {
      path: '*',
      redirect: '/',
    },
  ],
});

// Set the document title
router.beforeEach((to, from, next) => {
  document.title = to.meta.title(to);
  next();
});

export default router;
