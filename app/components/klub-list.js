import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'section',
  classNames: ['klub-list'],
  actions: {
    showKlub: function (klubId) {
      this.sendAction('action', klubId)
    }
  }
});
