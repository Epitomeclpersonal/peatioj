/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * DS208: Avoid top-level this
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
const GUTTER = 2; // linkage to market.css.scss $gutter var
const PANEL_TABLE_HEADER_HIGH = 37;
const PANEL_PADDING = 8;
const BORDER_WIDTH = 1;

this.AutoWindowUI = flight.component(function() {
  return this.after('initialize', function() {
    const gutter = GUTTER;
    const gutter_2x = GUTTER * 2;
    const gutter_3x = GUTTER * 3;
    const gutter_4x = GUTTER * 4;
    const gutter_5x = GUTTER * 5;
    const gutter_6x = GUTTER * 6;
    const gutter_7x = GUTTER * 7;
    const gutter_8x = GUTTER * 8;
    const gutter_9x = GUTTER * 9;
    const panel_table_header_high = PANEL_TABLE_HEADER_HIGH;

    this.$node.resize(function() {
      const navbar_h       = $('.navbar').height() + BORDER_WIDTH;
      const markets_h      = $('#market_list').height() + BORDER_WIDTH;
      const entry_h        = $('#ask_entry').height() + (2*BORDER_WIDTH);
      const depths_h       = $('#depths_wrapper').height() + (2*BORDER_WIDTH);
      const my_orders_h    = $('#my_orders').height() + (2*BORDER_WIDTH);
      const ticker_h       = $('#ticker').height() + (2*BORDER_WIDTH);

      // Adjust heights first. Because scrollbar may be removed after heights
      // adjustment, window width will be affected.
      const window_h = $(this).height();
      $('.content').height(window_h - navbar_h);

      $('#candlestick').height(window_h - navbar_h - gutter_3x);

      const order_h = window_h - navbar_h - entry_h - depths_h - my_orders_h - ticker_h - gutter_6x - (2*BORDER_WIDTH);
      $('#order_book').height(order_h);
      $('#order_book .panel-body-content').height(order_h - panel_table_header_high - (2*PANEL_PADDING));

      const trades_h = window_h - navbar_h - markets_h - gutter_3x - BORDER_WIDTH;
      $('#market_trades').height(trades_h);
      $('#market_trades .panel').height(trades_h - (2*BORDER_WIDTH));
      $('#market_trades .panel-body-content').height(trades_h - (2*BORDER_WIDTH) - panel_table_header_high - (2*PANEL_PADDING));

      // Adjust widths.
      const window_w     = window.innerWidth;
      const markets_w    = $('#market_list').width();
      const order_book_w = $('#order_book').width();
      return $('#candlestick').width(window_w - order_book_w - markets_w - gutter_4x - 20);
    });

    return this.$node.resize();
  });
});
