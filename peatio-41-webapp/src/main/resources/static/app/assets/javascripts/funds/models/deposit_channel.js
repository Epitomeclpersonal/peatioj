/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * DS206: Consider reworking classes to avoid initClass
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
class DepositChannel extends PeatioModel.Model {
  static initClass() {
    this.configure('DepositChannel', 'key', 'currency', 'min_confirm', 'max_confirm', 'bank_accounts', 'resource_name');
  }

  static initData(records) {
    return PeatioModel.Ajax.disable(() =>
      $.each(records, (idx, record) => DepositChannel.create(record))
    );
  }

  account() {
    return Account.findBy('currency', this.currency);
  }
}
DepositChannel.initClass();

window.DepositChannel = DepositChannel;

