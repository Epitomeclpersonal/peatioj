/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * DS208: Avoid top-level this
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
this.MyOrdersUI = flight.component(function() {
  flight.compose.mixin(this, [ItemListMixin]);

  this.getTemplate = order => $(JST["templates/order_active"](order));

  this.orderHandler = function(event, order) {
    if (order.market !== gon.market.id) { return; }

    switch (order.state) {
      case 'wait':
        return this.addOrUpdateItem(order);
      case 'cancel':
        return this.removeItem(order.id);
      case 'done':
        return this.removeItem(order.id);
    }
  };

  this.cancelOrder = function(event) {
    const tr = $(event.target).parents('tr');
    if (confirm(formatter.t('place_order')['confirm_cancel'])) {
      return $.ajax({
        url: formatter.market_url(gon.market.id, tr.data('id')),
        method: 'delete'
      });
    }
  };

  return this.after('initialize', function() {
    this.on(document, 'order::wait::populate', this.populate);
    this.on(document, 'order::wait order::cancel order::done', this.orderHandler);
    return this.on(this.select('tbody'), 'click', this.cancelOrder);
  });
});
