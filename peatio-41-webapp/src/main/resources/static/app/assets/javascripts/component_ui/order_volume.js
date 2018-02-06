/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * DS208: Avoid top-level this
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
this.OrderVolumeUI = flight.component(function() {
  flight.compose.mixin(this, [OrderInputMixin]);

  this.attributes({
    precision: gon.market.ask.fixed,
    variables: {
      input: 'volume',
      known: 'price',
      output: 'total'
    }
  });

  return this.onOutput = function(event, order) {
    if (order.price.equals(0)) { return; }
    const volume = order.total.div(order.price);

    if (!this.validateRange(volume)) { this.changeOrder(this.value); }
    this.setInputValue(this.value);

    order.volume = this.value;
    return this.trigger('place_order::order::updated', order);
  };
});
