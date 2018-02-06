/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * DS208: Avoid top-level this
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
this.MemberData = flight.component(function() {
  return this.after('initialize', function() {
    if (!gon.current_user) { return; }
    const channel = this.attr.pusher.subscribe(`private-${gon.current_user.sn}`);

    channel.bind('account', data => {
      gon.accounts[data.currency] = data;
      return this.trigger('account::update', gon.accounts);
    });

    channel.bind('order', data => {
      return this.trigger(`order::${data.state}`, data);
    });

    channel.bind('trade', data => {
      return this.trigger('trade', data);
    });

    // Initializing at bootstrap
    this.trigger('account::update', gon.accounts);
    if (gon.my_orders) { this.trigger('order::wait::populate', {orders: gon.my_orders}); }
    if (gon.my_trades) { return this.trigger('trade::populate', {trades: gon.my_trades}); }
  });
});
