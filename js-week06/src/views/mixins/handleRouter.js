export default {
  methods: {
    goToLoginPage() {
      this.$router.push('/login');
    },
    goToDashboard() {
      this.$router.push('/dashboard');
    },
    goToHomePage() {
      this.$router.push('/');
    },
  },
};
