const apiUrl = 'https://course-ec-api.hexschool.io/api/19831eca-3ff8-4cbe-9167-80b24e16783f/ec';
const app = {
  data:{
    categories:[],
    products:[]
  },
  showProducts(page = 0) {
    const url = `${apiUrl}/products`;
    const vm = this;
    axios.get(url, { params: { page } })
      .then( ({ data:{ data, meta } }) => {
        vm.data.categories = new Set(data.map( product => product.category))
        console.log(vm.data.categories)
        vm.data.products = data;
        vm.render();
      })
      .catch(error => {
        console.log(error);
      });
  },
  render() {
    const vm = this;
    vm.renderCategories();
    vm.renderProducts();
  },
  renderCategories() {
    const vm = this;
    let innerHtml = '';
    vm.data.categories.forEach( item => {
      innerHtml += `
<button class="btn btn-sm btn-outline-secondary" type="button">${item}</button>
      `;
    });
    document.getElementById('categories').innerHTML = innerHtml;
  },
  renderProducts() {
    const vm = this;
    let innerHtml = '';
    vm.data.products.forEach(({ imageUrl, title, content }) => {
      innerHtml += `
<div class="card">
  <img class="card-img-top" src="${imageUrl}" alt="${title}">
  <div class="card-body">
    <h5 class="card-title">${title}</h5>
    <p class="card-text">${content}</p>
  </div>
</div>        
        `;
    });
    document.getElementById('products').innerHTML = innerHtml;
  }
};

app.showProducts();
