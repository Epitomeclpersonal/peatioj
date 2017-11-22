/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * DS206: Consider reworking classes to avoid initClass
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
class WithdrawChannel extends PeatioModel.Model {
  static initClass() {
    this.configure('WithdrawChannel', 'key', 'currency', 'resource_name');
  }

  static initData(records) {
    return PeatioModel.Ajax.disable(() =>
      $.each(records, (idx, record) => WithdrawChannel.create(record))
    );
  }

  account() {
    return Account.findBy('currency', this.currency);
  }
}
WithdrawChannel.initClass();

window.WithdrawChannel = WithdrawChannel;
