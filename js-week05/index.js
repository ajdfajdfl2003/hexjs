const apiUrlPrefix = 'https://course-ec-api.hexschool.io/api/19831eca-3ff8-4cbe-9167-80b24e16783f/ec';

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

new Vue({
  el: '#app',
  data () {
    return {}
  }
});
