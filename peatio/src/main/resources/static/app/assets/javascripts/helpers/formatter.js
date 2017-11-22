/*
 * decaffeinate suggestions:
 * DS101: Remove unnecessary use of Array.from
 * DS102: Remove unnecessary code created because of implicit returns
 * DS206: Consider reworking classes to avoid initClass
 * DS207: Consider shorter variations of null checks
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
class Formatter {
  static initClass() {
  
    this.prototype.ticker_fill = ['', '0', '00', '000', '0000', '00000', '000000', '0000000', '00000000'];
  }
  round(str, fixed) {
    return BigNumber(str).round(fixed, BigNumber.ROUND_HALF_UP).toF(fixed);
  }

  fix(type, str) {
    if (!$.isNumeric(str)) { str = '0'; }
    if (type === 'ask') {
      return this.round(str, gon.market.ask.fixed);
    } else if (type === 'bid') {
      return this.round(str, gon.market.bid.fixed);
    }
  }

  fixAsk(str) {
    return this.fix('ask', str);
  }

  fixBid(str) {
    return this.fix('bid', str);
  }

  fixPriceGroup(str) {
    if (gon.market.price_group_fixed) {
      if (!$.isNumeric(str)) { str = '0'; }
      return this.round(str, gon.market.price_group_fixed);
    } else {
      return this.fixBid(str);
    }
  }

  check_trend(type) {
    if ((type === 'up') || (type === 'buy') || (type === 'bid') || (type === true)) {
      return true;
    } else if ((type === 'down') || (type === "sell") || (type = 'ask' || (type === false))) {
      return false;
    } else {
      throw `unknown trend smybol ${type}`;
    }
  }

  market(base, quote) {
    return `${base.toUpperCase()}/${quote.toUpperCase()}`;
  }

  market_url(market, order_id) {
    if (order_id != null) {
      return `/markets/${market}/orders/${order_id}`;
    } else {
      return `/markets/${market}`;
    }
  }

  trade(ask_or_bid) {
    return gon.i18n[ask_or_bid];
  }

  short_trade(type) {
    if ((type === 'buy') || (type === 'bid')) {
      return gon.i18n['bid'];
    } else if ((type === "sell") || (type = 'ask')) {
      return gon.i18n['ask'];
    } else {
      return 'n/a';
    }
  }

  trade_time(timestamp) {
    const m = moment.unix(timestamp);
    return `${m.format("HH:mm")}${m.format(":ss")}`;
  }

  fulltime(timestamp) {
    const m = moment.unix(timestamp);
    return `${m.format("MM/DD HH:mm")}`;
  }

  mask_price(price) {
    return price.replace(/\..*/, "<g>$&</g>");
  }

  mask_fixed_price(price) {
    return this.mask_price(this.fixPriceGroup(price));
  }
  ticker_price(price, fillTo) {
    let fill;
    if (fillTo == null) { fillTo = 6; }
    const [left, right] = Array.from(price.split('.'));
    if ((fill = this.ticker_fill[fillTo-right.length])) {
      return `${left}.<g>${right}</g><span class='fill'>${fill}</span>`;
    } else {
      return `${left}.<g>${right.slice(0,fillTo)}</g>`;
    }
  }

  price_change(p1, p2) {
    const percent = p1 ?
                this.round((100*(p2-p1))/p1, 2)
              :
                '0.00';
    return `${p1 > p2 ? '' : '+'}${percent}`;
  }

  long_time(timestamp) {
    const m = moment.unix(timestamp);
    return `${m.format("YYYY/MM/DD HH:mm")}`;
  }

  mask_fixed_volume(volume) {
    return this.fixAsk(volume).replace(/\..*/, "<g>$&</g>");
  }

  fix_ask(volume) {
    return this.fixAsk(volume);
  }

  fix_bid(price) {
    return this.fixBid(price);
  }

  amount(amount, price) {
    const val = (new BigNumber(amount)).times(new BigNumber(price));
    return this.fixAsk(val).replace(/\..*/, "<g>$&</g>");
  }

  trend(type) {
    if (this.check_trend(type)) {
      return "text-up";
    } else {
      return "text-down";
    }
  }

  trend_icon(type) {
    if (this.check_trend(type)) {
      return "<i class='fa fa-caret-up text-up'></i>";
    } else {
      return "<i class='fa fa-caret-down text-down'></i>";
    }
  }

  t(key) {
    return gon.i18n[key];
  }
}
Formatter.initClass();

window.formatter = new Formatter();
