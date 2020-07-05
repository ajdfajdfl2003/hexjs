new Vue({
  el: '#app',
  data: {
    products: [],
    editProduct: {},
  },
  methods: {
    openModal(action) {
      console.log('action', action);
    }
  }
});