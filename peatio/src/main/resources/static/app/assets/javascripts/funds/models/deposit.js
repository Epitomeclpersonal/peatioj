/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * DS206: Consider reworking classes to avoid initClass
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
class Deposit extends PeatioModel.Model {
  static initClass() {
    this.configure('Deposit', 'account_id', 'member_id', 'currency', 'amount', 'fee', 'fund_uid', 'fund_extra',
      'txid', 'state', 'aasm_state', 'created_at', 'updated_at', 'done_at', 'type', 'confirmations', 'is_submitting', 'blockchain_url', 'txid_desc');
  }

  constructor() {
    super(...arguments);
    this.is_submitting = this.aasm_state === "submitting";
  }

  static initData(records) {
    return PeatioModel.Ajax.disable(() =>
      $.each(records, (idx, record) => Deposit.create(record))
    );
  }
}
Deposit.initClass();

window.Deposit = Deposit;



