new Vue({
  el: '#app',
  data: {
    products: [
      {
        title: '艷后',
        category: 'amiibo 卡',
        content: '居民內部裝潢是埃及風格，是一位個性成熟的居民',
        description: '第二彈的卡，個性：成熟 B 型，生日：9/22',
        imageUrl: 'https://patchwiki.biligame.com/images/dongsen/9/9d/b2hd9mqqj35wm6cgcjqkwy27j0dzgu0.png',
        enabled: false,
        origin_price: 150,
        price: 90,
        unit: '張'
      },
      {
        title: '莎莉',
        category: 'amiibo 卡',
        content: '一白遮三醜是她的座右銘，是一位個性普通的居民',
        description: '第四彈的卡，個性：普通 B 型，生日：1/28',
        imageUrl: 'https://patchwiki.biligame.com/images/dongsen/2/25/9l4g6teksbmu9g8wmnl4emq3g06apc4.png',
        enabled: true,
        origin_price: 150,
        price: 90,
        unit: '張'
      }
    ],
    editProduct: {},
  },
  methods: {
    updateProduct () {
      console.log('update');
      controlProductModal(false);
    },
    openModal (action, item = {}) {
      console.log(item);
      switch (action) {
        case 'create':
          changeProductModalTitle('新增產品');
          controlProductModal(true);
          break;
        case 'edit':
          this.editProduct = JSON.parse(JSON.stringify(item));
          changeProductModalTitle('編輯產品');
          controlProductModal(true);
          break;
        default:
          break;
      }
    }
  }
});
