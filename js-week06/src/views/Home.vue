<template>
  <div class="home">
    <div id="nav">
      <router-link to="/">首頁</router-link> |
      <router-link to="/product/123">產品頁面</router-link> |
      <router-link to="/cart">購物車</router-link> |
      <router-link to="/payment">結帳</router-link> |
      <router-link to="/payment/finish">結帳完成</router-link> |
      <router-link to="/about">關於我們</router-link>
    </div>
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
