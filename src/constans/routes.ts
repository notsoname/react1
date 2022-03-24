import Page404 from '../pages/404';
import About from '../pages/about';
import HomePage from '../pages/home';

const routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/about',
    component: About,
  },
  {
    path: '*',
    component: Page404,
  },
];

export default routes;
