import Vue from 'vue';
import App from './App.vue';
import router from './router';

import Buefy from 'buefy';
import '@/assets/styles.scss';

import VueParticles from "vue-particles";

Vue.config.productionTip = false;

Vue.use(Buefy);
Vue.use(VueParticles);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
