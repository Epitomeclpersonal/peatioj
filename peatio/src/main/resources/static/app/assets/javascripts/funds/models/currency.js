/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * DS206: Consider reworking classes to avoid initClass
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
class Currency extends PeatioModel.Model {
  static initClass() {
    this.configure('Currency', 'key', 'code', 'coin', 'blockchain');
  }

  static initData(records) {
    return PeatioModel.Ajax.disable(() =>
      $.each(records, function(idx, record) {
        let currency;
        return currency = Currency.create(record.attributes);
      })
    );
  }
}
Currency.initClass();

window.Currency = Currency;
