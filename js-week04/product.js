Vue.prototype.$bus = new Vue();

new Vue({
  el: '#app',
  data: {
    user: { uuid: '', token: '' },
    products: [],
    productModalTitle: '',
    isEdit: false,
    tempProduct: {}
  },
  methods: {
    openModal (action, item) {
      this.tempProduct = JSON.parse(JSON.stringify(item));
      switch (action) {
        case 'create':
          this.productModalTitle = '新增產品';
          this.$bus.$emit('showProductModal', true, this.tempProduct);
          this.isEdit = false;
          break;
        case 'edit':
          this.productModalTitle = '編輯產品';
          this.$bus.$emit('showProductModal', true, this.tempProduct);
          this.isEdit = true;
          break;
      }
    },
    showProducts (page = 0) {
      const apiUrl = `${apiUrlPrefix}/${this.user.uuid}/admin/ec/products`;
      axios.get(apiUrl, {
        headers: { 'authorization': `Bearer ${this.user.token}` },
        params: { page }
      }).then(({ data: { data, meta } }) => {
        this.products = data;
      }).catch(error => {
        console.error(error);
      });
    },
    updateProduct (target) {
      this.products.splice(this.products.findIndex(product => target.id === product.id),
        1, target);
    }
  },
  created () {
    if (!isCookieExists('token') || !isCookieExists('uuid')) window.location = 'login.html';
    this.user.token = retrieveCookie('token');
    this.user.uuid = retrieveCookie('uuid');
    this.showProducts();
  }
});