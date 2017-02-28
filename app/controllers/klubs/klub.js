import Ember from 'ember';

export default Ember.Controller.extend({
  klubs: Ember.inject.controller(),
  categoryShown: Ember.computed.alias('klubs.category'),

  actions: {
    zoomToKlub(klubId) {
      this.transitionToRoute('klubs.klub', klubId)
    }
  }
});
