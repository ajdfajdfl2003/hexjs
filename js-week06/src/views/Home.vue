<template>
  <div class="home">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <button class="navbar-toggler" type="button" data-toggle="collapse"
              data-target="#navbarHome" aria-controls="navbarHome"
              aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarHome">
        <router-link to="/" class="nav-link">首頁</router-link>
        <router-link to="/product/123" class="nav-link">產品頁面</router-link>
        <router-link to="/cart" class="nav-link">購物車</router-link>
        <router-link to="/payment" class="nav-link">結帳</router-link>
        <router-link to="/payment/finish" class="nav-link">結帳完成</router-link>
        <router-link to="/about" class="nav-link">關於我們</router-link>
        <router-link to="/dashboard" class="nav-link">後台 without login</router-link>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
  },
};
</script>
