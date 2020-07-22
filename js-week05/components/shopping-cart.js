Vue.component('shoppingCart', {
  template: `
    <div class="my-5 row justify-content-center">
        <div class="col-md-6">
            <div class="text-right mb-3">
                <button type="button" @click.prevent="removeAll"
                    class="btn btn-outline-danger btn-sm">
                    <i class="fa fa-trash" aria-hidden="true"> 刪除所有品項</i>
                </button>
            </div>
            <table class="table">
                <thead>
                  <tr>
                      <th>刪除</th>
                      <th>品名</th>
                      <th width="150px">數量</th>
                      <th>單位</th>
                      <th>單價</th>
                  </tr>
                </thead>
                <tbody>
                    <tr v-for="item in shoppingList" :key="'shopping-'+item.id">
                      <td class="align-middle">
                          <button type="button" @click.prevent="remove(item.id)" 
                              class="btn btn-outline-danger btn-sm">
                              <i class="fa fa-trash" aria-hidden="true"></i>
                          </button>
                      </td>
                      <td class="align-middle">{{item.title}}</td>
                      <td class="align-middle">
                          <div class="input-group">
                              <div class="input-group-prepend">
                                  <button class="btn btn-outline-primary" @click="add(item)">+</button>
                              </div>
                              <input type="text" v-model="item.count" class="form-control text-center">
                              <div class="input-group-append">
                                  <button class="btn btn-outline-primary" @click="minus(item)">-</button>
                              </div>
                          </div>
                      </td>
                      <td class="align-middle">{{item.unit}}</td>
                      <td class="align-middle text-right">{{item.sum}}</td>
                    </tr>
                </tbody>
                <tfoot>
                  <tr>
                      <td colspan="4" class="text-right">總計</td>
                      <td class="text-right">{{sumOfShoppingList}}</td>
                  </tr>
                </tfoot>
            </table>
        </div>
    </div>`,
  data () {
    return {
      shoppingList: []
    }
  },
  methods: {
    remove (id) {
      const targetIndex = this.shoppingList.findIndex(i => id === i.id);
      if (targetIndex < 0) return;
      this.shoppingList.splice(targetIndex, 1);
    },
    removeAll () {
      this.shoppingList.splice(0, this.shoppingList.length);
    },
    add (item) {
      item.count += 1;
      this.sumOfItem(item);
    },
    minus (item) {
      if (item.count - 1 <= 0) {
        this.remove(item.id);
        return;
      }
      item.count -= 1;
      this.sumOfItem(item);
    },
    addToCart ({ id, title, unit, price, count = 1 }) {
      const targetIndex = this.shoppingList.findIndex(item => id === item.id)
      if (targetIndex < 0) {
        this.shoppingList.push({ id, title, unit, price, count, sum: price * count })
      } else {
        this.shoppingList[targetIndex].count += count;
        this.sumOfItem(this.shoppingList[targetIndex]);
      }
    },
    sumOfItem (target) {
      target.sum = target.price * target.count;
    }
  },
  created () {
    this.$bus.$on('add to cart', this.addToCart);
  },
  computed: {
    sumOfShoppingList () {
      return this.shoppingList.reduce((acc, current) => acc + current.count * current.price, 0)
    }
  },
  beforeDestroy () {
    this.$bus.$off('add to cart');
  }
});