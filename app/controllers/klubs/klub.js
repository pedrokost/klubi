import Ember from "ember";

export default Ember.Controller.extend({
  klubs: Ember.inject.controller(),
  categoryShown: Ember.computed.alias("klubs.category"),
  router: Ember.inject.service(),

  actions: {
    zoomToKlub(klubId) {
      this.get("router").transitionTo("klubs.klub", klubId);
    }
  }
});
