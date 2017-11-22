/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
app.directive('accounts', function() {
  return {
    restrict: 'E',
    templateUrl: '/templates/funds/accounts.html',
    scope: { localValue: '=accounts' },
    controller($scope, $state) {
      const ctrl = this;
      this.state = $state;
      if (window.location.hash === "") {
        this.state.transitionTo("deposits.currency", {currency: Account.first().currency});
      }

      $scope.accounts = Account.all();

      // Might have a better way
      // #/deposits/cny
      this.selectedCurrency = window.location.hash.split('/')[2] || Account.first().currency;
      this.currentAction = window.location.hash.split('/')[1] || 'deposits';
      $scope.currency = this.selectedCurrency;

      this.isSelected = function(currency) {
        return this.selectedCurrency === currency;
      };

      this.isDeposit = function() {
        return this.currentAction === 'deposits';
      };

      this.isWithdraw = function() {
        return this.currentAction === 'withdraws';
      };

      this.deposit = function(account) {
        ctrl.state.transitionTo("deposits.currency", {currency: account.currency});
        ctrl.selectedCurrency = account.currency;
        return ctrl.currentAction = "deposits";
      };

      this.withdraw = function(account) {
        ctrl.state.transitionTo("withdraws.currency", {currency: account.currency});
        ctrl.selectedCurrency = account.currency;
        return ctrl.currentAction = "withdraws";
      };

      return (this.event = () =>
        Account.bind("create update destroy", () => $scope.$apply())
      )();
    },

    controllerAs: 'accountsCtrl'
  };
});

