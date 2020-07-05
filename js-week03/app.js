new Vue({
  el: '#app',
  data: {
    products: [],
    editProduct: {},
  },
  methods: {
    updateProduct () {
      console.log('update');
      controlProductModal(false);
    },
    openModal (action) {
      console.log('action', action);
      document.querySelector('#productLabel > span').innerHTML = '新增產品';
      controlProductModal(true);
    }
  }
});
