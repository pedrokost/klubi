import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'header',
  classNames: ['logo-button'],
  actions: {
    toggleSideNav: function() {
      this.sendAction('action');
    }
  }
});
