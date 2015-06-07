import Ember from 'ember';

export default Ember.Controller.extend({
  isSideNavVisible: false,

  hideSideNav: Ember.observer('currentPath', function() {
    this.set('isSideNavVisible', false);
  }),
});
