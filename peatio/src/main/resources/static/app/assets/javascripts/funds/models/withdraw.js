/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * DS206: Consider reworking classes to avoid initClass
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
class Withdraw extends PeatioModel.Model {
  static initClass() {
    this.configure('Withdraw', 'sn', 'account_id', 'member_id', 'currency', 'amount', 'fee', 'fund_uid', 'fund_extra',
      'created_at', 'updated_at', 'done_at', 'txid', 'blockchain_url', 'aasm_state', 'sum', 'type', 'is_submitting');
  }

  constructor() {
    super(...arguments);
    this.is_submitting = this.aasm_state === "submitting";
  }

  static initData(records) {
    return PeatioModel.Ajax.disable(() =>
      $.each(records, (idx, record) => Withdraw.create(record))
    );
  }

  afterScope() {
    return `${this.pathName()}`;
  }

  pathName() {
    switch (this.currency) {
      case 'cny': return 'banks';
      case 'btc': return 'satoshis';
    }
  }
}
Withdraw.initClass();

window.Withdraw = Withdraw;
