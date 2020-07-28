<template>
  <div class="home section">
    <div class="header-section section">
      <div class="header-bottom section stick">
        <div class="container">
          <div class="row">
            <div class="header-bottom-wrapper text-center col">
              <nav ref="navbarHome" class="main-menu" style="display: block;">
                <ul>
                  <li class="active"><router-link to="/">首頁</router-link></li>
                  <li><router-link to="/product/123">產品頁面</router-link></li>
                  <li><router-link to="/cart">購物車</router-link></li>
                  <li><router-link to="/payment">結帳</router-link></li>
                  <li><router-link to="/payment/finish">結帳完成</router-link></li>
                  <li><router-link to="/about">關於我們</router-link></li>
                  <li><router-link to="/dashboard">後台 without login</router-link></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>

import utils from './mixins/utils';

export default {
  name: 'Home',
  mixins: [utils],
  mounted() {
    this.handleAddActive();
  },
  updated() {
    this.handleAddActive();
  },
};
</script>

<style lang="scss">
  @import "../assets/css/style.css";

  .text-center {
    text-align: center !important;
  }

  .col {
    flex-basis: 0;
    flex-grow: 1;
    min-width: 0;
    max-width: 100%;
  }
</style>
