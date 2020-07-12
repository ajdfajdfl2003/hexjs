const loginApiUrl = "https://course-ec-api.hexschool.io/api/auth/login";
new Vue({
  el: '#app',
  data: {
    email: '',
    password: '',
    response: {
      isShow: false,
      message: '',
    }
  },
  methods: {
    login () {
      const vm = this;
      axios.post(loginApiUrl, {
        email: vm.email,
        password: vm.password
      })
        .then(res => {
          vm.response.isShow = false;
          alert(JSON.stringify(res));
        })
        .catch((error) => {
          if (error.response) {
            console.debug(error.response.status);
            console.debug(error.response.data);
            const { message } = error.response.data;
            vm.response.message = message;
            vm.response.isShow = true;
          }
        });
    }
  },
  directives: {
    focus: {
      inserted: function (el) {
        el.focus();
      }
    }
  }
});