/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * DS208: Avoid top-level this
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
this.FlashMessageUI = flight.component(function() {

  this.showMeg = function(data) {
    this.$node.html("");
    const template = JST['templates/flash_message'](data);
    return $(template).prependTo(this.$node);
  };

  this.info = function(event, data) {
    data.info = true;
    return this.showMeg(data);
  };

  this.notice = function(event, data) {
    data.notice = true;
    return this.showMeg(data);
  };

  this.alert = function(event, data) {
    data.alert = true;
    return this.showMeg(data);
  };

  return this.after('initialize', function() {
    this.on(document, 'flash:info', this.info);
    this.on(document, 'flash:notice', this.notice);
    return this.on(document, 'flash:alert', this.alert);
  });
});
