// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import './css/site.css';
/* eslint-disable */
Vue.prototype.$bus = new Vue();
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
