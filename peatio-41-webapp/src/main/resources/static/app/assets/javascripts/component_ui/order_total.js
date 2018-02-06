/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * DS208: Avoid top-level this
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
this.OrderTotalUI = flight.component(function() {
  flight.compose.mixin(this, [OrderInputMixin]);

  this.attributes({
    precision: gon.market.bid.fixed,
    variables: {
      input: 'total',
      known: 'price',
      output: 'volume'
    }
  });

  return this.onOutput = function(event, order) {
    const total = order.price.times(order.volume);

    if (!this.validateRange(total)) { this.changeOrder(this.value); }
    this.setInputValue(this.value);

    order.total = this.value;
    return this.trigger('place_order::order::updated', order);
  };
});
