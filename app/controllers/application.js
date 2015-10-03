import Ember from 'ember';

export default Ember.Controller.extend({
  isSideNavVisible: false,
  showMenus: true,

  hideSideNav: Ember.observer('currentPath', function() {
    this.set('isSideNavVisible', false);
  }),

  isEmbeddedPage: Ember.computed('currentRouteName', function() {
    let route = this.get('currentRouteName');
    let matcher = 'embeds';
    return (route.substr(0, matcher.length).toLowerCase() === matcher.toLowerCase())
  }),

  actions: {
    hideMenus() {
      this.set('showMenus', false);
    }
  }
});
