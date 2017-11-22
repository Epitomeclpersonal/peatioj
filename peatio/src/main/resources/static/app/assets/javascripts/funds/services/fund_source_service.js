/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
app.service('fundSourceService', ['$filter', '$gon', '$resource', 'accountService', function($filter, $gon, $resource, accountService) {

  const resource = $resource('/fund_sources/:id',
    {id: '@id'},
    {update: { method: 'PUT' }});

  return {
    filterBy(filter) {
      return $filter('filter')($gon.fund_sources, filter);
    },

    findBy(filter) {
      const result = this.filterBy(filter);
      if (result.length) { return result[0]; } else { return null; }
    },

    defaultFundSource(filter) {
      const account = accountService.findBy(filter);
      if (!account) { return null; }
      return this.findBy({id: account.default_withdraw_fund_source});
    },

    create(data, afterCreate) {
      return resource.save(data, fund_source => {
        $gon.fund_sources.push(fund_source);
        if (afterCreate) { return afterCreate(fund_source); }
      });
    },

    update(fund_source, afterUpdate) {
      // Change default_withdraw_fund_source immediately,
      // Do not wait for server side response
      const account = accountService.findBy({currency:fund_source.currency});
      if (!account) { return null; }
      account.default_withdraw_fund_source = fund_source.id;

      return resource.update({id: fund_source.id}, () => {
        if (afterUpdate) { return afterUpdate(); }
      });
    },

    remove(fund_source, afterRemove) {
      return resource.remove({id: fund_source.id}, () => {
        $gon.fund_sources.splice($gon.fund_sources.indexOf(fund_source), 1);
        if (afterRemove) { return afterRemove(); }
      });
    }
  };
}

]);