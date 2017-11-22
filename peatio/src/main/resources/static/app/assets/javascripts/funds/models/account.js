/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * DS206: Consider reworking classes to avoid initClass
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
class Account extends PeatioModel.Model {
  static initClass() {
    this.configure('Account', 'member_id', 'currency', 'balance', 'locked', 'created_at', 'updated_at', 'in', 'out', 'deposit_address', 'name_text');
  }

  static initData(records) {
    return PeatioModel.Ajax.disable(() =>
      $.each(records, (idx, record) => Account.create(record))
    );
  }

  deposit_channels() {
    return DepositChannel.findAllBy('currency', this.currency);
  }

  withdraw_channels() {
    return WithdrawChannel.findAllBy('currency', this.currency);
  }

  deposit_channel() {
    return DepositChannel.findBy('currency', this.currency);
  }

  deposits() {
    return _.sortBy(Deposit.findAllBy('account_id', this.id), d => d.id).reverse();
  }

  withdraws() {
    return _.sortBy(Withdraw.findAllBy('account_id', this.id), d => d.id).reverse();
  }

  topDeposits() {
    return this.deposits().reverse().slice(0,3);
  }

  topWithdraws() {
    return this.withdraws().reverse().slice(0,3);
  }
}
Account.initClass();

window.Account = Account;
