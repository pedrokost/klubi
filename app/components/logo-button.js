import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'header',
  classNames: ['logo-button'],
  category: null,

  actions: {
    toggleSideNav() {
      this.sendAction('action');
    }
  }
});
