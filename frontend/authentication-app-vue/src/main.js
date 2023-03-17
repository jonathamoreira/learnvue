import Vue from 'vue';
import Vuelidate from 'vuelidate';

import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.vue';
import router from './router';
import 'nprogress/nprogress.css';

// Vue.use();
Vue.use(Vuelidate);
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
