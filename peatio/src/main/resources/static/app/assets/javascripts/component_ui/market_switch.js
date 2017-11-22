/*
 * decaffeinate suggestions:
 * DS101: Remove unnecessary use of Array.from
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
window.MarketSwitchUI = flight.component(function() {
  this.attributes({
    table: 'tbody',
    marketGroupName: '.panel-body-head thead span.name',
    marketGroupItem: '.dropdown-wrapper .dropdown-menu li a',
    marketsTable: '.table.markets'
  });

  this.switchMarketGroup = function(event, item) {
    item = $(event.target).closest('a');
    const name = item.data('name');

    this.select('marketGroupItem').removeClass('active');
    item.addClass('active');

    this.select('marketGroupName').text(item.find('span').text());
    return this.select('marketsTable').attr("class", `table table-hover markets ${name}`);
  };

  this.updateMarket = function(select, ticker) {
    let trend = formatter.trend(ticker.last_trend);

    select.find('td.price')
      .attr('title', ticker.last)
      .html(`<span class='${trend}'>${formatter.ticker_price(ticker.last)}</span>`);

    const p1 = parseFloat(ticker.open);
    const p2 = parseFloat(ticker.last);
    trend = formatter.trend(p1 <= p2);
    return select.find('td.change').html(`<span class='${trend}'>${formatter.price_change(p1, p2)}%</span>`);
  };

  this.refresh = function(event, data) {
    const table = this.select('table');
    for (let ticker of Array.from(data.tickers)) {
      this.updateMarket(table.find(`tr#market-list-${ticker.market}`), ticker.data);
    }

    return table.find(`tr#market-list-${gon.market.id}`).addClass('highlight');
  };

  return this.after('initialize', function() {
    this.on(document, 'market::tickers', this.refresh);
    this.on(this.select('marketGroupItem'), 'click', this.switchMarketGroup);

    this.select('table').on('click', 'tr', function(e) {
      if (e.target.nodeName !== 'I') {
        return window.location.href = window.formatter.market_url($(this).data('market'));
      }
    });

    this.hide_accounts = $('tr.hide');
    return $('.view_all_accounts').on('click', e => {
      const $el = $(e.currentTarget);
      if (this.hide_accounts.hasClass('hide')) {
        $el.text($el.data('hide-text'));
        return this.hide_accounts.removeClass('hide');
      } else {
        $el.text($el.data('show-text'));
        return this.hide_accounts.addClass('hide');
      }
    });
  });
});
