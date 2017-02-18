import Ember from 'ember';

export default Ember.Controller.extend({
  isSideNavVisible: false,
  showMenus: true,
  klubs: Ember.inject.controller(),
  'seznam-klubov/klubs': Ember.inject.controller(),

  category: Ember.computed('currentRouteName','klubs.category', 'seznam-klubov/klubs.category',  function() {
    if (this.get('currentRouteName') === 'klubs.index') {
      return this.get('klubs.category')
    } else if(this.get('currentRouteName') === 'seznam-klubov.klubs') {
      return this.get('seznam-klubov/klubs.category')
    } else {
      return null;
    }
  }),

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
