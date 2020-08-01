function isCookieExists(name) {
  return document.cookie.split(';')
    .some((item) => item.trim().startsWith(`${name}=`));
}

function retrieveCookie(name) {
  return document.cookie
    .split('; ')
    .find((row) => row.startsWith(name))
    .split('=')[1];
}

export default {
  methods: {
    isCookieValid() {
      return isCookieExists('token') && isCookieExists('uuid');
    },
    destroyAuthority() {
      document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 GMT';
      document.cookie = 'uuid=; expires=Thu, 01 Jan 1970 00:00:00 GMT';
    },
    retrieveUUID() {
      return retrieveCookie('uuid');
    },
    retrieveToken() {
      return retrieveCookie('token');
    },
  },
};
