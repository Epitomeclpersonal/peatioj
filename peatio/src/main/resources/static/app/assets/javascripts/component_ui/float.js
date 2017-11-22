/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * DS208: Avoid top-level this
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
this.FloatUI = flight.component(function() {
  this.attributes({
    action: 'ul.nav.nav-tabs > li',
    close: 'i.fa.fa-close'
  });

  return this.after('initialize', function() {
    this.select('action').click(e => {
      if (this.select('action').length > 1) {
        if (this.$node.hasClass('hover') && $(e.currentTarget).hasClass('active')) {
          return this.select('close').click();
        } else {
          return this.$node.addClass('hover');
        }
      } else {
        if (!this.$node.hasClass('hover')) {
          return this.$node.addClass('hover');
        } else {
          return this.select('close').click();
        }
      }
    });

    return this.select('close').click(() => {
      this.$node.removeClass('hover');
      return this.select('action').removeClass('active');
    });
  });
});
