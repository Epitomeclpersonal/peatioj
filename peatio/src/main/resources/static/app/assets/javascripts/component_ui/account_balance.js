/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * DS205: Consider reworking code to avoid use of IIFEs
 * DS208: Avoid top-level this
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
this.AccountBalanceUI = flight.component(function() {
  this.updateAccount = function(event, data) {
    return (() => {
      const result = [];
      for (let currency in data) {
        const account = data[currency];
        const symbol = gon.currencies[currency].symbol || '';
        this.$node.find(`.account.${currency} span.balance`).text(`${account.balance}`);
        this.$node.find(`.account.${currency} span.locked`).text(`${account.locked}`);
        const total = (new BigNumber(account.locked)).plus(new BigNumber(account.balance));
        result.push(this.$node.find(`.account.${currency} span.total`).text(`${symbol}${formatter.round(total, 2)}`));
      }
      return result;
    })();
  };

  this.updateTotalAssets = function(event, data) {
    const fiatCurrency = gon.fiat_currency;
    const { symbol } = gon.currencies[fiatCurrency];
    let sum = 0;
    for (let currency in data) {
      var ticker;
      const account = data[currency];
      if (currency === fiatCurrency) {
        sum += +account.balance;
        sum += +account.locked;
      } else if (ticker = gon.tickers[`${currency}${fiatCurrency}`]) {
        sum += +account.balance * +ticker.last;
        sum += +account.locked * +ticker.last;
      }
    }

    return this.$node.find(".total-assets").text(` ≈ ${symbol} ${formatter.round(sum, 2)}`);
  };

  return this.after('initialize', function() {
    this.on(document, 'account::update', this.updateAccount);
    return this.on(document, 'account::update', this.updateTotalAssets);
  });
});

