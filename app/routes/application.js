import Ember from 'ember';

export default Ember.Route.extend({
  title: function(tokens) {
    if (!!tokens.length) {
      return tokens.reverse().join(' - ') + ' - zatresi.si';
    }
    return 'Kje bos treniral? - zatresi.si';
  },
  actions: {
    toggleSideNav: function() {
      this.controllerFor('application').toggleProperty('isSideNavVisible');
    }
  }
});
