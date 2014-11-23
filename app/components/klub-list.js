import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'section',
  classNames: ['klub-list'],
  isShowPage: false,
  classNameBindings: ['isShowPage:klub-list--occlude'],
  actions: {
    showKlub: function (klubId) {
      this.sendAction('action', klubId)
    }
  }
});
