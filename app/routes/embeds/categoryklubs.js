import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function() {
    this.controllerFor('application').send('hideMenus');
  },
  model: function(params) {
    return this.store.query('klub', params);
  }
});
