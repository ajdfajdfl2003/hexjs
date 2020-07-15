function isCookieExists (name) {
  return document.cookie.split(';')
    .some((item) => item.trim().startsWith(`${name}=`))
}

function retrieveCookie (name) {
  return document.cookie
    .split('; ')
    .find(row => row.startsWith(name))
    .split('=')[1];
}
