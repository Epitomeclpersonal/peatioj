/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * DS208: Avoid top-level this
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
const ESC = 27;
this.KeyBindUI = flight.component(function() {
  return this.after('initialize', function() {
    let entry = '#ask_entry';
    return this.$node.on('keyup', function(e) {
      if (e.keyCode === ESC) {
        if (entry === '#bid_entry') { entry = '#ask_entry'; } else { entry = '#bid_entry'; }
        return $(entry).trigger('place_order::clear');
      }
    });
  });
});
