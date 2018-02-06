/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * DS205: Consider reworking code to avoid use of IIFEs
 * DS208: Avoid top-level this
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
this.OrderBookUI = flight.component(function() {
  this.attributes({
    bookLimit: 30,
    askBookSel: 'table.asks',
    bidBookSel: 'table.bids',
    seperatorSelector: 'table.seperator',
    fade_toggle_depth: '#fade_toggle_depth'
  });

  this.update = function(event, data) {
    this.updateOrders(this.select('bidBookSel'), _.first(data.bids, this.attr.bookLimit), 'bid');
    return this.updateOrders(this.select('askBookSel'), _.first(data.asks, this.attr.bookLimit), 'ask');
  };

  this.appendRow = function(book, template, data) {
    data.classes = 'new';
    return book.append(template(data));
  };

  this.insertRow = function(book, row, template, data) {
    data.classes = 'new';
    return row.before(template(data));
  };

  this.updateRow = function(row, order, index, v1, v2) {
    row.data('order', index);
    if (v1.equals(v2)) { return; }

    if (v2.greaterThan(v1)) {
      row.addClass('text-up');
    } else {
      row.addClass('text-down');
    }

    row.data('volume', order[1]);
    row.find('td.volume').html(formatter.mask_fixed_volume(order[1]));
    return row.find('td.amount').html(formatter.amount(order[1], order[0]));
  };

  this.mergeUpdate = function(bid_or_ask, book, orders, template) {
    let j;
    const rows = book.find('tr');

    let i = (j = 0);
    return (() => {
      const result = [];
      while(true) {
        const row = rows[i];
        const order = orders[j];
        const $row = $(row);

        if (row && order) {
          const p1 = new BigNumber($row.data('price'));
          const v1 = new BigNumber($row.data('volume'));
          const p2 = new BigNumber(order[0]);
          const v2 = new BigNumber(order[1]);
          if (((bid_or_ask === 'ask') && p2.lessThan(p1)) || ((bid_or_ask === 'bid') && p2.greaterThan(p1))) {
            this.insertRow(book, $row, template,
              {price: order[0], volume: order[1], index: j});
            result.push(j += 1);
          } else if (p1.equals(p2)) {
            this.updateRow($row, order, j, v1, v2);
            i += 1;
            result.push(j += 1);
          } else {
            $row.addClass('obsolete');
            result.push(i += 1);
          }
        } else if (row) {
          $row.addClass('obsolete');
          result.push(i += 1);
        } else if (order) {
          this.appendRow(book, template,
            {price: order[0], volume: order[1], index: j});
          result.push(j += 1);
        } else {
          break;
        }
      }
      return result;
    })();
  };

  this.clearMarkers = function(book) {
    book.find('tr.new').removeClass('new');
    book.find('tr.text-up').removeClass('text-up');
    book.find('tr.text-down').removeClass('text-down');

    const obsolete = book.find('tr.obsolete');
    const obsolete_divs = book.find('tr.obsolete div');
    return obsolete_divs.slideUp('slow', () => obsolete.remove());
  };

  this.updateOrders = function(table, orders, bid_or_ask) {
    const book = this.select(`${bid_or_ask}BookSel`);

    this.mergeUpdate(bid_or_ask, book, orders, JST[`templates/order_book_${bid_or_ask}`]);

    book.find("tr.new div").slideDown('slow');
    return setTimeout(() => {
      return this.clearMarkers(this.select(`${bid_or_ask}BookSel`));
    }
    , 900);
  };

  this.computeDeep = function(event, orders) {
    const index      = Number($(event.currentTarget).data('order'));
    orders     = _.take(orders, index + 1);

    const volume_fun = (memo, num) => memo.plus(BigNumber(num[1]));
    const volume     = _.reduce(orders, volume_fun, BigNumber(0));
    const price      = BigNumber(_.last(orders)[0]);
    const origVolume = _.last(orders)[1];

    return {price, volume, origVolume};
  };

  this.placeOrder = function(target, data) {
      this.trigger(target, 'place_order::input::price', data);
      return this.trigger(target, 'place_order::input::volume', data);
    };

  return this.after('initialize', function() {
    this.on(document, 'market::order_book::update', this.update);

    this.on(this.select('fade_toggle_depth'), 'click', () => {
      return this.trigger('market::depth::fade_toggle');
    });

    $('.asks').on('click', 'tr', e => {
      const i = $(e.target).closest('tr').data('order');
      this.placeOrder($('#bid_entry'), _.extend(this.computeDeep(e, gon.asks), {type: 'ask'}));
      return this.placeOrder($('#ask_entry'), {price: BigNumber(gon.asks[i][0]), volume: BigNumber(gon.asks[i][1])});
  });

    return $('.bids').on('click', 'tr', e => {
      const i = $(e.target).closest('tr').data('order');
      this.placeOrder($('#ask_entry'), _.extend(this.computeDeep(e, gon.bids), {type: 'bid'}));
      return this.placeOrder($('#bid_entry'), {price: BigNumber(gon.bids[i][0]), volume: BigNumber(gon.bids[i][1])});
  });
});});
