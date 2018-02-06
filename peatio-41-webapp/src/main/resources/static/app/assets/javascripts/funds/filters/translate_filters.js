/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * DS207: Consider shorter variations of null checks
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
angular.module('translateFilters', []).filter('t', () =>
  function(key, args) {
    if (args == null) { args = {}; }
    return I18n.t(key, args);
  }
);
