function controlProductModal (shouldShow) {
  shouldShow ?
    $('#productModal').modal('show') :
    $('#productModal').modal('hide');
}

function changeProductModalTitle (title) {
  document.querySelector('#productLabel > span').innerHTML = title;
}

function controlDeleteProductModal (shouldShow) {
  shouldShow ?
    $('#delProductModal').modal('show') :
    $('#delProductModal').modal('hide');
}

function _uuid () {
  let d = Date.now();
  if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
    d += performance.now(); //use high-precision timer if available
  }
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
    .replace(/[xy]/g, char => {
      let r = (d + Math.random() * 16) % 16 | 0;
      d = Math.floor(d / 16);
      return (char === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
}
