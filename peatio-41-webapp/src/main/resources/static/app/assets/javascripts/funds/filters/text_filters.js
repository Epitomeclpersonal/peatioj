/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
angular.module('textFilters', []).filter('truncate', () =>
  function(text, size) {
    if (text.length > 20) {
      return text.slice(0, size) + '...';
    } else {
      return text;
    }
  }
);
