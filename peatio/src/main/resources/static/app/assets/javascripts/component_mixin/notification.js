/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * DS208: Avoid top-level this
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
this.NotificationMixin = function() {
  return this.notify = function(body, title) {
    let notification;
    if (!title) { ({ title } = gon.i18n.notification); }
    return notification = notifier.notify(title, body);
  };
};
