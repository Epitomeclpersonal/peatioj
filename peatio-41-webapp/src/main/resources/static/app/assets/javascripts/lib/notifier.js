/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * DS207: Consider shorter variations of null checks
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
class Notifier {
  constructor() {
    this.checkOrRequirePermission = this.checkOrRequirePermission.bind(this);
    this.switch = this.switch.bind(this);
    if (!window.Notification) { this.removeSwitch(); }
    this.getState();
    this.checkOrRequirePermission();
    $('input[name="notification-checkbox"]').bootstrapSwitch({
      labelText: gon.i18n.switch.notification,
      state: this.switchOn(),
      onSwitchChange: this.switch
    });
  }

  checkOrRequirePermission() {
    if (this.switchOn()) {
      if (Notification.permission === 'default') {
        return this.requestPermission(this.checkOrRequirePermission);
      } else if (Notification.permission === 'denied') {
        this.setStatus(false);
        return this.removeSwitch();
      }
    }
  }

  removeSwitch() {
    return $('.desktop-real-notification').remove();
  }

  setState(status) {
    this.enableNotification = status;
    return Cookies.set('notification', status, 30);
  }

  getState() {
    return this.enableNotification = Cookies.get('notification');
  }

  requestPermission(callback) {
    return Notification.requestPermission(callback);
  }

  switch(event, state) {
    if (state) {
      this.setState(true);
      return this.checkOrRequirePermission();
    } else {
      return this.setState(false);
    }
  }

  switchOn() {
    if (this.getState() === "true") {
      return true;
    } else {
      return false;
    }
  }

  notify(title, content, logo) {
    if (logo == null) { logo = '/peatio-notification-logo.png'; }
    if ((this.enableNotification === true) || (this.enableNotification === "true")) {

      let popup;
      if (window.Notification) {
        popup = new Notification(title, { 'body': content, 'onclick': onclick, 'icon': logo });
      } else {
        popup = window.webkitNotifications.createNotification(avatar, title, content);
      }

      return setTimeout(( () => popup.close() ), 8000);
    }
  }
}

window.Notifier = Notifier;
