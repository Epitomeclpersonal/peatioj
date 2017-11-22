/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
app.controller('WithdrawHistoryController', function($scope, $stateParams, $http) {
  const ctrl = this;
  $scope.predicate = '-id';
  this.currency = $stateParams.currency;
  this.account = Account.findBy('currency', this.currency);
  this.withdraws = this.account.withdraws().slice(0, 3);
  this.newRecord = function(withdraw) {
    if (withdraw.aasm_state ===  "submitting") { return true; } else { return false; }
  };

  this.noWithdraw = function() {
    return this.withdraws.length === 0;
  };

  this.refresh = function() {
    ctrl.withdraws = ctrl.account.withdraws().slice(0, 3);
    return $scope.$apply();
  };

  this.canCancel = state => ['submitting', 'submitted', 'accepted'].indexOf(state) > -1;

  this.cancelWithdraw = function(withdraw) {
    const withdraw_channel = WithdrawChannel.findBy('currency', withdraw.currency);
    return $http.delete(`/withdraws/${withdraw_channel.resource_name}/${withdraw.id}`)
      .error(responseText => $.publish('flash', { message: responseText }));
  };

  return (this.event = () =>
    Withdraw.bind("create update destroy", () => ctrl.refresh())
  )();
});
