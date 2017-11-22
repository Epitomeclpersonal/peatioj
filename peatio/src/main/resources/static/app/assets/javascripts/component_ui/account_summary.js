/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * DS205: Consider reworking code to avoid use of IIFEs
 * DS208: Avoid top-level this
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
this.AccountSummaryUI = flight.component(function() {
  this.attributes({
    total_assets: '#total_assets'});

  this.updateAccount = function(event, data) {
    return (() => {
      const result = [];
      for (let currency in data) {
        const account = data[currency];
        const amount = (new BigNumber(account.locked)).plus(new BigNumber(account.balance));
        this.$node.find(`tr.${currency} span.amount`).text(formatter.round(amount, 2));
        result.push(this.$node.find(`tr.${currency} span.locked`).text(formatter.round(account.locked, 2)));
      }
      return result;
    })();
  };

  this.updateTotalAssets = function() {
    const fiatCurrency = gon.fiat_currency;
    const { symbol } = gon.currencies[fiatCurrency];
    let sum = 0;

    for (let currency in this.accounts) {
      var ticker;
      const account = this.accounts[currency];
      if (currency === fiatCurrency) {
        sum += +account.balance;
        sum += +account.locked;
      } else if (ticker = this.tickers[`${currency}${fiatCurrency}`]) {
        sum += +account.balance * +ticker.last;
        sum += +account.locked * +ticker.last;
      }
    }

    return this.select('total_assets').text(`${symbol}${formatter.round(sum, 2)}`);
  };

  return this.after('initialize', function() {
    this.accounts = gon.accounts;
    this.tickers  = gon.tickers;

    this.on(document, 'account::update', this.updateAccount);

    this.on(document, 'account::update', (event, data) => {
      this.accounts = data;
      return this.updateTotalAssets();
    });

    return this.on(document, 'market::tickers', (event, data) => {
      this.tickers = data.raw;
      return this.updateTotalAssets();
    });
  });
});


