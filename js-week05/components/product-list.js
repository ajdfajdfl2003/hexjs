Vue.component('productList', {
  template: `
    <div id="product-list" class="row my-4">
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
                            <div class="d-flex justify-content-between align-items-baseline">
                                <del class="h6 text-secondary">原價 {{ product.origin_price }} 元</del>
                                <div class="h5 text-dark">現在只要 {{ product.price }} 元</div>
                            </div>
                        </div>
                        <div class="card-footer d-flex">
                            <div style="position: relative" :ref="'moreDetail'+product.id">
                                <button type="button" class="btn btn-light" @click.prevent="openModal(product)">More</button>
                            </div>
                            <button type="button" class="btn btn-info ml-auto">Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" ref="moreModal" tabindex="-1" role="dialog" aria-labelledby="moreModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" ref="moreModalLabel">{{ tempProduct.title }}</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <blockquote class="blockquote">
                            <p class="mb-0">{{ tempProduct.content }}</p>
                            <p class="mb-1 text-muted"><small>{{ tempProduct.description }}</small></p>
                        </blockquote>
                        <div>
                            <div class="d-flex justify-content-between align-items-baseline">
                                <del class="h6 text-secondary">原價 {{ tempProduct.origin_price }} 元</del>
                                <div class="h5 text-dark">現在只要 {{ tempProduct.price }} 元</div>
                            </div>
                        </div>
                        <select class="form-control mt-3" v-model="totalOfTempProduct">
                            <option selected disabled value="0">Open this select menu</option>
                            <option v-for="i in 10" :value="i" :key="i">選購 {{ i }} {{ tempProduct.unit }}</option>
                        </select>
                    </div>
                    <div class="modal-footer">
                        <div class="text-danger text-nowrap mr-3" v-if="0!==totalOfTempProduct">小計 <strong>{{ sumOfTempProduct }}</strong> 元</div>
                        <button type="button" class="btn btn-info">Add to cart</button>
                    </div>
                </div>
            </div>
        </div>        
    </div>`,
  data () {
    return {
      categories: [],
      currentCategory: '',
      products: [],
      tempProduct: {},
      totalOfTempProduct: 0
    }
  },
  methods: {
    openModal ({ id }) {
      this.totalOfTempProduct = 0;
      this.retrieveProductDetail(id);
    },
    applyCategory (item) {
      if (this.currentCategory === '' || this.currentCategory !== item) {
        this.currentCategory = item;
      } else {
        this.currentCategory = '';
      }
    },
    retrieveProducts (page = 0) {
      const loader = this.$loading.show({ isFullPage: true });
      axios.get(`${apiUrlPrefix}/products`, {
        params: { page }
      }).then(({ data: { data } }) => {
        this.categories = new Set(data.map(product => product.category))
        this.products = data;
        loader.hide();
      });
    },
    retrieveProductDetail (id) {
      const loader = this.$loading.show({
        isFullPage: false,
        loader: 'dots',
        container: this.$refs['moreDetail' + id][0]
      })
      axios.get(`${apiUrlPrefix}/product/${id}`)
        .then(({ data: { data } }) => {
          this.tempProduct = data;
          loader.hide();
          $(this.$refs.moreModal).modal('show');
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
    },
    sumOfTempProduct () {
      return this.tempProduct.price * this.totalOfTempProduct;
    }
  }
});
