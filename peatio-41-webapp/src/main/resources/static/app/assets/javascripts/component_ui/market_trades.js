/*
 * decaffeinate suggestions:
 * DS101: Remove unnecessary use of Array.from
 * DS102: Remove unnecessary code created because of implicit returns
 * DS207: Consider shorter variations of null checks
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
window.MarketTradesUI = flight.component(function() {
  flight.compose.mixin(this, [NotificationMixin]);

  this.attributes({
    defaultHeight: 156,
    tradeSelector: 'tr',
    newTradeSelector: 'tr.new',
    allSelector: 'a.all',
    mySelector: 'a.my',
    allTableSelector: 'table.all-trades tbody',
    myTableSelector: 'table.my-trades tbody',
    newMarketTradeContent: 'table.all-trades tr.new div',
    newMyTradeContent: 'table.my-trades tr.new div',
    tradesLimit: 80
  });

  this.showAllTrades = function(event) {
    this.select('mySelector').removeClass('active');
    this.select('allSelector').addClass('active');
    this.select('myTableSelector').hide();
    return this.select('allTableSelector').show();
  };

  this.showMyTrades = function(event) {
    this.select('allSelector').removeClass('active');
    this.select('mySelector').addClass('active');
    this.select('allTableSelector').hide();
    return this.select('myTableSelector').show();
  };

  this.bufferMarketTrades = function(event, data) {
    return this.marketTrades = this.marketTrades.concat(data.trades);
  };

  this.clearMarkers = function(table) {
    table.find('tr.new').removeClass('new');
    return table.find('tr').slice(this.attr.tradesLimit).remove();
  };

  this.notifyMyTrade = function(trade) {
    const market = gon.markets[trade.market];
    const message = gon.i18n.notification.new_trade
      .replace(/%{kind}/g, gon.i18n[trade.kind])
      .replace(/%{id}/g, trade.id)
      .replace(/%{price}/g, trade.price)
      .replace(/%{volume}/g, trade.volume)
      .replace(/%{base_unit}/g, market.base_unit.toUpperCase())
      .replace(/%{quote_unit}/g, market.quote_unit.toUpperCase());
    return this.notify(message);
  };

  this.isMine = function(trade) {
    if (this.myTrades.length === 0) { return false; }

    for (let t of Array.from(this.myTrades)) {
      if (trade.tid === t.id) {
        return true;
      }
      if (trade.tid > t.id) { // @myTrades is sorted reversely
        return false;
      }
    }
  };

  this.handleMarketTrades = function(event, data) {
    for (let trade of Array.from(data.trades)) {
      this.marketTrades.unshift(trade);
      trade.classes = 'new';
      if (this.isMine(trade)) { trade.classes += ' mine'; }
      const el = this.select('allTableSelector').prepend(JST['templates/market_trade'](trade));
    }

    this.marketTrades = this.marketTrades.slice(0, this.attr.tradesLimit);
    this.select('newMarketTradeContent').slideDown('slow');

    return setTimeout(() => {
      return this.clearMarkers(this.select('allTableSelector'));
    }
    , 900);
  };

  this.handleMyTrades = function(event, data, notify) {
    if (notify == null) { notify = true; }
    for (let trade of Array.from(data.trades)) {
      if (trade.market === gon.market.id) {
        this.myTrades.unshift(trade);
        trade.classes = 'new';

        const el = this.select('myTableSelector').prepend(JST['templates/my_trade'](trade));
        this.select('allTableSelector').find(`tr#market-trade-${trade.id}`).addClass('mine');
      }

      if (notify) { this.notifyMyTrade(trade); }
    }

    if (this.myTrades.length > this.attr.tradesLimit) { this.myTrades = this.myTrades.slice(0, this.attr.tradesLimit); }
    this.select('newMyTradeContent').slideDown('slow');

    return setTimeout(() => {
      return this.clearMarkers(this.select('myTableSelector'));
    }
    , 900);
  };

  return this.after('initialize', function() {
    this.marketTrades = [];
    this.myTrades = [];

    this.on(document, 'trade::populate', (event, data) => {
      return this.handleMyTrades(event, {trades: data.trades.reverse()}, false);
    });
    this.on(document, 'trade', (event, trade) => {
      return this.handleMyTrades(event, {trades: [trade]});
    });

    this.on(document, 'market::trades', this.handleMarketTrades);

    this.on(this.select('allSelector'), 'click', this.showAllTrades);
    return this.on(this.select('mySelector'), 'click', this.showMyTrades);
  });
});
