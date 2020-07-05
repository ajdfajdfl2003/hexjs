function controlProductModal(shouldShow) {
  shouldShow ?
    $('#productModal').modal('show'):
    $('#productModal').modal('hide');
}