Vue.component('productList', {
  template: ` <div id="product-list" class="row my-4">
        <div class="col-12 col-lg-2 mb-4">
            <div class="card bg-light">
                <div class="card-header bg-info text-white text-uppercase p-3">
                    <i class="fa fa-list"></i>
                    <span id="category">Categories</span>
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
                            <span class="badge badge-pill badge-secondary float-right ml-2">{{ product.category }}</span>
                            <h5 class="card-title text-success">{{ product.title }}</h5>
                            <p class="card-text">{{ product.content }}</p>
                            <div class="d-flex justify-content-between align-items-baseline"><!---->
                                <del class="h6 text-secondary">原價 {{ product.origin_price }} 元</del>
                                <div class="h5 text-dark">現在只要 {{ product.price }} 元</div>
                            </div>
                        </div>
                        <div class="card-footer d-flex">
                            <button type="button" class="btn btn-light">More</button>
                            <button type="button" class="btn btn-info ml-auto">Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>`,
  data () {
    return {
      categories: [],
      currentCategory: '',
      products: []
    }
  },
  methods: {
    applyCategory (item) {
      if (this.currentCategory === '' || this.currentCategory !== item) {
        this.currentCategory = item;
      } else {
        this.currentCategory = '';
      }
    },
    retrieveProducts (page = 0) {
      axios.get(`${apiUrlPrefix}/products`, {
        params: { page }
      }).then(({ data: { data } }) => {
        this.categories = new Set(data.map(product => product.category))
        this.products = data;
      });
    }
  },
  created () {
    this.retrieveProducts();
  },
  computed: {
    filterProducts () {
      if (this.currentCategory === '') return this.products;
      return this.products.filter(item => this.currentCategory === item.category);
    }
  }
});
