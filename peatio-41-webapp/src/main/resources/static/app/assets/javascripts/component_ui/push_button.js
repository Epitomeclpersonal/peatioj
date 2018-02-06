/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * DS208: Avoid top-level this
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
this.PushButton = flight.component(function() {
  this.attributes({
    buttons: '.type-toggle button'});

  this.setActiveButton = function(event) {
    this.select('buttons').removeClass('active');
    return $(event.target).closest('button').addClass('active');
  };

  return this.after('initialize', function() {
    return this.on(this.select('buttons'), 'click', this.setActiveButton);
  });
});
