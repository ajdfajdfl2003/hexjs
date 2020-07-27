<template>
   <div class="dashboard">
     <div class="nav">
       <router-link to="/dashboard">後台首頁</router-link> |
       <router-link to="/dashboard/coupons">優惠券列表</router-link> |
       <router-link to="/dashboard/order-list">訂單列表</router-link> |
       <router-link to="/dashboard/photos">圖片儲存列表</router-link> |
       <router-link to="/">回到前台</router-link> |
       <router-link to="/dashboard/logout">登出</router-link>
     </div>
     <router-view></router-view>
   </div>
</template>

<script>
export default {
  name: 'dashboard',
};
</script>

<style scoped>

</style>
