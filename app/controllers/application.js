import Ember from 'ember';

export default Ember.Controller.extend({
  isSideNavVisible: false,
  showMenus: true,

  isShowPage: Ember.computed('currentRouteName', function() {
    return ['embeds.categoryklubs.klub.index', 'klubs.klub.index'].includes(this.get('currentRouteName'));
  }),

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
