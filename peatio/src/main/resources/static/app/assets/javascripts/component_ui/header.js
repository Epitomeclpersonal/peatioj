/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * DS104: Avoid inline assignments
 * DS207: Consider shorter variations of null checks
 * DS208: Avoid top-level this
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
this.HeaderUI = flight.component(function() {
  this.attributes({
    vol: 'span.vol',
    amount: 'span.amount',
    high: 'span.high',
    low: 'span.low',
    change: 'span.change',
    sound: 'input[name="sound-checkbox"]'
  });

  this.refresh = function(event, ticker) {
    this.select('vol').text(`${ticker.volume} ${gon.market.base_unit.toUpperCase()}`);
    this.select('high').text(ticker.high);
    this.select('low').text(ticker.low);

    const p1 = parseFloat(ticker.open);
    const p2 = parseFloat(ticker.last);
    const trend = formatter.trend(p1 <= p2);
    return this.select('change').html(`<span class='${trend}'>${formatter.price_change(p1, p2)}%</span>`);
  };

  return this.after('initialize', function() {
    let left;
    this.on(document, 'market::ticker', this.refresh);

    if (Cookies.get('sound') === undefined) {
      Cookies.set('sound', true, 30);
    }
    const state = (left = Cookies.get('sound') === 'true') != null ? left : {true : false};

    this.select('sound').bootstrapSwitch({
      labelText: gon.i18n.switch.sound,
      state,
      handleWidth: 40,
      labelWidth: 40,
      onSwitchChange(event, state) {
        return Cookies.set('sound', state, 30);
      }
    });

    return $('header .dropdown-menu').click(e => e.stopPropagation());
  });
});
