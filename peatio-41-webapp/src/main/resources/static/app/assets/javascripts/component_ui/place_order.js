/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * DS207: Consider shorter variations of null checks
 * DS208: Avoid top-level this
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
this.PlaceOrderUI = flight.component(function() {
  this.attributes({
    formSel: 'form',
    successSel: '.status-success',
    infoSel: '.status-info',
    dangerSel: '.status-danger',
    priceAlertSel: '.hint-price-disadvantage',
    positionsLabelSel: '.hint-positions',

    priceSel: 'input[id$=price]',
    volumeSel: 'input[id$=volume]',
    totalSel: 'input[id$=total]',

    currentBalanceSel: 'span.current-balance',
    submitButton: ':submit'
  });

  this.panelType = function() {
    switch (this.$node.attr('id')) {
      case 'bid_entry': return 'bid';
      case 'ask_entry': return 'ask';
    }
  };

  this.cleanMsg = function() {
    this.select('successSel').text('');
    this.select('infoSel').text('');
    return this.select('dangerSel').text('');
  };

  this.resetForm = function(event) {
    this.trigger('place_order::reset::price');
    this.trigger('place_order::reset::volume');
    this.trigger('place_order::reset::total');
    return this.priceAlertHide();
  };

  this.disableSubmit = function() {
    return this.select('submitButton').addClass('disabled').attr('disabled', 'disabled');
  };

  this.enableSubmit = function() {
    return this.select('submitButton').removeClass('disabled').removeAttr('disabled');
  };

  this.confirmDialogMsg = function() {
    const confirmType = this.select('submitButton').text();
    const price = this.select('priceSel').val();
    const volume = this.select('volumeSel').val();
    const sum = this.select('totalSel').val();
    return `\
${gon.i18n.place_order.confirm_submit} "${confirmType}"?

${gon.i18n.place_order.price}: ${price}
${gon.i18n.place_order.volume}: ${volume}
${gon.i18n.place_order.sum}: ${sum}\
`;
  };

  this.beforeSend = function(event, jqXHR) {
    if (true) { //confirm(@confirmDialogMsg())
      return this.disableSubmit();
    } else {
      return jqXHR.abort();
    }
  };

  this.handleSuccess = function(event, data) {
    this.cleanMsg();
    this.select('successSel').append(JST["templates/hint_order_success"]({msg: data.message})).show();
    this.resetForm(event);
    window.sfx_success();
    return this.enableSubmit();
  };

  this.handleError = function(event, data) {
    this.cleanMsg();
    const ef_class = 'shake shake-constant hover-stop';
    const json = JSON.parse(data.responseText);
    this.select('dangerSel').append(JST["templates/hint_order_warning"]({msg: json.message})).show()
      .addClass(ef_class).wait(500).removeClass(ef_class);
    window.sfx_warning();
    return this.enableSubmit();
  };

  this.getBalance = function() {
    return BigNumber( this.select('currentBalanceSel').data('balance') );
  };

  this.getLastPrice = () => BigNumber(gon.ticker.last);

  this.allIn = function(event){
    switch (this.panelType()) {
      case 'ask':
        this.trigger('place_order::input::price', {price: this.getLastPrice()});
        return this.trigger('place_order::input::volume', {volume: this.getBalance()});
      case 'bid':
        this.trigger('place_order::input::price', {price: this.getLastPrice()});
        return this.trigger('place_order::input::total', {total: this.getBalance()});
    }
  };

  this.refreshBalance = function(event, data) {
    const type = this.panelType();
    const { currency } = gon.market[type];
    const balance = (gon.accounts[currency] != null ? gon.accounts[currency].balance : undefined) || 0;

    this.select('currentBalanceSel').data('balance', balance);
    this.select('currentBalanceSel').text(formatter.fix(type, balance));

    this.trigger('place_order::balance::change', {balance: BigNumber(balance)});
    return this.trigger(`place_order::max::${this.usedInput}`, {max: BigNumber(balance)});
  };

  this.updateAvailable = function(event, order) {
    const type = this.panelType();
    const node = this.select('currentBalanceSel');

    if (!order[this.usedInput]) { order[this.usedInput] = 0; }
    const available = formatter.fix(type, this.getBalance().minus(order[this.usedInput]));

    if (BigNumber(available).equals(0)) {
      this.select('positionsLabelSel').hide().text(gon.i18n.place_order[`full_${type}`]).fadeIn();
    } else {
      this.select('positionsLabelSel').fadeOut().text('');
    }
    return node.text(available);
  };

  this.priceAlertHide = function(event) {
    return this.select('priceAlertSel').fadeOut(function() {
      return $(this).text('');
    });
  };

  this.priceAlertShow = function(event, data) {
    return this.select('priceAlertSel')
      .hide().text(gon.i18n.place_order[data.label]).fadeIn();
  };

  this.clear = function(e) {
    this.resetForm(e);
    return this.trigger('place_order::focus::price');
  };

  return this.after('initialize', function() {
    const type = this.panelType();

    if (type === 'ask') {
      this.usedInput = 'volume';
    } else {
      this.usedInput = 'total';
    }

    PlaceOrderData.attachTo(this.$node);
    OrderPriceUI.attachTo(this.select('priceSel'),  {form: this.$node, type});
    OrderVolumeUI.attachTo(this.select('volumeSel'), {form: this.$node, type});
    OrderTotalUI.attachTo(this.select('totalSel'),  {form: this.$node, type});

    this.on('place_order::price_alert::hide', this.priceAlertHide);
    this.on('place_order::price_alert::show', this.priceAlertShow);
    this.on('place_order::order::updated', this.updateAvailable);
    this.on('place_order::clear', this.clear);

    this.on(document, 'account::update', this.refreshBalance);

    this.on(this.select('formSel'), 'ajax:beforeSend', this.beforeSend);
    this.on(this.select('formSel'), 'ajax:success', this.handleSuccess);
    this.on(this.select('formSel'), 'ajax:error', this.handleError);

    return this.on(this.select('currentBalanceSel'), 'click', this.allIn);
  });
});
