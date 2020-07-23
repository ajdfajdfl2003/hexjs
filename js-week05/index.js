import zh_TW from './locales/zh_TW.js';

Vue.prototype.$bus = new Vue();

Vue.use(VueLoading);

Vue.component('ValidationObserver', VeeValidate.ValidationObserver);
Vue.component('ValidationProvider', VeeValidate.ValidationProvider);

VeeValidate.configure({
  classes: {
    valid: 'is-valid',
    invalid: 'is-invalid',
  }
});

VeeValidate.localize('tw', zh_TW);

new Vue({
  el: '#app',
  data () {
    return {}
  }
});
