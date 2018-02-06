/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * DS208: Avoid top-level this
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
this.SwitchUI = flight.component(function() {
  this.attributes({
    switch: 'li > a'});

  this.getX = function() {
    if (Cookies.get(this.name())) {
      return Cookies.get(this.name());
    } else {
      return this.setX(this.defaultX());
    }
  };

  this.setX = function(x) {
    Cookies.set(this.name(), x);
    return x;
  };

  this.name = function() {
    return this.$node.attr('id');
  };

  this.defaultX = function() {
    return this.$node.data('x');
  };

  this.init = function(event, data) {
    return this.$node.find(`[data-x=${this.getX()}]`).click();
  };

  return this.after('initialize', function() {
    this.on(this.select('switch'), 'click', e => {
      this.select('switch').removeClass('active');
      $(e.currentTarget).addClass('active');

      const x = $(e.currentTarget).data('x');
      this.setX(x);

      return this.trigger(`switch::${this.name()}`, {x});
  });

    this.on(document, `switch::${this.name()}::init`, this.init);
    return this.init();
  });
});
