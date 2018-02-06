/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
app.service('accountService', ['$filter', '$gon', function($filter, $gon) {

  return {
    filterBy(filter) {
      return $filter('filter')($gon.accounts, filter);
    },

    findBy(filter) {
      const result = this.filterBy(filter);
      if (result.length) { return result[0]; } else { return null; }
    }
  };
}

]);
