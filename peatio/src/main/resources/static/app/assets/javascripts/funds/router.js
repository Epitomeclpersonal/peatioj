/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
app.config(($stateProvider, $urlRouterProvider) =>
  $stateProvider
    .state('deposits', {
      url: '/deposits',
      templateUrl: "/templates/funds/deposits.html"
    })
    .state('deposits.currency', {
      url: "/:currency",
      templateUrl: "/templates/funds/deposit.html",
      controller: 'DepositsController',
      currentAction: 'deposit'
    })
    .state('withdraws', {
      url: '/withdraws',
      templateUrl: "/templates/funds/withdraws.html"
    })
    .state('withdraws.currency', {
      url: "/:currency",
      templateUrl: "/templates/funds/withdraw.html",
      controller: 'WithdrawsController',
      currentAction: "withdraw"
    })
);
