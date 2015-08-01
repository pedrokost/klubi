import Ember from 'ember';

export default Ember.Route.extend({
  title(tokens) {
    if (!!tokens.length) {
      return tokens.reverse().join(' - ') + ' - zatresi.si';
    }
    return 'Kje bos treniral? - zatresi.si';
  },
  actions: {
    toggleSideNav() {
      this.controllerFor('application').toggleProperty('isSideNavVisible');
    }
  }
});
