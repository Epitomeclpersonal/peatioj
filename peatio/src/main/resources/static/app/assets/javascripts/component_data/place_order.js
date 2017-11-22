/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * DS208: Avoid top-level this
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
this.PlaceOrderData = flight.component(function() {

  this.onInput = function(event, data) {
    ({input: this.input, known: this.known, output: this.output} = data.variables);
    this.order[this.input] = data.value;

    if (!this.order[this.input] || !this.order[this.known]) { return; }
    return this.trigger(`place_order::output::${this.output}`, this.order);
  };

  this.onReset = function(event, data) {
    ({input: this.input, known: this.known, output: this.output} = data.variables);
    this.order[this.input] = (this.order[this.output] = null);

    this.trigger(`place_order::reset::${this.output}`);
    return this.trigger("place_order::order::updated", this.order);
  };

  return this.after('initialize', function() {
    this.order = {price: null, volume: null, total: null};

    this.on('place_order::input', this.onInput);
    return this.on('place_order::reset', this.onReset);
  });
});
