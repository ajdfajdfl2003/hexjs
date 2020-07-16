Vue.component('delProductModal', {
  template: `<div id="delProductModal" class="modal fade" tabindex="-1"
             role="dialog" aria-labelledby="delProductLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content border-0">
                    <div class="modal-header bg-danger text-white">
                        <h5 id="delProductLabel" class="modal-title">
                            <span>刪除產品</span>
                        </h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        是否刪除
                        <strong class="text-danger">{{ productTitle }}</strong> 商品(刪除後將無法恢復)。
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">
                            取消
                        </button>
                        <button type="button" class="btn btn-danger" @click="deleteProduct">
                            確認刪除
                        </button>
                    </div>
                </div>
            </div>
        </div>`,
  data () {
    return {
      productId: String,
      productTitle: String
    }
  },
  props: {
    user: Object
  },
  methods: {
    controlModal (shouldShow) {
      shouldShow ?
        $('#delProductModal').modal('show') :
        $('#delProductModal').modal('hide');
    },
    deleteProduct () {
      const apiUrl = `${apiUrlPrefix}/${this.user.uuid}/admin/ec/product/${this.productId}`;
      axios.delete(apiUrl, { headers: { 'authorization': `Bearer ${this.user.token}` } })
        .then(res => {
          this.$emit('delete', this.productId);
          this.controlModal(false);
        }).catch(error => {
        console.error(error);
      });
    }
  },
  created () {
    this.$bus.$on('showDeleteProductModal', (shouldShow, tempProduct) => {
      this.productId = tempProduct.id;
      this.productTitle = tempProduct.title;
      this.controlModal(shouldShow)
    })
  }
});