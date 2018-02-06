/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
angular.module('precisionFilters', []).filter('round_down', () =>
  number => BigNumber(number).round(5, BigNumber.ROUND_DOWN).toF(5)
);
