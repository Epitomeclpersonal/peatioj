/*
 * decaffeinate suggestions:
 * DS101: Remove unnecessary use of Array.from
 * DS102: Remove unnecessary code created because of implicit returns
 * DS207: Consider shorter variations of null checks
 * DS208: Avoid top-level this
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
this.MarketData = flight.component(function() {

  this.load = function(event, data) {
    this.trigger('market::candlestick::request');
    return this.reqK(gon.market.id, data['x']);
  };

  this.reqK = function(market, minutes, limit) {
    if (limit == null) { limit = 768; }
    let tid = gon.trades.length > 0 ? gon.trades[0].tid : 0;
    if (this.last_tid) { tid = this.last_tid+1; }
    const url = `/api/v2/k_with_pending_trades.json?market=${market}&limit=${limit}&period=${minutes}&trade_id=${tid}`;
    return $.getJSON(url, data => {
      return this.handleData(data, minutes);
    });
  };

  this.checkTrend = function(pre, cur) {
    // time, open, high, low, close, volume
    let _, cur_close, pre_close;
    [_, _, _, _, cur_close, _] = Array.from(cur);
    [_, _, _, _, pre_close, _] = Array.from(pre);
    return cur_close >= pre_close; // {true: up, false: down}
  };

  this.createPoint = function(i, trade) {
    // if the gap between old and new point is too wide (> 100 points), stop live
    // load and show hints
    const gap = Math.floor((trade.date-this.next_ts) / (this.minutes*60));
    if (gap > 100) {
      console.log("failed to update, too wide gap.");
      window.clearInterval(this.interval);
      this.trigger('market::candlestick::request');
      return i;
    }

    while (trade.date >= this.next_ts) {
      const x = this.next_ts*1000;

      this.last_ts = this.next_ts;
      this.next_ts = this.last_ts + (this.minutes*60);

      const [p, v] = Array.from(trade.date < this.next_ts ?
                 [parseFloat(trade.price), parseFloat(trade.amount)]
               :
                 [this.points.close[i][1], 0]);

      this.points.close.push([x, p]);
      this.points.candlestick.push([x, p, p, p, p]);
      this.points.volume.push({x, y: v, color: p >= this.points.close[i][1] ? 'rgba(0, 255, 0, 0.5)' : 'rgba(255, 0, 0, 0.5)'});
      i += 1;
    }
    return i;
  };

  this.updatePoint = function(i, trade) {
    const p     = parseFloat(trade.price);
    const v     = parseFloat(trade.amount);

    this.points.close[i][1] = p;

    if (p > this.points.candlestick[i][2]) {
      this.points.candlestick[i][2] = p;
    } else if (p < this.points.candlestick[i][3]) {
      this.points.candlestick[i][3] = p;
    }
    this.points.candlestick[i][4] = p;

    this.points.volume[i].y += v;
    return this.points.volume[i].color = (i > 0) && (this.points.close[i][1] >= this.points.close[i-1][1]) ? 'rgba(0, 255, 0, 0.5)' : 'rgba(255, 0, 0, 0.5)';
  };

  this.refreshUpdatedAt = function() {
    return this.updated_at = Math.round(new Date().valueOf()/1000);
  };

  this.processTrades = function() {
    let i = this.points.candlestick.length - 1;
    $.each(this.tradesCache, (ti, trade) => {
      if (trade.tid > this.last_tid) {
        if ((this.last_ts <= trade.date) && (trade.date < this.next_ts)) {
          this.updatePoint(i, trade);
        } else if (this.next_ts <= trade.date) {
          i = this.createPoint(i, trade);
        }
        this.last_tid = trade.tid;
        return this.refreshUpdatedAt();
      }
    });
    return this.tradesCache = [];
  };

  this.prepare = function(k) {
    let close;
    const [volume, candlestick, close_price] = Array.from([[], [], []]);

    for (let i = 0; i < k.length; i++) {
      let high, low, open, time, vol;
      const cur = k[i];
      [time, open, high, low, close, vol] = Array.from(cur);
      time = time * 1000; // fixed unix timestamp for highsotck
      const trend = i >= 1 ? this.checkTrend(k[i-1], cur) : true;

      close_price.push([time, close]);
      candlestick.push([time, open, high, low, close]);
      volume.push({x: time, y: vol, color: trend ? 'rgba(0, 255, 0, 0.5)' : 'rgba(255, 0, 0, 0.5)'});
    }

    // remove last point from result, because we'll re-calculate it later
    return {minutes: this.minutes, candlestick: candlestick.slice(0, -1), volume: volume.slice(0, -1), close: close_price.slice(0, -1)};
  };

  this.handleData = function(data, minutes) {
    this.minutes = minutes;
    this.tradesCache = data.trades.concat(this.tradesCache);

    this.points   = this.prepare(data.k);
    this.last_tid = 0;
    if (this.points.candlestick.length > 0) {
      this.last_ts = this.points.candlestick[this.points.candlestick.length-1][0]/1000;
    } else {
      this.last_ts = 0;
    }
    this.next_ts = this.last_ts + (60*minutes);

    return this.deliverTrades('market::candlestick::response');
  };

  this.deliverTrades = function(event) {
    this.processTrades();

    // skip the first point
    this.trigger(event, {
      minutes: this.points.minutes,
      candlestick: this.points.candlestick.slice(1),
      close: this.points.close.slice(1),
      volume: this.points.volume.slice(1)
    }
    );

    // we only need to keep the last 2 points for future calculation
    this.points.close = this.points.close.slice(-2);
    this.points.candlestick = this.points.candlestick.slice(-2);
    return this.points.volume = this.points.volume.slice(-2);
  };

  this.hardRefresh = function(threshold) {
    const ts = Math.round( new Date().valueOf()/1000 );

    // if there's no trade received in `threshold` seconds, request server side data
    if (ts > (this.updated_at + threshold)) {
      this.refreshUpdatedAt();
      return this.reqK(gon.market.id, this.minutes);
    }
  };

  this.startDeliver = function(event, data) {
    if (this.interval != null) {
      window.clearInterval(this.interval);
    }

    const deliver = () => {
      if (this.tradesCache.length > 0) {
        return this.deliverTrades('market::candlestick::trades');
      } else {
        return this.hardRefresh(300);
      }
    };

    return this.interval = setInterval(deliver, 999);
  };

  this.cacheTrades = function(event, data) {
    return this.tradesCache = Array.prototype.concat(this.tradesCache, data.trades);
  };

  return this.after('initialize', function() {
    this.tradesCache = [];
    this.on(document, 'market::trades', this.cacheTrades);
    this.on(document, 'switch::range_switch', this.load);
    return this.on(document, 'market::candlestick::created', this.startDeliver);
  });
});
