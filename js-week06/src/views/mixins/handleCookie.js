function isCookieExists(name) {
  return document.cookie.split(';')
    .some((item) => item.trim().startsWith(`${name}=`));
}
export default {
  methods: {
    isValid() {
      return isCookieExists('token') && isCookieExists('uuid');
    },
  },
};
