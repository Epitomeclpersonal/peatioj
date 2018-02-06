/*
 * decaffeinate suggestions:
 * DS101: Remove unnecessary use of Array.from
 * DS102: Remove unnecessary code created because of implicit returns
 * DS201: Simplify complex destructure assignments
 * DS205: Consider reworking code to avoid use of IIFEs
 * DS207: Consider shorter variations of null checks
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
window.GlobalData = flight.component(function() {

  this.refreshDocumentTitle = function(event, data) {
    const { symbol } = gon.currencies[gon.market.bid.currency];
    const price  = data.last;
    const market = [gon.market.ask.currency, gon.market.bid.currency].join("/").toUpperCase();
    const brand  = "Peatio Exchange";

    return document.title = `${symbol}${price} ${market} - ${brand}`;
  };

  this.refreshDepth = function(data) {
    let mid, offset;
    const asks = [];
    const bids = [];
    let [bids_sum, asks_sum] = Array.from([0, 0]);

    _.each(data.asks, function(...args) {
      const [price, volume] = Array.from(args[0]);
      if ((asks.length === 0) || (price < (_.last(asks)[0]*100))) {
        return asks.push([parseFloat(price), (asks_sum += parseFloat(volume))]);
      }
  });

    _.each(data.bids, function(...args) {
      const [price, volume] = Array.from(args[0]);
      if ((bids.length === 0) || (price > (_.last(bids)[0]/100))) {
        return bids.push([parseFloat(price), (bids_sum += parseFloat(volume))]);
      }
  });

    const la = _.last(asks);
    const lb = _.last(bids);
    if (la && lb) {
      mid = (_.first(bids)[0] + _.first(asks)[0]) / 2;
      offset = Math.min.apply(Math, [Math.max(mid*0.1, 1), (mid-lb[0])*0.8, (la[0]-mid)*0.8]);
    } else if ((la == null) && lb) {
      mid = _.first(bids)[0];
      offset = Math.min.apply(Math, [Math.max(mid*0.1, 1), (mid-lb[0])*0.8]);
    } else if (la && (lb == null)) {
      mid = _.first(asks)[0];
      offset = Math.min.apply(Math, [Math.max(mid*0.1, 1), (la[0]-mid)*0.8]);
    }

    return this.trigger('market::depth::response', 
      {asks, bids, high: mid + offset, low: mid - offset}); 
  };

  this.refreshTicker = function(data) {
    let market, ticker;
    if (!this.last_tickers) {
      for (market in data) {
        ticker = data[market];
        data[market]['buy_trend'] = (data[market]['sell_trend'] = (data[market]['last_trend'] = true));
      }
      this.last_tickers = data;
    }

    const tickers = (() => {
      const result = [];
      for (market in data) {
        ticker = data[market];
        const buy = parseFloat(ticker.buy);
        const sell = parseFloat(ticker.sell);
        const last = parseFloat(ticker.last);
        const last_buy = parseFloat(this.last_tickers[market].buy);
        const last_sell = parseFloat(this.last_tickers[market].sell);
        const last_last = parseFloat(this.last_tickers[market].last);

        if (buy !== last_buy) {
          data[market]['buy_trend'] = (ticker['buy_trend'] = (buy > last_buy));
        } else {
          ticker['buy_trend'] = this.last_tickers[market]['buy_trend'];
        }

        if (sell !== last_sell) {
          data[market]['sell_trend'] = (ticker['sell_trend'] = (sell > last_sell));
        } else {
          ticker['sell_trend'] = this.last_tickers[market]['sell_trend'];
        }

        if (last !== last_last) {
          data[market]['last_trend'] = (ticker['last_trend'] = (last > last_last));
        } else {
          ticker['last_trend'] = this.last_tickers[market]['last_trend'];
        }

        if (market === gon.market.id) {
          this.trigger('market::ticker', ticker);
        }

        result.push({market, data: ticker});
      }
      return result;
    })();

    this.trigger('market::tickers', {tickers, raw: data});
    return this.last_tickers = data;
  };

  return this.after('initialize', function() {
    this.on(document, 'market::ticker', this.refreshDocumentTitle);

    const global_channel = this.attr.pusher.subscribe("market-global");
    const market_channel = this.attr.pusher.subscribe(`market-${gon.market.id}-global`);

    global_channel.bind('tickers', data => {
      return this.refreshTicker(data);
    });

    market_channel.bind('update', data => {
      gon.asks = data.asks;
      gon.bids = data.bids;
      this.trigger('market::order_book::update', {asks: data.asks, bids: data.bids});
      return this.refreshDepth({asks: data.asks, bids: data.bids});
    }); 

    market_channel.bind('trades', data => {
      return this.trigger('market::trades', {trades: data.trades});
  });

    // Initializing at bootstrap
    if (gon.ticker) {
      this.trigger('market::ticker', gon.ticker);
    }

    if (gon.tickers) {
      this.refreshTicker(gon.tickers);
    }

    if (gon.asks && gon.bids) {
      this.trigger('market::order_book::update', {asks: gon.asks, bids: gon.bids});
      this.refreshDepth({asks: gon.asks, bids: gon.bids}); 
    }

    if (gon.trades) { // is in desc order initially
      // .reverse() will modify original array! It makes gon.trades sorted
      // in asc order afterwards
      return this.trigger('market::trades', {trades: gon.trades.reverse()});
    }
  });
});
