import Ember from 'ember';

export default Ember.Controller.extend({
  isSideNavVisible: false,
  showMenus: true,

  hideSideNav: Ember.observer('currentPath', function() {
    this.set('isSideNavVisible', false);
  }),

  actions: {
    hideMenus: function() {
      this.set('showMenus', false);
    }
  }
});
