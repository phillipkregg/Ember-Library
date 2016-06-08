import Ember from 'ember';

export default Ember.Controller.extend({

  emailAddress: '',
  contactMessage: '',

  isMessageLong: Ember.computed.gte('contactMessage.length', 5),
  validEmail: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  isValid: Ember.computed.and('isMessageLong', 'validEmail'),
  notValid: Ember.computed.not('isValid'),

  actions: {
    sendMessage() {
      if (this.get('isValid')) {
        alert(this.get('contactMessage'));
        this.set('responseMessage', "We got your message and we'll get in touch soon!")
      }

    },

    onEmailBlur() {
      this.set('emailBlurred', true);
    },

    onMessageBlur() {
      this.set('messageBlurred', true);
    }

  }
});
