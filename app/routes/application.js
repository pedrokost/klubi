import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    toggleSideNav: function() {
      this.controllerFor('application').toggleProperty('isSideNavVisible');
    }
  }
});
