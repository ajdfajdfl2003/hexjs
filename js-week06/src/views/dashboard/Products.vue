<template>
  <div class="dashboard-products">
    <div class="text-right mt-4">
      <button class="btn btn-primary"
              @click="openModal('create')">
        建立新的產品
      </button>
    </div>
    <table class="table mt-4">
      <thead>
      <tr>
        <th style="width: 120px">分類</th>
        <th>產品名稱</th>
        <th style="width: 120px">原價</th>
        <th style="width: 120px">售價</th>
        <th style="width: 100px">是否啟用</th>
        <th style="width: 120px">編輯</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item) in products" :key="item.id">
        <td>{{ item.category }}</td>
        <td>{{ item.title }}</td>
        <td class="text-right">{{ item.origin_price }}</td>
        <td class="text-right">{{ item.price }}</td>
        <td>
          <span v-if="item.enabled" class="text-info">啟用</span>
          <span v-else class="text-muted">未啟用</span>
        </td>
        <td>
          <div class="btn-group">
            <button class="btn btn-outline-primary btn-sm" @click="openModal('edit', item)">
              編輯
            </button>
            <button class="btn btn-outline-danger btn-sm" @click="openModal('delete', item)">
              刪除
            </button>
          </div>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      products: [],
      pagination: { current_page: 1 },
    };
  },
  methods: {
    retrieveProducts(page) {
      const loader = this.$loading.show({ isFullPage: true });
      this.$http.get(`${process.env.VUE_APP_API_PATH}/${this.user.uuid}/admin/ec/products`, {
        headers: { authorization: `Bearer ${this.user.token}` },
        params: { page, paged: 10 },
      }).then(({ data: { data, meta: { pagination } } }) => {
        this.products = data;
        this.pagination = pagination;
      }).finally(() => {
        loader.hide();
      });
    },
  },
  created() {
    this.retrieveProducts(this.pagination.current_page);
  },
};
</script>
