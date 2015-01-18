import Ember from 'ember';

export default Ember.Controller.extend({
  isSideNavVisible: false,

  hideSideNav: function() {
    this.set('isSideNavVisible', false);
  }.observes('currentPath'),
});
