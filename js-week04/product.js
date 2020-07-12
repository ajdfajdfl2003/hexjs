new Vue({
  el: '#app',
  data: {},
  methods: {},
  beforeCreate () {
    if (!isCookieExists('token')) window.location = 'login.html';
  }
});