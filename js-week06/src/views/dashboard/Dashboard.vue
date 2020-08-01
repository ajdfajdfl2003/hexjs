<template>
  <div class="dashboard container-fluid">
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
      <button class="navbar-toggler" type="button" data-toggle="collapse"
              data-target="#navbarDashboard" aria-controls="navbarDashboard"
              aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarDashboard">
        <div class="navbar-nav mr-auto mt-2 mt-lg-0">
          <router-link to="/dashboard" class="nav-item nav-link">後台首頁</router-link>
          <router-link to="/dashboard/coupons" class="nav-item nav-link">優惠券列表</router-link>
          <router-link to="/dashboard/order-list" class="nav-item nav-link">訂單列表</router-link>
          <router-link to="/dashboard/photos" class="nav-item nav-link">圖片儲存列表</router-link>
          <router-link to="/" class="nav-item nav-link">回到前台</router-link>
        </div>
        <div class="d-flex my-2 my-lg-0">
          <form @submit.prevent="logout">
            <button class="btn btn-outline-info" type="submit">登出</button>
          </form>
        </div>
      </div>
    </nav>
    <router-view v-if="isValid" :user="user"></router-view>
  </div>
</template>
<script>
import handleRouter from '@/views/mixins/handleRouter';
import handleActive from '@/views/mixins/handleActive';
import handleCookie from '@/views/mixins/handleCookie';

export default {
  name: 'dashboard',
  mixins: [handleActive, handleCookie, handleRouter],
  data() {
    return {
      user: {},
      isValid: false,
    };
  },
  methods: {
    logout() {
      const loader = this.$loading.show({ isFullPage: true });
      this.$http.post(`${process.env.VUE_APP_API_PATH}/auth/logout`, {
        api_token: this.user.token,
      }).finally(() => {
        loader.hide();
        this.destroyAuthority();
        this.goToHomePage();
      });
    },
    async retrieveTokenStatus() {
      await this.$http.post(`${process.env.VUE_APP_API_PATH}/auth/check`, { api_token: this.user.token })
        .then(({ data: { success } }) => { this.isValid = success; })
        .catch(() => { this.isValid = false; });
    },
    async handleAuthorization() {
      if (!this.isCookieValid()) this.goToLoginPage();
      else {
        this.user.uuid = this.retrieveUUID();
        this.user.token = this.retrieveToken();

        const loader = this.$loading.show({ isFullPage: true });
        await this.retrieveTokenStatus();
        loader.hide();
        if (!this.isValid) {
          this.destroyAuthority();
          this.goToLoginPage();
        }
      }
    },
  },
  mounted() {
    this.handleAuthorization();
    this.handleAddActive();
  },
  updated() {
    this.handleAddActive();
  },
};
</script>
<style scoped>

</style>
