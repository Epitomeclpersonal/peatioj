/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * DS208: Avoid top-level this
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
this.SmsAuthVerifyUI = flight.component(function() {

  this.countDown = 0;

  this.attributes({
    phoneNumberInput: '#token_sms_token_phone_number',
    verifyCodeInput: '#token_sms_token_verify_code',
    sendCodeButton: 'button[value=send_code]'
  });

  this.verifyPhoneNumber = function(event, data) {
    this.select('phoneNumberInput').parent().removeClass('has-error');

    if (this.select('phoneNumberInput').val() === "") {
      this.select('phoneNumberInput').parent().addClass('has-error');
      return event.preventDefault();
    } else {
      return setTimeout(() => {
        return this.countDownSendCodeButton();
      }
      , 0);
    }
  };

  this.countDownSendCodeButton = function() {
    const origName  = this.select('sendCodeButton').data('orig-name');
    const altName   = this.select('sendCodeButton').data('alt-name');
    this.countDown = 30;

    this.select('sendCodeButton').attr('disabled', 'disabled').addClass('disabled');
    var countDownTimer = () => {
      return setTimeout(() => {
        if (this.countDown !== 0) {
          this.countDown--;
          this.select('sendCodeButton').text(altName.replace('COUNT', this.countDown));
          return countDownTimer();
        } else {
          return this.select('sendCodeButton').removeAttr('disabled').removeClass('disabled').text(origName);
        }
      }
      , 1000);
    };
    return countDownTimer();
  };

  this.beforeSend = function(event, jqXHR, settings) {
    if (settings.data.match('send_code')) { return; }

    const input = this.select('verifyCodeInput');
    input.parent().removeClass('has-error');
    if (input.val() === "") {
      input.parent().addClass('has-error');
      return jqXHR.abort();
    }
  };

  this.handleSuccess = function(event, text, status, jqXHR) {
    const data = JSON.parse(text);
    if (data.reload) {
      window.location.reload();
    }
    return this.trigger('flash:notice', {msg: data.text});
  };

  this.handleError = function(event, jqXHR, status, error) {
    const data = JSON.parse(jqXHR.responseText);
    this.countDown = 0;
    return this.trigger('flash:alert', {msg: data.text});
  };

  return this.after('initialize', function() {
    this.on(this.select('sendCodeButton'), 'click', this.verifyPhoneNumber);
    this.on('ajax:beforeSend', this.beforeSend);
    this.on('ajax:success', this.handleSuccess);
    return this.on('ajax:error', this.handleError);
  });
});

