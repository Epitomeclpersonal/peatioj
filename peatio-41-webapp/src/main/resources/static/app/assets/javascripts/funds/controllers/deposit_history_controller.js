/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
app.controller('DepositHistoryController', function($scope, $stateParams, $http) {
  const ctrl = this;
  $scope.predicate = '-id';
  this.currency = $stateParams.currency;
  this.account = Account.findBy('currency', this.currency);
  this.deposits = this.account.deposits().slice(0, 3);
  this.newRecord = function(deposit) {
    if (deposit.aasm_state === "submitting") { return true; } else { return false; }
  };

  this.noDeposit = function() {
    return this.deposits.length === 0;
  };

  this.refresh = function() {
    this.deposits = this.account.deposits().slice(0, 3);
    return $scope.$apply();
  };

  this.cancelDeposit = function(deposit) {
    const deposit_channel = DepositChannel.findBy('currency', deposit.currency);
    return $http.delete(`/deposits/${deposit_channel.resource_name}/${deposit.id}`)
      .error(responseText => $.publish('flash', { message: responseText }));
  };

  this.canCancel = state => ['submitting'].indexOf(state) > -1;

  return (this.event = () =>
    Deposit.bind("create update destroy", () => ctrl.refresh())
  )();
});
