/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * DS207: Consider shorter variations of null checks
 * DS208: Avoid top-level this
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
this.OrderInputMixin = function() {

  this.attributes({
    form: null,
    type: null
  });

  this.reset = function() {
    this.text = '';
    return this.value = null;
  };

  this.rollback = function() {
    return this.$node.val(this.text);
  };

  this.parseText = function() {
    const text  = this.$node.val();
    const value = BigNumber(text);

    switch (false) {
      case text !== this.text:
        return false;
      case text !== '':
        this.reset();
        this.trigger('place_order::reset', {variables: this.attr.variables});
        return false;
      case !!$.isNumeric(text):
        this.rollback();
        return false;
      case !((value.c.length - value.e - 1) > this.attr.precision):
        this.rollback();
        return false;
      default:
        this.text = text;
        this.value = value;
        return true;
    }
  };

  this.roundValueToText = function(v) {
    return v.round(this.attr.precision, BigNumber.ROUND_DOWN).toF(this.attr.precision);
  };

  this.setInputValue = function(v) {
    if (v != null) {
      this.text = this.roundValueToText(v);
    } else {
      this.text = '';
    }

    return this.$node.val(this.text);
  };

  this.changeOrder = function(v) {
    return this.trigger('place_order::input', {variables: this.attr.variables, value: v});
  };

  this.process = function(event) {
    if (!this.parseText()) { return; }

    if (this.validateRange(this.value)) {
      return this.changeOrder(this.value);
    } else {
      return this.setInputValue(this.value);
    }
  };

  this.validateRange = function(v) {
    if (this.max && v.greaterThan(this.max)) {
      this.value = this.max;
      this.changeOrder(this.max);
      return false;
    } else if (v.lessThan(0)) {
      this.value = null;
      return false;
    } else {
      this.value = v;
      return true;
    }
  };

  this.onInput = function(e, data) {
    this.$node.val(this.roundValueToText(data[this.attr.variables.input]));
    return this.process();
  };

  this.onMax = function(e, data) {
    return this.max = data.max;
  };

  this.onReset = function(e) {
    this.$node.val('');
    return this.reset();
  };

  this.onFocus = function(e) {
    return this.$node.focus();
  };

  return this.after('initialize', function() {
    this.orderType = this.attr.type;
    this.text      = '';
    this.value     = null;

    this.on(this.$node, 'change paste keyup', this.process);
    this.on(this.attr.form, `place_order::max::${this.attr.variables.input}`, this.onMax);
    this.on(this.attr.form, `place_order::input::${this.attr.variables.input}`, this.onInput);
    this.on(this.attr.form, `place_order::output::${this.attr.variables.input}`, this.onOutput);
    this.on(this.attr.form, `place_order::reset::${this.attr.variables.input}`, this.onReset);
    return this.on(this.attr.form, `place_order::focus::${this.attr.variables.input}`, this.onFocus);
  });
};
