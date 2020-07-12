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
        .then(({ data: { token, expired } }) => {
          document.cookie = `token=${token}; expires=${new Date(expired * 1000)}`;
          this.response.isShow = false;
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