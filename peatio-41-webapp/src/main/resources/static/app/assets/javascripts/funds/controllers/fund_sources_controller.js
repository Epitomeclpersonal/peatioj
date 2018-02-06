/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
app.controller('FundSourcesController', ['$scope', '$gon', 'fundSourceService', function($scope, $gon, fundSourceService) {

  let currency;
  $scope.banks = $gon.banks;
  $scope.currency = (currency = $scope.ngDialogData.currency);

  $scope.fund_sources = () => fundSourceService.filterBy({currency});

  $scope.defaultFundSource = () => fundSourceService.defaultFundSource({currency});

  $scope.add = function() {
    let extra, uid;
    if (angular.isString($scope.uid)) { uid   = $scope.uid.trim(); }
    if (angular.isString($scope.extra)) { extra = $scope.extra.trim(); }

    if (!uid) { return; }
    if (!extra) { return; }

    const data = {uid, extra, currency};
    return fundSourceService.create(data, function() {
      $scope.uid = "";
      if (currency !== $gon.fiat_currency) { return $scope.extra = ""; }
    });
  };

  $scope.remove = fund_source => fundSourceService.remove(fund_source);

  return $scope.makeDefault = fund_source => fundSourceService.update(fund_source);
}

]);
