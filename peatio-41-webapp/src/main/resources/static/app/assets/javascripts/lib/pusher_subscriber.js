/*
 * decaffeinate suggestions:
 * DS001: Remove Babel/TypeScript constructor workaround
 * DS101: Remove unnecessary use of Array.from
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
class PusherSubscriber {
  constructor() {
    this.subscribeChannels = this.subscribeChannels.bind(this);
    const pusher_key = $("meta[name=pusher]").attr("content");
    this.socket = window.pusher;
    this.channels = [];
    this.subscribeChannels(gon.current_user.sn);
  }

  release() {
    this.socket.disconnect();
    return this.channels = [];
  }

  subscribeChannels(user_sn) {
    return this.subscribeUserChannel(user_sn);
  }

  subscribeUserChannel(user_sn){
    const channel = this.socket.subscribe(`private-${user_sn}`);
    const self = this;
    return channel.bind('pusher:subscription_succeeded', function(status) {
      console.log('Pusher bind member channel successfully');
      new MemberHandler(channel);
      new AccountHandler(channel);
      new DepositHandler(channel);
      new WithdrawHandler(channel);
      return new DepositAddressHandler(channel);
    });
  }
}

class EventHandler {
  constructor(channel, event) {
    this.process = this.process.bind(this);
    this.processWithoutAjax = this.processWithoutAjax.bind(this);
    this.create = this.create.bind(this);
    this.update = this.update.bind(this);
    this.destroy = this.destroy.bind(this);
    this.channel = channel;
    this.channel.bind(event, this.processWithoutAjax);
  }

  process(msg) {
    switch (msg.type) {
      case "create":  return this.create(msg.attributes);
      case "update":  return this.update(msg.id, msg.attributes);
      case "destroy": return this.destroy(msg.id, msg.attributes);
      default:
        throw `Unknown type:${type}`;
    }
  }

  processWithoutAjax() {
    const args = arguments;
    return PeatioModel.Ajax.disable(() => {
      return this.process(...Array.from(args || []));
    });
  }

  create(attributes) {}
  update(id, attributes) {}
  destroy(id) {}
}

class MemberHandler extends EventHandler {
  constructor(channel) {
    super(channel, "members");
  }
}

class AccountHandler extends EventHandler {
  constructor(channel) {
    {
      // Hack: trick Babel/TypeScript into allowing this before super.
      if (false) { super(); }
      let thisFn = (() => { this; }).toString();
      let thisName = thisFn.slice(thisFn.indexOf('{') + 1, thisFn.indexOf(';')).trim();
      eval(`${thisName} = this;`);
    }
    this.update = this.update.bind(this);
    super(channel, "accounts");
  }

  update(id, attributes) {
    let account;
    return account = Account.findBy("id", id).updateAttributes(attributes);
  }
}


class DepositHandler extends EventHandler {
  constructor(channel) {
    {
      // Hack: trick Babel/TypeScript into allowing this before super.
      if (false) { super(); }
      let thisFn = (() => { this; }).toString();
      let thisName = thisFn.slice(thisFn.indexOf('{') + 1, thisFn.indexOf(';')).trim();
      eval(`${thisName} = this;`);
    }
    this.create = this.create.bind(this);
    this.update = this.update.bind(this);
    super(channel, "deposits");
  }

  create(attributes) {
    Deposit.create(attributes);
    return $.publish('deposit:create');
  }

  update(id, attributes) {
    return Deposit.findBy("id", id).updateAttributes(attributes);
  }
}

class WithdrawHandler extends EventHandler {
  constructor(channel) {
    {
      // Hack: trick Babel/TypeScript into allowing this before super.
      if (false) { super(); }
      let thisFn = (() => { this; }).toString();
      let thisName = thisFn.slice(thisFn.indexOf('{') + 1, thisFn.indexOf(';')).trim();
      eval(`${thisName} = this;`);
    }
    this.create = this.create.bind(this);
    this.update = this.update.bind(this);
    this.destroy = this.destroy.bind(this);
    super(channel, "withdraws");
  }

  create(attributes) {
    return Withdraw.create(attributes);
  }

  update(id, attributes) {
    return Withdraw.findBy("id", id).updateAttributes(attributes);
  }

  destroy(id) {
    return Withdraw.destroy(id);
  }
}

class DepositAddressHandler extends EventHandler {
  constructor(channel) {
    {
      // Hack: trick Babel/TypeScript into allowing this before super.
      if (false) { super(); }
      let thisFn = (() => { this; }).toString();
      let thisName = thisFn.slice(thisFn.indexOf('{') + 1, thisFn.indexOf(';')).trim();
      eval(`${thisName} = this;`);
    }
    this.create = this.create.bind(this);
    super(channel, "deposit_address");
  }

  create(attributes) {
    const account = Account.findBy('id', attributes['account_id']);
    account.deposit_address = attributes['deposit_address'];
    account.save();
    return $.publish("deposit_address:create", attributes['deposit_address']);
  }
}


window.PusherSubscriber = PusherSubscriber;
