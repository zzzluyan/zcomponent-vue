// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import ZButton from './components/Button';
import ZCheckBox from './components/CheckBox';
import ZInput from './components/Input';
import ZRadio from './components/Radio';

Vue.config.productionTip = false
Vue.use(ZButton);
Vue.use(ZCheckBox);
Vue.use(ZInput);
Vue.use(ZRadio);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
