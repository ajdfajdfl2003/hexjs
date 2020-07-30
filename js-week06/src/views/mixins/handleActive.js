export default {
  methods: {
    handleAddActive() {
      document.querySelectorAll('div.navbar-nav > a').forEach((element) => {
        if (this.$route.path === element.href.split('#')[1]) {
          element.classList.add('active');
        }
      });
    },
  },
};
