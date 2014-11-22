import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'section',
  classNames: ['klub-list'],
  classNameBindings: ['isShowPage:klub-list--occlude'],
  isShowPage: false,
  actions: {
    showKlub: function (klubId) {
      this.sendAction('action', klubId)
    }
  }
});
