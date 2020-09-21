import Vue from 'vue';
import store from './store/index';
import App from './App.vue';

const app = new Vue({
  el: '#app',
  store,
  components: {App},
  template: '<App/>'
});