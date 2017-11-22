/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * DS208: Avoid top-level this
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
this.TwoFactorAuth = flight.component(function() {
  this.attributes({
    switchName: 'span.switch-name',
    switchItem: '.dropdown-menu a',
    switchItemApp: '.dropdown-menu a[data-type="app"]',
    switchItemSms: '.dropdown-menu a[data-type="sms"]',
    sendCodeButtonContainer: '.send-code-button',
    sendCodeButton: 'button[value=send_code]',
    authType: '.two_factor_auth_type',
    appHint: 'span.hint.app',
    smsHint: 'span.hint.sms',
    chapterWrap: '.captcha-wrap'
  });

  this.setActiveItem = function(event) {
    switch ($(event.target).data('type')) {
      case 'app': return this.switchToApp();
      case 'sms': return this.switchToSms();
    }
  };

  this.switchToApp = function() {
    this.select('switchName').text(this.select('switchItemApp').text());
    this.select('sendCodeButtonContainer').addClass('hide');
    this.select('authType').val('app');
    this.select('smsHint').addClass('hide');
    return this.select('appHint').removeClass('hide');
  };

  this.switchToSms = function() {
    this.select('switchName').text(this.select('switchItemSms').text());
    this.select('sendCodeButtonContainer').removeClass('hide');
    this.select('authType').val('sms');
    this.select('smsHint').removeClass('hide');
    return this.select('appHint').addClass('hide');
  };

  this.countDownSendCodeButton = function() {
    const origName  = this.select('sendCodeButton').data('orig-name');
    const altName   = this.select('sendCodeButton').data('alt-name');
    let countDown = 30;

    this.select('sendCodeButton').attr('disabled', 'disabled').addClass('disabled');
    var countDownTimer = () => {
      return setTimeout(() => {
        if (countDown !== 0) {
          countDown--;
          this.select('sendCodeButton').text(altName.replace('COUNT', countDown));
          return countDownTimer();
        } else {
          return this.select('sendCodeButton').removeAttr('disabled').removeClass('disabled').text(origName);
        }
      }
      , 1000);
    };
    return countDownTimer();
  };

  this.sendCode = function(event) {
    event.preventDefault();

    this.countDownSendCodeButton();
    return $.get('/two_factors/sms?refresh=true');
  };

  this.checkCaptchaRequired = function() {
    return this.select('chapterWrap').load('/two_factors/app', function(html) { return $(this).html(html); });
  };

  return this.after('initialize', function() {
    this.checkCaptchaRequired();
    $.subscribe('withdraw:form:submitted', () => this.checkCaptchaRequired());
    this.on(this.select('switchItem'), 'click', this.setActiveItem);
    return this.on(this.select('sendCodeButton'), 'click', this.sendCode);
  });
});

