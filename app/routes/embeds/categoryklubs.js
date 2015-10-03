import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    this.controllerFor('application').send('hideMenus');
  },
  model(params) {
    return this.store.query('klub', params);
  },
  afterModel(model, transition) {
    transition.then(function() {
      Ember.run.scheduleOnce('afterRender', this, function() {
        console.log('Done Transitioning');
        window.prerenderReady = true;
      });
    });
  }
});
