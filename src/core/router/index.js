import Router from 'vue-router';
import Vue from 'vue';
import { DEFAULT } from './route-names';

const appName = 'Template';
const pageTitle = path => [ ...Array.isArray(path) ? path : [path], appName ].join(' | ');

// * NOTE: In order to make use of the route-based dynamic imports you must use the
// * `import('./component/location')` syntax. Using the traditional
// * `import Comp from './component/location'` will will cause Webpack to bundle it
// * like normal and not split it.
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

  beforeEach: (to, from, next) => {
    // eslint-disable-next-line fp-jxl/no-mutation
    document.title = to.meta.title(to);

    return next();
  },
});

// Set the document title
// router.beforeEach((to, from, next) => {
//   document.title = to.meta.title(to);
//   next();
// });

export default router;
