function controlProductModal (shouldShow) {
  shouldShow ?
    $('#productModal').modal('show') :
    $('#productModal').modal('hide');
}

function changeProductModalTitle (title) {
  document.querySelector('#productLabel > span').innerHTML = title;
}