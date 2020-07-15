Vue.prototype.$bus = new Vue();

new Vue({
  el: '#app',
  data: {
    user: { uuid: '', token: '' },
    products: [],
    productModal: {
      title: '',
      isEdit: false
    }
  },
  methods: {
    openModal (action, item) {
      switch (action) {
        case 'create':
          this.productModal.title = '新增產品';
          this.productModal.isEdit = false;
          this.$bus.$emit('showProductModal', true, JSON.parse(JSON.stringify(item)));
          break;
        case 'edit':
          this.productModal.title = '編輯產品';
          this.productModal.isEdit = true;
          this.$bus.$emit('showProductModal', true, JSON.parse(JSON.stringify(item)));
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