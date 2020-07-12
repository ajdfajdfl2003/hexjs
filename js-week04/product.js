new Vue({
  el: '#app',
  data: {
    products: [],
    tempProduct: {},
  },
  methods: {},
  beforeCreate () {
    if (!isCookieExists('token')) window.location = 'login.html';
  }
});