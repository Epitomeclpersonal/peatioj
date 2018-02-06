/*
 * decaffeinate suggestions:
 * DS101: Remove unnecessary use of Array.from
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
app.controller('WithdrawsController', ['$scope', '$stateParams', '$http', '$gon', 'fundSourceService', 'ngDialog', function($scope, $stateParams, $http, $gon, fundSourceService, ngDialog) {

  let currency, current_user;
  let _selectedFundSourceId = null;
  const _selectedFundSourceIdInList = function(list) {
    for (let fs of Array.from(list)) {
      if (fs.id === _selectedFundSourceId) { return true; }
    }
    return false;
  };

  $scope.currency = (currency = $stateParams.currency);
  $scope.current_user = (current_user = $gon.current_user);
  $scope.name = current_user.name;
  $scope.account = Account.findBy('currency', $scope.currency);
  $scope.balance = $scope.account.balance;
  $scope.withdraw_channel = WithdrawChannel.findBy('currency', $scope.currency);

  $scope.selected_fund_source = function(newId) {
    if (angular.isDefined(newId)) {
      return _selectedFundSourceId = newId;
    } else {
      return _selectedFundSourceId;
    }
  };

  $scope.fund_sources = function() {
    const fund_sources = fundSourceService.filterBy({currency});
    // reset selected fundSource after add new one or remove previous one
    if (!_selectedFundSourceId || !_selectedFundSourceIdInList(fund_sources)) {
      if (fund_sources.length) { $scope.selected_fund_source(fund_sources[0].id); }
    }
    return fund_sources;
  };

  // set defaultFundSource as selected
  const defaultFundSource = fundSourceService.defaultFundSource({currency});
  if (defaultFundSource) {
    _selectedFundSourceId = defaultFundSource.id;
  } else {
    const fund_sources = $scope.fund_sources();
    if (fund_sources.length) { _selectedFundSourceId = fund_sources[0].id; }
  }

  // set current default fundSource as selected
  $scope.$watch(() => fundSourceService.defaultFundSource({currency})
  , function(defaultFundSource) {
    if (defaultFundSource) { return $scope.selected_fund_source(defaultFundSource.id); }
  });

  this.withdraw = {};
  this.createWithdraw = function(currency) {
    const withdraw_channel = WithdrawChannel.findBy('currency', currency);
    const account = withdraw_channel.account();
    const data = { withdraw: { member_id: current_user.id, currency, sum: this.withdraw.sum, fund_source: _selectedFundSourceId } };

    if (current_user.app_activated || current_user.sms_activated) {
      const type = $('.two_factor_auth_type').val();
      const otp  = $("#two_factor_otp").val();

      data.two_factor = { type, otp };
      data.captcha = $('#captcha').val();
      data.captcha_key = $('#captcha_key').val();
    }

    $('.form-submit > input').attr('disabled', 'disabled');

    return $http.post(`/withdraws/${withdraw_channel.resource_name}`, data)
      .error(responseText => $.publish('flash', { message: responseText }))
      .finally(() => {
        this.withdraw = {};
        $('.form-submit > input').removeAttr('disabled');
        return $.publish('withdraw:form:submitted');
    });
  };

  this.withdrawAll = function() {
    return this.withdraw.sum = Number($scope.account.balance);
  };

  $scope.openFundSourceManagerPanel = function() {
    let className, template;
    if ($scope.currency === $gon.fiat_currency) {
      template = '/templates/fund_sources/bank.html';
      className = 'ngdialog-theme-default custom-width';
    } else {
      template = '/templates/fund_sources/coin.html';
      className = 'ngdialog-theme-default custom-width coin';
    }

    return ngDialog.open({
      template,
      controller: 'FundSourcesController',
      className,
      data: {currency: $scope.currency}});
  };

  $scope.sms_and_app_activated = () => current_user.app_activated && current_user.sms_activated;

  $scope.only_app_activated = () => current_user.app_activated && !current_user.sms_activated;

  $scope.only_sms_activated = () => current_user.sms_activated && !current_user.app_activated;


  return $scope.$watch((() => $scope.currency), () =>
    setTimeout(() => $.publish("two_factor_init")
    , 100)
  );
}

]);