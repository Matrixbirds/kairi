import Vue from 'vue';
import Router from 'vue-router';
import Hello from 'components/Hello';
import Articles from 'components/Articles';
import Article from 'components/Article';

Vue.use(Router);

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  exact: true,
  routes: [
    {
      path: '/',
      name: '/',
      component: Hello,
    },
    {
      path: '/articles',
      name: 'articles',
      component: Articles,
    },
    {
      path: '/articles/:id',
      name: 'article',
      component: Article,
      props: true,
    },
  ],
});
