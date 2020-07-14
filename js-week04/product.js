new Vue({
  el: '#app',
  data: {
    user: { uuid: '', token: '' },
    products: [],
  },
  methods: {
    showProducts (page = 0) {
      const apiUrl = `https://course-ec-api.hexschool.io/api/${this.user.uuid}/admin/ec/products`;
      axios.get(apiUrl, {
        headers: { 'authorization': `Bearer ${this.user.token}` },
        params: { page }
      }).then(({ data: { data, meta } }) => {
        this.products = data;
      }).catch(error => {
        console.log(error);
      });
    }
  },
  created () {
    if (!isCookieExists('token') || !isCookieExists('uuid')) window.location = 'login.html';
    this.user.token = retrieveCookie('token');
    this.user.uuid = retrieveCookie('uuid');
    this.showProducts();
  }
});