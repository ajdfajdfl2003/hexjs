<template>
  <div id="products" class="row my-4">
    <div class="col-12 col-lg-2 mb-4">
      <div class="card bg-light">
        <div class="card-header bg-info text-white text-uppercase p-3">
          <i class="fas fa-list"></i>
        </div>
        <ul class="list-group category-block">
          <li v-for="item in categories" :key="item"
              @click.prevent="applyCategory(item)"
              class="list-group-item" :class="{ active: currentCategory === item }">
            <a href="#">{{ item }}</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="col-12 col-lg-10">
      <div class="row">
        <div v-for="product in filterProducts" :key="product.id"
             class="col-12 col-md-6 col-lg-4 mb-2">
          <div class="card">
            <img class="card-img-top"
                 :src="product.imageUrl[0]"
                 :alt="product.title">
            <div class="card-body">
              <span class="badge badge-pill badge-secondary mb-2">{{ product.category }}</span>
              <h5 class="card-title text-success">{{ product.title }}</h5>
              <p class="card-text">{{ product.content }}</p>
              <div class="d-flex justify-content-between align-items-baseline">
                <del class="h6 text-secondary">原價 {{ product.origin_price }} 元</del>
                <div class="h5 text-dark">現在只要 {{ product.price }} 元</div>
              </div>
            </div>
            <div class="card-footer d-flex">
              <div style="position: relative">
                <button type="button" class="btn btn-light" @click.prevent="">
                  More
                </button>
              </div>
              <button type="button" class="btn btn-info ml-auto"
                      @click.prevent="">Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HomeProducts',
  data() {
    return {
      categories: [],
      currentCategory: 'All',
      products: [],
    };
  },
  methods: {
    applyCategory(item) {
      if (this.currentCategory === 'All' || item !== this.currentCategory) {
        this.currentCategory = item;
      }
    },
    retrieveProducts(page = 0) {
      const loader = this.$loading.show({ isFullPage: true });
      this.$http.get(`${process.env.VUE_APP_API_PATH}/${process.env.VUE_APP_UUID}/ec/products`, {
        params: { page },
      }).then(({ data: { data } }) => {
        const categories = data.map((product) => product.category);
        categories.unshift('All');
        this.categories = new Set(categories);
        this.products = data;
        loader.hide();
      });
    },
  },
  created() {
    this.retrieveProducts();
  },
  computed: {
    filterProducts() {
      if (this.currentCategory === 'All') return this.products;
      return this.products.filter((item) => this.currentCategory === item.category);
    },
  },
};
</script>
<style lang="scss">
  .category-block li:hover {
    background-color: rgba(31, 87, 94, 0.5);
    a{
      color: #ffffff;
    }
  }

  .category-block li.active {
    background-color: rgba(31, 87, 94, 0.5);
    border-style: none;
    a {
      color: white;
    }
  }

  .category-block li a {
    text-decoration: none;
    color: #343a40;
  }
</style>
