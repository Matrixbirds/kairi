import Vue from 'vue';
import Router from 'vue-router';
import Hello from 'components/Hello';
import Home from 'components/Home';

Vue.use(Router);

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  exact: true,
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
    },
  ],
});
