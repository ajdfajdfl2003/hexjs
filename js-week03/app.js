new Vue({
  el: '#app',
  data: {
    products: [],
    editProduct: {},
  },
  methods: {
    openModal(action) {
      console.log('action', action);
      document.querySelector('#productLabel > span').innerHTML = '新增產品';
      $('#productModal').modal('show');
    }
  }
});