import Ember from 'ember';

export default Ember.Controller.extend({
  isSideNavVisible: false,
  showMenus: true,

  hideSideNav: Ember.observer('currentPath', function() {
    this.set('isSideNavVisible', false);
  }),

  isEmbeddedPage: Ember.computed('currentRouteName', function() {
    return this.get('currentRouteName').startsWith('embeds');
  }),

  actions: {
    hideMenus: function() {
      this.set('showMenus', false);
    }
  }
});
