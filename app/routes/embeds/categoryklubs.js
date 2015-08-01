import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    this.controllerFor('application').send('hideMenus');
  },
  model(params) {
    return this.store.query('klub', params);
  }
});
