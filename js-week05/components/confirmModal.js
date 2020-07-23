Vue.component('confirmModal', {
  template: `<div ref="confirmModal" class="modal fade" tabindex="-1"
             role="dialog" aria-labelledby="delProductLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content border-0">
                    <div class="modal-header bg-success text-white">
                        <h5 ref="confirmModalLabel" class="modal-title">
                            <span>恭喜送出</span>
                        </h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-light" @click="confirm">確認</button>
                    </div>
                </div>
            </div>
        </div>`,
  methods: {
    confirm () {
      $(this.$refs.confirmModal).modal('hide');
    }
  },
  created () {
    this.$bus.$on('confirm', () => $(this.$refs.confirmModal).modal('show'));
  }
});