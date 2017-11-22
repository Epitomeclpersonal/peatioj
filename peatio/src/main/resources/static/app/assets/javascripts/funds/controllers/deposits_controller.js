/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
app.controller('DepositsController', ['$scope', '$stateParams', '$http', '$filter', '$gon', 'ngDialog', function($scope, $stateParams, $http, $filter, $gon, ngDialog) {
  let current_user;
  this.deposit = {};
  $scope.currency = $stateParams.currency;
  $scope.current_user = (current_user = $gon.current_user);
  $scope.name = current_user.name;
  $scope.fund_sources = $gon.fund_sources;
  $scope.account = Account.findBy('currency', $scope.currency);
  $scope.deposit_channel = DepositChannel.findBy('currency', $scope.currency);

  this.createDeposit = function(currency) {
    const depositCtrl = this;
    const deposit_channel = DepositChannel.findBy('currency', currency);
    const account = deposit_channel.account();

    const data = { account_id: account.id, member_id: current_user.id, currency, amount: this.deposit.amount, fund_source: this.deposit.fund_source };

    $('.form-submit > input').attr('disabled', 'disabled');

    return $http.post(`/deposits/${deposit_channel.resource_name}`, { deposit: data})
      .error(responseText => $.publish('flash', {message: responseText }))
      .finally(function() {
        depositCtrl.deposit = {};
        return $('.form-submit > input').removeAttr('disabled');
    });
  };

  $scope.openFundSourceManagerPanel = () =>
    ngDialog.open({
      template: '/templates/fund_sources/bank.html',
      controller: 'FundSourcesController',
      className: 'ngdialog-theme-default custom-width',
      data: {currency: $scope.currency}})
  ;

  $scope.genAddress = resource_name =>
    ngDialog.openConfirm({
      template: '/templates/shared/confirm_dialog.html',
      data: {content: $filter('t')('funds.deposit_coin.confirm_gen_new_address')}})
    .then(function() {
      $("a#new_address").html('...');
      $("a#new_address").attr('disabled', 'disabled');

      return $http.post(`/deposits/${resource_name}/gen_address`, {})
        .error(responseText => $.publish('flash', {message: responseText }))
        .finally(function() {
          $("a#new_address").html(I18n.t("funds.deposit_coin.new_address"));
          return $("a#new_address").attr('disabled', 'disabled');
      });
    })
  ;


  return $scope.$watch((() => $scope.account.deposit_address), () =>
    setTimeout(() => $.publish('deposit_address:create')
    , 1000)
  );
}

]);
