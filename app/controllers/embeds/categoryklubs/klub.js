import Ember from 'ember';

export default Ember.Controller.extend({
  'embeds/categoryklubs': Ember.inject.controller(),
  categoryShown: Ember.computed.alias('embeds/categoryklubs.category'),

  actions: {
    zoomToKlub(klubId) {
      this.transitionToRoute('klubs.klub', klubId)
    }
  }
});
