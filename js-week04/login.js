const loginApiUrl = "https://course-ec-api.hexschool.io/api/auth/login";
new Vue({
  el: '#app',
  data: {
    request: {
      email: '',
      password: ''
    },
    response: {
      isShow: false,
      message: '',
    }
  },
  methods: {
    login () {
      axios.post(loginApiUrl, this.request)
        .then(res => {
          this.response.isShow = false;
          console.log(res.toJSON())
        })
        .catch((error) => {
          if (error.response) {
            const { message } = error.response.data;
            this.response.message = message;
            this.response.isShow = true;
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