import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['js-menu-screen', 'sliding-menu-fade-screen'],
  classNameBindings: ['visible:is-visible'],

  click() {
    this.sendAction('action');
  }
});
