/*
 * decaffeinate suggestions:
 * DS101: Remove unnecessary use of Array.from
 * DS102: Remove unnecessary code created because of implicit returns
 * DS208: Avoid top-level this
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
this.ItemListMixin = function() {
  this.attributes({
    tbody: 'table > tbody',
    empty: '.empty-row'
  });

  this.checkEmpty = function(event, data) {
    if (this.select('tbody').find('tr.order').length === 0) {
      return this.select('empty').fadeIn();
    } else {
      return this.select('empty').fadeOut();
    }
  };

  this.addOrUpdateItem = function(item) {
    const template = this.getTemplate(item);
    const existsItem = this.select('tbody').find(`tr[data-id=${item.id}][data-kind=${item.kind}]`);

    if (existsItem.length) {
      existsItem.html(template.html());
    } else {
      template.prependTo(this.select('tbody')).show('slow');
    }

    return this.checkEmpty();
  };

  this.removeItem = function(id) {
    const item = this.select('tbody').find(`tr[data-id=${id}]`);
    return item.hide('slow', () => {
      item.remove();
      return this.checkEmpty();
    });
  };

  return this.populate = function(event, data) {
    if (!_.isEmpty(data.orders)) {
      for (let item of Array.from(data.orders)) { this.addOrUpdateItem(item); }
    }

    return this.checkEmpty();
  };
};

