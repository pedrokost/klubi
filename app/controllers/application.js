import Ember from 'ember';

export default Ember.Controller.extend({
  isSideNavVisible: false,
  flashMessages: [],

  hideSideNav: function() {
    this.set('isSideNavVisible', false);
  }.observes('currentPath'),
});
