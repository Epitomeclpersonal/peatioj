/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
window.MarketTickerUI = flight.component(function() {
  this.attributes({
    askSelector: '.ask .price',
    bidSelector: '.bid .price',
    lastSelector: '.last .price',
    priceSelector: '.price'
  });

  this.updatePrice = function(selector, price, trend) {
    selector.removeClass('text-up').removeClass('text-down').addClass(formatter.trend(trend));
    return selector.html(formatter.fixBid(price));
  };

  this.refresh = function(event, ticker) {
    this.updatePrice(this.select('askSelector'),  ticker.sell, ticker.sell_trend);
    this.updatePrice(this.select('bidSelector'),  ticker.buy,  ticker.buy_trend);
    return this.updatePrice(this.select('lastSelector'), ticker.last, ticker.last_trend);
  };

  return this.after('initialize', function() {
    return this.on(document, 'market::ticker', this.refresh);
  });
});
