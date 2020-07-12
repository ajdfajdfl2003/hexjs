new Vue({
  el: '#app',
  data: {
    products: [],
    tempProduct: {},
  },
  methods: {
    retrieveStars () {
      return ((this.tempProduct.options || {}).stars || 0);
    },
    starComment (event) {
      const star = parseInt(event.target.id.split('-')[1], 10);
      for (let i = 1; i <= 5; i++) {
        document.getElementById('star-' + i).classList.remove('checked');
      }
      for (let i = 1; i <= event.target.id.split('-')[1]; i++) {
        document.getElementById('star-' + i).classList.add('checked');
      }
      this.tempProduct = Object.assign({}, this.tempProduct, { options: { stars: star } });
    },
    deleteProduct () {
      const index = this.products
        .findIndex(item => item.id === this.tempProduct.id);

      if (index !== -1) this.products.splice(index, 1);

      this.tempProduct = {};
      controlDeleteProductModal(false);
    },
    updateProduct () {
      if (Object.keys(this.tempProduct).length <= 0) return;

      const index = this.products
        .findIndex(item => item.id === this.tempProduct.id);

      if (index !== -1) {
        this.$set(this.products, index, JSON.parse(JSON.stringify(this.tempProduct)));
      } else {
        this.tempProduct.id = _uuid();
        this.products.splice(this.products.length, 0, JSON.parse(JSON.stringify(this.tempProduct)));
      }

      controlProductModal(false);
      this.tempProduct = {};
    },
    openModal (action, item = {}) {
      this.tempProduct = JSON.parse(JSON.stringify(item));
      switch (action) {
        case 'create':
          changeProductModalTitle('新增產品');
          controlProductModal(true);
          break;
        case 'edit':
          changeProductModalTitle('編輯產品');
          controlProductModal(true);
          break;
        case 'delete':
          controlDeleteProductModal(true);
          break;
        default:
          break;
      }
    }
  },
  beforeCreate () {
    if (!isCookieExists('token')) window.location = 'login.html';
  }
});