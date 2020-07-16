Vue.prototype.$bus = new Vue();

new Vue({
  el: '#app',
  data: {
    user: { uuid: '', token: '' },
    products: [],
    productModal: {
      title: '',
      isEdit: false
    },
    tempProduct: {}
  },
  methods: {
    openModal (action, item = { imageUrl: [] }) {
      switch (action) {
        case 'create':
          this.productModal.title = '新增產品';
          this.productModal.isEdit = false;
          this.$bus.$emit('show-product');
          break;
        case 'edit':
          this.productModal.title = '編輯產品';
          this.productModal.isEdit = true;
          this.$bus.$emit('edit-product', item.id);
          break;
        case 'delete':
          this.tempProduct = JSON.parse(JSON.stringify(item));
          this.$bus.$emit('show-delete-product-modal', true, this.tempProduct)
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
      this.productModal.isEdit ?
        this.products.splice(this.products.findIndex(product => target.id === product.id), 1, target) :
        this.products.push(target);
    },
    deleteProduct (targetId) {
      this.products.splice(this.products.findIndex(product => targetId === product.id), 1);
    }
  },
  created () {
    if (!isCookieExists('token') || !isCookieExists('uuid')) window.location = 'login.html';
    this.user.token = retrieveCookie('token');
    this.user.uuid = retrieveCookie('uuid');
    this.showProducts();
  }
});