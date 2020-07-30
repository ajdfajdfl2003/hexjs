<template>
  <div class="home container-fluid">
    <nav class="navbar navbar-expand-md navbar-dark bg-info">
      <button class="navbar-toggler" type="button" data-toggle="collapse"
              data-target="#navbarHome" aria-controls="navbarHome"
              aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarHome">
        <div class="navbar-nav">
          <router-link to="/" class="nav-item nav-link">首頁</router-link>
            <router-link to="/product/123" class="nav-item nav-link">產品頁面</router-link>
            <router-link to="/cart" class="nav-item nav-link">購物車</router-link>
            <router-link to="/payment" class="nav-item nav-link">結帳</router-link>
            <router-link to="/payment/finish" class="nav-item nav-link">結帳完成</router-link>
            <router-link to="/about" class="nav-item nav-link">關於我們</router-link>
            <router-link to="/login" class="nav-item nav-link">登入</router-link>
        </div>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>

import handleActive from './mixins/handleActive';

export default {
  name: 'Home',
  mixins: [handleActive],
  mounted() {
    this.handleAddActive();
  },
  updated() {
    this.handleAddActive();
  },
};
</script>
