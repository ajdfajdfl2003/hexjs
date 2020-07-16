Vue.component('pagination', {
  template: `<div id="pagination">
        <nav aria-label="Page navigation">
            <ul class="pagination">
                <li class="page-item" :class="{disabled: pagination.current_page === 1}">
                    <a class="page-link" href="#" aria-label="Previous"
                        @click.prevent="$emit('change-page', pagination.current_page - 1)">
                        <span aria-hidden="true">&laquo;</span>
                        <span class="sr-only">Previous</span>
                    </a>
                </li>
                <li v-for="i in pagination.total_pages" :key="'page-'+ i">
                    <a class="page-link" href="#" @click.prevent="$emit('change-page', i)">{{ i }}</a>
                </li>
                <li class="page-item" :class="{disabled: pagination.current_page === pagination.total_pages}">
                    <a class="page-link" href="#" aria-label="Next" 
                        @click.prevent="$emit('change-page', pagination.current_page + 1)">
                        <span aria-hidden="true">&raquo;</span>
                        <span class="sr-only">Next</span>
                    </a>
                </li>
            </ul>
        </nav>
    </div>`,
  props: {
    pagination: Object
  },
});