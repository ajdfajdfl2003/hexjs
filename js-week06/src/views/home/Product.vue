<template>
  <div v-if="isLoaded" class="product my-4 mx-4">
    <div class="row">
      <img :src="product.imageUrl[0]" style="height: 300px"/>
    </div>
    <div class="row mt-5">
      <h4 class="title">{{ product.title }}</h4>
    </div>
    <div class="row">
      <p class="mb-0">{{ product.content }}</p>
      <p class="mb-1 text-muted"><small>{{ product.description }}</small></p>
    </div>
    <div class="row">
      <div class="col-2">
        <del class="h6 text-secondary">原價 {{ product.origin_price }} 元</del>
      </div>
      <div class="col-10">
        <div class="h5 text-dark">現在只要 {{ product.price }} 元</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ProductMoreDetails',
  data() {
    return {
      product: {},
      isLoaded: false,
    };
  },
  methods: {
    retrieveProductDetail(id) {
      const loader = this.$loading.show({ isFullPage: true });
      this.$http.get(`${process.env.VUE_APP_API_PATH}/${process.env.VUE_APP_UUID}/ec/product/${id}`)
        .then(({ data: { data } }) => {
          this.product = data;
          loader.hide();
          this.isLoaded = true;
        });
    },
  },
  created() {
    this.retrieveProductDetail(this.$route.params.id);
  },
};
</script>
<style lang="css">
</style>
