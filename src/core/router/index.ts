/* eslint-disable fp-jxl/no-unused-expression */
import Router from 'vue-router';
import Vue from 'vue';
import { DEFAULT } from './route-names';

const appName = 'Template';
const pageTitle = (path?: string | string[]) =>
  [ ...Array.isArray(path) ? path : [path], appName ].join(' | ');

const Home = () => import('components/pages/home');

Vue.use(Router);

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
  /* eslint-disable-next-line fp-jxl/no-mutation */
  document.title = to.meta.title(to);
  return next();
});

export default router;
