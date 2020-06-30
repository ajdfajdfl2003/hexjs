const apiUrl = 'https://course-ec-api.hexschool.io/api/19831eca-3ff8-4cbe-9167-80b24e16783f/ec';
const app = {
  data:{
    products:[]
  },
  showProducts(page = 0){
    const url = `${apiUrl}/products`;
    axios.get(url, { params: { page } })
      .then( ({ data }) => {
        console.log(data);
      })
      .catch(error => {
        console.log(error);
      });
  }
};

app.showProducts();
