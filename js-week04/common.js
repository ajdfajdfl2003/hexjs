function isCookieExists (name) {
  return document.cookie.split(';')
    .some((item) => item.trim().startsWith(`${name}=`))
}