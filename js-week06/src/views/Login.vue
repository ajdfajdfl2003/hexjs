<template>
  <div class="login container text-center">
    <form class="form-signin" @submit.prevent="login">
      <h1 class="h3 mb-3 font-weight-normal">請先登入</h1>
      <label for="email" class="sr-only">Email address</label>
      <input type="email" id="email" class="form-control"
             v-model="request.email" v-focus
             placeholder="Email address" required autocomplete="email">
      <label for="password" class="sr-only">Password</label>
      <input type="password" id="password" class="form-control"
             v-model="request.password"
             placeholder="Password" required autocomplete="current-password">
      <div class="mb-3"></div>
      <div class="alert alert-danger" v-if="response.isShow">
        {{ response.message }}
      </div>
      <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
      <p class="mt-5 mb-3 text-muted">© 2020-present</p>
    </form>
  </div>
</template>
<script>
import handleRouter from '@/views/mixins/handleRouter';
import handleCookie from '@/views/mixins/handleCookie';

export default {
  name: 'Login',
  mixins: [handleCookie, handleRouter],
  data() {
    return {
      request: {
        email: '',
        password: '',
      },
      response: {
        isShow: false,
        message: '',
      },
    };
  },
  methods: {
    login() {
      const loader = this.$loading.show({ isFullPage: true });
      this.$http.post(`${process.env.VUE_APP_API_PATH}/auth/login`, this.request)
        .then(({ data: { uuid, token, expired } }) => {
          loader.hide();
          document.cookie = `token=${token}; expires=${new Date(expired * 1000)}`;
          document.cookie = `uuid=${uuid}; expires=${new Date(expired * 1000)}`;
          this.response.isShow = false;
          this.goToDashboard();
        })
        .catch((error) => {
          loader.hide();
          if (error.response) {
            const { message } = error.response.data;
            this.response.message = message;
            this.response.isShow = true;
          }
        });
    },
  },
  beforeMount() {
    if (this.isCookieValid()) {
      this.goToDashboard();
    }
  },
  directives: {
    focus: {
      inserted(el) {
        el.focus();
      },
    },
  },
};
</script>
<style scoped>
  .login {
    min-height: 100%; /* Fallback for browsers do NOT support vh unit */
    min-height: 100vh; /* These two lines are counted as one :-)       */
    display: flex;
    align-items: center;
  }

  .form-signin {
    width: 100%;
    max-width: 330px;
    padding: 15px;
    margin: 0 auto;
  }
</style>
