/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * DS206: Consider reworking classes to avoid initClass
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
class Member extends PeatioModel.Model {
  static initClass() {
    this.configure('Member', 'sn', 'display_name', 'created_at', 'updated_at', 'state',
      'country_code', 'phone_number', 'name', 'app_activated', 'sms_activated');
  }

  static initData(records) {
    return PeatioModel.Ajax.disable(() =>
      $.each(records, (idx, record) => Member.create(record))
    );
  }
}
Member.initClass();

window.Member = Member;
