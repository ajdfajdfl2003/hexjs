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
          window.location = 'product.html';
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
  beforeCreate () {
    if (isCookieExists('token')) window.location = 'product.html';
  },
  directives: {
    focus: {
      inserted: function (el) {
        el.focus();
      }
    }
  }
});